/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import {
  CMYK,
  CMYK_M,
  HCL,
  HCL_M,
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
  XYY,
  XYZ,
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
  | HSL_M
  | HSV
  | HSVA
  | HSV_M
  | HWB
  | HWB_M
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
  | XYY
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
  | "cmyk"
  | "don_rgb_4"
  | "eci_rgb_v2"
  | "etka_space_ps5"
  | "hex"
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
  | "rgb_0_1"
  | "rgb"
  | "ryb"
  | "smpte_c_rgb"
  | "wide_gamut_rgb"
  | "xyy"
  | "xyz";
