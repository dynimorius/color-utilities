/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

/**
 * @description Representation of a color converter map
 */
export interface ColorConverters {
  adobe_98_rgb?: ConverterInfo;
  apple_rgb?: ConverterInfo;
  ansi16?: ConverterInfo;
  ansi256?: ConverterInfo;
  best_rgb?: ConverterInfo;
  beta_rgb?: ConverterInfo;
  bruce_rgb?: ConverterInfo;
  cie_rgb?: ConverterInfo;
  color_match_rgb?: ConverterInfo;
  cmyk?: ConverterInfo;
  don_rgb_4?: ConverterInfo;
  eci_rgb_v2?: ConverterInfo;
  etka_space_ps5?: ConverterInfo;
  hex?: ConverterInfo;
  hsl?: ConverterInfo;
  hsv?: ConverterInfo;
  hwb?: ConverterInfo;
  lab?: ConverterInfo;
  lch_ab?: ConverterInfo;
  lch_uv?: ConverterInfo;
  luv?: ConverterInfo;
  ntsc_rgb?: ConverterInfo;
  pal_secam_rgb?: ConverterInfo;
  pro_photo_rgb?: ConverterInfo;
  rgb?: ConverterInfo;
  rgb_0_1?: ConverterInfo;
  rgb_0_255?: ConverterInfo;
  ryb?: ConverterInfo;
  web_safe?: ConverterInfo;
  smpte_c_rgb?: ConverterInfo;
  wide_gamut_rgb?: ConverterInfo;
  xyz?: ConverterInfo;
  xyy?: ConverterInfo;
}

/**
 * @description Representation of a color converter information
 *  - fun: converter function
 *  - from: type of color values needed for conversion
 */
export interface ConverterInfo {
  fun: Function;
  from: string;
}

/**
 * @description Representation of a rgb converter map
 */
export interface ToRGBConverters {
  ansi16: Function;
  ansi265: Function;
  hex: Function;
  cmyk: Function;
  hsl: Function;
  hsv: Function;
  hwb: Function;
  ryb: Function;
  xyz: Function;
}


/**
 * @description Representation of a xyz converter map
 */
export interface ToXyzConverters {
  adobe_98_rgb: Function;
  apple_rgb: Function;
  best_rgb: Function;
  beta_rgb: Function;
  bruce_rgb: Function;
  cie_rgb: Function;
  color_match_rgb: Function;
  don_rgb_4: Function;
  eci_rgb_v2: Function;
  etka_space_ps5: Function;
  lab: Function;
  luv: Function;
  lch_ab: Function;
  lch_uv: Function;
  ntsc_rgb: Function;
  pal_secam_rgb: Function;
  pro_photo_rgb: Function;
  rgb: Function;
  smpte_c_rgb: Function;
  wide_gamut_rgb: Function;
  xyy: Function;
}

/**
 * @description Representation of a color checker map
 */
export interface ColorCheckers {
  hex: Function;
  cmyk: Function;
  hsl: Function;
  hsv: Function;
  hwb: Function;
  hcl: Function;
  xyz: Function;
  lab: Function;
  luv: Function;
  lch: Function;
  rgb: Function;
  ryb: Function;
  xyy: Function;
}
