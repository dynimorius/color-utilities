"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseLCompanding = exports.inverseGammaCompanding = exports.inverseSrbgCompanding = exports.companding = exports.LCompanding = exports.gammaCompanding = exports.sRgbCompanding = void 0;
const conditionals_1 = require("../constants/conditionals");
const helpers_1 = require("../helpers");
/*************************************************************
 *                        COMPANDING
 ************************************************************/
/**
 * sRGB Companding
 * @param {number} value color value
 * @returns {number} - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const sRgbCompanding = (value) => {
    return ((value <= conditionals_1.SRGB_NORMALIZED_BELOW
        ? 12.92 * value
        : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255);
};
exports.sRgbCompanding = sRgbCompanding;
/**
 * Gamma Companding
 * @param {number} value color value
 * @returns {number} - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const gammaCompanding = (value, gamma) => {
    return value < 0
        ? -Math.pow(Math.abs(value), 1 / gamma) * 255
        : Math.pow(value, 1 / gamma) * 255;
};
exports.gammaCompanding = gammaCompanding;
/**
 * L* Companding
 * @param {number} value color value
 * @returns {number} - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const LCompanding = (value) => {
    return ((value <= conditionals_1.CIE_ϵ ? (value * conditionals_1.CIE_κ) / 100 : 1.16 * Math.cbrt(value) - 0.16) *
        255);
};
exports.LCompanding = LCompanding;
/**
 * RGB Companding
 * @param {RGB} rgb  RGB color values
 * @param {Function} compandingFun function to preform companding whit
 * @param {{ gamma?: number | null; rounded?: boolean; whitInBounds?: boolean }} options
 *              - rounded: should the returned values be rounded
 *              - whitInBounds: should the return values be in range of 0 - 255
 *              - gamma: should the gamma value from the space data set be used
 *                while companding
 * @returns {RGB} - companded RGB values
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const companding = ({ red, green, blue }, compandingFun, options) => {
    if (options === null || options === void 0 ? void 0 : options.rounded) {
        red = Math.round(compandingFun(...[red, options === null || options === void 0 ? void 0 : options.gamma]));
        green = Math.round(compandingFun(...[green, options === null || options === void 0 ? void 0 : options.gamma]));
        blue = Math.round(compandingFun(...[blue, options === null || options === void 0 ? void 0 : options.gamma]));
    }
    else {
        red = compandingFun(...[red, options === null || options === void 0 ? void 0 : options.gamma]);
        green = compandingFun(...[green, options === null || options === void 0 ? void 0 : options.gamma]);
        blue = compandingFun(...[blue, options === null || options === void 0 ? void 0 : options.gamma]);
    }
    return {
        red: (options === null || options === void 0 ? void 0 : options.whitInBounds) ? (0, helpers_1.bound)(red) : red,
        green: (options === null || options === void 0 ? void 0 : options.whitInBounds) ? (0, helpers_1.bound)(green) : green,
        blue: (options === null || options === void 0 ? void 0 : options.whitInBounds) ? (0, helpers_1.bound)(blue) : blue,
        inGamut: (0, helpers_1.gamutCheck)(red) && (0, helpers_1.gamutCheck)(green) && (0, helpers_1.gamutCheck)(blue),
    };
};
exports.companding = companding;
/*************************************************************
 *                    INVERSE COMPANDING
 ************************************************************/
/**
 * Inverse sRGB Companding
 * @param {number} value color value
 * @returns {number} - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const inverseSrbgCompanding = (value) => {
    value = value / 255;
    return value <= conditionals_1.SRGB_INVERSE_NORMALIZED_BELOW
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
};
exports.inverseSrbgCompanding = inverseSrbgCompanding;
/**
 * Inverse Gamma Companding
 * @param {number} value color value
 * @returns {number} - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const inverseGammaCompanding = (value, gamma) => {
    value = value / 255;
    return value < 0 ? -Math.pow(Math.abs(value), gamma) : Math.pow(value, gamma);
};
exports.inverseGammaCompanding = inverseGammaCompanding;
/**
 * Inverse L* Companding
 * @param {number} value color value
 * @returns {number} - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
const inverseLCompanding = (value) => {
    value = value / 255;
    return value <= conditionals_1.L_INVERSE_NORMALIZED_BELOW
        ? (100 * value) / conditionals_1.CIE_κ
        : Math.pow((value + 0.16) / 1.16, 3);
};
exports.inverseLCompanding = inverseLCompanding;
