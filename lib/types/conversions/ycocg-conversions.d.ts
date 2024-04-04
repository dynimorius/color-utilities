/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, YCoCg } from "../public_api";
/**
 * Converts a color form an YCoCg space to sRGB space:
 * @param {YCoCg}                   - YCoCg values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const yCgCoToSrgb: ({ Y, Co, Cg }: YCoCg) => RGB;
