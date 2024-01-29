/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { Matrix3x3 } from "../types/math-types";


/**
 * @description Representation of a response domain :
 *  - more info: http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
 */
export interface ResponceDomain {
  MA: Matrix3x3,
  MA_1: Matrix3x3
}