"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports._Fv = exports.Fv = exports.Fu = void 0;
/**
 * Computes a U chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - U chromaticity coordinate
 */
const Fu = ({ x, y, z }) => {
    return (4 * x) / (x + 15 * y + 3 * z);
};
exports.Fu = Fu;
/**
 * Computes a V chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - V chromaticity coordinate
 */
const Fv = ({ x, y, z }) => {
    return (9 * y) / (x + 15 * y + 3 * z);
};
exports.Fv = Fv;
/**
 * Computes a V chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - V chromaticity coordinate
 */
const _Fv = ({ x, y, z }) => {
    return (6 * y) / (x + 15 * y + 3 * z);
};
exports._Fv = _Fv;
