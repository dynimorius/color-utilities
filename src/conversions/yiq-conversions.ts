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
export const yiqToSrgb = ({ Y, I, Q }: YIQ): RGB => {
  const red = Y * 1.0030892 + I * 0.9548490 + Q * 0.6178597;
  const green = Y * 0.996776 + I * -0.2707062 + Q * -0.6447883;
  const blue = Y * 1.0084978 + I * -1.1104851 + Q * 1.6995675;
  return { red, green, blue };
};
