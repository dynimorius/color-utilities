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
  const red = Yc + Crc * 1.4746;
  const blue = Yc + Cbc * 1.8814;
  const green = (Yc - 0.2627 * red - 0.0593 * blue) / 0.678;
  return {red, green,  blue}
};
