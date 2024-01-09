export interface RGB {
  red: number;
  green: number;
  blue: number;
}

export interface RGBA extends RGB {
  alpha: number;
}

export interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface HSLA extends HSL {
  alpha: number;
}

export interface HSV {
  hue: number;
  saturation: number;
  value: number;
}

export interface HSVA extends HSV {
  alpha: number;
}

export interface LAB {
  luminance: number;
  a: number;
  b: number;
}

export interface HSB {
  hue: number;
  saturation: number;
  brightness: number;
}

export interface XYZ {
  x: number;
  y: number;
  z: number;
}

export interface CMYK {
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
}

export interface HWB {
  hue: number;
  whiteness: number;
  blackness: number;
}

export interface HCG {
  hue: number;
  chroma: number;
  grayness: number;
}

export interface LCH {
  lightness: number;
  chroma: number;
  hue: number;
}