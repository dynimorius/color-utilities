"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yDbDrToSrgb = void 0;
const cb_cr_conversions_matrices_1 = require("../constants/cb-cr-conversions-matrices");
const matrix_1 = require("../helpers/matrix");
/**
 * Converts a color form an YDbDr space to sRGB space:
 * @param {YDbDr}                   - YDbDr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
const yDbDrToSrgb = ({ Y, Db, Dr }) => {
    return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.YDBDR_TO_RGB, { Y, Db, Dr }, ["red", "green", "blue"]);
};
exports.yDbDrToSrgb = yDbDrToSrgb;
