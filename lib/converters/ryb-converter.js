"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rybToRgb = void 0;
/**
 * Converts a color form an RYB space to sRGB space
 * @param {RYB} - RYB values for a color
 * @returns {RBG} rgb sRBG values for a color
 */
const rybToRgb = ({ red, yellow, blue }) => {
    const Iw = Math.min(red, yellow, blue);
    const Ib = Math.min(255 - red, 255 - yellow, 255 - blue);
    const rRYB = red - Iw;
    const yRYB = yellow - Iw;
    const bRYB = blue - Iw;
    const minYB = Math.min(yRYB, bRYB);
    const rRGB = rRYB + yRYB - minYB;
    const gRGB = yRYB + minYB;
    const bRGB = 2 * (bRYB - minYB);
    const n = Math.max(rRGB, gRGB, bRGB) / Math.max(rRYB, yRYB, bRYB);
    const N = isNaN(n) || n === Infinity || n <= 0 ? 1 : n;
    return {
        red: rRGB / N + Ib,
        green: gRGB / N + Ib,
        blue: bRGB / N + Ib
    };
};
exports.rybToRgb = rybToRgb;
