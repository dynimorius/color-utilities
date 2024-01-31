"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yigToSrgb = void 0;
/**
 * Converts a color form an YIQ space to sRGB values
 * @param {YIQ} yig YIQ values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yigToSrgb = ({ Y, I, Q }) => {
    const red = Math.min(Math.max(0, Y * 1 + I * 0.956 + Q * 0.621), 1) * 255;
    const green = Math.min(Math.max(0, Y * 1 + I * -0.272 + Q * -0.647), 1) * 255;
    const blue = Math.min(Math.max(0, Y * 1 + I * -1.108 + Q * 1.705), 1) * 255;
    return { red, green, blue };
};
exports.yigToSrgb = yigToSrgb;
