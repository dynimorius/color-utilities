import { isWebSafe } from "./../helpers/index";
import {
  getRange,
  rgbToAnsi16,
  rgbToAnsi256,
  rgbToCmyk,
  rgbToHcgPrefactored,
  rgbToHex,
  rgbToHslPrefactored,
  rgbToHsvPrefactored,
  rgbToHue,
  rgbToHwbPrefactored,
  rgbToLab,
  rgbToSrgb,
  rgbToXyz,
} from "../converters/rgb-converter";
import {
  CMYK,
  HCG,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  RGB,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { labToLch } from "../converters/lab-converter";
import { ColorExtendedData } from "../interfaces/color-data.interface";

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

  data(): ColorExtendedData {
    return {
      alpha: this.alpha,
      ansi16: this.ansi16,
      ansi256: this.ansi256,
      cmyk: this.cmyk,
      hcg: this.hcg,
      hex: this.hex,
      hsl: this.hsl,
      hsv: this.hsv,
      hwb: this.hwb,
      lab: this.lab,
      lch: this.lch,
      outOfGamut: this.outOfGamut,
      rgb: this.rgb,
      srgb: this.srgb,
      webSafe: this.webSafe,
      xyz: this.xyz
    }
  }
}
