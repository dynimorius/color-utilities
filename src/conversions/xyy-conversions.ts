/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { XYY, XYZ } from "../interfaces/color-spaces.interface";

/**
 * Gets xyz values from given xyY values
 * @param {XYY}                     - xyy values for a color 
 * @returns {XYZ}                   - xyz values for a color
 */
export const xyYToXyz = ({ x, y, Y }: XYY): XYZ => {
  return { x: (x * Y) / y, y: Y, z: ((1 - x - y) * Y) / y };
};
