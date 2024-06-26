"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hunterLabToXyz = exports.labToSrgb = exports.labToLch_ab = exports.labToXyz = void 0;
const xyz_conversions_1 = require("./xyz-conversions");
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
const conditionals_1 = require("../constants/conditionals");
const reference_illuminants_1 = require("../constants/reference-illuminants");
/*************************************************************
 *                        CIE-L*ab
 *************************************************************/
/**
 * Converts a color from CIE-L*ab color space to XYZ
 * @param {LAB}                   - Lab color value
 * @returns {xyz}                 - xyz value
 */
const labToXyz = ({ luminance, a, b }) => {
    const fY = (luminance + 16) / 116;
    const z = f(fY - b / 200) * reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z * 100 + 0;
    const x = f(a / 500 + fY) * reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X * 100 + 0;
    const y = (luminance > conditionals_1.CIE_κ * conditionals_1.CIE_ϵ
        ? Math.pow((luminance + 16) / 116, 3)
        : luminance / conditionals_1.CIE_κ) *
        reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y *
        100 +
        0;
    return { x, y, z };
};
exports.labToXyz = labToXyz;
const f = (num) => {
    return Math.pow(num, 3) > conditionals_1.CIE_ϵ ? Math.pow(num, 3) : (116 * num - 16) / conditionals_1.CIE_κ;
};
/**
 * Converts a color from CIE-L*ab color space to LCH(ab) color space
 * @param {LAB}                   - Lab color value
 * @returns {LCH}                 - LCH(ab) color value
 */
const labToLch_ab = ({ luminance, a, b }) => {
    const hr = Math.atan2(b, a);
    const hue = hr < 0 ? (hr * 360) / 2 / Math.PI + 360 : (hr * 360) / 2 / Math.PI;
    const chroma = Math.sqrt(a * a + b * b);
    return { lightness: luminance, chroma, hue };
};
exports.labToLch_ab = labToLch_ab;
/**
 * Converts a color from CIE-L*ab color space to sRGB color space
 * @param {LAB}                   - Lab color value
 * @returns {RGB}                 - sRGB color value
 */
const labToSrgb = (lab) => {
    return (0, xyz_conversions_1.xyzToSrgb)((0, exports.labToXyz)(lab));
};
exports.labToSrgb = labToSrgb;
/*************************************************************
 *                        Hunter-Lab
 *************************************************************/
/**
 * Converts a color from Hunter's Lab color space to XYZ values
 * @param {LAB}                   - Lab color value
 * @returns {XYZ}                 - XYZ color value
 */
const hunterLabToXyz = ({ luminance, a, b }) => {
    const y = Math.pow(luminance / 10, 2);
    const x = (((a / 17.5) * luminance) / 10 + y) / 1.02;
    const z = -(((b / 7) * luminance) / 10 - y) / 0.847;
    return { x, y, z };
};
exports.hunterLabToXyz = hunterLabToXyz;
