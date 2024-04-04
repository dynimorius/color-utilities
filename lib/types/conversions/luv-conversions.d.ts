/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { LCH, LUV, XYZ } from "../interfaces/color-spaces.interface";
/**
 * Converts a color from LUV color space to LCH(uv) color space
 * @param {LUV}                   - luv color value
 * @returns {LCH}                 - Lch(uv) color value
 */
export declare const luvToLch_uv: ({ L, u, v }: LUV) => LCH;
/**
 * Converts a color from LUV color space to XYZ
 * @param {LUV}                   - luv color value
 * @returns {XYZ}                 - xyz color value
 */
export declare const luvToXyz: ({ L, u, v }: LUV, refIlluminant?: {
    X: number;
    Y: number;
    Z: number;
}) => XYZ;
