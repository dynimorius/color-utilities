import {
  CMYK,
  CMYK_M,
  HCG,
  HCG_M,
  HCL,
  HCL_M,
  HSB,
  HSL,
  HSLA,
  HSL_M,
  HSV,
  HSVA,
  HSV_M,
  HWB,
  HWB_M,
  LAB,
  LAB_M,
  LCH,
  LCH_M,
  LUV,
  RGB,
  RGBA,
  RGB_M,
  RYB,
  RYB_M,
  XYZ,
} from "../interfaces/color-spaces.interface";

export type ColorSpaceUnion =
  | RGB
  | RGBA
  | RGB_M
  | RYB
  | RYB_M
  | HSL
  | HSLA
  | HSL_M
  | HSV
  | HSVA
  | HSV_M
  | HWB
  | HWB_M
  | HCG
  | HCG_M
  | HCL
  | HCL_M
  | LAB
  | LAB_M
  | LCH
  | LCH_M
  | LUV
  | CMYK
  | CMYK_M
  | XYZ
  | string;

export type Spaces =
  | 'adobe_98_rgb'
  | 'apple_rgb'
  | 'ansi16'
  | 'ansi256'
  | 'best_rgb'
  | 'beta_rgb'
  | 'bruce_rgb'
  | 'cie_rgb'
  | 'color_match_rgb'
  | 'cmyk'
  | 'don_rgb_4'
  | 'eci_rgb_v2'
  | 'etka_space_ps5'
  | 'hcg'
  | 'hex'
  | 'hsl'
  | 'hsv'
  | 'hwb'
  | 'lab'
  | 'lch_ab'
  | 'lch_uv'
  | 'luv'
  | 'ntsc_rgb'
  | 'pal_secam_rgb'
  | 'pro_photo_rgb'
  | 'rgb_0_1'
  | 'rgb'
  | 'ryb'
  | 'smpte_c_rgb'
  | 'wide_gamut_rgb'
  | 'xyy'
  | 'xyz'

export type initialSpaces =
  | 'cmyk'
  | 'hex'
  | 'hsl'
  | 'hsv'
  | 'hwb'
  | 'rgb'
  | 'ryb'
  | 'xyz';

