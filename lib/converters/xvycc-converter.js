"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.xvYccToSrgb = exports.xvYccToYcbcr = void 0;
const ycbcr_jpeg_converter_1 = require("./ycbcr-jpeg-converter");
/**
 * Converts a color from digital to analog form.
 * Scales to min/max ranges
 * @param {xvYCC} xvycc xvYCC values for a color
 * @return {YCbCr} Resulting digitized form
 */
const xvYccToYcbcr = ({ Y, Cb, Cr }) => {
    return {
        Y: (Y - 16) / 219,
        Cb: (Cb - 128) / 224,
        Cr: (Cr - 128) / 224,
    };
};
exports.xvYccToYcbcr = xvYccToYcbcr;
/**
 * Converts a color form an xvYCC space to sRGB space:
 * @param {xvYCC} xvycc xvYCC values for a color
 * @returns {RGB} - sRGB values for a color
 */
const xvYccToSrgb = (xvycc) => {
    return (0, ycbcr_jpeg_converter_1.yCbCrToSrgb)((0, exports.xvYccToYcbcr)(xvycc));
};
exports.xvYccToSrgb = xvYccToSrgb;
