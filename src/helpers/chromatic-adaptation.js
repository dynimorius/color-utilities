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
import { ADAPTIVE_MATRICES } from "../constants/adaptive_matrices";
import { BRADFORD_COEFFICIENT_MATRICES } from "../constants/transform-matrixes";
import { matrix3x3Multi, matrixVectorMulti, matrixVectorMultiAsXyz, } from "./matrix";
/**
 * Transform from XYZ into a cone response domain (ρ, γ, β),
 * using a Simplified Bradford Transform method
 * @param {number[]}                   - source reference white
 * @param {number[]}                   - destination reference white
 * @returns {Matrix3x3}                - a 3 x 3 Matrix used to prefrom
 *                                     linear transformation on a color
 */
const linearBradfordTransformation = (sourceWhite, destinationWhite) => {
    const Ma = BRADFORD_COEFFICIENT_MATRICES.MA;
    const Ma_1 = BRADFORD_COEFFICIENT_MATRICES.MA_1;
    const PYβs = matrixVectorMulti(Ma, sourceWhite);
    const PYβd = matrixVectorMulti(Ma, destinationWhite);
    const diff = [
        [PYβs[0] / PYβd[0], 0, 0],
        [0, PYβs[1] / PYβd[1], 0],
        [0, 0, PYβs[2] / PYβd[2]],
    ];
    return matrix3x3Multi(matrix3x3Multi(Ma_1, diff), Ma);
};
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values
 * @param {XYZ}                                 - color values
 * @param {{ X: number; Y: number; Z: number }} - source reference white
 * @param {{ X: number; Y: number; Z: number }} - destination reference white
 * @returns {XYZ} - adapted xyz values
 */
export const bradfordChromaticAdaptation = (xyz, sRefWhite, dRefWhite) => {
    //linear transformation
    const M = linearBradfordTransformation([sRefWhite.X, sRefWhite.Y, sRefWhite.Z], [dRefWhite.X, dRefWhite.Y, dRefWhite.Z]);
    return matrixVectorMultiAsXyz(M, xyz);
};
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values with a
 * given 3 x 3 matrix
 * @param {XYZ}                   - color values
 * @param {Matrix3x3}             - adaptation matrix
 * @returns {XYZ}                 - adapted xyz values
 */
export const chromaticAdaptationPreCal = (xyz, matrix) => {
    return matrixVectorMultiAsXyz(matrix, xyz);
};
/**
 * Chromatic adaptation from reference white A to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_B);
};
/**
 * Chromatic adaptation from reference white A to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_C);
};
/**
 * Chromatic adaptation from reference white A to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D50);
};
/**
 * Chromatic adaptation from reference white A to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D55);
};
/**
 * Chromatic adaptation from reference white A to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D65);
};
/**
 * Chromatic adaptation from reference white A to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_D75);
};
/**
 * Chromatic adaptation from reference white A to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_E);
};
/**
 * Chromatic adaptation from reference white A to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F2);
};
/**
 * Chromatic adaptation from reference white A to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F7);
};
/**
 * Chromatic adaptation from reference white A to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const AtoF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.A_F11);
};
/**
 * Chromatic adaptation from reference white B to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_A);
};
/**
 * Chromatic adaptation from reference white B to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_C);
};
/**
 * Chromatic adaptation from reference white B to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D50);
};
/**
 * Chromatic adaptation from reference white B to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D55);
};
/**
 * Chromatic adaptation from reference white B to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D65);
};
/**
 * Chromatic adaptation from reference white B to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_D75);
};
/**
 * Chromatic adaptation from reference white B to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_E);
};
/**
 * Chromatic adaptation from reference white B to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F2);
};
/**
 * Chromatic adaptation from reference white B to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F7);
};
/**
 * Chromatic adaptation from reference white B to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const BtoF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.B_F11);
};
/**
 * Chromatic adaptation from reference white C to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_A);
};
/**
 * Chromatic adaptation from reference white C to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_B);
};
/**
 * Chromatic adaptation from reference white C to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D50);
};
/**
 * Chromatic adaptation from reference white C to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D55);
};
/**
 * Chromatic adaptation from reference white C to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D65);
};
/**
 * Chromatic adaptation from reference white C to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_D75);
};
/**
 * Chromatic adaptation from reference white C to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_E);
};
/**
 * Chromatic adaptation from reference white C to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F2);
};
/**
 * Chromatic adaptation from reference white C to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F7);
};
/**
 * Chromatic adaptation from reference white C to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const CtoF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.C_F11);
};
/**
 * Chromatic adaptation from reference white D50 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_A);
};
/**
 * Chromatic adaptation from reference white D50 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_B);
};
/**
 * Chromatic adaptation from reference white D50 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_C);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D55);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D65);
};
/**
 * Chromatic adaptation from reference white D50 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_D75);
};
/**
 * Chromatic adaptation from reference white D50 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_E);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F2);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F7);
};
/**
 * Chromatic adaptation from reference white D50 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D50toF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D50_F11);
};
/**
 * Chromatic adaptation from reference white D55 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_A);
};
/**
 * Chromatic adaptation from reference white D55 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_B);
};
/**
 * Chromatic adaptation from reference white D55 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_C);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D50);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D65);
};
/**
 * Chromatic adaptation from reference white D55 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_D75);
};
/**
 * Chromatic adaptation from reference white D55 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_E);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz valuess
 */
export const D55toF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F2);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F7);
};
/**
 * Chromatic adaptation from reference white D55 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D55toF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D55_F11);
};
/**
 * Chromatic adaptation from reference white D65 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_A);
};
/**
 * Chromatic adaptation from reference white D65 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_B);
};
/**
 * Chromatic adaptation from reference white D65 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_C);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D50);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D55);
};
/**
 * Chromatic adaptation from reference white D65 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_D75);
};
/**
 * Chromatic adaptation from reference white D65 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_E);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F2);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F7);
};
/**
 * Chromatic adaptation from reference white D65 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D65toF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D65_F11);
};
/**
 * Chromatic adaptation from reference white D75 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_A);
};
/**
 * Chromatic adaptation from reference white D75 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_B);
};
/**
 * Chromatic adaptation from reference white D75 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_C);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D50);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D55);
};
/**
 * Chromatic adaptation from reference white D75 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_D65);
};
/**
 * Chromatic adaptation from reference white D75 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_E);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F2);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F7);
};
/**
 * Chromatic adaptation from reference white D75 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const D75toF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.D75_F11);
};
/**
 * Chromatic adaptation from reference white E to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_A);
};
/**
 * Chromatic adaptation from reference white E to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_B);
};
/**
 * Chromatic adaptation from reference white E to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_C);
};
/**
 * Chromatic adaptation from reference white E to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D50);
};
/**
 * Chromatic adaptation from reference white E to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D55);
};
/**
 * Chromatic adaptation from reference white E to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D65);
};
/**
 * Chromatic adaptation from reference white E to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_D75);
};
/**
 * Chromatic adaptation from reference white E to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F2);
};
/**
 * Chromatic adaptation from reference white E to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F7);
};
/**
 * Chromatic adaptation from reference white E to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const EtoF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.E_F11);
};
/**
 * Chromatic adaptation from reference white F2 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_A);
};
/**
 * Chromatic adaptation from reference white F2 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_B);
};
/**
 * Chromatic adaptation from reference white F2 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_C);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D50);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D55);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D65);
};
/**
 * Chromatic adaptation from reference white F2 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_D75);
};
/**
 * Chromatic adaptation from reference white F2 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_E);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F7);
};
/**
 * Chromatic adaptation from reference white F2 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F2toF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F2_F11);
};
/**
 * Chromatic adaptation from reference white F7 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_A);
};
/**
 * Chromatic adaptation from reference white F7 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_B);
};
/**
 * Chromatic adaptation from reference white F7 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_C);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D50);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D55);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7ToD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D65);
};
/**
 * Chromatic adaptation from reference white F7 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_D75);
};
/**
 * Chromatic adaptation from reference white F7 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_E);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F2);
};
/**
 * Chromatic adaptation from reference white F7 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F7toF11Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F7_F11);
};
/**
 * Chromatic adaptation from reference white F11 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toAAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_A);
};
/**
 * Chromatic adaptation from reference white F11 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toBAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_B);
};
/**
 * Chromatic adaptation from reference white F11 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toCAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_C);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD50Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D50);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD55Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D55);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11ToD65Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D65);
};
/**
 * Chromatic adaptation from reference white F11 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toD75Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_D75);
};
/**
 * Chromatic adaptation from reference white F11 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toEAdaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_E);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF2Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F2);
};
/**
 * Chromatic adaptation from reference white F11 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export const F11toF7Adaptation = (xyz) => {
    return chromaticAdaptationPreCal(xyz, ADAPTIVE_MATRICES.F11_F7);
};
