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
  XYZ,
} from "../interfaces/color-spaces.interface";

export type ColorSpaceUnion =
  | RGB
  | RGBA
  | RGB_M
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
  | 'smpte_c_rgb'
  | 'wide_gamut_rgb'
  | 'xyz'

export type initialSpaces =
  | 'cmyk'
  | 'hex'
  | 'hsl'
  | 'hsv'
  | 'hwb'
  | 'rgb'
  | 'xyz';

