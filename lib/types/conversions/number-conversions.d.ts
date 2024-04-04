/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a decimal numberical value in to a hex string
 * @param {number}                   - decimal
 * @returns {string}                 - hex
 */
export declare const decimalToHex: (d: string | number) => string;
/**
 * Converts a numberical value in a sRBG
 * @param {number}                  - numberical color value
 * @returns {RBG}                   - sRBG color value
 */
export declare const numberToRGB: (color: number) => RGB;
