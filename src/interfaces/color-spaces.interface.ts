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
  grayscale: number;
}

export interface HCL {
  hue: number;
  chroma: number;
  luminance: number;
}

export interface LCH {
  lightness: number;
  chroma: number;
  hue: number;
}

//"L" represents brightness, "U" and "V" represent chroma.
export interface LUV {
  L: number;
  u: number;
  v: number;
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




