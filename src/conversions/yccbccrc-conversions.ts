/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, YcCbcCrc } from "../interfaces/color-spaces.interface";

/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const ycCbcCrcToSrgb = (ycCbcCrc: YcCbcCrc): RGB => {
  let red = ycCbcCrc.Yc + ycCbcCrc.Crc * 1.7182;
  red = red < ycCbcCrc.Yc ? red : ycCbcCrc.Yc + ycCbcCrc.Crc * 0.9938;
  let blue = ycCbcCrc.Yc + ycCbcCrc.Cbc * 1.9404;
  blue = blue < ycCbcCrc.Yc ? blue : ycCbcCrc.Yc + ycCbcCrc.Cbc * 1.582;
  const green = (ycCbcCrc.Yc - 0.2627 * red - 0.0593 * blue) / 0.678;
  return { red, green, blue };
};
