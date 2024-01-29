/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import {
  CMYK,
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

/**
 * @description Represntation of color values for a given color:
 */
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
  xyy?: XYY;
}
