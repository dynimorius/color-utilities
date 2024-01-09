import { isWebSafe } from './../helpers/index';
import { getRange, rgbToAnsi16, rgbToAnsi256, rgbToCmyk, rgbToHcgPrefactored, rgbToHex, rgbToHslPrefactored, rgbToHsvPrefactored, rgbToHue, rgbToHwbPrefactored, rgbToLab, rgbToSrgb, rgbToXyz } from "../converters/rgb-converter";
import { CMYK, HCG, HSL, HSV, HWB, LAB, LCH, RGB, XYZ } from "../interfaces/color-spaces.interface";
import { labToLch } from '../converters/lab-converter';

export class RGBResolver {
  alpha!: number;
  ansi16!: number;
  ansi256!: number;
  cmyk!: CMYK;
  hcg!: HCG;
  hex!: string;
  hsl!: HSL;
  hsv!: HSV;
  hwb!: HWB;
  lab!: LAB;
  lch!: LCH;
  outOfGamut!: boolean;
  rgb!: RGB;
  srgb!: RGB;
  webSafe!: boolean;
  xyz!: XYZ;
  constructor(rgb: RGB) {
    const { red, green, blue } = rgb;
    const { max, delta } = getRange(red, green, blue);
    const hue = rgbToHue(red, green, blue, max, delta);
    this.alpha = 1;
    this.rgb = rgb;
    this.ansi16 = rgbToAnsi16(rgb);
    this.ansi256 = rgbToAnsi256(rgb);
    this.cmyk = rgbToCmyk(rgb);
    this.hcg = rgbToHcgPrefactored(rgb, hue);
    this.hex = rgbToHex(rgb);
    this.hsl = rgbToHslPrefactored(rgb, hue);
    this.hsv = rgbToHsvPrefactored(rgb, hue);
    this.hwb = rgbToHwbPrefactored(rgb, hue);
    this.lab = rgbToLab(rgb);
    this.lch = labToLch(this.lab);
    this.srgb = rgbToSrgb(rgb);
    this.xyz = rgbToXyz(rgb);
    this.webSafe = isWebSafe(rgb);
    // this.outOfGamut = isisOutOfGamut(rgb);
  }
}