"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToDecimal = exports.hexToInt = exports.hexToRgb = void 0;
/**
 * Converts a hex string value to sRBG color space
 * @param {string} - hex
 * @returns {RGB} - sRBG color value
 */
const hexToRgb = (hex) => {
  const hexRegExp = new RegExp(/[a-f0-9]{6}|[a-f0-9]{3}/i).exec(hex);
  if (!hexRegExp) {
    return { red: 0, green: 0, blue: 0 };
  }
  let colorString = hexRegExp[0];
  if (hexRegExp[0].length === 3) {
    colorString = colorString
      .split("")
      .map((char) => {
        return char + char;
      })
      .join("");
  }
  const integer = parseInt(colorString, 16);
  const red = (integer >> 16) & 0xff;
  const green = (integer >> 8) & 0xff;
  const blue = integer & 0xff;
  return { red, green, blue };
};
exports.hexToRgb = hexToRgb;
/**
 * Converts a hex string value to a integer
 * @param {string} - hex
 * @returns {number} - integer value
 */
const hexToInt = (val) => {
  return parseInt(val, 16);
};
exports.hexToInt = hexToInt;
/**
 * Converts a hex string value to a decimal
 * @param {string} - hex
 * @returns {number} - decimal value
 */
const hexToDecimal = (h) => {
  return (0, exports.hexToInt)(h) / 255;
};
exports.hexToDecimal = hexToDecimal;
