/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import { RGB, YCbCr, YPbPr } from "../public_api";

/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr}                   - YPbPr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export const yPbPrToSrgb = ({ Y, Pb, Pr }: YPbPr): RGB => {
  const { red, green, blue } = matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.YPBPR_TO_RGB,
    { Y, Pb, Pr },
    ["red", "green", "blue"]
  ) as unknown as RGB;
  return {
    red: Math.round(red),
    green: Math.round(green),
    blue: Math.round(blue),
  };
};

/**
 * Converts a color form an YPbPr space to YCbCr space:
 * @param {YPbPr}                   - YPbPr values for a color
 * @returns {YCbCr}                 - YCbCr values for a color
 */
export const yPbPrToYCbCr = ({ Y, Pb, Pr }: YPbPr): YCbCr => {
  return {
    Y: 16 + 219 * Y,
    Cb: 128 + 224 * Pb,
    Cr: 128 + 224 * Pr,
  };
};
