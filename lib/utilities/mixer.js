"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTones = exports.getTints = exports.getShades = void 0;
const rgb_converter_1 = require("../converters/rgb-converter");
const scale = (rgb, size, scale, prefixed) => {
    let { red, green, blue } = rgb;
    const scaled = [];
    const scaleR = (scale - red) / size;
    const scaleG = (scale - green) / size;
    const scaleB = (scale - blue) / size;
    for (let i = 0; i < size; i++) {
        if (rgb.alpha)
            scaled.push((0, rgb_converter_1.sRgbaToHex)({ red, green, blue, alpha: rgb.alpha }, prefixed));
        else
            scaled.push((0, rgb_converter_1.sRgbToHex)({ red, green, blue }, prefixed));
        red += scaleR;
        green += scaleG;
        blue += scaleB;
    }
    return scaled;
};
/*****************************************************
 *  Shades are returned by mixing with black (#000000)
 ****************************************************/
const getShades = (rgb, options) => {
    let size;
    if (!(options === null || options === void 0 ? void 0 : options.size) || !isFinite(options === null || options === void 0 ? void 0 : options.size)) {
        size = 10;
    }
    return scale(rgb, size, 0, options === null || options === void 0 ? void 0 : options.prefexed);
};
exports.getShades = getShades;
/*****************************************************
 *  Tints are returned by mixing with white (#FFFFFF)
 ****************************************************/
const getTints = (rgb, options) => {
    let size;
    if (!(options === null || options === void 0 ? void 0 : options.size) || !isFinite(options === null || options === void 0 ? void 0 : options.size)) {
        size = 10;
    }
    return scale(rgb, size, 1, options === null || options === void 0 ? void 0 : options.prefexed);
};
exports.getTints = getTints;
/*****************************************************
 *  Tints are returned by mixing with gray (#777777)
 ****************************************************/
const getTones = (rgb, options) => {
    let size;
    if (!(options === null || options === void 0 ? void 0 : options.size) || !isFinite(options === null || options === void 0 ? void 0 : options.size)) {
        size = 10;
    }
    return scale(rgb, size, 0.5, options === null || options === void 0 ? void 0 : options.prefexed);
};
exports.getTones = getTones;
