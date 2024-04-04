/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, YIQ } from "../public_api";
/**
 * Converts a color form an YIQ space to sRGB values
 * @param {YIQ}                   - YIQ values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export declare const yiqToSrgb: ({ Y, I, Q }: YIQ) => RGB;
