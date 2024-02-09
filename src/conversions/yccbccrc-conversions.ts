/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import { RGB, YcCbcCrc } from "../interfaces/color-spaces.interface";

/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const ycCbcCrcToSrgb = ({ Yc, Cbc, Crc }: YcCbcCrc): RGB => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.RGB_TO_YCCRCCBC,
    { Yc, Cbc, Crc },
    ["red", "green", "blue"]
  ) as unknown as RGB;
};
