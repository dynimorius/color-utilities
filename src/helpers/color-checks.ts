/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { gamutCheck } from ".";
import {
  CMYK,
  CMYK_M,
  HCL,
  HCL_M,
  HSL,
  HSL_M,
  HSV,
  HSV_M,
  HWB,
  HWB_M,
  LAB,
  LAB_M,
  LCH,
  LCH_M,
  LUV,
  RGB,
  RGB_M,
  RYB,
  RYB_M,
  XYY,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { ColorCheckers } from "../interfaces/converters.interface";
import { FULL_HEX, HEX } from "../regex";
import { ColorSpaceUnion } from "../types";

/**
 * Checks color values and converts the color from 
 * shorthand naming to full naming ({r, b, g} -> {red, green, blue})
 * @param {string} space color type / space
 * @param {ColorSpaceUnion} color - color data
 * @returns {ColorSpaceUnion} returns back the same color
 * @throws Color data is incorrect
 */
export const checkAndFormat = (
  space: string,
  color: ColorSpaceUnion
): ColorSpaceUnion => {
  const rgbCheck = new RegExp(/rgb|ps5/g);
  if (rgbCheck.exec(space)) return rgbColorCheck(color as RGB | RGB_M);
  const lchCheck = new RegExp(/lch/g);
  if (lchCheck.exec(space)) return lchColorCheck(color as LCH | LCH_M);
  else return colorCheckerMap[space as keyof ColorCheckers](color);
};

/**
 * Checks if all color values are numeric
 * @param {ColorSpaceUnion} color - color data
 * @returns {ColorSpaceUnion} returns back the same color
 * @throws Color data is incorrect
 */
export const colorCheck = (color: ColorSpaceUnion): ColorSpaceUnion => {
  const entries = Object.entries(color);
  entries.forEach((entry) => {
    if (isNaN(entry[1])) {
      throw new Error(`Color data is incorrect: ${entry[0]} is not a number.`);
    }
  });
  return color;
};

/**
 * Checks if hex value is in a proper format
 * @param {string} color - color hex string
 * @returns {strings} returns back the same color
 * @throws Color data is incorrect
 */
const hexColorCheck = (color: string): string => {
  if (new RegExp(FULL_HEX).exec(color)) return color.slice(1).toUpperCase();
  else if (new RegExp(HEX).exec(color)) return color.toUpperCase();
  else
    throw new Error(
      "Color data is incorrect: color is not a proper hex value."
    );
};

/**
 * Checks if all RGB values are numeric as well as if the color is in Gamut
 * converts from RGB_M to RGB if needed
 * @param {RGB | RGB_M} color - color data
 * @returns {RGB} returns back the same color
 * @throws Color data is incorrect
 */
const rgbColorCheck = (color: RGB | RGB_M): RGB => {
  const values = Object.values(colorCheck(color));
  return {
    red: values[0],
    green: values[1],
    blue: values[2],
    inGamut:
      gamutCheck(values[0]) && gamutCheck(values[1]) && gamutCheck(values[2]),
  };
};

/**
 * Checks if all HSL values are numeric 
 * converts from HSL_M to HSL if needed
 * @param {HSL | HSL_M} color - color data
 * @returns {HSL} returns back the same color
 * @throws Color data is incorrect
 */
const hslColorCheck = (color: HSL | HSL_M): HSL => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], saturation: values[1], lightness: values[2] };
};

/**
 * Checks if all HSV values are numeric 
 * converts from HSV_M to HSV if needed
 * @param {HSV | HSV_M} color - color data
 * @returns {HSV} returns back the same color
 * @throws Color data is incorrect
 */
const hsvColorCheck = (color: HSV | HSV_M): HSV => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], saturation: values[1], value: values[2] };
};

/**
 * Checks if all HWB values are numeric 
 * converts from HWB_M to HWB if needed
 * @param {HWB | HWB_M} color - color data
 * @returns {HWB} returns back the same color
 * @throws Color data is incorrect
 */
const hwbColorCheck = (color: HWB | HWB_M): HWB => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], whiteness: values[1], blackness: values[2] };
};

/**
 * Checks if all HCL values are numeric 
 * converts from HCL_M to HCL if needed
 * @param {HCL | HCL_M} color - color data
 * @returns {HCL} returns back the same color
 * @throws Color data is incorrect
 */
const hclColorCheck = (color: HCL | HCL_M): HCL => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], chroma: values[1], luminance: values[2] };
};

/**
 * Checks if all LAB values are numeric 
 * converts from LAB_M to LAB if needed
 * @param {LAB | LAB_M} color - color data
 * @returns {LAB} returns back the same color
 * @throws Color data is incorrect
 */
const labColorCheck = (color: LAB | LAB_M): LAB => {
  const values = Object.values(colorCheck(color));
  return { luminance: values[0], a: values[1], b: values[2] };
};

/**
 * Checks if all LCH values are numeric 
 * converts from LCH_M to LCH if needed
 * @param {LCH | LCH_M} color - color data
 * @returns {LCH} returns back the same color
 * @throws Color data is incorrect
 */
const lchColorCheck = (color: LCH | LCH_M): LCH => {
  const values = Object.values(colorCheck(color));
  return { lightness: values[0], chroma: values[1], hue: values[2] };
};

/**
 * Checks if all LUV values are numeric 
 * @param {LUV} color - color data
 * @returns {LUV} returns back the same color
 * @throws Color data is incorrect
 */
const luvColorCheck = (color: LUV): LUV => {
  const values = Object.values(colorCheck(color));
  return { L: values[0], u: values[1], v: values[2] };
};

/**
 * Checks if all CMYK values are numeric 
 * converts from CMYK_M to CMYK if needed
 * @param {CMYK | CMYK_M} color - color data
 * @returns {CMYK} returns back the same color
 * @throws Color data is incorrect
 */
const cmykColorCheck = (color: CMYK | CMYK_M): CMYK => {
  const values = Object.values(colorCheck(color));
  return {
    cyan: values[0],
    magenta: values[1],
    yellow: values[2],
    key: values[3],
  };
};

/**
 * Checks if all XYZ values are numeric 
 * @param {XYZ} color - color data
 * @returns {XYZ} returns back the same color
 * @throws Color data is incorrect
 */
const xyzColorCheck = (color: XYZ): XYZ => {
  const values = Object.values(color);
  return { x: values[0], y: values[1], z: values[2] };
};

/**
 * Checks if all XYY values are numeric 
 * @param {XYY} color - color data
 * @returns {XYY} returns back the same color
 * @throws Color data is incorrect
 */
const xyYColorCheck = (color: XYY): XYY => {
  const values = Object.values(color);
  return { x: values[0], y: values[1], Y: values[2] };
};

/**
 * Checks if all RYB values are numeric 
 * converts from RYB_M to RYB if needed
 * @param {RYB | RYB_M} color - color data
 * @returns {RYB} returns back the same color
 * @throws Color data is incorrect
 */
const rybColorCheck = (color: RYB | RYB_M): RYB => {
  const values = Object.values(colorCheck(color));
  return { red: values[0], yellow: values[1], blue: values[2] };
};

/**
 * Color checker function map
 */
const colorCheckerMap: ColorCheckers = {
  hex: hexColorCheck,
  rgb: rgbColorCheck,
  hsl: hslColorCheck,
  hsv: hsvColorCheck,
  hwb: hwbColorCheck,
  hcl: hclColorCheck,
  lab: labColorCheck,
  lch: lchColorCheck,
  luv: luvColorCheck,
  cmyk: cmykColorCheck,
  ryb: rybColorCheck,
  xyz: xyzColorCheck,
  xyy: xyYColorCheck,
};
