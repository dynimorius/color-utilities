"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yPbPrToYCbCr = exports.yPbPrToSrgb = void 0;
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
const cb_cr_conversions_matrices_1 = require("../constants/cb-cr-conversions-matrices");
const matrix_1 = require("../helpers/matrix");
/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr}                   - YPbPr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
const yPbPrToSrgb = ({ Y, Pb, Pr }) => {
    const { red, green, blue } = (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.YPBPR_TO_RGB, { Y, Pb, Pr }, ["red", "green", "blue"]);
    return {
        red: Math.round(red),
        green: Math.round(green),
        blue: Math.round(blue),
    };
};
exports.yPbPrToSrgb = yPbPrToSrgb;
/**
 * Converts a color form an YPbPr space to YCbCr space:
 * @param {YPbPr}                   - YPbPr values for a color
 * @returns {YCbCr}                 - YCbCr values for a color
 */
const yPbPrToYCbCr = ({ Y, Pb, Pr }) => {
    return {
        Y: 16 + 219 * Y,
        Cb: 128 + 224 * Pb,
        Cr: 128 + 224 * Pr,
    };
};
exports.yPbPrToYCbCr = yPbPrToYCbCr;
