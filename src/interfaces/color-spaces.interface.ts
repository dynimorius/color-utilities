/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

/**
 * @description Represntation of an CMY color space:
 *   - more info: https://learn.microsoft.com/en-us/windows/win32/wcs/cmy-and-cmyk-color-spaces
 */
export interface CMY {
  cyan: number;
  magenta: number;
  yellow: number;
}

/**
 * @description Represntation of an CMY color space:
 *   - more info: https://learn.microsoft.com/en-us/windows/win32/wcs/cmy-and-cmyk-color-spaces
 */
export interface CMY_M {
  c: number;
  m: number;
  y: number;
}

/**
 * @description Represntation of an CMYK color space:
 *   - more info: https://en.wikipedia.org/wiki/CMYK_color_model
 */
export interface CMYK {
  cyan: number;
  magenta: number;
  yellow: number;
  key: number;
}

/**
 * @description Represntation of an CMYK color space:
 *   - more info: https://en.wikipedia.org/wiki/CMYK_color_model
 */
export interface CMYK_M {
  c: number;
  m: number;
  y: number;
  k: number;
}

/**
 * @description Represntation of an HCL color space:
 * - more info: https://en.wikipedia.org/wiki/HCL_color_space
 */
export interface HCL {
  hue: number;
  chroma: number;
  luminance: number;
}

/**
 * @description Represntation of an HCL color space:
 *   - more info: https://en.wikipedia.org/wiki/HCL_color_space
 */
export interface HCL_M {
  h: number;
  c: number;
  l: number;
}

/**
 * @description Represntation of an HCY color space:
 * HCY colour space is a tractable hue/chroma/luminance
 * scheme developed by Kuzma Shapran. It is ideal for
 * pixel shaders, being only slightly more expensive that
 * the HSV and HSL schemes. However, it tries to be more
 * "meaningful" in terms of human perception.
 * - Hue (H) computed in the same manner as HSV and HSL
 * - Chroma (C) computed as the scaled difference between
 *   the maximum unweighted RGB component and the minimum
 *   unweighted RGB component
 * - Luminance (Y) computed as the weighted sum of RGB components
 *   - more info: http://chilliant.blogspot.ca/2012/08/rgbhcy-in-hlsl.html
 */
export interface HCY {
  hue: number;
  chroma: number;
  Yluminance: number;
}

/**
 * @description Represntation of an HCY color space:
 * @alias HCY
 * - more info: http://chilliant.blogspot.ca/2012/08/rgbhcy-in-hlsl.html
 */
export interface HCY_M {
  h: number;
  c: number;
  y: number;
}

/**
 * @description Represntation of an HSI color space:
 *    The HSI color space is very important and attractive
 *    color model for image processing applications because
 *    it represents colors similarly how the human eye senses
 *    colors.
 *   - more info: https://www.blackice.com/colorspaceHSI.htm
 */
export interface HSI {
  hue: number;
  saturation: number;
  intensity: number;
}

/**
 * @description Represntation of an HSL color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HSV
 */
export interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

/**
 * @description Represntation of an HSLA color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSLA extends HSL {
  alpha: number;
}

/**
 * @description Represntation of an HSL color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSL_M {
  h: number;
  s: number;
  l: number;
}

/**
 * @description Represntation of an HSLA color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSLA_M extends HSL_M {
  a: number;
}

/**
 * @description Represntation of an HSV color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSV {
  hue: number;
  saturation: number;
  value: number;
}

/**
 * @description Represntation of an HSVA color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSVA extends HSV {
  alpha: number;
}

/**
 * @description Represntation of an HSV color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSV_M {
  h: number;
  s: number;
  v: number;
}

/**
 * @description Represntation of an HSVA color space:
 *   - more info: https://en.wikipedia.org/wiki/HSL_and_HS
 */
export interface HSVA_M extends HSV_M {
  a: number;
}

/**
 * @description Represntation of an HWB color space:
 *   - more info: https://dev.to/alvaromontoro/hwb-13h7
 */
export interface HWB {
  hue: number;
  whiteness: number;
  blackness: number;
}

/**
 * @description Represntation of an HWB color space:
 * - more info: https://dev.to/alvaromontoro/hwb-13h7
 */
export interface HWB_M {
  h: number;
  w: number;
  b: number;
}

/**
 * @description Represntation of an LAB color space:
 *   - more info: https://en.wikipedia.org/wiki/CIELAB_color_space
 */
export interface LAB {
  luminance: number;
  a: number;
  b: number;
}

/**
 * @description Represntation of an LAB color space:
 *   - more info: https://en.wikipedia.org/wiki/CIELAB_color_space
 */
export interface LAB_M {
  l: number;
  a: number;
  b: number;
}

/**
 * @description Represntation of an LCH color space:
 *  - more info: https://sensing.konicaminolta.us/us/blog/understanding-the-cie-lch-color-space/
 */
export interface LCH {
  lightness: number;
  chroma: number;
  hue: number;
}

/**
 * @description Represntation of an LCH color space:
 * - more info: https://sensing.konicaminolta.us/us/blog/understanding-the-cie-lch-color-space/
 */
export interface LCH_M {
  l: number;
  c: number;
  h: number;
}

/**
 * @description Represntation of an LMS color space:
 * represents the response of the three types of cones of
 * the human eye.
 * The numerical range is generally not specified, except
 * that the lower end is generally bounded by zero.
 *   - more info : https://en.wikipedia.org/wiki/LMS_color_space
 */
export interface LMS {
  long: number;
  medium: number;
  short: number;
}

/**
 * @description Represntation of an LUV color space:
 *  - L representes lightness / brightness
 *  - U and V are chromaticity coordinates that serve to define
 *    white point (white point is often referred to as reference
 *    white or target white in technical documents)
 *   - more info :
 *     https://en.wikipedia.org/wiki/CIELUV
 *     https://www.wikiwand.com/en/White_point
 *     https://en.wikipedia.org/wiki/CIELUV
 */
export interface LUV {
  L: number;
  u: number;
  v: number;
}

/**
 * @description Represntation of an RGB color space:
 *   - more info: https://en.wikipedia.org/wiki/RGB_color_spaces
 */
export interface RGB {
  red: number;
  green: number;
  blue: number;
  inGamut?: boolean;
}

/**
 * @description Represntation of an RGBA color space:
 *   - more info: https://en.wikipedia.org/wiki/RGB_color_spaces
 */
export interface RGBA extends RGB {
  alpha: number;
}
/**
 * @description Represntation of an RGB color space:
 *   - more info: https://en.wikipedia.org/wiki/RGB_color_spaces
 */
export interface RGB_M {
  r: number;
  g: number;
  b: number;
}

/**
 * @description Represntation of an RGBA color space:
 *   - more info: https://en.wikipedia.org/wiki/RGB_color_spaces
 */
export interface RGBA_M extends RGB_M {
  a: number;
}

/**
 * @description Represntation of an RYB color space:
 *   - more info: https://en.wikipedia.org/wiki/RYB_color_model
 */
export interface RYB {
  red: number;
  yellow: number;
  blue: number;
}

/**
 * @description Represntation of an RYB color space:
 *   - more info: https://en.wikipedia.org/wiki/RYB_color_model
 */
export interface RYB_M {
  r: number;
  y: number;
  b: number;
}

/**
 * @description Represntation of an TSL color space:
 *   - more info: https://en.wikipedia.org/wiki/TSL_color_space
 */
export interface TSL {
  tint: number;
  saturation: number;
  lightness: number;
}

/**
 * @description Represntation of an UVW color space:
 *  - W represents lightness index W
 *  - U and V are chromaticity coordinates that serve to define
 *    white point (white point is often referred to as reference
 *    white or target white in technical documents)
 *   - more info :
 *     https://en.wikipedia.org/wiki/CIELUV
 *     https://www.wikiwand.com/en/White_point
 *     https://en.wikipedia.org/wiki/CIELUV
 */
export interface UVW {
  u: number;
  v: number;
  w: number;
}

/**
 * @description Represntation of an xvYCC color space:
 *  xvYCC is an extended-gamut YCbCr is a color space,
 *  supports a gamut 1.8
 *   -  Y is the luma component
 *   -  Cb is blue-difference chroma component
 *   -  Cr red-difference chroma component
 *  Y′ (with prime) is distinguished from Y,
 *  which is luminance, meaning that light intensity
 *  is nonlinearly encoded based on gamma corrected RGB
 *  primaries.
 *   - more info: https://en.wikipedia.org/wiki/XvYCC
 */
export interface xvYCC {
  Y: number;
  Cb: number;
  Cr: number;
}

/**
 * @description Represntation of an xyY color space:
 * xy values can be seen as a representation of the color's
 * chromaticity while the Y values can be seen as a
 * representation of the color's intensity or brightness value
 *   - more info: http://www.colorwiki.com/wiki/XyY
 */
export interface XYY {
  x: number;
  y: number;
  Y: number;
}

/**
 * @description Represntation of an XYZ color space:
 *   - more info: https://en.wikipedia.org/wiki/CIE_1931_color_space
 */
export interface XYZ {
  x: number;
  y: number;
  z: number;
}

/**
 * @description Represntation of an YCbCr color space:
 *   -  Y is the luma component (brightness or luminance)
 *   -  Cb is blue-difference chroma component
 *   -  Cr is red-difference chroma component
 *  Y′ (with prime) is distinguished from Y,
 *  which is luminance, meaning that light intensity
 *  is nonlinearly encoded based on gamma corrected RGB
 *  primaries.
 *   - more info: https://en.wikipedia.org/wiki/YCbCr
 */
export interface YCbCr {
  Y: number;
  Cb: number;
  Cr: number;
}

/**
 * @description Represntation of an YcCbcCrc color space:
 *   -  Yc is the luma component (brightness or luminance)
 *   -  Cbc is blue-difference chroma component
 *   -  Crc is red-difference chroma component
 *  Y′ (with prime) is distinguished from Y,
 *  which is luminance, meaning that light intensity
 *  is nonlinearly encoded based on gamma corrected RGB
 *  primaries.
 *   - more info: https://en.wikipedia.org/wiki/YCbCr
 */
export interface YcCbcCrc {
  Yc: number;
  Cbc: number;
  Crc: number;
}

/**
 * @description Represntation of an YCoCg color space:
 *   -  Y is the luma component (brightness or luminance)
 *   -  Co is chrominance orange
 *   -  Cg is chrominance green
 *   - more info: https://en.wikipedia.org/wiki/YCoCg
 */
export interface YCoCg {
  Y: number;
  Co: number;
  Cg: number;
}

/**
 * @description Represntation of an YDbDr color space:
 *   -  Y is the luma component (a sum of colors R, G ,B values representing the
 *      overall brightness, or luminance)
 *   -  Db is difference between blue and luma (B − Y)
 *   -  Dr is difference between red and luma (R − Y)
 *   - more info: https://en.wikipedia.org/?title=YDbDr
 */
export interface YDbDr {
  Y: number;
  Db: number;
  Dr: number;
}

/**
 * @description Represntation of an YIQ color space:
 *   -  Y is the luma component
 *   -  I is a chroma coordinate
 *   -  Q is a chroma coordinate
 *   - more info: https://en.wikipedia.org/?title=YIQ
 */
export interface YIQ {
  Y: number;
  I: number;
  Q: number;
}

/**
 * @description Represntation of an YPbPr color space:
 *   -  Y is the luma component (a sum of colors R, G ,B values representing the
 *      overall brightness, or luminance)
 *   -  Pb is difference between blue and luma (B − Y)
 *   -  Pr is difference between red and luma (R − Y)
 * YPbPr is the analog video signal carried by component
 * video cable in consumer electronics.
 * The green cable carries Y, the blue cable carries PB
 * and the red cable carries PR.
 *   - more info: https://en.wikipedia.org/?title=YPbPr
 */
export interface YPbPr {
  Y: number;
  Pb: number;
  Pr: number;
}

/**
 * @description Represntation of an YUV color space:
 *   - more info: https://en.wikipedia.org/?title=YUV
 */
export interface YUV {
  y: number;
  u: number;
  v: number;
}

/**
 * @description Represntation data in a Color Space Dataset:
 *  - RGB_TO_XYZ: A Matrix used for a RGB to XYZ conversion
 *  - XYZ_TO_RGB: A Matrix used for a XYZ to RGB conversion
 *  - REFERENCE_WHITE: Name of a reference white for the color Space
 *    (A, B, C, D50, D55, D65, D75, E, F2, F7, F11)
 *  - GAMMA: Used for companding
 */
export interface SpaceData {
  RGB_TO_XYZ: RgbToXyzMatrice;
  XYZ_TO_RGB: XyzToRgbMatrice;
  REFERENCE_WHITE: string;
  GAMMA: number;
}

/**
 * @description Represntation Matrix used for RGB to XYZ conversion
 */
export interface RgbToXyzMatrice {
  X: { r: number; g: number; b: number };
  Y: { r: number; g: number; b: number };
  Z: { r: number; g: number; b: number };
}

/**
 * @description Represntation Matrix used for XYZ to RGB conversion.
 */
export interface XyzToRgbMatrice {
  R: XYZ;
  G: XYZ;
  B: XYZ;
}
