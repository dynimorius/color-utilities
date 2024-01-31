/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSIONS_COEFFICIENTS } from "../constants/cb-cr-conversions";
import { RGB, YPbPr } from "../public_api";

/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr} ypbpr YPbPr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yPbPrToSrgb = (
  { Y, Pb, Pr }: YPbPr,
  ituRBt = CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_709
): RGB => {
  const red = Y + 2 * Pr * (1 - ituRBt.Kr);
  const blue = Y + 2 * Pb * (1 - ituRBt.Kb);
  const green =
    (Y - ituRBt.Kr * red - ituRBt.Kb * blue) / (1 - ituRBt.Kr - ituRBt.Kb);
  return { red, green, blue };
};

