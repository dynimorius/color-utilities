/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { Matrix3x3 } from "../types/math-types";
/**
 * @description Representation of a response domain :
 *  - MA is a adaptation(transformation matrix) used to
 *        transform XYZ to a response cone
 *  - MA_1 is an inverse of MA used to transform a response
 *        cone to XYZ
 *  - more info:
 *    https://en.wikipedia.org/wiki/Transformation_matrix
 *    http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
 */
export interface ResponceDomain {
    MA: Matrix3x3;
    MA_1: Matrix3x3;
}
