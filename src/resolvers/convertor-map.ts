import { hwbToRgb } from './../converters/hcg-converter';
import { RGBConverters, ToRGBConverters } from "../interfaces/converters.interface";
import {
  rgbToAnsi16,
  rgbToAnsi256,
  rgbToCmyk,
  rgbToHcg,
  rgbToHcgPrefactored,
  rgbToHex,
  rgbToHsl,
  rgbToHslPrefactored,
  rgbToHsv,
  rgbToHsvPrefactored,
  rgbToHwb,
  rgbToHwbPrefactored,
  rgbToLab,
  rgbToSrgb,
  rgbToXyz,
} from "../converters/rgb-converter";
import { labToLch } from "../converters/lab-converter";
import { isWebSafeRGB } from "../helpers";
import { hexToRgb } from "../converters/hex-converter";
import { cmykToRgb } from "../converters/cmyk-converter";
import { hslToRgb } from "../converters/hsl-converter";
import { hsvToRgb } from "../converters/hsv-converter";
import { xyzToRgb } from '../converters/xyz-converter';

export const rgbConverters: RGBConverters = {
  ansi16: rgbToAnsi16,
  ansi256: rgbToAnsi256,
  cmyk: rgbToCmyk,
  hcg: rgbToHcg,
  alt_hcg: rgbToHcgPrefactored,
  hex: rgbToHex,
  hsl: rgbToHsl,
  alt_hsl: rgbToHslPrefactored,
  hsv: rgbToHsv,
  alt_hsv: rgbToHsvPrefactored,
  hwb: rgbToHwb,
  alt_hwb: rgbToHwbPrefactored,
  lab: rgbToLab,
  lch: labToLch,
  srgb: rgbToSrgb,
  xyz: rgbToXyz,
  webSafe: isWebSafeRGB,
};

export const toRgbConverters: ToRGBConverters = {
  hex: hexToRgb,
  cmyk: cmykToRgb,
  hsl: hslToRgb,
  hsv: hsvToRgb,
  hwb: hwbToRgb,
  xyz:  xyzToRgb,
}
