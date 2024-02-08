"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yiqToSrgb = void 0;
/**
 * Converts a color form an YIQ space to sRGB values
 * @param {YIQ} yig YIQ values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yiqToSrgb = ({ Y, I, Q }) => {
    const red = Math.min(Math.max(0, Y * 1 + I * 0.956 + Q * 0.621), 1);
    const green = Math.min(Math.max(0, Y * 1 + I * -0.272 + Q * -0.647), 1);
    const blue = Math.min(Math.max(0, Y * 1 + I * -1.108 + Q * 1.705), 1);
    return { red, green, blue };
};
exports.yiqToSrgb = yiqToSrgb;
