"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = exports.round = exports.bound = exports.formatValue = exports.gamutCheck = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const conditionals_1 = require("../constants/conditionals");
/**
 * Checks if a color is web safe
 * @param {RGB}                   - RGB color values
 * @returns {boolean}             - is color web safe
 */
const isWebSafeRGB = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafeRGB = isWebSafeRGB;
/**
 * Checks if a given hex value is of a color that is web safe
 * @param {string}                 - hex value
 * @returns {boolean}              - is color web safe
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
 * @param {RGB}                   - color value
 * @returns {boolean}             - is color whit in Gamut
 */
const gamutCheck = (value) => {
    return !isNaN(value) && value >= 0 && value <= 255;
};
exports.gamutCheck = gamutCheck;
const formatValue = (value) => Math.round(value * 100);
exports.formatValue = formatValue;
/**
 * Baunds a numeric value to a range between 0 and 255
 * @param {number}                 - numeric value
 * @returns {number}               - returns a number value which will be in t he range 0 - 255
 */
const bound = (value) => {
    const upperLimVal = value > 255 ? 255 : value;
    return value < 0 ? 0 : upperLimVal;
};
exports.bound = bound;
/**
 * Raunds a numeric value to a number of decimals
 * @param {number}                 - a number to round
 * @param {number}                 - a number of decimals to round to
 * @returns {number}               - returns a rounded number
 */
const round = (value, decimals = conditionals_1.MAX_DECIMALS) => {
    const exp = Math.pow(10, decimals);
    return Math.round(+value * exp) / exp;
};
exports.round = round;
/**
 * Clamps a numeric value to a given range
 * @param {number}                 - a number to clamp
 * @param {number}                 - a minimum allowed value
 * @param {number}                 - a maximum allowed value
 * @returns {number}               - returns a rounded number
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.clamp = clamp;
