"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.luvToXyz = exports.luvToLch_uv = void 0;
const conditionals_1 = require("../constants/conditionals");
const reference_illuminants_1 = require("../constants/reference-illuminants");
const xyz_converter_1 = require("./xyz-converter");
/**
 * Converts a color from LUV color space to LCH(uv) color space
 * @param {LUV} - luv color value
 * @returns {LCH} - Lch(uv) color value
 */
const luvToLch_uv = ({ L, u, v }) => {
    const chroma = Math.sqrt(u * u + v * v);
    let hue = (Math.atan2(v, u) * 180) / Math.PI;
    hue = hue >= 0 ? hue : hue + 360;
    return { lightness: L, chroma, hue };
};
exports.luvToLch_uv = luvToLch_uv;
/**
 * Converts a color from LUV color space to XYZ
 * @param {LUV} - luv color value
 * @returns {XYZ} - xyz color value
 */
const luvToXyz = ({ L, u, v }) => {
    const v0 = (0, xyz_converter_1.Fv)({
        x: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X,
        y: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y,
        z: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z,
    });
    const u0 = (0, xyz_converter_1.Fu)({
        x: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X,
        y: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y,
        z: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z,
    });
    const y = L > conditionals_1.CIE_κ * conditionals_1.CIE_ϵ ? Math.pow((L + 16) / 116, 3) : L / conditionals_1.CIE_κ;
    const d = y * ((39 * L) / (v + 13 * L * v0) - 5) || 0;
    const c = -1 / 3;
    const b = -5 * y;
    const a = ((52 * L) / (u + 13 * L * u0) - 1) / 3 || 0;
    const x = (d - b) / (a - c);
    const z = x * a + b;
    // Add zero to prevent signed zeros (force 0 rather than -0)
    return { x: x * 100 + 0, y: y * 100 + 0, z: z * 100 + 0 };
};
exports.luvToXyz = luvToXyz;
