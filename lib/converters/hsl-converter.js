"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslToHex = exports.hslToHsv = exports.hslToRgb = void 0;
/**
 * Converts a color from HSL color space to sRBG color space
 * @param {HSL} - hsl color value
 * @returns {RBG} - sRBG color value
 */
const hslToRgb = ({ hue, saturation, lightness }) => {
    saturation /= 100;
    lightness /= 100;
    const k = (n) => (n + hue / 30) % 12;
    const a = saturation * Math.min(lightness, 1 - lightness);
    const f = (n) => Math.round((lightness -
        a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))) *
        255);
    return { red: f(0), green: f(8), blue: f(4) };
};
exports.hslToRgb = hslToRgb;
/**
 * Converts a color from HSL color space to HSV color space
 * @param {HSL} - hsl color value
 * @returns {HSV} - hsv color value
 */
const hslToHsv = ({ hue, saturation, lightness }) => {
    saturation = saturation / 100;
    lightness = lightness / 100;
    let smin = saturation;
    const lmin = Math.max(lightness, 0.01);
    lightness *= 2;
    saturation *= lightness <= 1 ? lightness : 2 - lightness;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const value = ((lightness + saturation) / 2) * 100;
    const hsvSaturation = (lightness === 0
        ? (2 * smin) / (lmin + smin)
        : (2 * saturation) / (lightness + saturation)) * 100;
    return { hue, saturation: hsvSaturation, value };
};
exports.hslToHsv = hslToHsv;
/**
 * Converts a color from HSL color space to hex string
 * @param {HSL} - hsl color value
 * @returns {string} - hex value
 */
const hslToHex = (hsl, prefixed) => {
    let { hue, saturation, lightness } = hsl;
    lightness /= 100;
    const a = (saturation * Math.min(lightness, 1 - lightness)) / 100;
    const f = (n) => {
        const k = (n + hue / 30) % 12;
        const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0");
    };
    const alphaHex = hsl.alpha
        ? Math.round(hsl.alpha * 255)
            .toString(16)
            .padStart(2, "0")
        : "";
    const prefix = prefixed ? "#" : "";
    return `${prefix}${f(0)}${f(8)}${f(4)}${alphaHex}`.toLocaleUpperCase();
};
exports.hslToHex = hslToHex;
