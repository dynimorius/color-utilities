"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cie76ColorDiff = exports.deltaECIE76 = exports.comparativeDistance = void 0;
const rgb_conversions_1 = require("../conversions/rgb-conversions");
/**
 * Gets comparative distance for a given sRBG colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - distance
 */
const comparativeDistance = (rgb1, rgb2) => {
    const diff = Math.sqrt(Math.pow(rgb1.red - rgb2.red, 2) +
        Math.pow(rgb1.green - rgb2.green, 2) +
        Math.pow(rgb1.blue - rgb2.blue, 2));
    return Math.round(Math.abs(diff));
};
exports.comparativeDistance = comparativeDistance;
/**
 * Gets a delta E CIE 1976 value for a given colors
 * @param {LAB}                   - LAB values for the frist color
 * @param {LAB}                   - LAB values for the second color
 * @returns {number}              - difference
 */
const deltaECIE76 = (lab1, lab2) => {
    return Math.sqrt(Math.pow(lab1.luminance - lab2.luminance, 2) +
        Math.pow(lab1.a - lab2.a, 2) +
        Math.pow(lab1.b - lab2.b, 2));
};
exports.deltaECIE76 = deltaECIE76;
/**
 * Gets a delta E CIE 1976 value for a given colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - difference
 *  ΔE - (Delta E, dE) The measure of change in visual
 *  perception of two given colors
 * - more info:
 * https://zschuessler.github.io/DeltaE/learn/#:~:text=dE94%2C%20and%20dE00.-,Defining%20Delta%20E,in%20a%20variable%20or%20function
 */
const cie76ColorDiff = (rgb1, rgb2) => {
    return (0, exports.deltaECIE76)((0, rgb_conversions_1.sRgbToLab)(rgb1), (0, rgb_conversions_1.sRgbToLab)(rgb2));
};
exports.cie76ColorDiff = cie76ColorDiff;
