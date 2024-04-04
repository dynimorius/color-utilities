/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { UVW, XYZ } from "../interfaces/color-spaces.interface";
/**
 * Gets XYZ value for a given color in UVW space
 * @param {UVW}                   - UVW values for a color
 * @returns {number}              - XYZ values
 */
export declare const uvwToXyz: ({ u, v, w }: UVW, refIlluminant?: {
    X: number;
    Y: number;
    Z: number;
}) => XYZ;
