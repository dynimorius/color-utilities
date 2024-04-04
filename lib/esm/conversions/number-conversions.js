/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Converts a decimal numberical value in to a hex string
 * @param {number}                   - decimal
 * @returns {string}                 - hex
 */
export const decimalToHex = (d) => {
    return Math.round(parseFloat(d) * 255).toString(16);
};
/**
 * Converts a numberical value in a sRBG
 * @param {number}                  - numberical color value
 * @returns {RBG}                   - sRBG color value
 */
export const numberToRGB = (color) => {
    return {
        red: color >> 16,
        green: (color & 0xff00) >> 8,
        blue: color & 0xff,
    };
};
