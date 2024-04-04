/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Computes a U chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - U chromaticity coordinate
 */
export const Fu = ({ x, y, z }) => {
    return (4 * x) / (x + 15 * y + 3 * z);
};
/**
 * Computes a V chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - V chromaticity coordinate
 */
export const Fv = ({ x, y, z }) => {
    return (9 * y) / (x + 15 * y + 3 * z);
};
/**
 * Computes a V chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - V chromaticity coordinate
 */
export const _Fv = ({ x, y, z }) => {
    return (6 * y) / (x + 15 * y + 3 * z);
};
