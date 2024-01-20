import {
  CMYK,
  HCG,
  HSB,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LUV,
  RGB,
  XYZ,
} from "./color-spaces.interface";

export interface ColorData {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  alpha: number;
  outOfGamut: boolean;
  webSafe: boolean;
}
export interface ColorExtendedData {
  alpha: number;
  ansi16: number;
  ansi256: number;
  cmyk: CMYK;
  hcg: HCG;
  hex: string;
  hsb: HSB;
  hsl: HSL;
  hsv: HSV;
  hwb: HWB;
  lab: LAB;
  lch_ab: LCH;
  lch_uv: LCH;
  luv: LUV;
  outOfGamut: boolean;
  rgb: RGB;
  srgb: RGB;
  webSafe: boolean;
  xyz: XYZ;
}

export interface ColorBreakdown {
  alpha: number;
  blackness: number;
  brightness: number;
  chroma: number;
  cmyk: CMYK;
  grayscale: number;
  hue: number;
  lab: LAB;
  luminance: number;
  rgb: RGB;
  saturation: number;
  whiteness: number;
  xyz: XYZ;
  outOfGamut: boolean;
  webSafe: boolean;
}
