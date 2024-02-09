"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yCbCrToYPbPr = exports.yCbCrToXvYcc = exports.yCbCrToSrgb = void 0;
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
const cb_cr_conversions_coefficients_1 = require("../constants/cb-cr-conversions-coefficients");
const matrix_1 = require("../helpers/matrix");
/**
 * Converts a color form an Digital Y′CbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#JPEG_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yCbCrToSrgb = ({ Y, Cb, Cr }) => {
    const { red, green, blue } = (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_coefficients_1.CB_CR_CONVERSION_MATRICES.YCBCR_TO_RGB, { Y: Y - 16, Cb: Cb - 128, Cr: Cr - 128 }, ["red", "green", "blue"]);
    return {
        red: Math.round(red),
        green: Math.round(green),
        blue: Math.round(blue),
    };
};
exports.yCbCrToSrgb = yCbCrToSrgb;
/**
 * Converts a color from analog to digital form.
 * Scales to min/max ranges
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @return {xvYCC} Resulting digitized form
 */
const yCbCrToXvYcc = ({ Y, Cb, Cr }) => {
    Y = Y > 1 ? Y / 255 : Y;
    Cb = Cb > 1 ? Cb / 255 : Cb;
    Cr = Cr > 1 ? Cr / 255 : Cr;
    return {
        Y: 16 + 219 * Y,
        Cb: 128 + 224 * Cb,
        Cr: 128 + 224 * Cr,
    };
};
exports.yCbCrToXvYcc = yCbCrToXvYcc;
const yCbCrToYPbPr = ({ Y, Cb, Cr }) => {
    Y = Y > 1 ? Y / 255 : Y;
    Cb = Cb > 1 ? Cb / 255 : Cb;
    Cr = Cr > 1 ? Cr / 255 : Cr;
    return {
        Y: (Y - 16) / 219,
        Pb: (Cb - 128) / 224,
        Pr: (Cr - 128) / 224,
    };
};
exports.yCbCrToYPbPr = yCbCrToYPbPr;
