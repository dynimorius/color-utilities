/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { HSI } from "../interfaces/color-spaces.interface";
/**
 * Converts a color form an HSI space to sRGB space
 * @param {HSI}                   - HSI values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export declare const hsiToSrgb: (hsi: HSI) => import("../interfaces/color-spaces.interface").RGB;
