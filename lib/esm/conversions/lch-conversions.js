"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.lch_uvToXyz = exports.lch_abToXyz = exports.lch_uvToLuv = exports.lch_abToLab = void 0;
const lab_conversions_1 = require("./lab-conversions");
const luv_conversions_1 = require("./luv-conversions");
/**
 * Converts a color from LCH(ab) color space to LAB color space
 * @param {LCH}                   - Lch(ab) color value
 * @returns {LAB}                 - lab color value
 */
const lch_abToLab = ({ lightness, chroma, hue }) => {
    const H = (hue / 180) * Math.PI;
    const a = chroma * Math.cos(H);
    const b = chroma * Math.sin(H);
    return { luminance: lightness, a, b };
};
exports.lch_abToLab = lch_abToLab;
/**
 * Converts a color from LCH(ab) color space to LUV color space
 * @param {LCH}                   - Lch(uv) color value
 * @returns {LUV}                 - luv color value
 */
const lch_uvToLuv = ({ lightness, chroma, hue }) => {
    const H = (hue / 180) * Math.PI;
    const u = chroma * Math.cos(H);
    const v = chroma * Math.sin(H);
    return { L: lightness, u, v };
};
exports.lch_uvToLuv = lch_uvToLuv;
/**
 * Converts a color from LCH(ab) color space to XYZ
 * @param {LCH}                   - Lch(ab) color value
 * @returns {XYZ}                 - xyz value
 */
const lch_abToXyz = (lch) => {
    return (0, lab_conversions_1.labToXyz)((0, exports.lch_abToLab)(lch));
};
exports.lch_abToXyz = lch_abToXyz;
/**
 * Converts a color from LCH(uv) color space to XYZ
 * @param {LCH}                   - Lch(uv) color value
 * @returns {XYZ}                 - xyz value
 */
const lch_uvToXyz = (lch) => {
    return (0, luv_conversions_1.luvToXyz)((0, exports.lch_uvToLuv)(lch));
};
exports.lch_uvToXyz = lch_uvToXyz;
