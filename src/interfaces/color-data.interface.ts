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
  HCY,
  HSI,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LMS,
  LUV,
  RGB,
  RYB,
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
} from "./color-spaces.interface";

/**
 * @description Represntation of color values for a given color:
 */

export interface ColorData {
  adobe_98_rgb?: RGB;
  apple_rgb?: RGB;
  ansi16?: number;
  ansi256?: number;
  best_rgb?: RGB;
  beta_rgb?: RGB;
  bruce_rgb?: RGB;
  cie_rgb?: RGB;
  color_match_rgb?: RGB;
  cmy?: CMY;
  cmyk?: CMYK;
  don_rgb_4?: RGB;
  eci_rgb_v2?: RGB;
  etka_space_ps5?: RGB;
  hcy?: HCY;
  hex?: string;
  hsi?: HSI;
  hsl?: HSL;
  hsv?: HSV;
  hunter_lab?: LAB;
  hwb?: HWB;
  lab?: LAB;
  lch_ab?: LCH;
  lch_uv?: LCH;
  luv?: LUV;
  lms?: LMS;
  ntsc_rgb?: RGB;
  pal_secam_rgb?: RGB;
  pro_photo_rgb?: RGB;
  rgb?: RGB;
  ryb?: RYB;
  tsl?: TSL;
  smpte_c_rgb?: RGB;
  wide_gamut_rgb?: RGB;
  uvw?: UVW;
  xvycc?: xvYCC;
  xyz?: XYZ;
  xyy?: XYY;
  ycbcr_BT601?: YCbCr;
  ycbcr_BT709?: YCbCr;
  yccbccrc?: YcCbcCrc;
  ycocg?: YCoCg;
  ydbdr?: YDbDr;
  yiq?: YIQ;
  ypbpr?: YPbPr;
}
