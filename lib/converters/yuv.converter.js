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
/**
 * Converts a color form an YUV space to sRGB space
 * @param {YUV} yuv YUV values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yuvToRgb = ({ y, u, v }) => {
    let red = (y * 1) + (u * 0) + (v * 1.13983);
    let green = (y * 1) + (u * -0.39465) + (v * -0.58060);
    let blue = (y * 1) + (u * 2.02311) + (v * 0);
    red = Math.min(Math.max(0, red), 1) * 255;
    green = Math.min(Math.max(0, green), 1) * 255;
    blue = Math.min(Math.max(0, blue), 1) * 255;
    return { red, green, blue };
};
exports.yuvToRgb = yuvToRgb;
