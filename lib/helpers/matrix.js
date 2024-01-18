"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixVectorMultiAsXyz = exports.matrixVectorMulti = exports.matrix3x3Multi = void 0;
const matrix3x3Multi = (a, b) => {
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
exports.matrix3x3Multi = matrix3x3Multi;
const matrixVectorMulti = (matrix, vector) => {
    return [
        (matrix[0][0] * vector[0]) + (matrix[0][1] * vector[1]) + (matrix[0][2] * vector[2]),
        (matrix[1][0] * vector[0]) + (matrix[1][1] * vector[1]) + (matrix[1][2] * vector[2]),
        (matrix[2][0] * vector[0]) + (matrix[2][1] * vector[1]) + (matrix[2][2] * vector[2])
    ];
};
exports.matrixVectorMulti = matrixVectorMulti;
const matrixVectorMultiAsXyz = (matrix, vector) => {
    return {
        x: (matrix[0][0] * vector.x) + (matrix[0][1] * vector.y) + (matrix[0][2] * vector.z),
        y: (matrix[1][0] * vector.x) + (matrix[1][1] * vector.y) + (matrix[1][2] * vector.z),
        z: (matrix[2][0] * vector.x) + (matrix[2][1] * vector.y) + (matrix[2][2] * vector.z)
    };
};
exports.matrixVectorMultiAsXyz = matrixVectorMultiAsXyz;
