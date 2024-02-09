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
export const ycCbcCrcToSrgb = (
  ycCbcCrc: YcCbcCrc,
): RGB => {
  //TODO needs more testing
  const redMultiplier = ycCbcCrc.Crc < 0 || ycCbcCrc.Crc > ycCbcCrc.Yc ? 1.7182 : 0.9938;
  const blueMultiplier = ycCbcCrc.Cbc < 0 || ycCbcCrc.Cbc > ycCbcCrc.Yc ? 1.9404 : 1.582;
  const red = ycCbcCrc.Yc + ycCbcCrc.Crc * redMultiplier;
  const blue = ycCbcCrc.Yc + ycCbcCrc.Cbc * blueMultiplier;
  const green = (ycCbcCrc.Yc - 0.2627 * red - 0.0593 * blue) / 0.678
  return {red, green, blue};
};
