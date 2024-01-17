"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixMlutiVector = exports.matrixMulti3x3 = void 0;
const matrixMulti3x3 = (a, b) => {
    if (a.length !== 3 || b.length !== 3)
        throw new Error('Not a 3 x 3 matrix.');
    return [
        [
            (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]) + (a[0][2] * b[2][0]),
            (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]) + (a[0][2] * b[2][1]),
            (a[0][0] * b[0][2]) + (a[0][1] * b[1][2]) + (a[0][2] * b[2][2])
        ],
        [
            (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]) + (a[1][2] * b[2][0]),
            (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]) + (a[1][2] * b[2][1]),
            (a[1][0] * b[0][2]) + (a[1][1] * b[1][2]) + (a[1][2] * b[2][2])
        ],
        [
            (a[2][0] * b[0][0]) + (a[2][1] * b[1][0]) + (a[2][2] * b[2][0]),
            (a[2][0] * b[0][1]) + (a[2][1] * b[1][1]) + (a[2][2] * b[2][1]),
            (a[2][0] * b[0][2]) + (a[2][1] * b[1][2]) + (a[2][2] * b[2][2])
        ]
    ];
};
exports.matrixMulti3x3 = matrixMulti3x3;
const matrixMlutiVector = (matrix, vector) => {
    if (matrix.length !== 3)
        throw new Error('Not a 3 x 3 matrix.');
    if (vector.length !== 3)
        throw new Error('Not a 3 x vector.');
    return [
        (matrix[0][0] * vector[0]) + (matrix[0][1] * vector[1]) + (matrix[0][2] * vector[2]),
        (matrix[1][0] * vector[0]) + (matrix[1][1] * vector[1]) + (matrix[1][2] * vector[2]),
        (matrix[2][0] * vector[0]) + (matrix[2][1] * vector[1]) + (matrix[2][2] * vector[2])
    ];
};
exports.matrixMlutiVector = matrixMlutiVector;
