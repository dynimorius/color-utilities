/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ColorSpaceUnion } from "../types/colors";
/**
 * Checks color values and converts the color from
 * shorthand naming to full naming ({r, b, g} -> {red, green, blue})
 * @param {string}                - color type / space
 * @param {ColorSpaceUnion}       - color data
 * @returns {ColorSpaceUnion}     - returns back the same color
 * @throws                        - Color data is incorrect
 */
export declare const checkAndFormat: (space: string, color: ColorSpaceUnion) => ColorSpaceUnion;
/**
 * Checks if all color values are numeric
 * @param {ColorSpaceUnion}       - color data
 * @returns {ColorSpaceUnion}     - returns back the same color
 * @throws                        - Color data is incorrect
 */
export declare const colorCheck: (color: ColorSpaceUnion) => ColorSpaceUnion;
