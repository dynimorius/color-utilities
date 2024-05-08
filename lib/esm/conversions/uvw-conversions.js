"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.uvwToXyz = void 0;
const reference_illuminants_1 = require("../constants/reference-illuminants");
const white_point_1 = require("../helpers/white-point");
/**
 * Gets XYZ value for a given color in UVW space
 * @param {UVW}                   - UVW values for a color
 * @returns {number}              - XYZ values
 */
const uvwToXyz = ({ u, v, w }, refIlluminant = reference_illuminants_1.REFERENCE_ILLUMINANT.D65) => {
    if (w === 0)
        return { x: 0, y: 0, z: 0 };
    const v0 = (0, white_point_1._Fv)({
        x: refIlluminant.X,
        y: refIlluminant.Y,
        z: refIlluminant.Z,
    });
    const u0 = (0, white_point_1.Fu)({
        x: refIlluminant.X,
        y: refIlluminant.Y,
        z: refIlluminant.Z,
    });
    const y = Math.pow((w + 17) / 25, 3);
    const _u = u / (13 * w) + u0 || 0;
    const _v = v / (13 * w) + v0 || 0;
    const x = ((6 / 4) * y * _u) / _v;
    const z = y * (2 / _v - (0.5 * _u) / _v - 5);
    return { x, y, z };
};
exports.uvwToXyz = uvwToXyz;
