/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { VON_KRIES_COEFFICIENT_MATRICES } from "../constants/transform-matrixes";
import { matrixSpaceMultiAsXyz } from "../helpers/matrix";
/**
 * Converts a color form an LMS space to XYZ values
 * @param {LMS}                   - LMS values for a color
 * @returns {XYZ}                 - XYZ values for a color
 */
export const lmsToXyz = (lms, matrix) => {
    if (!matrix)
        matrix = VON_KRIES_COEFFICIENT_MATRICES.MA_1;
    return matrixSpaceMultiAsXyz(matrix, lms);
};
