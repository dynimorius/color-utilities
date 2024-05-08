/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts an Ansi16 numerical to sRBG
 * @param {number} - ansi16 color value
 * @returns {RGB} - sRBG color value
 */
export declare const ansi16ToRgb: (ansi: number) => RGB;
/**
 * Converts an Ansi16 numerical to Ansi8
 * @param {number}                 - ansi16 color value
 * @returns {number}               - ansi8 color value
 */
export declare const ansi16ToAnsi8: (ansi: number) => number;
/**
 * Converts an Ansi256 numerical to sRBG
 * @param {number}                - ansi256 color value
 * @returns {RGB}                 - sRBG color value
 *
 * - note: due to the nature of of Ansi256 to RGB conversion
 *         there is a significant data loss between RGB to Ansi256
 *         and Ansi256 to RGB conversions
 */
export declare const ansi256ToRgb: (ansi: number) => RGB;
