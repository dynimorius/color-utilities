"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixVectorMultiAsXyz = exports.matrixByVectorObjMulti = exports.matrixVectorMulti = exports.matrix3x3Multi = void 0;
/**
 * 3 x 3 Matrix Multiplication
 * @param {Matrix3x3} a 3 x 3 matrix
 * @param {Matrix3x3} b 3 x 3 matrix
 * @returns {Matrix3x3} - resulting 3 x 3 matrix
 */
const matrix3x3Multi = (a, b) => {
    return [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0] + a[0][2] * b[2][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1] + a[0][2] * b[2][1],
            a[0][0] * b[0][2] + a[0][1] * b[1][2] + a[0][2] * b[2][2],
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0] + a[1][2] * b[2][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1] + a[1][2] * b[2][1],
            a[1][0] * b[0][2] + a[1][1] * b[1][2] + a[1][2] * b[2][2],
        ],
        [
            a[2][0] * b[0][0] + a[2][1] * b[1][0] + a[2][2] * b[2][0],
            a[2][0] * b[0][1] + a[2][1] * b[1][1] + a[2][2] * b[2][1],
            a[2][0] * b[0][2] + a[2][1] * b[1][2] + a[2][2] * b[2][2],
        ],
    ];
};
exports.matrix3x3Multi = matrix3x3Multi;
/**
 * Multiplication of a 3 x 3 Matrix by array / vector
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {number[]} vector a number array
 * @returns {number[]} - resulting number array / vector
 */
const matrixVectorMulti = (matrix, vector) => {
    return [
        matrix[0][0] * vector[0] +
            matrix[0][1] * vector[1] +
            matrix[0][2] * vector[2],
        matrix[1][0] * vector[0] +
            matrix[1][1] * vector[1] +
            matrix[1][2] * vector[2],
        matrix[2][0] * vector[0] +
            matrix[2][1] * vector[1] +
            matrix[2][2] * vector[2],
    ];
};
exports.matrixVectorMulti = matrixVectorMulti;
/**
 * Multiplication of a 3 x 3 Matrix by an Object
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {{ [key: string]: number }} vector a vector object
 * @returns {{ [key: string]: number }} - resulting vector object
 */
const matrixByVectorObjMulti = (matrix, vector) => {
    const entries = Object.entries(vector);
    return {
        [entries[0][0]]: matrix[0][0] * entries[0][1] +
            matrix[0][1] * entries[1][1] +
            matrix[0][2] * entries[2][1],
        [entries[1][0]]: matrix[1][0] * entries[0][1] +
            matrix[1][1] * entries[1][1] +
            matrix[1][2] * entries[2][1],
        [entries[2][0]]: matrix[2][0] * entries[0][1] +
            matrix[2][1] * entries[1][1] +
            matrix[2][2] * entries[2][1],
    };
};
exports.matrixByVectorObjMulti = matrixByVectorObjMulti;
/**
 * Multiplication of a 3 x 3 Matrix by an XYZ
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {XYZ} vector a vector xyz object
 * @returns {XYZ} - resulting xyz object
 */
const matrixVectorMultiAsXyz = (matrix, vector) => {
    return {
        x: matrix[0][0] * vector.x +
            matrix[0][1] * vector.y +
            matrix[0][2] * vector.z,
        y: matrix[1][0] * vector.x +
            matrix[1][1] * vector.y +
            matrix[1][2] * vector.z,
        z: matrix[2][0] * vector.x +
            matrix[2][1] * vector.y +
            matrix[2][2] * vector.z,
    };
};
exports.matrixVectorMultiAsXyz = matrixVectorMultiAsXyz;
