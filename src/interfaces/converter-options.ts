/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

/**
 * @description Options used for XYZ to RGB conversion:
 *  - gamma: should the gamma value for a Space data set be used
 *  - whitInBounds: should the returniong values be in the range 0 - 255  
 *  - rounded: should the returniong values be rounded
 *  - precision: number of decimals the returning value should have
 *              ( default is 6)
 */
export interface XyzToRgbOptions {
  gamma?: boolean;
  whitInBounds?: boolean;
  rounded?: boolean;
  precision?: number;
}