"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.radians = exports.degrees = exports.minmax = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const constants_1 = require("../constants");
const isWebSafeRGB = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafeRGB = isWebSafeRGB;
const isWebSafeHex = () => { };
exports.isWebSafeHex = isWebSafeHex;
const minmax = (n, min, max) => Math.max(min, Math.min(n, max));
exports.minmax = minmax;
//--Radians to degrees
const degrees = (radian) => (radian * 180) / Math.PI;
exports.degrees = degrees;
//--Degrees to radians
const radians = (degrees) => (degrees * Math.PI) / 180;
exports.radians = radians;
const round = (value, decimals = constants_1.MAX_DECIMALS) => {
    const exp = Math.pow(10, decimals);
    return Math.round(+value * exp) / exp;
};
exports.round = round;
