/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { Nb, Nr } from "../constants/conditionals";
import { SPACE_DATASETS } from "../constants/space-datasets";
import {
  CtoD65Adaptation,
  D50toD65Adaptation,
  EtoD65Adaptation,
} from "../helpers/chromatic-adaptation";
import {
  inverseCompanding,
  inverseGammaCompanding,
  inverseLCompanding,
  inverseSrbgCompanding,
} from "../helpers/companding";
import { clamp, formatValue, gamutCheck } from "../helpers/formats-and-checks";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import {
  CMY,
  CMYK,
  HCY,
  HSI,
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
  TSL,
  UVW,
  XYZ,
  YCbCr,
  YCoCg,
  YDbDr,
  YIQ,
  YPbPr,
  YcCbcCrc,
  xvYCC,
} from "../interfaces/color-spaces.interface";
import { labToLch_ab } from "./lab-conversions";
import { luvToLch_uv } from "./luv-conversions";
import { decimalToHex } from "./number-conversions";
import {
  xyzToAdobeRgb,
  xyzToAppleRgb,
  xyzToBestRgb,
  xyzToBetaRgb,
  xyzToBruceRgb,
  xyzToCieRgb,
  xyzToColorMatchRgb,
  xyzToDonRgb4,
  xyzToEciRgbV2,
  xyzToEtkaSpacePs5,
  xyzToLab,
  xyzToLuv,
  xyzToNtscRgb,
  xyzToPalSecamRgb,
  xyzToProPhotoRgb,
  xyzToSmpteCRgb,
  xyzToUvw,
  xyzToWideGamutRgb,
} from "./xyz-conversions";
import { yCbCrBT601ToXvYcc } from "./ycbcr-jpeg-conversions";

/*******************************************************************
 *                           HELPERS
 * *****************************************************************/
/**
 * Normalizes an RBG value
 *
 * @param {RBG}                   -  color to normalize
 * @returns {RGB}                 - normalized sRBG color value
 */
export const normalizeRgb = ({ red, green, blue }: RGB): RGB => ({
  red: red / 255,
  green: green / 255,
  blue: blue / 255,
});

/**
 * Normalizes an RBGA value
 *
 * @param {RBGA}                   - color to normalize
 * @returns {RGBA}                 - normalized sRBGA color value
 */
export const normalizeRgba = ({ red, green, blue, alpha }: RGBA): RGBA => ({
  red: red / 255,
  green: green / 255,
  blue: blue / 255,
  alpha,
});

export const deNormalizeRGB = ({ red, green, blue }: RGB): RGB => ({
  red: red * 255,
  green: green * 255,
  blue: blue * 255,
});

/**
 * Inverts a sRBG color
 *
 * @param {RBG}                   - color to invert
 * @returns {RGB}                 - inverted sRBG color value
 */
export const rgbInvert = ({ red, green, blue }: RGB): RGB => ({
  red: 255 - red,
  green: 255 - green,
  blue: 255 - blue,
});

/**
 * Gets a maximum, minimum values and their difference
 *
 * @param {number}                   - red value for red
 * @param {number}                   - green value for green
 * @param {number}                   - blue value for blue
 * @returns {number, number, number} -max, min and delta values
 */
const getRange = (
  red: number,
  green: number,
  blue: number
): { min: number; max: number; delta: number } => {
  const min = Math.min(red, green, blue);
  const max = Math.max(red, green, blue);
  const delta = max - min;
  return { min, max, delta };
};

/**
 * Gets Hue for a given sRBG color
 *
 * @param {number}                   - red value for red
 * @param {number}                   - green value for green
 * @param {number}                   - blue value for blue
 * @param {number}                   - max maximum value
 * @param {number}                   - delta difference between maximum and minimum value
 * @returns {number}                 - value of hue
 */
export const sRgbToHue = (
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

/**
 * Gets a sRBG color values in a range between 0 and 1
 *
 * @param {RBG}                   - color in range 0 to 255
 * @returns {RGB}                 - color in range 0 to 1
 */
export const rgbTo1_0rgb = (rgb: RGB): RGB => {
  const { red, green, blue } = normalizeRgb(rgb);
  return {
    red,
    green,
    blue,
  };
};

/**
 * Gets luminance for a given sRBG color
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - luminance value
 */
export const sRgbToLuminance = ({ red, green, blue }: RGB): number =>
  0.2126 * red + 0.7152 * green + 0.0722 * blue;

/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Adobe 98 RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                              (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Adobe 98 RGB values
 */
export const sRgbToAdobeRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToAdobeRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Adobe 98 RGB space
 *
 * @param {RGB}                   - Adobe 98 RGB values
 * @returns {XYZ}                 - xyz values
 */
export const adobeRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.ADOBE_RGB_1998);
};

/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Apple RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Apple RGB values
 */
export const sRgbToAppleRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToAppleRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Apple RGB space
 *
 * @param {RBG}                   - Apple RGB values
 * @returns {XYZ}                 - xyz values
 */
export const appleRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.APPLE_RGB);
};

/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Best RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}              - Best RGB values
 */
export const sRgbToBestRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToBestRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Best RGB space
 * @param {RBG}                   - Best RGB values
 * @returns {XYZ}                 - xyz values
 */
export const bestRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.BEST_RGB));
};

/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Beta RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Beta RGB values
 */
export const sRgbToBetaRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToBetaRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Beta RGB space
 * @param {RBG}                    - Beta RGB values
 * @returns {XYZ}                  - xyz values
 */
export const betaRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.BETA_RGB));
};

/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Bruce RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Bruce RGB values
 */
export const sRgbToBruceRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToBruceRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Bruce RGB space
 *
 * @param {RBG}                   - Bruce RGB values
 * @returns {XYZ}                 - xyz values
 */
export const bruceRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.BRUCE_RGB);
};

/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to CIE RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                   - CIE RGB values
 */
export const sRgbToCieRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToCieRgb(xyz);
};

/**
 * Gets XYZ values for a given color in CIE RGB space
 * @param {RBG}                   - CIE RGB values
 * @returns {XYZ}                 - xyz values
 */
export const cieRgbToXyz = (rgb: RGB): XYZ => {
  return EtoD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.CIE_RGB));
};

/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Color Match RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Color Match RGB values
 */
export const sRgbToColorMatchRgb = (
  rgb: RGB,
  xyz: XYZ = sRgbToXyz(rgb)
): RGB => {
  return xyzToColorMatchRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Color Match RGB space
 *
 * @param {RBG}                   - Color Match RGB values
 * @returns {XYZ}                 - xyz values
 */
export const colorMatchRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.COLOR_MATCH_RGB));
};

/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Don RGB 4 space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                 - sRBG values
 * @param {XYZ}                 - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}               - Don RGB 4 values
 */
export const sRgbToDonRgb4 = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToDonRgb4(xyz);
};

/**
 * Gets XYZ values for a given color in DON RGB 4 space
 * @param {RBG}                  - DON RGB 4 values
 * @returns {XYZ}                - xyz values
 */
export const donRgb4ToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.DON_RGB_4));
};

/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to ETKA SPACE PS5 space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - ETKA SPACE PS5 values
 */
export const sRgbToEtkaSpacePs5 = (
  rgb: RGB,
  xyz: XYZ = sRgbToXyz(rgb)
): RGB => {
  return xyzToEtkaSpacePs5(xyz);
};

/**
 * Gets XYZ values for a given color in Etka Space PS5 space
 *
 * @param {RBG}                  - Etka Space PS5 values
 * @returns {XYZ}                - xyz values
 */
export const etkaSpacePs5ToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.ETKA_SPACE_PS5));
};

/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to NTSC RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - NTSC RGB values
 */
export const sRgbToNtscRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToNtscRgb(xyz);
};

/**
 * Gets XYZ values for a given color in NTSC RGB space
 *
 * @param {RBG}                   - NTSC RGB values
 * @returns {XYZ}                 - xyz values
 */
export const ntscRgbToXyz = (rgb: RGB): XYZ => {
  return CtoD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.NTSC_RGB));
};

/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to PAL/SECAM RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                                (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - PAL/SECAM RGB values
 */
export const sRgbToPalSecamRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToPalSecamRgb(xyz);
};

/**
 * Gets XYZ values for a given color in PAL/SECAM RGB space
 *
 * @param {RBG}                   - PAL/SECAM RGB values
 * @returns {XYZ}                 - xyz values
 */
export const palSecamRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.PAL_SECAM_RGB);
};

/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Pro Photo RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                                (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Pro Photo RGB values
 */
export const sRgbToProPhotoRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToProPhotoRgb(xyz);
};

/**
 * Gets XYZ values for a given color in ProPhoto RGB space
 * @param {RBG}                   - ProPhoto RGB values
 * @returns {XYZ}                 - xyz values
 */
export const proPhotoRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.PRO_PHOTO_RGB));
};

/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to SMPTE-C RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                  - sRBG values
 * @param {XYZ}                  - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                - SMPTE-C RGB values
 */
export const sRgbToSmpteCRgb = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToSmpteCRgb(xyz);
};

/**
 * Gets XYZ values for a given color in SMPTE-C RGB space
 *
 * @param {RBG}                   - SMPTE-C RGB values
 * @returns {XYZ}                 - xyz values
 */
export const smpteCRgbToXyz = (rgb: RGB): XYZ => {
  return gammaRgbToXyz(rgb, SPACE_DATASETS.SMPTE_C_RGB);
};

/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Wide Gamut RGB space
 *
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Wide Gamut RGB values
 */
export const sRgbToWideGamutRgb = (
  rgb: RGB,
  xyz: XYZ = sRgbToXyz(rgb)
): RGB => {
  return xyzToWideGamutRgb(xyz);
};

/**
 * Gets XYZ values for a given color in Wide Gamut RGB space
 * @param {RBG}                   - Wide Gamut RGB values
 * @returns {XYZ}                 - xyz values
 */
export const wideGamutRgbToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(gammaRgbToXyz(rgb, SPACE_DATASETS.WIDE_GAMUT_RGB));
};

/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Color ECI RGB V2 space
 *
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - ECI RGB V2 values
 */
export const sRgbToEciRgbV2 = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): RGB => {
  return xyzToEciRgbV2(xyz);
};

/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 *
 * @param {RBG}                   - ECI RGB V2 values for a color
 * @returns {XYZ}                 - xyz values
 */
export const eciRgbV2ToXyz = (rgb: RGB): XYZ => {
  return D50toD65Adaptation(lRgbToXyz(rgb));
};

/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 * but additional chromatic adaptation is needed
 *
 * @param {RBG}                   - ECI RGB V2 values for a color
 * @returns {XYZ}                 - xyz values
 */
export const lRgbToXyz = (rgb: RGB): XYZ => {
  return rgbToXyz(rgb, SPACE_DATASETS.ECI_RGB_V2, inverseLCompanding);
};

/*******************************************************************
 *                             SRGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in sRGB space
 * @param {RBG}                   - sRBG values for a color
 * @returns {XYZ}                 - xyz values
 */
export const sRgbToXyz = (rgb: RGB): XYZ => {
  return rgbToXyz(rgb, SPACE_DATASETS.SRGB, inverseSrbgCompanding);
};

/*******************************************************************
 *                             ANSI
 * *****************************************************************/
/**
 * Gets ansi16 value for a given color in sRGB space
 *
 * @param {RBG}                  - sRBG values for a color
 * @returns {number}             - ansi16 numeric value
 */
export const sRgbToAnsi16 = (
  rgb: RGB,
  saturation: number | null = null
): number => {
  let value;
  if (saturation) value = saturation;
  else {
    const max = Math.max(rgb.red, rgb.green, rgb.blue);
    value = formatValue(max);
  }

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

/**
 * Gets ansi256 value for a given color in sRGB space
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - ansi256 numeric value
 */
export const sRgbToAnsi256 = ({ red, green, blue }: RGB): number => {
  red = clamp(red, 0, 255);
  green = clamp(green, 0, 255);
  blue = clamp(blue, 0, 255);

  if (red >> 4 === green >> 4 && green >> 4 === blue >> 4) {
    if (red >= 0 && red <= 7) return 16;
    if (red >= 255 - 7) return 231;
    return Math.floor(((red - 8) / 240) * 24) + 232;
  }

  return (
    16 +
    36 * Math.round((red / 255) * 5) +
    6 * Math.round((green / 255) * 5) +
    Math.round((blue / 255) * 5)
  );
};

/*******************************************************************
 *                             CMY
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMY space
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @returns {CMY}                 - CMY values for a color
 */
export const sRgbToCmy = (rgb: RGB): CMY => {
  const { red, green, blue } = normalizeRgb(rgb);

  return {
    cyan: (1 - red) * 100 || 0,
    magenta: (1 - green) * 100 || 0,
    yellow: (1 - blue) * 100 || 0,
  };
};

/*******************************************************************
 *                            CMYK
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMYK space
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @returns {CMYK}                - CMYK values for a color
 */
export const sRgbToCmyk = (rgb: RGB, round?: boolean): CMYK => {
  if (!gamutCheck(rgb.red) || !gamutCheck(rgb.green) || !gamutCheck(rgb.blue)) {
    throw new Error("Provided rgb values must be within range of 0 to 255!");
  }
  const { red, green, blue } = normalizeRgb(rgb);
  let key = 1 - Math.max(red, green, blue);
  const K1 = 1 - key;
  const f = (t: number): number =>
    round
      ? Math.round((K1 && (K1 - t) / K1) * 100)
      : (K1 && (K1 - t) / K1) * 100;

  return { cyan: f(red), magenta: f(green), yellow: f(blue), key: key * 100 };
};

/*******************************************************************
 *                             HCY
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HCY or HSI value
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @param {'hcy' | 'hsi'}         - color space to retrun
 * @returns {HCY | HSI}           - resultion color space values
 */
const sRgbToHcyOrHsi = (
  { red, green, blue }: RGB,
  ret: "hcy" | "hsi"
): HCY | HSI => {
  if (!gamutCheck(red) || !gamutCheck(green) || !gamutCheck(blue)) {
    throw new Error("Provided rgb values must be within range of 0 to 255!");
  }
  const sum = red + green + blue;
  red = red / sum;
  green = green / sum;
  blue = blue / sum;

  let hue = Math.acos(
    (0.5 * (red - green + (red - blue))) /
      Math.sqrt((red - green) * (red - green) + (red - blue) * (green - blue))
  );

  if (blue > green) hue = ((2 * Math.PI - hue) * 180) / Math.PI;
  else hue = (hue * 180) / Math.PI;

  if (ret === "hsi") {
    const intensity = sum / 3;
    const saturation = (1 - 3 * Math.min(red, green, blue)) * 100;
    return { hue, saturation, intensity };
  } else {
    const chroma = (1 - 3 * Math.min(red, green, blue)) * 100;
    const Yluminance = sum / 3;
    return { hue, chroma, Yluminance };
  }
};

/**
 * Converts a color form an sRGB space to HCY space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HCY}                 - HCY values for a color
 */
export const sRgbToHcy = (rgb: RGB): HCY => {
  return sRgbToHcyOrHsi(rgb, "hcy") as HCY;
};

/*******************************************************************
 *                             HEX
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to hex value
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {string}              - hex string
 */
export const sRgbToHex = (
  { red, green, blue }: RGB,
  prefixed?: boolean
): string => {
  const integer =
    ((Math.round(red) & 0xff) << 16) +
    ((Math.round(green) & 0xff) << 8) +
    (Math.round(blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return (prefixed ? "#" : "") + "000000".substring(string.length) + string;
};

/**
 * Converts a color form an sRGBA space to hex value
 *
 * @param {RBGA}                   - sRBGA values for a color
 * @returns {string}               - hex string
 */
export const sRgbaToHex = (
  { red, green, blue, alpha }: RGBA,
  prefixed?: boolean
): string => {
  const integer =
    ((Math.round(red) & 0xff) << 16) +
    ((Math.round(green) & 0xff) << 8) +
    (Math.round(blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return (
    (prefixed ? "#" : "") +
    "000000".substring(string.length) +
    string +
    decimalToHex(alpha)
  );
};

/*******************************************************************
 *                             HSI
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSI space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSI}                 - HSI values for a color
 */
export const sRgbToHsi = (rgb: RGB): HSI => {
  return sRgbToHcyOrHsi(rgb, "hsi") as HSI;
};

/*******************************************************************
 *                             HSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSL space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSL}                 - HSL values for a color
 */
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

  if (!pHue) hue = sRgbToHue(red, green, blue, max, delta);
  else hue = pHue;

  lightness = formatValue(lightness);
  return { hue, saturation, lightness };
};

/*******************************************************************
 *                             HSV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSV space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSV}                 - HSV values for a color
 */
export const sRgbToHsv = (rgb: RGB, pHue?: number): HSV => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { max, delta } = getRange(red, green, blue);

  let hue = 0;
  const value = formatValue(max);
  const saturation = formatValue(max === 0 ? 0 : delta / max);

  if (!delta) return { hue, saturation, value };

  if (!pHue) hue = sRgbToHue(red, green, blue, max, delta);
  else hue = pHue;

  return { hue, saturation, value };
};

/*******************************************************************
 *                             HWG
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HWB space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HWB}                 - HWB values for a color
 */
export const sRgbToHwb = (rgb: RGB, pHue?: number): HWB => {
  const { red, green, blue } = normalizeRgb(rgb);
  let hue!: number;
  if (!pHue) {
    const { max, delta } = getRange(red, green, blue);
    hue = sRgbToHue(red, green, blue, max, delta);
  } else hue = pHue;

  const whiteness =
    (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
  const blackness =
    (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;

  return { hue, whiteness, blackness };
};

/*******************************************************************
 *                             LAB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Lab space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LAB}                 - Lab values for a color
 */
export const sRgbToLab = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LAB => {
  return xyzToLab(xyz);
};

/*******************************************************************
 *                             LCH
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to LCH(ab) space
 * @param {RBG}                   - sRBG values for a color
 * @returns {LCH}                 - LCH(ab) values for a color
 */
export const sRgbToLch_ab = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LCH => {
  return labToLch_ab(xyzToLab(xyz));
};

/**
 * Converts a color form an sRGB space to LCH(uv) space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LCH}                 - LCH(uv) values for a color
 */
export const sRgbToLch_uv = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LCH => {
  return luvToLch_uv(xyzToLuv(xyz));
};

/*******************************************************************
 *                             LUV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Luv space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LUV}                 - Luv values for a color
 */
export const sRgbToLuv = (rgb: RGB, xyz: XYZ = sRgbToXyz(rgb)): LUV => {
  return xyzToLuv(xyz);
};

/*******************************************************************
 *                             RYB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to RYB space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {RYB}                 - RYB values for a color
 */
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
    blue: bRYB / N + Ib,
  };
};

/*******************************************************************
 *                              TSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to TSL space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {TSL}                 - TSL values for a color
 */
export const sRgbToTsl = ({ red, green, blue }: RGB): TSL => {
  const r_ = (red / (red + green + blue) || 0) - 1 / 3;
  const g_ = (green / (red + green + blue) || 0) - 1 / 3;
  const tint = g_ != 0 ? 0.5 - Math.atan2(g_, r_) / 2 / Math.PI : 0;
  const saturation = Math.sqrt((9 / 5) * (r_ * r_ + g_ * g_));
  const lightness = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;
  return { tint, saturation, lightness };
};

/*******************************************************************
 *                              UVW
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to UVW space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {UVW}                 - UVW values for a color
 */
export const sRgbToUvw = (rgb: RGB): UVW => {
  return xyzToUvw(sRgbToXyz(rgb));
};

/*******************************************************************
 *                              XYZ
 * *****************************************************************/
/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space
 *
 * @param {RBG}                   - RBG values
 * @param {SpaceData}             - RGB space dataset
 * @param {Function}              - function to preform inverse companding whit
 * @param {boolean}               - gamma optional flag indicating if a gamma value
 *                                for a give RGB space data set should be used
 * @returns {XYZ}                 - xyz values
 */
const rgbToXyz = (
  rgb: RGB,
  space: SpaceData,
  inverseCompandingFun: Function,
  gamma?: boolean
): XYZ => {
  const { Rlin, Glin, Blin } = inverseCompanding(
    rgb,
    space,
    inverseCompandingFun,
    gamma
  );
  const { X, Y, Z } = space.RGB_TO_XYZ;
  const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
  const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
  const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;

  return { x, y, z };
};

/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - RBG values
 * @param {SpaceData}             - RGB space dataset
 * @returns {XYZ}                 - xyz values
 */
export const gammaRgbToXyz = (rgb: RGB, ref: SpaceData): XYZ => {
  return rgbToXyz(rgb, ref, inverseGammaCompanding, true);
};

/*******************************************************************
 *  JPEG / YCbCr / YcCbcCrc / YCoCg / YDbDr / YPbPr / YIQ / xvYCC
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to ITU-R BT.601 Y′CbCr (YUV) space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCbCr}               - YCbCr values for a color
 */
export const sRgbToYCbCrBT601 = ({ red, green, blue }: RGB): YCbCr => {
  const { Y, Cb, Cr } = matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.RGB_TO_YCBCR_BT_601,
    { red, green, blue },
    ["Y", "Cb", "Cr"]
  ) as unknown as YCbCr;
  return {
    Y: 16 + Y,
    Cb: 128 + Cb,
    Cr: 128 + Cr,
  };
};

/**
 * Converts a color form an sRGB space to ITU-R BT.709 Y′CbCr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCbCr}               - YCbCr values for a color
 */
export const sRgbToYCbCrBT709 = ({ red, green, blue }: RGB): YCbCr => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.RGB_TO_BT_709_YCBCR,
    { red, green, blue },
    ["Y", "Cb", "Cr"]
  ) as unknown as YCbCr;
};

/**
 * Converts a color form an sRGB space to YDbDr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YDbDr}               - YDbDr values for a color
 */
export const sRgbToYDbDr = ({ red, green, blue }: RGB): YDbDr => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.RGB_TO_YDBDR,
    { red, green, blue },
    ["Y", "Db", "Dr"]
  ) as unknown as YDbDr;
};

/**
 * Converts a color form an sRGB space to Analog YPbPr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YPbPr}               - YPbPr values for a color
 */
export const sRgbToYPbPr = ({ red, green, blue }: RGB): YPbPr => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.RGB_TO_YPBPR,
    { red, green, blue },
    ["Y", "Pb", "Pr"]
  ) as unknown as YPbPr;
};

/**
 * Converts a color form an sRGB space to YcCbcCrc space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YcCbcCrc}            - YcCbcCrc values for a color
 *
 * -more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.2020_conversion
 */
export const sRgbToYcCbcCrc = ({ red, green, blue }: RGB): YcCbcCrc => {
  const Yc = 0.2627 * red + 0.678 * green + 0.0593 * blue;
  const Cbc = (blue - Yc) / getDivider({ red, green, blue }, Yc, "Cbc");
  const Crc = (red - Yc) / getDivider({ red, green, blue }, Yc, "Crc");
  return { Yc, Cbc, Crc };
};

const getDivider = (
  { red, blue }: RGB,
  Yc: number,
  chroma: "Cbc" | "Crc"
): number => {
  if (chroma === "Crc") {
    if (Nr <= red - Yc || red - Yc <= 0) return 1.7182;
    else return 0.9938;
  }
  if (Nb <= blue - Yc || blue - Yc <= 0) return 1.9404;
  else return 1.582;
};

/**
 * Converts a color form an sRGB space to YCoCg space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCoCg}               - YCoCg values for a color
 */
export const sRgbToYCgCo = ({ red, green, blue }: RGB): YCoCg => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.RGB_TO_YCOCG,
    { red, green, blue },
    ["Y", "Co", "Cg"]
  ) as unknown as YCoCg;
};

/**
 * Converts a color form an sRGB space to YIQ  space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YIQ}                 - YIQ  values for a color
 */
export const sRgbToYiq = ({ red, green, blue }: RGB): YIQ => {
  if (red !== green || green !== blue) {
    return matrixByVectorObjMultiAsSpace(
      CB_CR_CONVERSION_MATRICES.RGB_TO_YIQ,
      { red, green, blue },
      ["Y", "I", "Q"]
    ) as unknown as YIQ;
  } else return { Y: red * 0.299 + green * 0.587 + blue * 0.114, I: 0, Q: 0 };
};

/**
 * Converts a color form an sRGB space to xvYCC space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {xvYCC}               - xvYCC values for a color
 */
export const sRgbToXvYcc = (rgb: RGB): xvYCC => {
  return yCbCrBT601ToXvYcc(sRgbToYCbCrBT601(rgb));
};
