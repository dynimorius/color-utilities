/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSIONS_COEFFICIENTS } from "../constants/cb-cr-conversions-coefficients";
import { RGB, YCbCr, YPbPr } from "../public_api";

/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr} ypbpr YPbPr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yPbPrToSrgb = (
  { Y, Pb, Pr }: YPbPr,
  ituRBt = CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_709
): RGB => {
  return {
    red: Math.round(1 * Y - 0.000001 * Pb + 1.40199 * Pr),
    green: Math.round(1 * Y - 0.344135 * Pb - 0.714136 * Pr),
    blue: Math.round(1 * Y + 1.77200 * Pb + 0.000000 * Pr)
  }
};

export const yPbPrToYCbCr = ({ Y, Pb, Pr }: YPbPr): YCbCr => {
  return {
    Y: 16 + 219 * Y,
    Cb: 128 + 224 * Pb,
    Cr: 128 + 224 * Pr
  }
}

