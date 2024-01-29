"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.bound = exports.formatValue = exports.gamutCheck = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const conditionals_1 = require("../constants/conditionals");
/**
 * Checks if a color is web safe
 * @param {RGB} rgb color value
 * @returns {boolean} - is color web safe
 */
const isWebSafeRGB = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafeRGB = isWebSafeRGB;
/**
 * Checks if a given hex value is of a color that is web safe
 * @param {string} color hex value
 * @returns {boolean} - is color web safe
 */
const isWebSafeHex = (color) => {
    const hexCheck = ["00", "33", "66", "99", "CC", "FF"];
    return (hexCheck.includes(color.slice(0, 2)) &&
        hexCheck.includes(color.slice(2, 2)) &&
        hexCheck.includes(color.slice(4)));
};
exports.isWebSafeHex = isWebSafeHex;
/**
 * Checks if a RGB color is in Gamut
 * @param {RGB} rgb color value
 * @returns {boolean} - is color whit in Gamut
 */
const gamutCheck = (value) => {
    return !isNaN(value) && value >= 0 && value <= 255;
};
exports.gamutCheck = gamutCheck;
const formatValue = (value) => Math.round(value * 100);
exports.formatValue = formatValue;
/**
 * Baunds a numeric value to a range between 0 and 255
 * @param {number} value a number
 * @returns {number} - returns a number value which will be in t he range 0 - 255
 */
const bound = (value) => {
    return value < 0 ? 0 : value > 255 ? 255 : value;
};
exports.bound = bound;
/**
 * Raunds a numeric value to a number of decimals
 * @param {number} value a number to round
 * @param {number} decimals  a number of decimals to round to
 * @returns {number} - returns a rounded number
 */
const round = (value, decimals = conditionals_1.MAX_DECIMALS) => {
    const exp = Math.pow(10, decimals);
    return Math.round(+value * exp) / exp;
};
exports.round = round;
