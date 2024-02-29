"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToRGB = exports.decimalToHex = void 0;
/**
 * Converts a decimal numberical value in to a hex string
 * @param {number} - decimal
 * @returns {string} - hex
 */
const decimalToHex = (d) => {
  return Math.round(parseFloat(d) * 255).toString(16);
};
exports.decimalToHex = decimalToHex;
/**
 * Converts a numberical value in a sRBG
 * @param {number} - numberical color value
 * @returns {RBG} - sRBG color value
 */
const numberToRGB = (color) => {
  return {
    red: color >> 16,
    green: (color & 0xff00) >> 8,
    blue: color & 0xff,
  };
};
exports.numberToRGB = numberToRGB;
