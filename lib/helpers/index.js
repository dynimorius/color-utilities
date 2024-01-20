"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValue = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
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
