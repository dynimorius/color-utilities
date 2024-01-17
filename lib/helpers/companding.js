"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearCompanding = exports.inverseLCompanding = exports.LCompanding = exports.inverseGammaCompanding = exports.gammaCompanding = exports.inverseSrbgCompanding = exports.sRgbCompanding = void 0;
const constants_1 = require("../constants");
const matrix_1 = require("./matrix");
const sRgbCompanding = (value) => {
    return ((value <= constants_1.GAMMA_NORMALIZED_BELOW
        ? 12.92 * value
        : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255);
};
exports.sRgbCompanding = sRgbCompanding;
const inverseSrbgCompanding = (value) => {
    value = value / 255;
    return value <= constants_1.LINEAR_NORMALIZED_BELOW
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
};
exports.inverseSrbgCompanding = inverseSrbgCompanding;
const gammaCompanding = (value, gamma) => {
    return Math.pow(value, 1 / gamma) * 255;
};
exports.gammaCompanding = gammaCompanding;
const inverseGammaCompanding = (value, gamma) => {
    value = value / 255;
    return Math.pow(value, gamma);
};
exports.inverseGammaCompanding = inverseGammaCompanding;
const LCompanding = (value) => {
    value = value / 255;
    return value <= 0.08 ?
        (100 * value) / constants_1.CIE_κ : Math.pow(((value + 0.16) / 1.16), 3);
};
exports.LCompanding = LCompanding;
const inverseLCompanding = (value) => {
    value = value / 255;
    return value <= constants_1.CIE_ϵ ?
        (value * constants_1.CIE_κ) / 100 : 116 * Math.cbrt(value - 0.16);
};
exports.inverseLCompanding = inverseLCompanding;
const linearCompanding = (xyz, matrix) => {
    const xyzArr = [xyz.x, xyz.y, xyz.z];
    const rgbArr = (0, matrix_1.matrixMlutiVector)(matrix, xyzArr);
    return { red: rgbArr[0], green: rgbArr[1], blue: rgbArr[2] };
};
exports.linearCompanding = linearCompanding;
