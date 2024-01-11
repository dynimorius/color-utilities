"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const isWebSafeRGB = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafeRGB = isWebSafeRGB;
const isWebSafeHex = () => { };
exports.isWebSafeHex = isWebSafeHex;
