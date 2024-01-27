"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsvToAnsi16 = exports.hsvToHsl = exports.hsvToRgb = void 0;
const rgb_converter_1 = require("./rgb-converter");
/**
 * Converts a color from HSV color space to sRBG color space
 * @param {HSV} - hsl color value
 * @returns {RBG} - sRBG color value
 */
const hsvToRgb = ({ hue, saturation, value }) => {
    hue = (hue / 360) * 6;
    saturation = saturation / 100;
    value = value / 100;
    const i = Math.floor(hue);
    const f = hue - i;
    const p = value * (1 - saturation);
    const q = value * (1 - f * saturation);
    const t = value * (1 - (1 - f) * saturation);
    const mod = i % 6;
    const red = Math.round([value, q, p, p, t, value][mod] * 255);
    const green = Math.round([t, value, value, q, p, p][mod] * 255);
    const blue = Math.round([p, p, t, value, value, q][mod] * 255);
    return { red, green, blue };
};
exports.hsvToRgb = hsvToRgb;
/**
 * Converts a color from HSV color space to HSV color space
 * @param {HSV} - hsl color value
 * @returns {HSV} - hsv color value
 */
const hsvToHsl = ({ hue, saturation, value }) => {
    saturation = saturation / 100;
    value = value / 100;
    const vmin = Math.max(value, 0.01);
    let hslSaturation;
    let lightness;
    lightness = (2 - saturation) * value;
    const lmin = (2 - saturation) * vmin;
    hslSaturation = saturation * vmin;
    hslSaturation /= lmin <= 1 ? lmin : 2 - lmin;
    hslSaturation = hslSaturation || 0;
    lightness /= 2;
    return { hue, saturation: hslSaturation * 100, lightness: lightness * 100 };
};
exports.hsvToHsl = hsvToHsl;
/**
 * Converts a color from HSV color space to ansi16 numerical
 * @param {HSV} - hsl color value
 * @returns {number} - ansi16 numberical value
 */
const hsvToAnsi16 = (hsv) => {
    const rgb = (0, exports.hsvToRgb)(hsv);
    return (0, rgb_converter_1.sRgbToAnsi16)(rgb, hsv.value);
};
exports.hsvToAnsi16 = hsvToAnsi16;
