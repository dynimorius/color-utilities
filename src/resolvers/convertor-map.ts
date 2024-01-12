import { hwbToRgb } from './../converters/hcg-converter';
import { RGBConverters, ToRGBConverters } from "../interfaces/converters.interface";
import {
  rgbToAnsi16,
  rgbToAnsi256,
  rgbToCmyk,
  rgbToHcg,
  rgbToHex,
  rgbToHsl,
  rgbToHsv,
  rgbToHwb,
  rgbToLab,
  rgbToLch,
  rgbToSrgb,
  rgbToXyz,
} from "../converters/rgb-converter";
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
  hex: rgbToHex,
  hsl: rgbToHsl,
  hsv: rgbToHsv,
  hwb: rgbToHwb,
  lab: rgbToLab,
  lch: rgbToLch,
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
