"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deltaECIE00Rgb = exports.deltaECIE00Lab = void 0;
const formats_and_checks_1 = require("../helpers/formats-and-checks");
const delta_e_helpers_1 = require("./delta-e-helpers");
const rgb_conversions_1 = require("./../conversions/rgb-conversions");
/**
 * Computes Delta E using the CIE2000 algorithm
 * - more infor: http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @param {LAB}				- values for the frist color
 * @param {LAB}				- values for the second color
 * @param {LCH}				- optional waight configuration object
 * @returns {number}	    - color difference value
*/
const deltaECIE00Lab = (lab1, lab2, weights) => {
    const lightness = weights?.lightness ?? 1;
    const chroma = weights?.chroma ?? 1;
    const hue = weights?.hue ?? 1;
    const deltaL = lab2.luminance - lab1.luminance;
    const Lbar = (lab1.luminance + lab2.luminance) / 2;
    const c1 = (0, delta_e_helpers_1.getDeltaChroma)(lab1.a, lab1.b);
    const c2 = (0, delta_e_helpers_1.getDeltaChroma)(lab2.a, lab2.b);
    const CBar = (c1 + c2) / 2;
    const aPrime1 = getPrimeA(lab1.a, CBar);
    const aPrime2 = getPrimeA(lab2.a, CBar);
    const CPrime1 = (0, delta_e_helpers_1.getDeltaChroma)(aPrime1, lab1.b);
    const CPrime2 = (0, delta_e_helpers_1.getDeltaChroma)(aPrime2, lab2.b);
    const CBarPrime = (CPrime1 + CPrime2) / 2;
    const deltaC = CPrime2 - CPrime1;
    const SsubL = 1 + (0.015 * Math.pow(Lbar - 50, 2)) / Math.sqrt(20 + Math.pow(Lbar - 50, 2));
    const SsubC = 1 + 0.045 * CBarPrime;
    const hPrime1 = getHueAngle(lab1.b, aPrime1);
    const hPrime2 = getHueAngle(lab2.b, aPrime2);
    const deltahPrime = getDeltahPrime(c1, c2, hPrime1, hPrime2);
    const deltaHPrime = 2 *
        Math.sqrt(CPrime1 * CPrime2) *
        Math.sin((0, formats_and_checks_1.degreesToRadians)(deltahPrime) / 2);
    const HBarPrime = getHBarPrime(hPrime1, hPrime2);
    const T = getT(HBarPrime);
    const SsubH = 1 + 0.015 * CBarPrime * T;
    const RsubT = getRsubT(CBarPrime, HBarPrime);
    const L = deltaL / (lightness * SsubL);
    const c = deltaC / (chroma * SsubC);
    const h = deltaHPrime / (hue * SsubH);
    return Math.sqrt(Math.pow(L, 2) + Math.pow(c, 2) + Math.pow(h, 2) + RsubT * c * h);
};
exports.deltaECIE00Lab = deltaECIE00Lab;
/**
 * Gets a delta E CIE 2000 value for a given colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - color difference value
 *  ΔE - (Delta E, dE) The measure of change in visual
 *  perception of two given colors
 */
const deltaECIE00Rgb = (rgb1, rgb2) => {
    return (0, exports.deltaECIE00Lab)((0, rgb_conversions_1.sRgbToLab)(rgb1), (0, rgb_conversions_1.sRgbToLab)(rgb2));
};
exports.deltaECIE00Rgb = deltaECIE00Rgb;
/**
 * Calculates prime a.
 * @param {number}                 - a value
 * @param {number}                 - C Bar value
 * @returns {number}               - a prime value
 */
const getPrimeA = (a, CBar) => {
    return (a +
        (a / 2) *
            (1 - Math.sqrt(Math.pow(CBar, 7) / (Math.pow(CBar, 7) + 6103515625))));
};
/**
 * Calculates Hue Angle.
 * @param {number}                 - b value
 * @param {number}                 - a Prime value
 * @returns {number}               - hue Angle value
 */
const getHueAngle = (b, aPrime) => {
    if (!b && !aPrime)
        return 0;
    const hueAngle = (0, formats_and_checks_1.radiansToDegrees)(Math.atan2(b, aPrime));
    return hueAngle >= 0 ? hueAngle : hueAngle + 360;
};
/**
 * Returns the Delta h Prime variable calculation.
 * @param {number}                 - C1(chroma) value
 * @param {number}                 - C2(chroma) value
 * @param {number}                 - h1(hue) value
 * @param {number}                 - h2(hue) value
 * @returns {number}               - Δh
 */
const getDeltahPrime = (C1, C2, hPrime1, hPrime2) => {
    if (!C1 || !C2)
        return 0;
    else if (Math.abs(hPrime1 - hPrime2) <= 180)
        return hPrime2 - hPrime1;
    else if (hPrime2 <= hPrime1)
        return hPrime2 - hPrime1 + 360;
    else
        return hPrime2 - hPrime1 - 360;
};
/**
 * Returns the H Bar Prime variable calculation.
 * @param {number}                 - h1(hue) value
 * @param {number}                 - h2(hue) value
 * @returns {number}               - H Bar value
 */
const getHBarPrime = (hPrime1, hPrime2) => {
    return Math.abs(hPrime1 - hPrime2) > 180
        ? (hPrime1 + hPrime2 + 360) / 2
        : (hPrime1 + hPrime2) / 2;
};
/**
 * Returns the T variable calculation.
 * @param {number}                 - H Bar value
 * @returns {number}               - T value
 */
const getT = (HBarPrime) => {
    return (1 -
        0.17 * Math.cos((0, formats_and_checks_1.degreesToRadians)(HBarPrime - 30)) +
        0.24 * Math.cos((0, formats_and_checks_1.degreesToRadians)(2 * HBarPrime)) +
        0.32 * Math.cos((0, formats_and_checks_1.degreesToRadians)(3 * HBarPrime + 6)) -
        0.2 * Math.cos((0, formats_and_checks_1.degreesToRadians)(4 * HBarPrime - 63)));
};
/**
 * Returns the RT variable calculation.
 * @param {number}                 - C Bar value
 * @param {number}                 - H Bar value
 * @returns {number}               - RT value
 */
const getRsubT = (CBarPrime, HBarPrime) => {
    return (-2 *
        Math.sqrt(Math.pow(CBarPrime, 7) / (Math.pow(CBarPrime, 7) + Math.pow(25, 7))) *
        Math.sin((0, formats_and_checks_1.degreesToRadians)(60 * Math.exp(-Math.pow((HBarPrime - 275) / 25, 2)))));
};
