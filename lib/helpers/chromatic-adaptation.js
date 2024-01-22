"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D65toEAdaptation = exports.D65toD75Adaptation = exports.D65toD55Adaptation = exports.D65toD50Adaptation = exports.D65toCAdaptation = exports.D65toBAdaptation = exports.D65toAAdaptation = exports.D50toF11Adaptation = exports.D50toF7Adaptation = exports.D50toF2Adaptation = exports.D50toEAdaptation = exports.D50toD75Adaptation = exports.D50toD65Adaptation = exports.D50toD55Adaptation = exports.D50toCAdaptation = exports.D50toBAdaptation = exports.D50toAAdaptation = exports.CtoF11Adaptation = exports.CtoF7Adaptation = exports.CtoF2Adaptation = exports.CtoEAdaptation = exports.CtoD75Adaptation = exports.CtoD65Adaptation = exports.CtoD55Adaptation = exports.CtoD50Adaptation = exports.CtoBAdaptation = exports.CtoAAdaptation = exports.BtoF11Adaptation = exports.BtoF7Adaptation = exports.BtoF2Adaptation = exports.BtoEAdaptation = exports.BtoD75Adaptation = exports.BtoD65Adaptation = exports.BtoD55Adaptation = exports.BtoD50Adaptation = exports.BtoCAdaptation = exports.BtoAAdaptation = exports.AtoF11Adaptation = exports.AtoF7Adaptation = exports.AtoF2Adaptation = exports.AtoEAdaptation = exports.AtoD75Adaptation = exports.AtoD65Adaptation = exports.AtoD55Adaptation = exports.AtoD50Adaptation = exports.AtoCAdaptation = exports.AtoBAdaptation = exports.chromaticAdaptationPreCal = exports.chromaticAdaptation = exports.linearTransformation = void 0;
exports.F11toD75Adaptation = exports.F11ToD65Adaptation = exports.F11toD55Adaptation = exports.F11toD50Adaptation = exports.F11toCAdaptation = exports.F11toBAdaptation = exports.F11toAAdaptation = exports.F7toF11Adaptation = exports.F7toF2Adaptation = exports.F7toEAdaptation = exports.F7toD75Adaptation = exports.F7ToD65Adaptation = exports.F7toD55Adaptation = exports.F7toD50Adaptation = exports.F7toCAdaptation = exports.F7toBAdaptation = exports.F7toAAdaptation = exports.F2toF11Adaptation = exports.F2toF7Adaptation = exports.F2toEAdaptation = exports.F2toD75Adaptation = exports.F2toD65Adaptation = exports.F2toD55Adaptation = exports.F2toD50Adaptation = exports.F2toCAdaptation = exports.F2toBAdaptation = exports.F2toAAdaptation = exports.EtoF11Adaptation = exports.EtoF7Adaptation = exports.EtoF2Adaptation = exports.EtoD75Adaptation = exports.EtoD65Adaptation = exports.EtoD55Adaptation = exports.EtoD50Adaptation = exports.EtoCAdaptation = exports.EtoBAdaptation = exports.EtoAAdaptation = exports.D75toF11Adaptation = exports.D75toF7Adaptation = exports.D75toF2Adaptation = exports.D75toEAdaptation = exports.D75toD65Adaptation = exports.D75toD55Adaptation = exports.D75toD50Adaptation = exports.D75toCAdaptation = exports.D75toBAdaptation = exports.D75toAAdaptation = exports.D65toF11Adaptation = exports.D65toF7Adaptation = exports.D65toF2Adaptation = void 0;
exports.F11toF7Adaptation = exports.F11toF2Adaptation = exports.F11toEAdaptation = void 0;
const adaptive_matrices_1 = require("../constants/adaptive_matrices");
const bradford_responce_domains_1 = require("../constants/bradford-responce-domains");
const matrix_1 = require("./matrix");
const linearTransformation = (sourceWhite, destinationWhite) => {
    const Ma = bradford_responce_domains_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA;
    const Ma_1 = bradford_responce_domains_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
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
const AtoBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_B);
};
exports.AtoBAdaptation = AtoBAdaptation;
const AtoCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_C);
};
exports.AtoCAdaptation = AtoCAdaptation;
const AtoD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_D50);
};
exports.AtoD50Adaptation = AtoD50Adaptation;
const AtoD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_D55);
};
exports.AtoD55Adaptation = AtoD55Adaptation;
const AtoD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_D65);
};
exports.AtoD65Adaptation = AtoD65Adaptation;
const AtoD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_D75);
};
exports.AtoD75Adaptation = AtoD75Adaptation;
const AtoEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_E);
};
exports.AtoEAdaptation = AtoEAdaptation;
const AtoF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_F2);
};
exports.AtoF2Adaptation = AtoF2Adaptation;
const AtoF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_F7);
};
exports.AtoF7Adaptation = AtoF7Adaptation;
const AtoF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.A_F11);
};
exports.AtoF11Adaptation = AtoF11Adaptation;
const BtoAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_A);
};
exports.BtoAAdaptation = BtoAAdaptation;
const BtoCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_C);
};
exports.BtoCAdaptation = BtoCAdaptation;
const BtoD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_D50);
};
exports.BtoD50Adaptation = BtoD50Adaptation;
const BtoD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_D55);
};
exports.BtoD55Adaptation = BtoD55Adaptation;
const BtoD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_D65);
};
exports.BtoD65Adaptation = BtoD65Adaptation;
const BtoD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_D75);
};
exports.BtoD75Adaptation = BtoD75Adaptation;
const BtoEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_E);
};
exports.BtoEAdaptation = BtoEAdaptation;
const BtoF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_F2);
};
exports.BtoF2Adaptation = BtoF2Adaptation;
const BtoF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_F7);
};
exports.BtoF7Adaptation = BtoF7Adaptation;
const BtoF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.B_F11);
};
exports.BtoF11Adaptation = BtoF11Adaptation;
const CtoAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_A);
};
exports.CtoAAdaptation = CtoAAdaptation;
const CtoBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_B);
};
exports.CtoBAdaptation = CtoBAdaptation;
const CtoD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_D50);
};
exports.CtoD50Adaptation = CtoD50Adaptation;
const CtoD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_D55);
};
exports.CtoD55Adaptation = CtoD55Adaptation;
const CtoD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_D65);
};
exports.CtoD65Adaptation = CtoD65Adaptation;
const CtoD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_D75);
};
exports.CtoD75Adaptation = CtoD75Adaptation;
const CtoEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_E);
};
exports.CtoEAdaptation = CtoEAdaptation;
const CtoF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_F2);
};
exports.CtoF2Adaptation = CtoF2Adaptation;
const CtoF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_F7);
};
exports.CtoF7Adaptation = CtoF7Adaptation;
const CtoF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.C_F11);
};
exports.CtoF11Adaptation = CtoF11Adaptation;
const D50toAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_A);
};
exports.D50toAAdaptation = D50toAAdaptation;
const D50toBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_B);
};
exports.D50toBAdaptation = D50toBAdaptation;
const D50toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_C);
};
exports.D50toCAdaptation = D50toCAdaptation;
const D50toD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_D55);
};
exports.D50toD55Adaptation = D50toD55Adaptation;
const D50toD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_D65);
};
exports.D50toD65Adaptation = D50toD65Adaptation;
const D50toD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_D75);
};
exports.D50toD75Adaptation = D50toD75Adaptation;
const D50toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_E);
};
exports.D50toEAdaptation = D50toEAdaptation;
const D50toF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_F2);
};
exports.D50toF2Adaptation = D50toF2Adaptation;
const D50toF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_F7);
};
exports.D50toF7Adaptation = D50toF7Adaptation;
const D50toF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D50_F11);
};
exports.D50toF11Adaptation = D50toF11Adaptation;
const D65toAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_A);
};
exports.D65toAAdaptation = D65toAAdaptation;
const D65toBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_B);
};
exports.D65toBAdaptation = D65toBAdaptation;
const D65toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_C);
};
exports.D65toCAdaptation = D65toCAdaptation;
const D65toD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_D50);
};
exports.D65toD50Adaptation = D65toD50Adaptation;
const D65toD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_D55);
};
exports.D65toD55Adaptation = D65toD55Adaptation;
const D65toD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_D75);
};
exports.D65toD75Adaptation = D65toD75Adaptation;
const D65toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_E);
};
exports.D65toEAdaptation = D65toEAdaptation;
const D65toF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_F2);
};
exports.D65toF2Adaptation = D65toF2Adaptation;
const D65toF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_F7);
};
exports.D65toF7Adaptation = D65toF7Adaptation;
const D65toF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D65_F11);
};
exports.D65toF11Adaptation = D65toF11Adaptation;
const D75toAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_A);
};
exports.D75toAAdaptation = D75toAAdaptation;
const D75toBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_B);
};
exports.D75toBAdaptation = D75toBAdaptation;
const D75toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_C);
};
exports.D75toCAdaptation = D75toCAdaptation;
const D75toD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_D50);
};
exports.D75toD50Adaptation = D75toD50Adaptation;
const D75toD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_D55);
};
exports.D75toD55Adaptation = D75toD55Adaptation;
const D75toD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_D65);
};
exports.D75toD65Adaptation = D75toD65Adaptation;
const D75toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_E);
};
exports.D75toEAdaptation = D75toEAdaptation;
const D75toF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_F2);
};
exports.D75toF2Adaptation = D75toF2Adaptation;
const D75toF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_F7);
};
exports.D75toF7Adaptation = D75toF7Adaptation;
const D75toF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.D75_F11);
};
exports.D75toF11Adaptation = D75toF11Adaptation;
const EtoAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_A);
};
exports.EtoAAdaptation = EtoAAdaptation;
const EtoBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_B);
};
exports.EtoBAdaptation = EtoBAdaptation;
const EtoCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_C);
};
exports.EtoCAdaptation = EtoCAdaptation;
const EtoD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_D50);
};
exports.EtoD50Adaptation = EtoD50Adaptation;
const EtoD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_D55);
};
exports.EtoD55Adaptation = EtoD55Adaptation;
const EtoD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_D65);
};
exports.EtoD65Adaptation = EtoD65Adaptation;
const EtoD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_D75);
};
exports.EtoD75Adaptation = EtoD75Adaptation;
const EtoF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_F2);
};
exports.EtoF2Adaptation = EtoF2Adaptation;
const EtoF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_F7);
};
exports.EtoF7Adaptation = EtoF7Adaptation;
const EtoF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.E_F11);
};
exports.EtoF11Adaptation = EtoF11Adaptation;
const F2toAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_A);
};
exports.F2toAAdaptation = F2toAAdaptation;
const F2toBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_B);
};
exports.F2toBAdaptation = F2toBAdaptation;
const F2toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_C);
};
exports.F2toCAdaptation = F2toCAdaptation;
const F2toD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D50);
};
exports.F2toD50Adaptation = F2toD50Adaptation;
const F2toD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D55);
};
exports.F2toD55Adaptation = F2toD55Adaptation;
const F2toD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D65);
};
exports.F2toD65Adaptation = F2toD65Adaptation;
const F2toD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D75);
};
exports.F2toD75Adaptation = F2toD75Adaptation;
const F2toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_E);
};
exports.F2toEAdaptation = F2toEAdaptation;
const F2toF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_F7);
};
exports.F2toF7Adaptation = F2toF7Adaptation;
const F2toF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F2_F11);
};
exports.F2toF11Adaptation = F2toF11Adaptation;
const F7toAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_A);
};
exports.F7toAAdaptation = F7toAAdaptation;
const F7toBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_B);
};
exports.F7toBAdaptation = F7toBAdaptation;
const F7toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_C);
};
exports.F7toCAdaptation = F7toCAdaptation;
const F7toD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D50);
};
exports.F7toD50Adaptation = F7toD50Adaptation;
const F7toD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D55);
};
exports.F7toD55Adaptation = F7toD55Adaptation;
const F7ToD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D65);
};
exports.F7ToD65Adaptation = F7ToD65Adaptation;
const F7toD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D75);
};
exports.F7toD75Adaptation = F7toD75Adaptation;
const F7toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_E);
};
exports.F7toEAdaptation = F7toEAdaptation;
const F7toF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_F2);
};
exports.F7toF2Adaptation = F7toF2Adaptation;
const F7toF11Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F7_F11);
};
exports.F7toF11Adaptation = F7toF11Adaptation;
const F11toAAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_A);
};
exports.F11toAAdaptation = F11toAAdaptation;
const F11toBAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_B);
};
exports.F11toBAdaptation = F11toBAdaptation;
const F11toCAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_C);
};
exports.F11toCAdaptation = F11toCAdaptation;
const F11toD50Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D50);
};
exports.F11toD50Adaptation = F11toD50Adaptation;
const F11toD55Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D55);
};
exports.F11toD55Adaptation = F11toD55Adaptation;
const F11ToD65Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D65);
};
exports.F11ToD65Adaptation = F11ToD65Adaptation;
const F11toD75Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D75);
};
exports.F11toD75Adaptation = F11toD75Adaptation;
const F11toEAdaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_E);
};
exports.F11toEAdaptation = F11toEAdaptation;
const F11toF2Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_F2);
};
exports.F11toF2Adaptation = F11toF2Adaptation;
const F11toF7Adaptation = (xyz) => {
    return (0, exports.chromaticAdaptationPreCal)(xyz, adaptive_matrices_1.ADAPTIVE_MATRICES.F11_F7);
};
exports.F11toF7Adaptation = F11toF7Adaptation;
