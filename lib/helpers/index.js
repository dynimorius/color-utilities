"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.bound = exports.formatValue = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
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
const bound = (value) => {
    return value < 0 ? 0 : value > 255 ? 255 : value;
};
exports.bound = bound;
const round = (value, decimals = constants_1.MAX_DECIMALS) => {
    const exp = Math.pow(10, decimals);
    return Math.round(+value * exp) / exp;
};
exports.round = round;
