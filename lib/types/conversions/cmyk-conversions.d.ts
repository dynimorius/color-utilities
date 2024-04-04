/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { CMYK, RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a color from CMYK color space to sRBG color space
 * @param {CMYK}                   - cmyk color value
 * @returns {RGB}                  - sRBG color value
 */
export declare const cmykToRgb: ({ cyan, magenta, yellow, key }: CMYK) => RGB;
