/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { hcyOrHsiToSrgb } from "./hcy-conversions";
/**
 * Converts a color form an HSI space to sRGB space
 * @param {HSI}                   - HSI values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export const hsiToSrgb = (hsi) => {
    return hcyOrHsiToSrgb(hsi);
};
