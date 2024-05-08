"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yCbCrBT709ToSrgb = exports.yCbCrBT601ToYPbPr = exports.yCbCrBT601ToXvYcc = exports.yCbCrBT601ToSrgb = void 0;
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
 * Converts a color form an ITU-R BT.601 Y′CbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
 * @param {YCbCr}                   - YCbCr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
const yCbCrBT601ToSrgb = ({ Y, Cb, Cr }) => {
    const { red, green, blue } = (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.BT_601_YCBCR_TO_RGB, { Y: Y - 16, Cb: Cb - 128, Cr: Cr - 128 }, ["red", "green", "blue"]);
    return {
        red: Math.round(red),
        green: Math.round(green),
        blue: Math.round(blue),
    };
};
exports.yCbCrBT601ToSrgb = yCbCrBT601ToSrgb;
/**
 * Converts a color from analog to digital form.
 * Scales to min/max ranges
 * @param {YCbCr}                   - YCbCr values for a color
 * @return {xvYCC}                  - Resulting digitized form
 */
const yCbCrBT601ToXvYcc = ({ Y, Cb, Cr }) => {
    Y = Y > 1 ? Y / 255 : Y;
    Cb = Cb > 1 ? Cb / 255 : Cb;
    Cr = Cr > 1 ? Cr / 255 : Cr;
    return {
        Y: 16 + 219 * Y,
        Cb: 128 + 224 * Cb,
        Cr: 128 + 224 * Cr,
    };
};
exports.yCbCrBT601ToXvYcc = yCbCrBT601ToXvYcc;
const yCbCrBT601ToYPbPr = ({ Y, Cb, Cr }) => {
    Y = Y > 1 ? Y / 255 : Y;
    Cb = Cb > 1 ? Cb / 255 : Cb;
    Cr = Cr > 1 ? Cr / 255 : Cr;
    return {
        Y: (Y - 16) / 219,
        Pb: (Cb - 128) / 224,
        Pr: (Cr - 128) / 224,
    };
};
exports.yCbCrBT601ToYPbPr = yCbCrBT601ToYPbPr;
/**
 * Converts a color form an ITU-R BT.709 Y′CbCr space to sRGB space:
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.709_conversion
 * @param {YCbCr}                   - YCbCr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
const yCbCrBT709ToSrgb = ({ Y, Cb, Cr }) => {
    const { red, green, blue } = (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.BT_709_YCBCR_TO_RGB, { Y, Cb, Cr }, ["red", "green", "blue"]);
    return {
        red: Math.round(red),
        green: Math.round(green),
        blue: Math.round(blue),
    };
};
exports.yCbCrBT709ToSrgb = yCbCrBT709ToSrgb;
