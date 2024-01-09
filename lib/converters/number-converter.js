"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberToRGB = exports.decimalToHex = void 0;
const decimalToHex = (d) => {
    return Math.round(parseFloat(d) * 255).toString(16);
};
exports.decimalToHex = decimalToHex;
const numberToRGB = (color) => {
    return {
        red: color >> 16,
        green: (color & 0xff00) >> 8,
        blue: color & 0xff,
    };
};
exports.numberToRGB = numberToRGB;
