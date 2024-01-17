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
  etka_space_ps5?: ConverterInfo;
  hcg?: ConverterInfo;
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
  web_safe?: ConverterInfo;
  smpte_c_rgb?: ConverterInfo;
  wide_gamut_rgb?: ConverterInfo;
  xyz?: ConverterInfo;
}

export interface ConverterInfo {
  fun: Function;
  from: string;
}

export interface ToRGBConverters {
  hex: Function;
  cmyk: Function;
  hsl: Function;
  hsv: Function;
  hwb: Function;
  xyz: Function;
}

export interface ToXyzConverters {
  adobe_98_rgb: Function;
  apple_rgb: Function;
  best_rgb: Function;
  beta_rgb: Function;
  bruce_rgb: Function;
  cie_rgb: Function;
  color_match_rgb: Function;
  don_rgb_4: Function;
  etka_space_ps5: Function;
  lab: Function;
  luv: Function;
  ntsc_rgb: Function;
  pal_secam_rgb: Function;
  pro_photo_rgb: Function;
  rgb: Function;
  smpte_c_rgb: Function;
  wide_gamut_rgb: Function;
}
