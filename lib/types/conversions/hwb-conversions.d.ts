/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { HWB, RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a color from HWB color space to sRBG color space
 * @param {HWB}                   - hwb color value
 * @returns {RBG}                 - sRBG color value
 */
export declare const hwbToRgb: ({ hue, whiteness, blackness }: HWB) => RGB;
