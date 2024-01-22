import { XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";

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

