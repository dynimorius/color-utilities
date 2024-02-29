/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { XYZ } from "../interfaces/color-spaces.interface";

/**
 * Computes a U chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - U chromaticity coordinate
 */
export const Fu = ({ x, y, z }: XYZ): number => {
  return (4 * x) / (x + 15 * y + 3 * z);
};

/**
 * Computes a V chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - V chromaticity coordinate
 */
export const Fv = ({ x, y, z }: XYZ): number => {
  return (9 * y) / (x + 15 * y + 3 * z);
};

/**
 * Computes a V chromaticity coordinate for a reference white
 * @param {XYZ}                   - xyz values for a color
 * @returns {number}              - V chromaticity coordinate
 */
export const _Fv = ({ x, y, z }: XYZ): number => {
  return (6 * y) / (x + 15 * y + 3 * z);
};
