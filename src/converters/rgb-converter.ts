import { CtoD65Adaptation, EtoD65Adaptation, D50toD65Adaptation  } from './../helpers/chromatic-adaptation';
import { formatValue } from "../helpers";
import {
  inverseGammaCompanding,
  inverseLCompanding,
  inverseSrbgCompanding,
} from "../helpers/companding";
import {
  CMYK,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LUV,
  RGB,
  RGBA,
  RYB,
  SpaceData,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { labToLch_ab } from "./lab-converter";
import { luvToLch_uv } from "./luv-converter";
import { decimalToHex } from "./number-converter";
import { xyzToAdobeRgb, xyzToLab, xyzToLuv } from "./xyz-converter";
import { SPACE_DATASETS } from '../constants/space-datasets';

/*******************************************************************
 *                           HELPERS
 * *****************************************************************/
export const normalizeRgb = ({ red, green, blue }: RGB): RGB => ({
  red: red / 255,
  green: green / 255,
  blue: blue / 255,
});

export const normalizeRgba = ({ red, green, blue, alpha }: RGBA): RGBA => ({
  red: red / 255,
  green: green / 255,
  blue: blue / 255,
  alpha,
});

export const rgbInvert = ({ red, green, blue }: RGB): RGB => ({
  red: 255 - red,
  green: 255 - green,
  blue: 255 - blue,
});

export const getRange = (
  red: number,
  green: number,
  blue: number
): { min: number; max: number; delta: number } => {
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);
  const delta = max - min;
  return { min, max, delta };
};

export const rgbToHue = (
  red: number,
  green: number,
  blue: number,
  max: number,
  delta: number
): number => {
  let hue = 0;
  switch (max) {
    case red:
      hue = (green - blue) / delta;
      break;
    case green:
      hue = 2 + (blue - red) / delta;
      break;
    case blue:
      hue = 4 + (red - green) / delta;
      break;
    default:
      break;
  }
  hue = Math.min(hue * 60, 360);
  hue = Math.round(hue < 0 ? hue + 360 : hue);
  return hue;
};

export const rgbTo1_0rgb = (rgb: RGB): RGB => {
  const { red, green, blue } = normalizeRgb(rgb);
  return {
    red,
    green,
    blue,
  };
};

export const sRgbToLuminance = ({ red, green, blue }: RGB): number =>
  0.2126 * red + 0.7152 * green + 0.0722 * blue;

export const sRgbToCmyk = (rgb: RGB): CMYK => {
  const { red, green, blue } = normalizeRgb(rgb);
  let key = 1 - Math.max(red, green, blue);
  const K1 = 1 - key;
  const f = (t: number): number => Math.round((K1 && (K1 - t) / K1) * 100);

  return { cyan: f(red), magenta: f(green), yellow: f(blue), key: key * 100 };
};

export const comparativeDistance = (rgb1: RGB, rgb2: RGB): number => {
  return (
    (rgb1.red - rgb2.red) ** 2 +
    (rgb1.green - rgb2.green) ** 2 +
    (rgb1.blue - rgb2.blue) ** 2
  );
};

/*******************************************************************
 *                              XYZ
 * *****************************************************************/
const rgbToXyz = (
  { red, green, blue }: RGB,
  space: SpaceData,
  inverseCompandingFun: Function,
  gamma?: boolean
): XYZ => {
  let Rlin, Glin, Blin;
  if (gamma) {
    Rlin = inverseCompandingFun(red, space.GAMMA);
    Glin = inverseCompandingFun(green, space.GAMMA);
    Blin = inverseCompandingFun(blue, space.GAMMA);
  } else {
    Rlin = inverseCompandingFun(red);
    Glin = inverseCompandingFun(green);
    Blin = inverseCompandingFun(blue);
  }
  const { X, Y, Z } = space.RGB_TO_XYZ;
  const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
  const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
  const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;

  return { x, y, z };
};

export const lRgbToXyz = (rgb: RGB): XYZ => {
  return rgbToXyz(rgb, SPACE_DATASETS.ECI_RGB_V2, inverseLCompanding);
};

export const gammaRgbToXyz = (rgb: RGB, ref: SpaceData): XYZ => {
  return rgbToXyz(rgb, ref, inverseGammaCompanding, true);
};

/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
export const rgbToAdobeRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToAdobeRgb(xyz);
};

export const adobeRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.ADOBE_RGB_1998);
};

/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
export const appleRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.APPLE_RGB);
};

/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
export const bestRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.BEST_RGB));
};

/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
export const betaRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.BETA_RGB));
};

/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
export const bruceRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.BRUCE_RGB);
};

/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
export const cieRgbToXyz = (rgb: RGB): XYZ => {
  return EtoD65Adaptation (gammaRgbToXyz(rgb, SPACE_DATASETS.CIE_RGB));
};

/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
export const colorMatchRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.COLOR_MATCH_RGB));
};

/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
export const donRgb4ToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.DON_RGB_4));
};

/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
export const etkaSpacePs5ToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.ETKA_SPACE_PS5));
};

/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
export const ntscRgbToXyz = (rgb: RGB): XYZ => {
  return CtoD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.NTSC_RGB));
};

/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
export const palSecamRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.PAL_SECAM_RGB);
};

/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
export const proPhotoRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.PRO_PHOTO_RGB));
};

/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
export const smpteCRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.SMPTE_C_RGB);
};

/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
export const wideGamutRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.WIDE_GAMUT_RGB));
};

/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
export const eciRgbV2ToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(lRgbToXyz(rgb));
};

/*******************************************************************
 *                             SRGB
 * *****************************************************************/
export const sRgbToXyz = (rgb: RGB): XYZ => {
  return rgbToXyz(rgb, SPACE_DATASETS.SRGB, inverseSrbgCompanding);
};

/*******************************************************************
 *                             ANSI
 * *****************************************************************/
export const sRgbToAnsi16 = (
  rgb: RGB,
  saturation: number | null = null
): number => {
  // Hsv -> ansi16 optimization
  let value = saturation ?? sRgbToHsv(rgb).value;

  value = Math.round(value / 50);

  if (value === 0) {
    return 30;
  }

  let ansi =
    30 +
    ((Math.round(rgb.blue / 255) << 2) |
      (Math.round(rgb.green / 255) << 1) |
      Math.round(rgb.red / 255));

  if (value === 2) {
    ansi += 60;
  }

  return ansi;
};

export const sRgbToAnsi256 = ({ red, green, blue }: RGB): number => {
  if (red >> 4 === green >> 4 && green >> 4 === blue >> 4) {
    if (red < 8) {
      return 16;
    }

    if (red > 248) {
      return 231;
    }

    return Math.round(((red - 8) / 247) * 24) + 232;
  }

  const ansi =
    16 +
    36 * Math.round((red / 255) * 5) +
    6 * Math.round((green / 255) * 5) +
    Math.round((blue / 255) * 5);

  return ansi;
};

/*******************************************************************
 *                             LAB
 * *****************************************************************/
export const sRgbToLab = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LAB => {
  return xyzToLab(xyz);
};

/*******************************************************************
 *                             LUV
 * *****************************************************************/
export const sRgbToLuv = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LUV => {
  return xyzToLuv(xyz);
};

/*******************************************************************
 *                             LCH
 * *****************************************************************/
export const sRgbToLch_ab = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LCH => {
  return labToLch_ab(xyzToLab(xyz));
};

export const sRgbToLch_uv = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LCH => {
  return luvToLch_uv(xyzToLuv(xyz));
};

/*******************************************************************
 *                             HEX
 * *****************************************************************/
export const sRgbToHex = ({ red, green, blue }: RGB, prefixed?: boolean): string => {
  const integer =
    ((Math.round(red) & 0xff) << 16) +
    ((Math.round(green) & 0xff) << 8) +
    (Math.round(blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return (prefixed ? '#' : '') + '000000'.substring(string.length) + string;
};

export const sRgbaToHex = ({ red, green, blue, alpha }: RGBA, prefixed?: boolean): string => {
  const integer =
    ((Math.round(red) & 0xff) << 16) +
    ((Math.round(green) & 0xff) << 8) +
    (Math.round(blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return (prefixed ? '#' : '') + '000000'.substring(string.length) + string + decimalToHex(alpha);
};

/*******************************************************************
 *                             HSL
 * *****************************************************************/
export const sRgbToHsl = (rgb: RGB, pHue?: number): HSL => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { min, max, delta } = getRange(red, green, blue);

  let lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (!delta) return { hue, saturation, lightness };
  else
    saturation = formatValue(
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
    );

  if (!pHue) hue = rgbToHue(red, green, blue, max, delta);
  else hue = pHue;

  lightness = formatValue(lightness);
  return { hue, saturation, lightness };
};

/*******************************************************************
 *                             HSV
 * *****************************************************************/
export const sRgbToHsv = (rgb: RGB, pHue?: number): HSV => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { max, delta } = getRange(red, green, blue);

  let hue = 0;
  let value = formatValue(max);
  let saturation = formatValue(max === 0 ? 0 : delta / max);

  if (!delta) return { hue, saturation, value };

  if (!pHue) hue = rgbToHue(red, green, blue, max, delta);
  else hue = pHue;

  return { hue, saturation, value };
};

/*******************************************************************
 *                             HWG
 * *****************************************************************/
export const sRgbToHwb = (rgb: RGB, pHue?: number): HWB => {
  const { red, green, blue } = normalizeRgb(rgb);
  let hue!: number;
  if (!pHue) {
    const { max, delta } = getRange(red, green, blue);
    hue = rgbToHue(red, green, blue, max, delta);
  } else hue = pHue;

  const whiteness =
    (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
  const blackness =
    (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;

  return { hue, whiteness, blackness };
};

/*******************************************************************
 *                             RYB
 * *****************************************************************/
export const sRgbToRyb = ({ red, green, blue }: RGB): RYB => {
  const Iw = Math.min(red, green, blue);
  const Ib = Math.min(255 - red, 255 - green, 255 - blue);
  const rRGB = red - Iw;
  const gRGB = green - Iw;
  const bRGB = blue - Iw;
  const minRG = Math.min(rRGB, gRGB);
  const rRYB = rRGB - minRG;
  const yRYB = (gRGB + minRG) / 2;
  const bRYB = (bRGB + gRGB - minRG) / 2;
  const n = Math.max(rRYB, yRYB, bRYB) / Math.max(rRGB, gRGB, bRGB);
  const N = isNaN(n) || n === Infinity || n <= 0 ? 1 : n;
  return {
      red: rRYB / N + Ib,
      yellow: yRYB / N + Ib,
      blue: bRYB / N + Ib
  };
};
