/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import { RGB, YDbDr } from "../public_api";
/**
 * Converts a color form an YDbDr space to sRGB space:
 * @param {YDbDr}                   - YDbDr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export const yDbDrToSrgb = ({ Y, Db, Dr }: YDbDr): RGB => {
  return matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.YDBDR_TO_RGB,
    { Y, Db, Dr },
    ["red", "green", "blue"]
  ) as unknown as RGB;
};
