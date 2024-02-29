"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 *
 * A chromatic adaptation transform (CAT) is capable of
 * predicting corresponding colors. A pair of corresponding
 * colors consists of a color observed under one illuminant
 * (say, D65) and another color that has the same appearance
 * when observed under a different illuminant (say, A).
 *
 * To present the von Kries hypothesis in terms of a chromatic
 * adaptation model, we need a 3 by 3 matrix M , which
 * transforms the tristimulus values (TSVs) 𝑋β, 𝑌β, 𝑍β under
 * an illuminant called β into the cone-like or sharper sensor
 * spaces (𝑅, 𝐺, 𝐵 or 𝐿, 𝑀, 𝑆 spaces)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.D55toF2Adaptation =
  exports.D55toEAdaptation =
  exports.D55toD75Adaptation =
  exports.D55toD65Adaptation =
  exports.D55toD50Adaptation =
  exports.D55toCAdaptation =
  exports.D55toBAdaptation =
  exports.D55toAAdaptation =
  exports.D50toF11Adaptation =
  exports.D50toF7Adaptation =
  exports.D50toF2Adaptation =
  exports.D50toEAdaptation =
  exports.D50toD75Adaptation =
  exports.D50toD65Adaptation =
  exports.D50toD55Adaptation =
  exports.D50toCAdaptation =
  exports.D50toBAdaptation =
  exports.D50toAAdaptation =
  exports.CtoF11Adaptation =
  exports.CtoF7Adaptation =
  exports.CtoF2Adaptation =
  exports.CtoEAdaptation =
  exports.CtoD75Adaptation =
  exports.CtoD65Adaptation =
  exports.CtoD55Adaptation =
  exports.CtoD50Adaptation =
  exports.CtoBAdaptation =
  exports.CtoAAdaptation =
  exports.BtoF11Adaptation =
  exports.BtoF7Adaptation =
  exports.BtoF2Adaptation =
  exports.BtoEAdaptation =
  exports.BtoD75Adaptation =
  exports.BtoD65Adaptation =
  exports.BtoD55Adaptation =
  exports.BtoD50Adaptation =
  exports.BtoCAdaptation =
  exports.BtoAAdaptation =
  exports.AtoF11Adaptation =
  exports.AtoF7Adaptation =
  exports.AtoF2Adaptation =
  exports.AtoEAdaptation =
  exports.AtoD75Adaptation =
  exports.AtoD65Adaptation =
  exports.AtoD55Adaptation =
  exports.AtoD50Adaptation =
  exports.AtoCAdaptation =
  exports.AtoBAdaptation =
  exports.chromaticAdaptationPreCal =
  exports.bradfordChromaticAdaptation =
    void 0;
exports.F7toEAdaptation =
  exports.F7toD75Adaptation =
  exports.F7ToD65Adaptation =
  exports.F7toD55Adaptation =
  exports.F7toD50Adaptation =
  exports.F7toCAdaptation =
  exports.F7toBAdaptation =
  exports.F7toAAdaptation =
  exports.F2toF11Adaptation =
  exports.F2toF7Adaptation =
  exports.F2toEAdaptation =
  exports.F2toD75Adaptation =
  exports.F2toD65Adaptation =
  exports.F2toD55Adaptation =
  exports.F2toD50Adaptation =
  exports.F2toCAdaptation =
  exports.F2toBAdaptation =
  exports.F2toAAdaptation =
  exports.EtoF11Adaptation =
  exports.EtoF7Adaptation =
  exports.EtoF2Adaptation =
  exports.EtoD75Adaptation =
  exports.EtoD65Adaptation =
  exports.EtoD55Adaptation =
  exports.EtoD50Adaptation =
  exports.EtoCAdaptation =
  exports.EtoBAdaptation =
  exports.EtoAAdaptation =
  exports.D75toF11Adaptation =
  exports.D75toF7Adaptation =
  exports.D75toF2Adaptation =
  exports.D75toEAdaptation =
  exports.D75toD65Adaptation =
  exports.D75toD55Adaptation =
  exports.D75toD50Adaptation =
  exports.D75toCAdaptation =
  exports.D75toBAdaptation =
  exports.D75toAAdaptation =
  exports.D65toF11Adaptation =
  exports.D65toF7Adaptation =
  exports.D65toF2Adaptation =
  exports.D65toEAdaptation =
  exports.D65toD75Adaptation =
  exports.D65toD55Adaptation =
  exports.D65toD50Adaptation =
  exports.D65toCAdaptation =
  exports.D65toBAdaptation =
  exports.D65toAAdaptation =
  exports.D55toF11Adaptation =
  exports.D55toF7Adaptation =
    void 0;
exports.F11toF7Adaptation =
  exports.F11toF2Adaptation =
  exports.F11toEAdaptation =
  exports.F11toD75Adaptation =
  exports.F11ToD65Adaptation =
  exports.F11toD55Adaptation =
  exports.F11toD50Adaptation =
  exports.F11toCAdaptation =
  exports.F11toBAdaptation =
  exports.F11toAAdaptation =
  exports.F7toF11Adaptation =
  exports.F7toF2Adaptation =
    void 0;
const adaptive_matrices_1 = require("../constants/adaptive_matrices");
const transform_matrixes_1 = require("../constants/transform-matrixes");
const matrix_1 = require("./matrix");
/**
 * Transform from XYZ into a cone response domain (ρ, γ, β),
 * using a Simplified Bradford Transform method
 * @param {number[]} sourceWhite source reference white
 * @param {number[]} destinationWhite destination reference white
 * @returns {Matrix3x3} - a 3 x 3 Matrix used to prefrom
 *                        linear transformation on a color
 */
const linearBradfordTransformation = (sourceWhite, destinationWhite) => {
  const Ma = transform_matrixes_1.BRADFORD_COEFFICIENT_MATRICES.MA;
  const Ma_1 = transform_matrixes_1.BRADFORD_COEFFICIENT_MATRICES.MA_1;
  const PYβs = (0, matrix_1.matrixVectorMulti)(Ma, sourceWhite);
  const PYβd = (0, matrix_1.matrixVectorMulti)(Ma, destinationWhite);
  const diff = [
    [PYβs[0] / PYβd[0], 0, 0],
    [0, PYβs[1] / PYβd[1], 0],
    [0, 0, PYβs[2] / PYβd[2]],
  ];
  return (0, matrix_1.matrix3x3Multi)(
    (0, matrix_1.matrix3x3Multi)(Ma_1, diff),
    Ma
  );
};
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values
 * @param {XYZ} xyz color values
 * @param {{ X: number; Y: number; Z: number }} sRefWhite source reference white
 * @param {{ X: number; Y: number; Z: number }} dRefWhite destination reference white
 * @returns {XYZ} - adapted xyz values
 */
const bradfordChromaticAdaptation = (xyz, sRefWhite, dRefWhite) => {
  //linear transformation
  const M = linearBradfordTransformation(
    [sRefWhite.X, sRefWhite.Y, sRefWhite.Z],
    [dRefWhite.X, dRefWhite.Y, dRefWhite.Z]
  );
  return (0, matrix_1.matrixVectorMultiAsXyz)(M, xyz);
};
exports.bradfordChromaticAdaptation = bradfordChromaticAdaptation;
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values with a
 * given 3 x 3 matrix
 * @param {XYZ} xyz color values
 * @param {Matrix3x3} matrix adaptation matrix
 * @returns {XYZ} - adapted xyz values
 */
const chromaticAdaptationPreCal = (xyz, matrix) => {
  return (0, matrix_1.matrixVectorMultiAsXyz)(matrix, xyz);
};
exports.chromaticAdaptationPreCal = chromaticAdaptationPreCal;
/**
 * Chromatic adaptation from reference white A to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_B
  );
};
exports.AtoBAdaptation = AtoBAdaptation;
/**
 * Chromatic adaptation from reference white A to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_C
  );
};
exports.AtoCAdaptation = AtoCAdaptation;
/**
 * Chromatic adaptation from reference white A to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_D50
  );
};
exports.AtoD50Adaptation = AtoD50Adaptation;
/**
 * Chromatic adaptation from reference white A to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_D55
  );
};
exports.AtoD55Adaptation = AtoD55Adaptation;
/**
 * Chromatic adaptation from reference white A to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_D65
  );
};
exports.AtoD65Adaptation = AtoD65Adaptation;
/**
 * Chromatic adaptation from reference white A to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_D75
  );
};
exports.AtoD75Adaptation = AtoD75Adaptation;
/**
 * Chromatic adaptation from reference white A to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_E
  );
};
exports.AtoEAdaptation = AtoEAdaptation;
/**
 * Chromatic adaptation from reference white A to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_F2
  );
};
exports.AtoF2Adaptation = AtoF2Adaptation;
/**
 * Chromatic adaptation from reference white A to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_F7
  );
};
exports.AtoF7Adaptation = AtoF7Adaptation;
/**
 * Chromatic adaptation from reference white A to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const AtoF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.A_F11
  );
};
exports.AtoF11Adaptation = AtoF11Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_A
  );
};
exports.BtoAAdaptation = BtoAAdaptation;
/**
 * Chromatic adaptation from reference white B to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_C
  );
};
exports.BtoCAdaptation = BtoCAdaptation;
/**
 * Chromatic adaptation from reference white B to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_D50
  );
};
exports.BtoD50Adaptation = BtoD50Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_D55
  );
};
exports.BtoD55Adaptation = BtoD55Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_D65
  );
};
exports.BtoD65Adaptation = BtoD65Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_D75
  );
};
exports.BtoD75Adaptation = BtoD75Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_E
  );
};
exports.BtoEAdaptation = BtoEAdaptation;
/**
 * Chromatic adaptation from reference white B to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_F2
  );
};
exports.BtoF2Adaptation = BtoF2Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_F7
  );
};
exports.BtoF7Adaptation = BtoF7Adaptation;
/**
 * Chromatic adaptation from reference white B to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const BtoF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.B_F11
  );
};
exports.BtoF11Adaptation = BtoF11Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_A
  );
};
exports.CtoAAdaptation = CtoAAdaptation;
/**
 * Chromatic adaptation from reference white C to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_B
  );
};
exports.CtoBAdaptation = CtoBAdaptation;
/**
 * Chromatic adaptation from reference white C to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_D50
  );
};
exports.CtoD50Adaptation = CtoD50Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_D55
  );
};
exports.CtoD55Adaptation = CtoD55Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_D65
  );
};
exports.CtoD65Adaptation = CtoD65Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_D75
  );
};
exports.CtoD75Adaptation = CtoD75Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_E
  );
};
exports.CtoEAdaptation = CtoEAdaptation;
/**
 * Chromatic adaptation from reference white C to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_F2
  );
};
exports.CtoF2Adaptation = CtoF2Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_F7
  );
};
exports.CtoF7Adaptation = CtoF7Adaptation;
/**
 * Chromatic adaptation from reference white C to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const CtoF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.C_F11
  );
};
exports.CtoF11Adaptation = CtoF11Adaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_A
  );
};
exports.D50toAAdaptation = D50toAAdaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_B
  );
};
exports.D50toBAdaptation = D50toBAdaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_C
  );
};
exports.D50toCAdaptation = D50toCAdaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_D55
  );
};
exports.D50toD55Adaptation = D50toD55Adaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_D65
  );
};
exports.D50toD65Adaptation = D50toD65Adaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_D75
  );
};
exports.D50toD75Adaptation = D50toD75Adaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_E
  );
};
exports.D50toEAdaptation = D50toEAdaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_F2
  );
};
exports.D50toF2Adaptation = D50toF2Adaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_F7
  );
};
exports.D50toF7Adaptation = D50toF7Adaptation;
/**
 * Chromatic adaptation from reference white D50 to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D50toF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D50_F11
  );
};
exports.D50toF11Adaptation = D50toF11Adaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_A
  );
};
exports.D55toAAdaptation = D55toAAdaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_B
  );
};
exports.D55toBAdaptation = D55toBAdaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_C
  );
};
exports.D55toCAdaptation = D55toCAdaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_D50
  );
};
exports.D55toD50Adaptation = D55toD50Adaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_D65
  );
};
exports.D55toD65Adaptation = D55toD65Adaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_D75
  );
};
exports.D55toD75Adaptation = D55toD75Adaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_E
  );
};
exports.D55toEAdaptation = D55toEAdaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_F2
  );
};
exports.D55toF2Adaptation = D55toF2Adaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_F7
  );
};
exports.D55toF7Adaptation = D55toF7Adaptation;
/**
 * Chromatic adaptation from reference white D55 to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D55toF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D55_F11
  );
};
exports.D55toF11Adaptation = D55toF11Adaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_A
  );
};
exports.D65toAAdaptation = D65toAAdaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_B
  );
};
exports.D65toBAdaptation = D65toBAdaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_C
  );
};
exports.D65toCAdaptation = D65toCAdaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_D50
  );
};
exports.D65toD50Adaptation = D65toD50Adaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_D55
  );
};
exports.D65toD55Adaptation = D65toD55Adaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_D75
  );
};
exports.D65toD75Adaptation = D65toD75Adaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_E
  );
};
exports.D65toEAdaptation = D65toEAdaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_F2
  );
};
exports.D65toF2Adaptation = D65toF2Adaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_F7
  );
};
exports.D65toF7Adaptation = D65toF7Adaptation;
/**
 * Chromatic adaptation from reference white D65 to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D65toF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D65_F11
  );
};
exports.D65toF11Adaptation = D65toF11Adaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_A
  );
};
exports.D75toAAdaptation = D75toAAdaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_B
  );
};
exports.D75toBAdaptation = D75toBAdaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_C
  );
};
exports.D75toCAdaptation = D75toCAdaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_D50
  );
};
exports.D75toD50Adaptation = D75toD50Adaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_D55
  );
};
exports.D75toD55Adaptation = D75toD55Adaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_D65
  );
};
exports.D75toD65Adaptation = D75toD65Adaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_E
  );
};
exports.D75toEAdaptation = D75toEAdaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_F2
  );
};
exports.D75toF2Adaptation = D75toF2Adaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_F7
  );
};
exports.D75toF7Adaptation = D75toF7Adaptation;
/**
 * Chromatic adaptation from reference white D75 to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const D75toF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.D75_F11
  );
};
exports.D75toF11Adaptation = D75toF11Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_A
  );
};
exports.EtoAAdaptation = EtoAAdaptation;
/**
 * Chromatic adaptation from reference white E to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_B
  );
};
exports.EtoBAdaptation = EtoBAdaptation;
/**
 * Chromatic adaptation from reference white E to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_C
  );
};
exports.EtoCAdaptation = EtoCAdaptation;
/**
 * Chromatic adaptation from reference white E to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_D50
  );
};
exports.EtoD50Adaptation = EtoD50Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_D55
  );
};
exports.EtoD55Adaptation = EtoD55Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_D65
  );
};
exports.EtoD65Adaptation = EtoD65Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_D75
  );
};
exports.EtoD75Adaptation = EtoD75Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_F2
  );
};
exports.EtoF2Adaptation = EtoF2Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_F7
  );
};
exports.EtoF7Adaptation = EtoF7Adaptation;
/**
 * Chromatic adaptation from reference white E to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const EtoF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.E_F11
  );
};
exports.EtoF11Adaptation = EtoF11Adaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_A
  );
};
exports.F2toAAdaptation = F2toAAdaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_B
  );
};
exports.F2toBAdaptation = F2toBAdaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_C
  );
};
exports.F2toCAdaptation = F2toCAdaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D50
  );
};
exports.F2toD50Adaptation = F2toD50Adaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D55
  );
};
exports.F2toD55Adaptation = F2toD55Adaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D65
  );
};
exports.F2toD65Adaptation = F2toD65Adaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_D75
  );
};
exports.F2toD75Adaptation = F2toD75Adaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_E
  );
};
exports.F2toEAdaptation = F2toEAdaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_F7
  );
};
exports.F2toF7Adaptation = F2toF7Adaptation;
/**
 * Chromatic adaptation from reference white F2 to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F2toF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F2_F11
  );
};
exports.F2toF11Adaptation = F2toF11Adaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_A
  );
};
exports.F7toAAdaptation = F7toAAdaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_B
  );
};
exports.F7toBAdaptation = F7toBAdaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_C
  );
};
exports.F7toCAdaptation = F7toCAdaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D50
  );
};
exports.F7toD50Adaptation = F7toD50Adaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D55
  );
};
exports.F7toD55Adaptation = F7toD55Adaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7ToD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D65
  );
};
exports.F7ToD65Adaptation = F7ToD65Adaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_D75
  );
};
exports.F7toD75Adaptation = F7toD75Adaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_E
  );
};
exports.F7toEAdaptation = F7toEAdaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_F2
  );
};
exports.F7toF2Adaptation = F7toF2Adaptation;
/**
 * Chromatic adaptation from reference white F7 to reference white F11
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F7toF11Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F7_F11
  );
};
exports.F7toF11Adaptation = F7toF11Adaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white A
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toAAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_A
  );
};
exports.F11toAAdaptation = F11toAAdaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white B
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toBAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_B
  );
};
exports.F11toBAdaptation = F11toBAdaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white C
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toCAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_C
  );
};
exports.F11toCAdaptation = F11toCAdaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white D50
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toD50Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D50
  );
};
exports.F11toD50Adaptation = F11toD50Adaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white D55
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toD55Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D55
  );
};
exports.F11toD55Adaptation = F11toD55Adaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white D65
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11ToD65Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D65
  );
};
exports.F11ToD65Adaptation = F11ToD65Adaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white D75
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toD75Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_D75
  );
};
exports.F11toD75Adaptation = F11toD75Adaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white E
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toEAdaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_E
  );
};
exports.F11toEAdaptation = F11toEAdaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white F2
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toF2Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_F2
  );
};
exports.F11toF2Adaptation = F11toF2Adaptation;
/**
 * Chromatic adaptation from reference white F11 to reference white F7
 * @param {XYZ} xyz color values
 * @returns {XYZ} - adapted xyz values
 */
const F11toF7Adaptation = (xyz) => {
  return (0, exports.chromaticAdaptationPreCal)(
    xyz,
    adaptive_matrices_1.ADAPTIVE_MATRICES.F11_F7
  );
};
exports.F11toF7Adaptation = F11toF7Adaptation;
