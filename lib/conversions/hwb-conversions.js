"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hwbToRgb = void 0;
/**
 * Converts a color from HWB color space to sRBG color space
 * @param {HWB} - hwb color value
 * @returns {RBG} - sRBG color value
 */
const hwbToRgb = ({ hue, whiteness, blackness }) => {
    hue = hue / 360;
    whiteness = whiteness / 100;
    blackness = blackness / 100;
    const ratio = whiteness + blackness;
    if (ratio > 1) {
        whiteness /= ratio;
        blackness /= ratio;
    }
    const mod = Math.floor(6 * hue);
    let f = 6 * hue - mod;
    f = (mod & 0x01) !== 0 ? 1 - f : f;
    let v = 1 - blackness;
    const n = whiteness + f * (v - whiteness);
    const red = Math.round([v, n, whiteness, whiteness, v, v][mod] * 255);
    const green = Math.round([n, v, v, n, whiteness, whiteness, n][mod] * 255);
    const blue = Math.round([whiteness, whiteness, n, v, v, n, whiteness][mod] * 255);
    return { red, green, blue };
};
exports.hwbToRgb = hwbToRgb;
