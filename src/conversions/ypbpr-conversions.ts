/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSIONS_COEFFICIENTS } from "../constants/cb-cr-conversions";
import { RGB, YPbPr } from "../public_api";
import { ybrCoefToSrgb } from "./cb-cr-coef-conversions";

/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr} ypbpr YPbPr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yPbPrToSrgb = (
  yPbPr: YPbPr,
  ituRBt = CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_709
): RGB => {
  return ybrCoefToSrgb(yPbPr, ituRBt);
};
