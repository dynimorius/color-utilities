/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { RGB, YCbCr, xvYCC } from "../public_api";
import { yCbCrBT601ToSrgb } from "./ycbcr-jpeg-conversions";

/**
 * Converts a color from digital to analog form.
 * Scales to min/max ranges
 * @param {xvYCC}                   - xvYCC values for a color
 * @return {YCbCr}                  - Resulting digitized form
 */
export const xvYccToYcbcrBT601 = ({ Y, Cb, Cr }: xvYCC): YCbCr => {
  return {
    Y: ((Y - 16) / 219) * 255,
    Cb: ((Cb - 128) / 224) * 255,
    Cr: ((Cr - 128) / 224) * 255,
  };
};

/**
 * Converts a color form an xvYCC space to sRGB space:
 * @param {xvYCC}                   - xvYCC values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export const xvYccToSrgb = (xvycc: xvYCC): RGB => {
  return yCbCrBT601ToSrgb(xvYccToYcbcrBT601(xvycc));
};
