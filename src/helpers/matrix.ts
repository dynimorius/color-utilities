import { blend } from './../utilities/blender';
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
import { normalizeRgb } from '../public_api';

/**
 * 3 x 3 Matrix Multiplication
 * @param {Matrix3x3} a 3 x 3 matrix
 * @param {Matrix3x3} b 3 x 3 matrix
 * @returns {Matrix3x3} - resulting 3 x 3 matrix
 */
export const matrix3x3Multi = (a: Matrix3x3, b: Matrix3x3): Matrix3x3 => {
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

/**
 * Multiplication of a 3 x 3 Matrix by array / vector
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {number[]} vector a number array
 * @returns {number[]} - resulting number array / vector
 */
export const matrixVectorMulti = (
  matrix: Matrix3x3,
  vector: number[]
): number[] => {
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

/**
 * Multiplication of a 3 x 3 Matrix by an Object
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {{ [key: string]: number }} vector a vector object
 * @returns {{ [key: string]: number }} - resulting vector object
 */
export const matrixByVectorObjMulti = (
  matrix: Matrix3x3,
  vector: { [key: string]: number }
): { [key: string]: number } => {
  const entries = Object.entries(vector);
  return {
    [entries[0][0]]:
      matrix[0][0] * entries[0][1] +
      matrix[0][1] * entries[1][1] +
      matrix[0][2] * entries[2][1],
    [entries[1][0]]:
      matrix[1][0] * entries[0][1] +
      matrix[1][1] * entries[1][1] +
      matrix[1][2] * entries[2][1],
    [entries[2][0]]:
      matrix[2][0] * entries[0][1] +
      matrix[2][1] * entries[1][1] +
      matrix[2][2] * entries[2][1],
  };
};

/**
 * Multiplication of a 3 x 3 Matrix by an XYZ
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {XYZ} vector a vector xyz object
 * @returns {XYZ} - resulting xyz object
 */
export const matrixVectorMultiAsXyz = (matrix: Matrix3x3, vector: XYZ): XYZ => {
  return {
    x:
      matrix[0][0] * vector.x +
      matrix[0][1] * vector.y +
      matrix[0][2] * vector.z,
    y:
      matrix[1][0] * vector.x +
      matrix[1][1] * vector.y +
      matrix[1][2] * vector.z,
    z:
      matrix[2][0] * vector.x +
      matrix[2][1] * vector.y +
      matrix[2][2] * vector.z,
  };
};

/**
 * Multiplication of a 3 x 3 Matrix by a Color Space object
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {{ [key: string]: number }} vector a vector object
 * @returns {XYZ} - resulting xyz object
 */
export const matrixSpaceMultiAsXyz = (
  matrix: Matrix3x3,
  vector: { [key: string]: number }
): XYZ => {
  const values = Object.values(vector);
  return {
    x:
      matrix[0][0] * values[0] +
      matrix[0][1] * values[1] +
      matrix[0][2] * values[2],
    y:
      matrix[1][0] * values[0] +
      matrix[1][1] * values[1] +
      matrix[1][2] * values[2],
    z:
      matrix[2][0] * values[0] +
      matrix[2][1] * values[1] +
      matrix[2][2] * values[2],
  };
};

/**
 * Multiplication of a 3 x 3 Matrix by an XYZ
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {XYZ} vector a vector xyz object
 * @returns {{ [key: string]: number }} - resulting color space object
 */
export const matrixXyzMultiAsSpace = (
  matrix: Matrix3x3,
  vector: XYZ,
  space: string[]
): { [key: string]: number } => {
  return {
    [space[0]]:
      matrix[0][0] * vector.x +
      matrix[0][1] * vector.y +
      matrix[0][2] * vector.z,
    [space[1]]:
      matrix[1][0] * vector.x +
      matrix[1][1] * vector.y +
      matrix[1][2] * vector.z,
    [space[2]]:
      matrix[2][0] * vector.x +
      matrix[2][1] * vector.y +
      matrix[2][2] * vector.z,
  };
};

/**
 * Multiplication of a 3 x 3 Matrix by an RGB
 * @param {Matrix3x3} matrix 3 x 3 matrix
 * @param {RGB} vector a vector xyz object
 * @returns {{ [key: string]: number }} - resulting color space object
 */
export const matrixRgbMultiAsSpace = (
  matrix: Matrix3x3,
  vector: RGB,
  space: string[]
): { [key: string]: number } => {
  const { red, green, blue } = normalizeRgb(vector);
  return {
    [space[0]]:
      matrix[0][0] * red +
      matrix[0][1] * green +
      matrix[0][2] * blue,
    [space[1]]:
      matrix[1][0] * red +
      matrix[1][1] * green +
      matrix[1][2] * blue,
    [space[2]]:
      matrix[2][0] * red +
      matrix[2][1] * green +
      matrix[2][2] * blue,
  };
};
