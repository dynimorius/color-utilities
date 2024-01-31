"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.labToLch_ab = exports.labToXyz = void 0;
const conditionals_1 = require("../constants/conditionals");
const reference_illuminants_1 = require("../constants/reference-illuminants");
/**
 * Converts a color from LAB color space to XYZ
 * @param {LAB} - Lab color value
 * @returns {xyz} - xyz value
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
 * Converts a color from LAB color space to LCH(ab) color space
 * @param {LAB} - Lab color value
 * @returns {LCH} - LCH(ab) color value
 */
const labToLch_ab = ({ luminance, a, b }) => {
    const hr = Math.atan2(b, a);
    const hue = hr < 0 ? (hr * 360) / 2 / Math.PI + 360 : (hr * 360) / 2 / Math.PI;
    const chroma = Math.sqrt(a * a + b * b);
    return { lightness: luminance, chroma, hue };
};
exports.labToLch_ab = labToLch_ab;
