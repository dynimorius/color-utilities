/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSIONS_COEFFICIENTS } from "../constants/cb-cr-conversions";
import { RGB, YcCbcCrc } from "../interfaces/color-spaces.interface";
import { ybrCoefToSrgb } from "./cb-cr-coef-conversions";

/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const ycCbcCrcToSrgb = (
  ycCbcCrc: YcCbcCrc,
  ituRBt = CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_2020
): RGB => {
  return ybrCoefToSrgb(ycCbcCrc, ituRBt);
};
