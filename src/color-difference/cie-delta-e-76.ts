/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 * 
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
*/

import { sRgbToLab } from "../conversions/rgb-conversions";
import { LAB, LCH, RGB } from "../interfaces/color-spaces.interface";

/**
 * Gets a delta E CIE 1976 value for a given colors
 * @param {LAB}                   - LAB values for the frist color
 * @param {LAB}                   - LAB values for the second color
 * @returns {number}              - color difference value
 */
export const deltaECIE76Lab = (lab1: LAB, lab2: LAB): number => {
  return Math.sqrt(
    Math.pow(lab1.luminance - lab2.luminance, 2) +
      Math.pow(lab1.a - lab2.a, 2) +
      Math.pow(lab1.b - lab2.b, 2)
  );
};

/**
 * Gets a delta E CIE 1976 value for a given colors
 * @param {LCH}                   - LCH values for the frist color
 * @param {LCH}                   - LCH values for the second color
 * @returns {number}              - color difference value
 */
export const deltaECIE76Lch = (lch1: LCH, lch2: LCH): number => {
  return Math.sqrt(
    Math.pow(lch1.lightness - lch2.lightness, 2) +
      Math.pow(lch1.chroma - lch2.chroma, 2) +
      Math.pow(lch1.hue - lch2.hue, 2)
  );
};

/**
 * Gets a delta E CIE 1976 value for a given colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - color difference value
 *  ΔE - (Delta E, dE) The measure of change in visual
 *  perception of two given colors
 * - more info:
 * https://zschuessler.github.io/DeltaE/learn/#:~:text=dE94%2C%20and%20dE00.-,Defining%20Delta%20E,in%20a%20variable%20or%20function
 */
export const deltaECIE76Rgb = (rgb1: RGB, rgb2: RGB): number => {
  return deltaECIE76Lab(sRgbToLab(rgb1), sRgbToLab(rgb2));
};
