"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yuvToRgb = void 0;
const cb_cr_conversions_coefficients_1 = require("../constants/cb-cr-conversions-coefficients");
const cb_cr_coef_conversions_1 = require("./cb-cr-coef-conversions");
/**
 * Converts a color form an YUV space to sRGB space
 * @param {YUV} yuv YUV values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yuvToRgb = ({ y, u, v }, normalized) => {
    y = y / 255;
    v = v / 255;
    u = u / 255;
    // const red = (y + 1.14 * v) * 255;
    // const green = y - 0.395 * u - 0.581 * v;
    // const blue = y + 2.032 * u;
    // return {red, green, blue}
    return (0, cb_cr_coef_conversions_1.yuvByMatrix)({ y: y * 127.5, u: u * 127.5, v: v * 127.5 }, cb_cr_conversions_coefficients_1.CB_CR_CONVERSION_MATRICES.YUV_TO_RGB, ["red", "green", "blue"]);
};
exports.yuvToRgb = yuvToRgb;
