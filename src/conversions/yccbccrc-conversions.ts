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
export const ycCbcCrcToSrgb = ({ Yc, Cbc, Crc }: YcCbcCrc): RGB => {
  let red = Yc + Crc * 1.7182;
  red = -0.8592 <= red - Yc || red - Yc <= 0 ? red : Yc + Crc * 0.9938;
  let blue = Yc + Cbc * 1.9404;
  blue = -0.9702 <= blue - Yc || blue - Yc <= 0 ? blue : Yc + Cbc * 1.582;
  const green = (Yc - 0.2627 * red - 0.0593 * blue) / 0.678;
  return { red, green, blue };
};
