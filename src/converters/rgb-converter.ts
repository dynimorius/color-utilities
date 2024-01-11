import { NORMALIZED_BELOW_10 } from "../constants";
import { formatValue, round } from "../helpers";
import {
  CMYK,
  HCG,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  RGB,
  RGBA,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { labToLch } from "./lab-converter";
import { decimalToHex } from "./number-converter";
import { xyzToLab } from "./xyz-converter";

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

  if (hue < 0) {
    hue += 360;
  }

  hue = Math.round(hue);
  return hue;
};

//TODO fix incorect
export const tosRBG = (value: number): number =>
  value > NORMALIZED_BELOW_10
    ? Math.pow((value + 0.055) / 1.055, 2.4)
    : value / 12.92;

//TODO fix incorect
export const rgbToSrgb = (rgb: RGB): RGB => {
  const { red, green, blue } = normalizeRgb(rgb);
  return {
    red: tosRBG(red),
    green: tosRBG(green),
    blue: tosRBG(blue),
  };
};

export const sRgbToLuminance = ({ red, green, blue }: RGB): number =>
  0.2126 * red + 0.7152 * green + 0.0722 * blue;

export const rgbToLuminance = (rgb: RGB): number =>
  sRgbToLuminance(rgbToSrgb(rgb));

export const rgbToHsl = (rgb: RGB, pHue?: number): HSL => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { min, max, delta } = getRange(red, green, blue);

  let lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (!delta) return { hue, saturation, lightness };
  else saturation = formatValue(
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  );
  
  if (!pHue) hue = rgbToHue(red, green, blue, max, delta);
  else hue = pHue;

  lightness = formatValue(lightness);
  return { hue, saturation, lightness };
};

export const rgbToHsv = (rgb: RGB, pHue?: number): HSV => {
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

export const rgbToHwb = (rgb: RGB, pHue?: number): HWB => {
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

export const rgbToCmyk = (rgb: RGB): CMYK => {
  const { red, green, blue } = normalizeRgb(rgb);
  let key = 1 - Math.max(red, green, blue);
  const K1 = 1 - key;
  const f = (t: number): number => round((K1 && (K1 - t) / K1) * 100);

  return { cyan: f(red), magenta: f(green), yellow: f(blue), key: key * 100 };
};

export const comparativeDistance = (rgb1: RGB, rgb2: RGB): number => {
  return (
    (rgb1.red - rgb2.red) ** 2 +
    (rgb1.green - rgb2.green) ** 2 +
    (rgb1.blue - rgb2.blue) ** 2
  );
};

export const rgbToXyz = (rgb: RGB): XYZ => {
  let { red, green, blue } = normalizeRgb(rgb);
  const f = (t: number): number =>
    t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92;

  red = f(red);
  green = f(green);
  blue = f(blue);

  const x = (red * 0.4124564 + green * 0.3575761 + blue * 0.1804375) * 100;
  const y = (red * 0.2126729 + green * 0.7151522 + blue * 0.072175) * 100;
  const z = (red * 0.0193339 + green * 0.119192 + blue * 0.9503041) * 100;

  return { x, y, z };
};

export const rgbToLab = (rgb: RGB): LAB => {
  let xyz = rgbToXyz(rgb);
  const { luminance, a, b } = xyzToLab(xyz);

  return { luminance, a, b };
};

export const rgbToLch = (rgb: RGB): LCH => {
  let xyz = rgbToXyz(rgb);
  const lab = xyzToLab(xyz);

  return labToLch(lab);
};

//TODO fix incorect
export const rgbToAnsi16 = (
  rgb: RGB,
  saturation: number | null = null
): number => {
  // Hsv -> ansi16 optimization
  let value = saturation ?? rgbToHsv(rgb).value;

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

export const rgbToAnsi256 = ({ red, green, blue }: RGB): number => {
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

export const rgbToHex = ({ red, green, blue }: RGB): string => {
  const integer =
    ((Math.round(red) & 0xff) << 16) +
    ((Math.round(green) & 0xff) << 8) +
    (Math.round(blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};

export const rgbaToHex = ({ red, green, blue, alpha }: RGBA): string => {
  const integer =
    ((Math.round(red) & 0xff) << 16) +
    ((Math.round(green) & 0xff) << 8) +
    (Math.round(blue) & 0xff);

  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string + decimalToHex(alpha);
};

export const rgbToHcg = (rgb: RGB): HCG => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { min, max, delta } = getRange(red, green, blue);
  const grayscale = delta < 1 ? min / (1 - delta) : 0;

  let hue = rgbToHue(red, green, blue, max, delta);
  return { hue, chroma: delta * 100, grayscale: grayscale * 100 };
};

export const rgbToHcgPrefactored = (rgb: RGB, hue: number): HCG => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { min, delta } = getRange(red, green, blue);
  const grayscale = delta < 1 ? min / (1 - delta) : 0;

  return { hue, chroma: delta * 100, grayscale: grayscale * 100 };
};
