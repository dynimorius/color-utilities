/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import { RGB, YIQ } from "../public_api";

/**
 * Converts a color form an YIQ space to sRGB values
 * @param {YIQ}                   - YIQ values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export const yiqToSrgb = ({ Y, I, Q }: YIQ): RGB => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.YIQ_TO_RGB,
    { Y, I, Q },
    ["red", "green", "blue"]
  ) as unknown as RGB;
};
