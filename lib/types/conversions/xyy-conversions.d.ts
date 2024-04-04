/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { XYY, XYZ } from "../interfaces/color-spaces.interface";
/**
 * Gets xyz values from given xyY values
 * @param {XYY}                     - xyy values for a color
 * @returns {XYZ}                   - xyz values for a color
 */
export declare const xyYToXyz: ({ x, y, Y }: XYY) => XYZ;
