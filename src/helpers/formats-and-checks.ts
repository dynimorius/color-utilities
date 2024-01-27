/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { MAX_DECIMALS } from "../constants/conditionals";
import { RGB } from "../interfaces/color-spaces.interface";

/**
 * Checks if a color is web safe
 * @param {RGB} rgb color value
 * @returns {boolean} - is color web safe
 */
export const isWebSafeRGB = (rgb: RGB): boolean => {
  return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};

/**
 * Checks if a given hex value is of a color that is web safe
 * @param {string} color hex value
 * @returns {boolean} - is color web safe
 */
export const isWebSafeHex = (color: string): boolean => {
  const hexCheck = ["00", "33", "66", "99", "CC", "FF"];
  return (
    hexCheck.includes(color.slice(0, 2)) &&
    hexCheck.includes(color.slice(2, 2)) &&
    hexCheck.includes(color.slice(4))
  );
};

/**
 * Checks if a RGB color is in Gamut
 * @param {RGB} rgb color value
 * @returns {boolean} - is color whit in Gamut
 */
export const gamutCheck = (value: number): boolean => {
  return !isNaN(value) && value >= 0 && value <= 255;
};

export const formatValue = (value: number): number => Math.round(value * 100);

/**
 * Baunds a numeric value to a range between 0 and 255
 * @param {number} value a number
 * @returns {number} - returns a number value which will be in t he range 0 - 255
 */
export const bound = (value: number): number => {
  return value < 0 ? 0 : value > 255 ? 255 : value;
};

/**
 * Raunds a numeric value to a number of decimals
 * @param {number} value a number to round
 * @param {number} decimals  a number of decimals to round to
 * @returns {number} - returns a rounded number
 */
export const round = (value: number, decimals = MAX_DECIMALS): number => {
  const exp = Math.pow(10, decimals);
  return Math.round(+value * exp) / exp;
};
