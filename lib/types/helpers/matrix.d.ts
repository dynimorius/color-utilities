/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
/**
 * 3 x 3 Matrix Multiplication
 * @param {Matrix3x3}              - 3 x 3 matrix
 * @param {Matrix3x3}              - 3 x 3 matrix
 * @returns {Matrix3x3}            - resulting 3 x 3 matrix
 */
export declare const matrix3x3Multi: (a: Matrix3x3, b: Matrix3x3) => Matrix3x3;
/**
 * Multiplication of a 3 x 3 Matrix by array / vector
 * @param {Matrix3x3}              - 3 x 3 matrix
 * @param {number[]}               - a number array
 * @returns {number[]}             - resulting number array / vector
 */
export declare const matrixVectorMulti: (matrix: Matrix3x3, vector: number[]) => number[];
/**
 * Multiplication of a 3 x 3 Matrix by an Object
 * @param {Matrix3x3}                   - 3 x 3 matrix
 * @param {{ [key: string]: number }}   - a vector object
 * @returns {{ [key: string]: number }} - resulting vector object
 */
export declare const matrixByVectorObjMulti: (matrix: Matrix3x3, vector: {
    [key: string]: number;
}) => {
    [key: string]: number;
};
/**
 * Multiplication of a 3 x 3 Matrix by an Object
 * @param {Matrix3x3}                   - 3 x 3 matrix
 * @param {{ [key: string]: number }}   - a vector object
 * @param {string[]}                    - a string a param names for a resulting object
 * @returns {{ [key: string]: number }} - resulting vector object
 */
export declare const matrixByVectorObjMultiAsSpace: (matrix: Matrix3x3, vector: {
    [key: string]: number;
}, space: string[]) => {
    [key: string]: number;
};
/**
 * Multiplication of a 3 x 3 Matrix by an XYZ
 * @param {Matrix3x3}                   - 3 x 3 matrix
 * @param {XYZ}                         - a vector xyz object
 * @returns {XYZ}                       - resulting xyz object
 */
export declare const matrixVectorMultiAsXyz: (matrix: Matrix3x3, vector: XYZ) => XYZ;
/**
 * Multiplication of a 3 x 3 Matrix by a Color Space object
 * @param {Matrix3x3}                   - 3 x 3 matrix
 * @param {{ [key: string]: number }}   - a vector object
 * @returns {XYZ}                       - resulting xyz object
 */
export declare const matrixSpaceMultiAsXyz: (matrix: Matrix3x3, vector: {
    [key: string]: number;
}) => XYZ;
/**
 * Multiplication of a 3 x 3 Matrix by an XYZ
 * @param {Matrix3x3}                   - 3 x 3 matrix
 * @param {XYZ}                         - a vector xyz object
 * @param {string[]}                    - a string a param names for a resulting object
 * @returns {{ [key: string]: number }} - resulting color space object
 */
export declare const matrixXyzMultiAsSpace: (matrix: Matrix3x3, vector: XYZ, space: string[]) => {
    [key: string]: number;
};
/**
 * Multiplication of a 3 x 3 Matrix by an RGB
 * @param {Matrix3x3}                   - 3 x 3 matrix
 * @param {RGB}                         - a vector xyz object
 * @param {string[]}                    - a string a param names for a resulting object
 * @returns {{ [key: string]: number }} - resulting color space object
 */
export declare const matrixRgbMultiAsSpace: (matrix: Matrix3x3, vector: RGB, space: string[]) => {
    [key: string]: number;
};
