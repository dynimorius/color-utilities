/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { HSL, HSLA, HSV, RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a color from HSL color space to sRBG color space
 * @param {HSL}                   - hsl color value
 * @returns {RBG}                 - sRBG color value
 */
export declare const hslToRgb: ({ hue, saturation, lightness }: HSL) => RGB;
/**
 * Converts a color from HSL color space to HSV color space
 * @param {HSL}                   - hsl color value
 * @returns {HSV}                 - hsv color value
 */
export declare const hslToHsv: ({ hue, saturation, lightness }: HSL) => HSV;
/**
 * Converts a color from HSL color space to hex string
 * @param {HSL}                   - hsl color value
 * @returns {string}              - hex value
 */
export declare const hslToHex: (hsl: HSL | HSLA, prefixed?: boolean) => string;
