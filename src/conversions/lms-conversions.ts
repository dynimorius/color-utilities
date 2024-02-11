/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { VON_KRIES_COEFFICIENT_MATRICES } from "../constants/transform-matrixes";
import { matrixSpaceMultiAsXyz } from "../helpers/matrix";
import { LMS, XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";

/**
 * Converts a color form an LMS space to XYZ values
 * @param {LMS} lms LMS values for a color
 * @returns {XYZ} - XYZ values for a color
 */
export const lmsToXyz = (lms: LMS | { [key: string]: number }, matrix?: Matrix3x3): XYZ  => {
  if (!matrix) matrix = VON_KRIES_COEFFICIENT_MATRICES.MA_1;
  return matrixSpaceMultiAsXyz(matrix, lms as unknown as { [key: string]: number });
}