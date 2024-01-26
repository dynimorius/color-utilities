"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companding = exports.inverseLCompanding = exports.inverseGammaCompanding = exports.inverseSrbgCompanding = exports.LCompanding = exports.gammaCompanding = exports.sRgbCompanding = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
/*************************************************************
 *                        COMPANDING
 ************************************************************/
const sRgbCompanding = (value) => {
    return ((value <= constants_1.SRGB_NORMALIZED_BELOW
        ? 12.92 * value
        : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255);
};
exports.sRgbCompanding = sRgbCompanding;
const gammaCompanding = (value, gamma) => {
    return value < 0
        ? -Math.pow(Math.abs(value), 1 / gamma) * 255
        : Math.pow(value, 1 / gamma) * 255;
};
exports.gammaCompanding = gammaCompanding;
const LCompanding = (value) => {
    return ((value <= constants_1.CIE_ϵ ? (value * constants_1.CIE_κ) / 100 : 1.16 * Math.cbrt(value) - 0.16) *
        255);
};
exports.LCompanding = LCompanding;
/*************************************************************
 *                    INVERSE COMPANDING
 ************************************************************/
const inverseSrbgCompanding = (value) => {
    value = value / 255;
    return value <= constants_1.SRGB_INVERSE_NORMALIZED_BELOW
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
};
exports.inverseSrbgCompanding = inverseSrbgCompanding;
const inverseGammaCompanding = (value, gamma) => {
    value = value / 255;
    return value < 0 ? -Math.pow(Math.abs(value), gamma) : Math.pow(value, gamma);
};
exports.inverseGammaCompanding = inverseGammaCompanding;
const inverseLCompanding = (value) => {
    value = value / 255;
    return value <= constants_1.L_INVERSE_NORMALIZED_BELOW
        ? (100 * value) / constants_1.CIE_κ
        : Math.pow((value + 0.16) / 1.16, 3);
};
exports.inverseLCompanding = inverseLCompanding;
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
