"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lmsToXyz = void 0;
const transform_matrixes_1 = require("../constants/transform-matrixes");
const matrix_1 = require("../helpers/matrix");
/**
 * Converts a color form an LMS space to XYZ values
 * @param {LMS} lms LMS values for a color
 * @returns {XYZ} - XYZ values for a color
 */
const lmsToXyz = (lms, matrix) => {
  if (!matrix)
    matrix = transform_matrixes_1.VON_KRIES_COEFFICIENT_MATRICES.MA_1;
  return (0, matrix_1.matrixSpaceMultiAsXyz)(matrix, lms);
};
exports.lmsToXyz = lmsToXyz;
