/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { YCbCr, xvYCC } from "../public_api";
/**
 * Converts a color from digital to analog form.
 * Scales to min/max ranges
 * @param {xvYCC}                   - xvYCC values for a color
 * @return {YCbCr}                  - Resulting digitized form
 */
export declare const xvYccToYcbcrBT601: ({ Y, Cb, Cr }: xvYCC) => YCbCr;
/**
 * Converts a color form an xvYCC space to sRGB space:
 * @param {xvYCC}                   - xvYCC values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const xvYccToSrgb: (xvycc: xvYCC) => import("../public_api").RGB;
