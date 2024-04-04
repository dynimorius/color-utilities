/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB } from "../interfaces/color-spaces.interface";
/**
 * Checks if a color is web safe
 * @param {RGB}                   - RGB color values
 * @returns {boolean}             - is color web safe
 */
export declare const isWebSafeRGB: (rgb: RGB) => boolean;
/**
 * Checks if a given hex value is of a color that is web safe
 * @param {string}                 - hex value
 * @returns {boolean}              - is color web safe
 */
export declare const isWebSafeHex: (color: string) => boolean;
/**
 * Checks if a RGB color is in Gamut
 * @param {RGB}                   - color value
 * @returns {boolean}             - is color whit in Gamut
 */
export declare const gamutCheck: (value: number) => boolean;
export declare const formatValue: (value: number) => number;
/**
 * Baunds a numeric value to a range between 0 and 255
 * @param {number}                 - numeric value
 * @returns {number}               - returns a number value which will be in t he range 0 - 255
 */
export declare const bound: (value: number) => number;
/**
 * Raunds a numeric value to a number of decimals
 * @param {number}                 - a number to round
 * @param {number}                 - a number of decimals to round to
 * @returns {number}               - returns a rounded number
 */
export declare const round: (value: number, decimals?: number) => number;
/**
 * Clamps a numeric value to a given range
 * @param {number}                 - a number to clamp
 * @param {number}                 - a minimum allowed value
 * @param {number}                 - a maximum allowed value
 * @returns {number}               - returns a rounded number
 */
export declare function clamp(value: number, min: number, max: number): number;
