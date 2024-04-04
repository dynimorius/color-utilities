/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { HSL, HSV, RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a color from HSV color space to sRBG color space
 * @param {HSV}                   - hsl color value
 * @returns {RBG}                 - sRBG color value
 */
export declare const hsvToRgb: ({ hue, saturation, value }: HSV) => RGB;
/**
 * Converts a color from HSV color space to HSV color space
 * @param {HSV}                   - hsl color value
 * @returns {HSV}                 - hsv color value
 */
export declare const hsvToHsl: ({ hue, saturation, value }: HSV) => HSL;
/**
 * Converts a color from HSV color space to ansi16 numerical
 * @param {HSV}                   - hsl color value
 * @returns {number}              - ansi16 numberical value
 */
export declare const hsvToAnsi16: (hsv: HSV) => number;
