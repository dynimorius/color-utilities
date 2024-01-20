"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D65toEAdaptation = exports.EtoD65Adaptation = exports.D65toCAdaptation = exports.CtoD65Adaptation = exports.D65toD50Adaptation = exports.D50toD65Adaptation = exports.chromaticAdaptationPreCal = exports.chromaticAdaptation = exports.linearTransformation = void 0;
const constants_1 = require("../constants");
const matrix_1 = require("./matrix");
const linearTransformation = (sourceWhite, destinationWhite) => {
    const Ma = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA;
    const Ma_1 = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
    const PYβs = (0, matrix_1.matrixVectorMulti)(Ma, sourceWhite);
    const PYβd = (0, matrix_1.matrixVectorMulti)(Ma, destinationWhite);
    const diff = [
        [PYβs[0] / PYβd[0], 0, 0],
        [0, PYβs[1] / PYβd[1], 0],
        [0, 0, PYβs[2] / PYβd[2]],
    ];
    return (0, matrix_1.matrix3x3Multi)((0, matrix_1.matrix3x3Multi)(Ma_1, diff), Ma);
};
exports.linearTransformation = linearTransformation;
const chromaticAdaptation = (xyz, sRefWhite, dRefWhite) => {
    const M = (0, exports.linearTransformation)([sRefWhite.X, sRefWhite.Y, sRefWhite.Z], [dRefWhite.X, dRefWhite.Y, dRefWhite.Z]);
    return (0, matrix_1.matrixVectorMultiAsXyz)(M, xyz);
};
exports.chromaticAdaptation = chromaticAdaptation;
const chromaticAdaptationPreCal = (xyz, matrix) => {
    return (0, matrix_1.matrixVectorMultiAsXyz)(matrix, xyz);
};
exports.chromaticAdaptationPreCal = chromaticAdaptationPreCal;
const D50toD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, constants_1.ADAPTIVE_MATRICES.D50_D65);
};
exports.D50toD65Adaptation = D50toD65Adaptation;
const D65toD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, constants_1.ADAPTIVE_MATRICES.D65_D50);
};
exports.D65toD50Adaptation = D65toD50Adaptation;
const CtoD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, constants_1.ADAPTIVE_MATRICES.C_D65);
};
exports.CtoD65Adaptation = CtoD65Adaptation;
const D65toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, constants_1.ADAPTIVE_MATRICES.D65_C);
};
exports.D65toCAdaptation = D65toCAdaptation;
const EtoD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, constants_1.ADAPTIVE_MATRICES.E_D65);
};
exports.EtoD65Adaptation = EtoD65Adaptation;
const D65toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, constants_1.ADAPTIVE_MATRICES.D65_E);
};
exports.D65toEAdaptation = D65toEAdaptation;
