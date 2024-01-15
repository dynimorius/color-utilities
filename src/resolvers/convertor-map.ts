import { hwbToRgb } from './../converters/hcg-converter';
import { RGBConverters, ToRGBConverters } from "../interfaces/converters.interface";
import {
  rgbTo1_0rgb,
  rgbToAdobeRgb,
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
  rgbToXyz,
} from "../converters/rgb-converter";
import { isWebSafeRGB } from "../helpers";
import { hexToRgb } from "../converters/hex-converter";
import { cmykToRgb } from "../converters/cmyk-converter";
import { hslToRgb } from "../converters/hsl-converter";
import { hsvToRgb } from "../converters/hsv-converter";
import { xyzToRgb } from '../converters/xyz-converter';

export const rgbConverters: RGBConverters = {
  adobeRgb: rgbToAdobeRgb,
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
  rgb_0_1: rgbTo1_0rgb,
  rgb_0_255: xyzToRgb,
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
