/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 * 
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
*/

import { LAB, LCH } from "interfaces/color-spaces.interface";
import { getDeltaChroma } from './delta-e-helpers';

/**
 * Computes Delta E using the CIE94 algorithm
 * - more infor: http://en.wikipedia.org/wiki/Color_difference#CIE94
 * @param {LAB}				- values for the frist color
 * @param {LAB}				- values for the second color
 * @param {LCH}				- optional waight values 
 * @returns {number}	    - color difference value
*/
export const deltaECIE94Lab = (
  lab1: LAB,
  lab2: LAB,
  weights?: LCH
): number => {
    const lightness = weights?.lightness || 1;
    const chroma = weights?.chroma || 1;
    
    let K1 = lightness === 1 ? 0.045 : 0.048;
    let K2 = lightness === 1 ? 0.015 : 0.014;
    
    const c1 = getDeltaChroma(lab1.a, lab1.b);
    const c2 = getDeltaChroma(lab2.a, lab2.b);
    
    const sc = 1 + K1 * c1;
    const sh = 1 + K2 * c1;

    const deltaA = lab1.a - lab2.a;
    const deltaB = lab1.b - lab2.b;
    
    const cab = c1 - c2;
    const hab = Math.sqrt(
        Math.pow(deltaA, 2) +
        Math.pow(deltaB, 2) +
        Math.pow(cab, 2)
    ) || 0;

    const L = (lab1.luminance - lab2.luminance) / lightness;
    const a = cab / (chroma * sc);
    const b = hab / sh;

    return Math.sqrt(
        Math.pow(L, 2) +
        Math.pow(a, 2) +
        Math.pow(b, 2)
    )
};
