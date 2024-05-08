/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { LMS, XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
/**
 * Converts a color form an LMS space to XYZ values
 * @param {LMS}                   - LMS values for a color
 * @returns {XYZ}                 - XYZ values for a color
 */
export declare const lmsToXyz: (lms: LMS | {
    [key: string]: number;
}, matrix?: Matrix3x3) => XYZ;
