"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chromaticAdaptation = exports.gammaAdobeRgb = exports.linearAdobeRgb = exports.gammaSrbg = exports.linearSRGB = exports.formatValue = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const constants_1 = require("../constants");
const isWebSafeRGB = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafeRGB = isWebSafeRGB;
const isWebSafeHex = (color) => {
    const hexCheck = ["00", "33", "66", "99", "CC", "FF"];
    return (hexCheck.includes(color.slice(0, 2)) &&
        hexCheck.includes(color.slice(2, 2)) &&
        hexCheck.includes(color.slice(4)));
};
exports.isWebSafeHex = isWebSafeHex;
const formatValue = (value) => Math.round(value * 100);
exports.formatValue = formatValue;
const linearSRGB = (value) => {
    value = value / 255;
    return value <= constants_1.LINEAR_NORMALIZED_BELOW
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
};
exports.linearSRGB = linearSRGB;
const gammaSrbg = (value) => {
    return (value <= constants_1.GAMMA_NORMALIZED_BELOW
        ? 12.92 * value
        : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255;
};
exports.gammaSrbg = gammaSrbg;
const linearAdobeRgb = (value) => {
    value = value / 255;
    return Math.pow(value, 2.199);
};
exports.linearAdobeRgb = linearAdobeRgb;
const gammaAdobeRgb = (value) => {
    return Math.pow(value, 0.454752) * 255;
};
exports.gammaAdobeRgb = gammaAdobeRgb;
const chromaticAdaptation = () => {
};
exports.chromaticAdaptation = chromaticAdaptation;
