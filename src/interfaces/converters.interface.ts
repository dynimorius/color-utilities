export interface RGBConverters {
  ansi16?: Function;
  ansi256?: Function;
  cmyk?: Function;
  hcg?: Function;
  hex?: Function;
  hsl?: Function;
  hsv?: Function;
  hwb?: Function;
  lab?: Function;
  lch?: Function;
  rgb?:  Function;
  srgb?:  Function;
  webSafe?:  Function;
  xyz?:  Function;
}


export interface ToRGBConverters {
  hex: Function;
  cmyk: Function;
  hsl?: Function;
  hsv?: Function;
  hwb?: Function;
  xyz?:  Function;
}