"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ycCbcCrcToSrgb = void 0;
const cb_cr_conversions_matrices_1 = require("../constants/cb-cr-conversions-matrices");
const matrix_1 = require("../helpers/matrix");
/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
const ycCbcCrcToSrgb = ({ Yc, Cbc, Crc }) => {
    return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_YCCRCCBC, { Yc, Cbc, Crc }, ["red", "green", "blue"]);
};
exports.ycCbcCrcToSrgb = ycCbcCrcToSrgb;
