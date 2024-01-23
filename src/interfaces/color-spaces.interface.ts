export interface RGB {
  red: number;
  green: number;
  blue: number;
  inGamut?: boolean;
}

export interface RGBA extends RGB {
  alpha: number;
}

export interface RGB_M {
  r: number;
  g: number;
  b: number;
}

export interface RGBA_M extends RGB_M{
  a: number;
}

export interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface HSLA extends HSL {
  alpha: number;
}

export interface HSL_M {
  h: number;
  s: number;
  l: number;
}

export interface HSLA_M extends HSL_M {
  a: number;
}

export interface HSV {
  hue: number;
  saturation: number;
  value: number;
}

export interface HSVA extends HSV {
  alpha: number;
}

export interface HSV_M {
  h: number;
  s: number;
  v: number;
}

export interface HSVA_M extends HSV_M {
  a: number;
}

export interface LAB {
  luminance: number;
  a: number;
  b: number;
}

export interface LAB_M {
  l: number;
  a: number;
  b: number;
}

export interface HSB {
  hue: number;
  saturation: number;
  brightness: number;
}

export interface HSB_M {
  h: number;
  s: number;
  b: number;
}

export interface CMYK {
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
}

export interface CMYK_M {
  c: number;
  m: number;
  y: number;
  k: number;
}

export interface HWB {
  hue: number;
  whiteness: number;
  blackness: number;
}

export interface HWB_M {
  h: number;
  w: number;
  b: number;
}

export interface HCL {
  hue: number;
  chroma: number;
  luminance: number;
}

export interface HCL_M {
  h: number;
  c: number;
  l: number;
}

export interface LCH {
  lightness: number;
  chroma: number;
  hue: number;
}

export interface LCH_M {
  l: number;
  c: number;
  h: number;
}

//"L" represents brightness, "U" and "V" represent chroma.
export interface LUV {
  L: number;
  u: number;
  v: number;
}

export interface RYB {
  red: number;
  yellow: number;
  blue: number;
}

export interface RYB_M {
  r: number;
  y: number;
  b: number;
}

export interface XYZ {
  x: number;
  y: number;
  z: number;
}

/*************************************************************
 * xy values can be seen as a representation of the color's 
 * chromaticity while the Y values can be seen as a 
 * representation of the color's intensity or brightness value
 *************************************************************/
export interface XYY {
  x: number;
  y: number;
  Y: number;
}
export interface SpaceData {
  RGB_TO_XYZ: RgbToXyzMatrice;
  XYZ_TO_RGB: XyzToRgbMatrice;
  REFERENCE_WHITE: string;
  GAMMA: number;
}

export interface RgbToXyzMatrice {
  X: { r: number; g: number; b: number};
  Y: { r: number; g: number; b: number};
  Z: { r: number; g: number; b: number};
}

export interface XyzToRgbMatrice {
  R: XYZ;
  G: XYZ;
  B: XYZ;
}




