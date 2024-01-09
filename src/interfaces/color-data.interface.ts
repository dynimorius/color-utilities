import { CMYK, HCG, HSB, HSL, HSV, HWB, LAB, LCH, RGB, XYZ } from "./color-spaces.interface";

export interface ColorData {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  hsb: HSB;
  hwb: HWB;
  hcg: HCG;
  lab: LAB;
  lch: LCH;
  cmyk: CMYK;
  xyz: XYZ;
  alpha: number;
}