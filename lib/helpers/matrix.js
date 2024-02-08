"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixRgbMultiAsSpace = exports.matrixXyzMultiAsSpace = exports.matrixSpaceMultiAsXyz = exports.matrixVectorMultiAsXyz = exports.matrixByVectorObjMulti = exports.matrixVectorMulti = exports.matrix3x3Multi = void 0;
const public_api_1 = require("../public_api");
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
/**
 * Multiplication of a 3 x 3 Matrix by a Color Space object
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {{ [key: string]: number }} vector a vector object
 * @returns {XYZ} - resulting xyz object
 */
const matrixSpaceMultiAsXyz = (matrix, vector) => {
    const values = Object.values(vector);
    return {
        x: matrix[0][0] * values[0] +
            matrix[0][1] * values[1] +
            matrix[0][2] * values[2],
        y: matrix[1][0] * values[0] +
            matrix[1][1] * values[1] +
            matrix[1][2] * values[2],
        z: matrix[2][0] * values[0] +
            matrix[2][1] * values[1] +
            matrix[2][2] * values[2],
    };
};
exports.matrixSpaceMultiAsXyz = matrixSpaceMultiAsXyz;
/**
 * Multiplication of a 3 x 3 Matrix by an XYZ
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {XYZ} vector a vector xyz object
 * @returns {{ [key: string]: number }} - resulting color space object
 */
const matrixXyzMultiAsSpace = (matrix, vector, space) => {
    return {
        [space[0]]: matrix[0][0] * vector.x +
            matrix[0][1] * vector.y +
            matrix[0][2] * vector.z,
        [space[1]]: matrix[1][0] * vector.x +
            matrix[1][1] * vector.y +
            matrix[1][2] * vector.z,
        [space[2]]: matrix[2][0] * vector.x +
            matrix[2][1] * vector.y +
            matrix[2][2] * vector.z,
    };
};
exports.matrixXyzMultiAsSpace = matrixXyzMultiAsSpace;
/**
 * Multiplication of a 3 x 3 Matrix by an RGB
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {RGB} vector a vector xyz object
 * @returns {{ [key: string]: number }} - resulting color space object
 */
const matrixRgbMultiAsSpace = (matrix, vector, space) => {
    const { red, green, blue } = (0, public_api_1.normalizeRgb)(vector);
    return {
        [space[0]]: matrix[0][0] * red +
            matrix[0][1] * green +
            matrix[0][2] * blue,
        [space[1]]: matrix[1][0] * red +
            matrix[1][1] * green +
            matrix[1][2] * blue,
        [space[2]]: matrix[2][0] * red +
            matrix[2][1] * green +
            matrix[2][2] * blue,
    };
};
exports.matrixRgbMultiAsSpace = matrixRgbMultiAsSpace;
