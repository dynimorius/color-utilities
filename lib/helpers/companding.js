"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inverseLCompanding = exports.inverseGammaCompanding = exports.inverseSrbgCompanding = exports.LCompanding = exports.gammaCompanding = exports.sRgbCompanding = void 0;
const constants_1 = require("../constants");
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
    if (value < 0) {
        value = Math.abs(value);
        return -Math.pow(value, (1 / gamma)) * 255;
    }
    return Math.pow(value, (1 / gamma)) * 255;
};
exports.gammaCompanding = gammaCompanding;
const LCompanding = (value) => {
    return (value <= constants_1.CIE_ϵ ?
        (value * constants_1.CIE_κ) / 100 : 1.16 * Math.cbrt(value) - 0.16) * 255;
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
    if (value < 0) {
        value = Math.abs(value);
        return -Math.pow(value, gamma);
    }
    return Math.pow(value, gamma);
};
exports.inverseGammaCompanding = inverseGammaCompanding;
const inverseLCompanding = (value) => {
    value = value / 255;
    return value <= constants_1.L_INVERSE_NORMALIZED_BELOW ?
        (100 * value) / constants_1.CIE_κ : Math.pow(((value + 0.16) / 1.16), 3);
};
exports.inverseLCompanding = inverseLCompanding;
