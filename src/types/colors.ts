/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  CMY,
  CMYK,
  CMYK_M,
  CMY_M,
  HCY,
  HCY_M,
  HSI,
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
  LMS,
  LUV,
  RGB,
  RGBA,
  RGB_M,
  RYB,
  RYB_M,
  TSL,
  UVW,
  XYY,
  XYZ,
  YCbCr,
  YCoCg,
  YDbDr,
  YIQ,
  YPbPr,
  YcCbcCrc,
  xvYCC,
} from "../interfaces/color-spaces.interface";

/**
 * @description Union of color values
 */
export type ColorSpaceUnion =
  | RGB
  | RGBA
  | RGB_M
  | RYB
  | RYB_M
  | HSL
  | HSLA
  | HSI
  | HSL_M
  | HSV
  | HSVA
  | HSV_M
  | HWB
  | HWB_M
  | HCY
  | HCY_M
  | LAB
  | LAB_M
  | LCH
  | LCH_M
  | LMS
  | LUV
  | CMY
  | CMY_M
  | CMYK
  | CMYK_M
  | TSL
  | UVW
  | xvYCC
  | XYZ
  | XYY
  | YCbCr
  | YcCbcCrc
  | YCoCg
  | YDbDr
  | YIQ
  | YPbPr
  | string;

/**
 * @description Union of color values that can be used in a blender
 */
export type BlenderColor =
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
  | CMYK
  | CMYK_M
  | XYZ
  | string;

/**
 * @description Union of color spaces
 */
export type Spaces =
  | "adobe_98_rgb"
  | "apple_rgb"
  | "ansi16"
  | "ansi256"
  | "best_rgb"
  | "beta_rgb"
  | "bruce_rgb"
  | "cie_rgb"
  | "color_match_rgb"
  | "cmy"
  | "cmyk"
  | "don_rgb_4"
  | "eci_rgb_v2"
  | "etka_space_ps5"
  | "hcy"
  | "hex"
  | "hsi"
  | "hsl"
  | "hsv"
  | "hunter_lab"
  | "hwb"
  | "lab"
  | "lch_ab"
  | "lch_uv"
  | "luv"
  | "lms"
  | "ntsc_rgb"
  | "pal_secam_rgb"
  | "pro_photo_rgb"
  | "rgb"
  | "ryb"
  | "tsl"
  | "smpte_c_rgb"
  | "wide_gamut_rgb"
  | "uvw"
  | "xvycc"
  | "xyy"
  | "xyz"
  | "ycbcr_BT601"
  | "ycbcr_BT709"
  | "ycbcr_BT2020"
  | "yccbccrc"
  | "ycocg"
  | "ydbdr"
  | "yiq"
  | "ypbpr";

export type RGBConSpaces =
  | "adobe_98_rgb"
  | "apple_rgb"
  | "ansi16"
  | "ansi256"
  | "best_rgb"
  | "beta_rgb"
  | "bruce_rgb"
  | "cie_rgb"
  | "color_match_rgb"
  | "cmy"
  | "cmyk"
  | "don_rgb_4"
  | "etka_space_ps5"
  | "eci_rgb_v2"
  | "hcy"
  | "hex"
  | "hsi"
  | "hsl"
  | "hsv"
  | "hwb"
  | "lab"
  | "lch_ab"
  | "lch_uv"
  | "luv"
  | "ntsc_rgb"
  | "pal_secam_rgb"
  | "pro_photo_rgb"
  | "ryb"
  | "smpte_c_rgb"
  | "tsl"
  | "uvw"
  | "wide_gamut_rgb"
  | "ycbcr_BT601"
  | "ycbcr_BT709"
  | "ycbcr_BT2020"
  | "ydbdr"
  | "ypbpr"
  | "yccbccrc"
  | "ycocg"
  | "yiq"
  | "xvycc"
  | "xyz";

export type XyzConSpaces =
  | "lab"
  | "lch_ab"
  | "lch_uv"
  | "luv"
  | "uvw"
  | "rgb"
  | "adobe_98_rgb"
  | "apple_rgb"
  | "best_rgb"
  | "beta_rgb"
  | "bruce_rgb"
  | "cie_rgb"
  | "color_match_rgb"
  | "don_rgb_4"
  | "etka_space_ps5"
  | "eci_rgb_v2"
  | "ntsc_rgb"
  | "pal_secam_rgb"
  | "pro_photo_rgb"
  | "smpte_c_rgb"
  | "wide_gamut_rgb"
  | "xyy"
  | "lms"
  | "hunters_lab";
