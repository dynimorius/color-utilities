/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a hex string value to sRBG color space
 * @param {string}                - hex
 * @returns {RGB}                 - sRBG color value
 */
export declare const hexToRgb: (hex: string) => RGB;
/**
 * Converts a hex string value to a integer
 * @param {string}                - hex
 * @returns {number}              - integer value
 */
export declare const hexToInt: (val: string) => number;
/**
 * Converts a hex string value to a decimal
 * @param {string}                - hex
 * @returns {number}              - decimal value
 */
export declare const hexToDecimal: (h: string) => number;
