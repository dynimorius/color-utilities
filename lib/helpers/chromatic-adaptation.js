"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D65toEAdaptation = exports.EtoD65Adaptation = exports.D65toCAdaptation = exports.CtoD65Adaptation = exports.D65toD50Adaptation = exports.D50toD65Adaptation = exports.chromaticAdaptation = void 0;
const constants_1 = require("../constants");
const matrix_1 = require("./matrix");
const chromaticAdaptation = (sourceWhite, destinationWhite) => {
    const Ma = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA;
    const Ma_1 = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
    const PYβs = (0, matrix_1.matrixMlutiVector)(Ma, sourceWhite);
    const PYβd = (0, matrix_1.matrixMlutiVector)(Ma, destinationWhite);
    const diff = [
        [PYβs[0] / PYβd[0], 0, 0],
        [0, PYβs[1] / PYβd[1], 0],
        [0, 0, PYβs[2] / PYβd[2]],
    ];
    return (0, matrix_1.matrixMulti3x3)((0, matrix_1.matrixMulti3x3)(Ma_1, diff), Ma);
};
exports.chromaticAdaptation = chromaticAdaptation;
const D50toD65Adaptation = (xyz) => {
    const M = (0, exports.chromaticAdaptation)([constants_1.REFERENCE_WHITES.D50.X, constants_1.REFERENCE_WHITES.D50.Y, constants_1.REFERENCE_WHITES.D50.Z], [constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z]);
    const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
    const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
    const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
    return { x, y, z };
};
exports.D50toD65Adaptation = D50toD65Adaptation;
const D65toD50Adaptation = (xyz) => {
    const M = (0, exports.chromaticAdaptation)([constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z], [constants_1.REFERENCE_WHITES.D50.X, constants_1.REFERENCE_WHITES.D50.Y, constants_1.REFERENCE_WHITES.D50.Z]);
    const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
    const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
    const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
    return { x, y, z };
};
exports.D65toD50Adaptation = D65toD50Adaptation;
const CtoD65Adaptation = (xyz) => {
    const M = (0, exports.chromaticAdaptation)([constants_1.REFERENCE_WHITES.C.X, constants_1.REFERENCE_WHITES.C.Y, constants_1.REFERENCE_WHITES.C.Z], [constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z]);
    const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
    const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
    const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
    return { x, y, z };
};
exports.CtoD65Adaptation = CtoD65Adaptation;
const D65toCAdaptation = (xyz) => {
    const M = (0, exports.chromaticAdaptation)([constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z], [constants_1.REFERENCE_WHITES.C.X, constants_1.REFERENCE_WHITES.C.Y, constants_1.REFERENCE_WHITES.C.Z]);
    const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
    const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
    const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
    return { x, y, z };
};
exports.D65toCAdaptation = D65toCAdaptation;
const EtoD65Adaptation = (xyz) => {
    const M = (0, exports.chromaticAdaptation)([constants_1.REFERENCE_WHITES.E.X, constants_1.REFERENCE_WHITES.E.Y, constants_1.REFERENCE_WHITES.E.Z], [constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z]);
    const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
    const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
    const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
    return { x, y, z };
};
exports.EtoD65Adaptation = EtoD65Adaptation;
const D65toEAdaptation = (xyz) => {
    const M = (0, exports.chromaticAdaptation)([constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z], [constants_1.REFERENCE_WHITES.E.X, constants_1.REFERENCE_WHITES.E.Y, constants_1.REFERENCE_WHITES.E.Z]);
    const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
    const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
    const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
    return { x, y, z };
};
exports.D65toEAdaptation = D65toEAdaptation;
