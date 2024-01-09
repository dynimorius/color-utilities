import {
  CMYK,
  HCG,
  HSL,
  HSV,
  HWB,
  LAB,
  RGB,
  RGBA,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { LAB_FT, NORMALIZED_BELOW_10 } from "../shared";
import { decimalToHex } from "./number-converter";

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

export const formatValue = (value: number): number => Math.round(value * 100);

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

export const tosRBG = (value: number): number =>
  value > NORMALIZED_BELOW_10
    ? Math.pow((value + 0.055) / 1.055, 2.4)
    : value / 12.92;

export const rgbToSrgb = (rgb: RGB): RGB => {
  const { red, green, blue } = normalizeRgb(rgb);
  return {
    red: tosRBG(red),
    green: tosRBG(green),
    blue: tosRBG(blue),
  };
};

export const srgbToLuminance = (rgb: RGB): number => {
  const { red, green, blue } = rgb;
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

export const rgbToLuminance = (rgb: RGB): number =>
  srgbToLuminance(rgbToSrgb(rgb));

export const rgbToRgba = (rgb: RGB): RGBA => {
  const { red, green, blue } = normalizeRgb(rgb);
  return {
    red,
    green,
    blue,
    alpha: 1,
  };
};

export const rgbToHsl = (rgb: RGB): HSL => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { min, max, delta } = getRange(red, green, blue);

  let lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (!delta) {
    return { hue, saturation, lightness };
  } else {
    saturation = formatValue(
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
    );
  }

  hue = rgbToHue(red, green, blue, max, delta);
  lightness = formatValue(lightness);
  return { hue, saturation, lightness };
};

export const rgbToHslPrefactored = (rgb: RGB, hue: number): HSL => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { min, max, delta } = getRange(red, green, blue);
  let lightness = (max + min) / 2;
  let saturation = 0;
  if (!delta) {
    return { hue, saturation, lightness };
  } else {
    saturation = formatValue(
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
    );
  }
  lightness = formatValue(lightness);
  return { hue, saturation, lightness };
};

export const rgbToHsv = (rgb: RGB): HSV => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { max, delta } = getRange(red, green, blue);

  let hue = 0;
  let value = formatValue(max);
  let saturation = formatValue(max === 0 ? 0 : delta / max);

  if (!delta) {
    return { hue, saturation, value };
  }
  hue = rgbToHue(red, green, blue, max, delta);

  return { hue, saturation, value };
};

export const rgbToHsvPrefactored = (rgb: RGB, hue: number): HSV => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { max, delta } = getRange(red, green, blue);

  let value = formatValue(max);
  let saturation = formatValue(max === 0 ? 0 : delta / max);

  if (!delta) {
    return { hue, saturation, value };
  }
  return { hue, saturation, value };
};

export const rgbToHwb = (rgb: RGB): HWB => {
  const { red, green, blue } = normalizeRgb(rgb);
  const { max, delta } = getRange(red, green, blue);
  const hue = rgbToHue(red, green, blue, max, delta);
  const whiteness =
    (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
  const blackness =
    (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;

  return { hue, whiteness, blackness };
};

export const rgbToHwbPrefactored = (rgb: RGB, hue: number): HWB => {
  const whiteness =
    (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
  const blackness =
    (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;

  return { hue, whiteness, blackness };
};

export const rgbToCmyk = (rgb: RGB): CMYK => {
  const { red, green, blue } = normalizeRgb(rgb);

  let key = Math.min(1 - red, 1 - green, 1 - blue);
  let cyan = (1 - red - key) / (1 - key) || 0;
  let magenta = (1 - green - key) / (1 - key) || 0;
  let yellow = (1 - blue - key) / (1 - key) || 0;

  cyan = (cyan <= 0 ? 0 : cyan) * 100;
  magenta = (magenta <= 0 ? 0 : magenta) * 100;
  yellow = (yellow <= 0 ? 0 : yellow) * 100;
  key = key * 100;

  cyan = cyan >= 100 ? 100 : cyan;
  magenta = magenta >= 100 ? 100 : magenta;
  yellow = yellow >= 100 ? 100 : yellow;

  return { cyan, magenta, yellow, key };
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

  // Assume sRGB
  red = red > 0.04045 ? ((red + 0.055) / 1.055) ** 2.4 : red / 12.92;
  green = green > 0.04045 ? ((green + 0.055) / 1.055) ** 2.4 : green / 12.92;
  blue = blue > 0.04045 ? ((blue + 0.055) / 1.055) ** 2.4 : blue / 12.92;

  const x = (red * 0.4124564 + green * 0.3575761 + blue * 0.1804375) * 100;
  const y = (red * 0.2126729 + green * 0.7151522 + blue * 0.072175) * 100;
  const z = (red * 0.0193339 + green * 0.119192 + blue * 0.9503041) * 100;

  return { x, y, z };
};

export const rgbToLab = (rgb: RGB): LAB => {
  let { x, y, z } = rgbToXyz(rgb);

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;

  const luminance = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return { luminance, a, b };
};

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

export const rgbaToHex = ({ red, green, blue, alpha } : RGBA): string => {
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
