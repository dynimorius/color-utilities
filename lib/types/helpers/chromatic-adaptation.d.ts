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
import { XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values
 * @param {XYZ}                                 - color values
 * @param {{ X: number; Y: number; Z: number }} - source reference white
 * @param {{ X: number; Y: number; Z: number }} - destination reference white
 * @returns {XYZ} - adapted xyz values
 */
export declare const bradfordChromaticAdaptation: (xyz: XYZ, sRefWhite: {
    X: number;
    Y: number;
    Z: number;
}, dRefWhite: {
    X: number;
    Y: number;
    Z: number;
}) => XYZ;
/**
 * Preforms a chromatic adaptation algorithm on given XYZ values with a
 * given 3 x 3 matrix
 * @param {XYZ}                   - color values
 * @param {Matrix3x3}             - adaptation matrix
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const chromaticAdaptationPreCal: (xyz: XYZ, matrix: Matrix3x3) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white A to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const AtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white B to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const BtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white C to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const CtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D50 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D50toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz valuess
 */
export declare const D55toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D55 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D55toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D65 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D65toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white D75 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const D75toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white E to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const EtoF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF7Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F2 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F2toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7ToD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F7 to reference white F11
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F7toF11Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white A
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toAAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white B
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toBAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white C
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toCAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D50
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD50Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D55
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD55Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D65
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11ToD65Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white D75
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toD75Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white E
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toEAdaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F2
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF2Adaptation: (xyz: XYZ) => XYZ;
/**
 * Chromatic adaptation from reference white F11 to reference white F7
 * @param {XYZ}                   - color values
 * @returns {XYZ}                 - adapted xyz values
 */
export declare const F11toF7Adaptation: (xyz: XYZ) => XYZ;
