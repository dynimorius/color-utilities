/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, YIQ } from "../public_api";

/**
 * Converts a color form an YIQ space to sRGB values
 * @param {YIQ} yig YIQ values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yigToSrgb = ({ Y, I, Q }: YIQ): RGB => {
  const red = Math.min(Math.max(0, Y * 1 + I * 0.956 + Q * 0.621), 1) * 255;
  const green = Math.min(Math.max(0, Y * 1 + I * -0.272 + Q * -0.647), 1) * 255;
  const blue = Math.min(Math.max(0, Y * 1 + I * -1.108 + Q * 1.705), 1) * 255;
  return { red, green, blue };
};
