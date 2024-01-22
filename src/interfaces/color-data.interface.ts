import {
  CMYK,
  HCG,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LUV,
  RGB,
  RYB,
  XYY,
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
  adobe_98_rgb?: RGB;
  apple_rgb?: RGB;
  ansi16?: number;
  ansi256?: number;
  best_rgb?: RGB;
  beta_rgb?: RGB;
  bruce_rgb?: RGB;
  cie_rgb?: RGB;
  color_match_rgb?: RGB;
  cmyk?: CMYK;
  don_rgb_4?: RGB;
  eci_rgb_v2?: RGB;
  etka_space_ps5?: RGB;
  hcg?: HCG;
  hex?: string;
  hsl?: HSL;
  hsv?: HSV;
  hwb?: HWB;
  lab?: LAB;
  lch_ab?: LCH;
  lch_uv?: LCH;
  luv?: LUV;
  ntsc_rgb?: RGB;
  pal_secam_rgb?: RGB;
  pro_photo_rgb?: RGB;
  rgb_0_1?: RGB;
  rgb?: RGB;
  ryb?: RYB;
  smpte_c_rgb?: RGB;
  web_safe?: boolean;
  wide_gamut_rgb?: RGB;
  xyz?: XYZ;
  xyY?: XYY;
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
