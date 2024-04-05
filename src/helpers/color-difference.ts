/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { sRgbToLab } from "../conversions/rgb-conversions";
import { LAB, LCH, RGB } from "../interfaces/color-spaces.interface";

/**
 * Gets comparative distance for a given sRBG colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - distance
 */
export const comparativeDistance = (rgb1: RGB, rgb2: RGB): number => {
  const diff = Math.sqrt(
    Math.pow(rgb1.red - rgb2.red, 2) +
      Math.pow(rgb1.green - rgb2.green, 2) +
      Math.pow(rgb1.blue - rgb2.blue, 2)
  );
  return Math.round(Math.abs(diff));
};

/**
 * Gets a delta E CIE 1976 value for a given colors
 * @param {LAB}                   - LAB values for the frist color
 * @param {LAB}                   - LAB values for the second color
 * @returns {number}              - difference
 */
export const deltaECIE76 = (lab1: LAB, lab2: LAB): number => {
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
 * @returns {number}              - difference
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
 * @returns {number}              - difference
 *  ΔE - (Delta E, dE) The measure of change in visual
 *  perception of two given colors
 * - more info:
 * https://zschuessler.github.io/DeltaE/learn/#:~:text=dE94%2C%20and%20dE00.-,Defining%20Delta%20E,in%20a%20variable%20or%20function
 */
export const cie76ColorDiff = (rgb1: RGB, rgb2: RGB): number => {
  return deltaECIE76(sRgbToLab(rgb1), sRgbToLab(rgb2));
};
