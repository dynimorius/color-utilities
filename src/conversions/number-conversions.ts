/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { RGB } from "../interfaces/color-spaces.interface";

/**
 * Converts a decimal numerical value in to a hex string
 * @param {number}                   - decimal
 * @returns {string}                 - hex
 */
export const decimalToHex = (d: string | number): string => {
  return Math.round(parseFloat(d as string) * 255).toString(16);
};

/**
 * Converts a numerical value in a sRBG
 * @param {number}                  - numerical color value
 * @returns {RBG}                   - sRBG color value
 */
export const numberToRGB = (color: number): RGB => {
  return {
    red: color >> 16,
    green: (color & 0xff00) >> 8,
    blue: color & 0xff,
  };
};
