/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, YCbCr, YPbPr, YcCbcCrc } from "../public_api";

/**
 * Converts a color form an YPbPr | YCbCr | YcCbcCrc space to sRGB space:
 * @param {YPbPr | YCbCr | YcCbcCrc} color YPbPr | YCbCr | YcCbcCrc values for a color
 * @param {{Kr: number, Kg: number, Kb: number}} ituRBt conversion coefficients
 * @returns {RGB} - sRGB values for a color
 */
export const ybrCoefToSrgb = (
  color: YPbPr | YCbCr | YcCbcCrc,
  ituRBt: { Kr: number; Kb: number; Kg?: number }
): RGB => {
  const values = Object.values(color);
  const Y = values[0];
  const b = values[1];
  const r = values[2];
  const red = Y + 2 * r * (1 - ituRBt.Kr);
  const blue = Y + 2 * b * (1 - ituRBt.Kb);
  const green =
    (Y - ituRBt.Kr * red - ituRBt.Kb * blue) / (1 - ituRBt.Kr - ituRBt.Kb);
  return { red, green, blue };
};
