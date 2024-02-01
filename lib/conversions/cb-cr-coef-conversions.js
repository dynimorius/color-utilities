"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ybrCoefToSrgb = void 0;
/**
 * Converts a color form an YPbPr | YCbCr | YcCbcCrc space to sRGB space:
 * @param {YPbPr | YCbCr | YcCbcCrc} color YPbPr | YCbCr | YcCbcCrc values for a color
 * @param {{Kr: number, Kg: number, Kb: number}} ituRBt conversion coefficients
 * @returns {RGB} - sRGB values for a color
 */
const ybrCoefToSrgb = (color, ituRBt) => {
    const values = Object.values(color);
    const Y = values[0];
    const b = values[1];
    const r = values[2];
    const red = Y + 2 * r * (1 - ituRBt.Kr);
    const blue = Y + 2 * b * (1 - ituRBt.Kb);
    const green = (Y - ituRBt.Kr * red - ituRBt.Kb * blue) / (1 - ituRBt.Kr - ituRBt.Kb);
    return { red, green, blue };
};
exports.ybrCoefToSrgb = ybrCoefToSrgb;
