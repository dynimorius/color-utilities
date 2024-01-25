"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTones = exports.getTints = exports.getShades = void 0;
const rgb_converter_1 = require("./../converters/rgb-converter");
const rgb_converter_2 = require("../converters/rgb-converter");
const scaleTo = (rgb, size, scale) => {
    let { red, green, blue } = rgb;
    const ret = [];
    const scaleR = (scale - red) / size;
    const scaleG = (scale - green) / size;
    const scaleB = (scale - blue) / size;
    for (let i = 0; i < size; i++) {
        if (rgb.alpha)
            ret.push((0, rgb_converter_1.sRgbaToHex)({ red, green, blue, alpha: rgb.alpha }));
        else
            ret.push((0, rgb_converter_2.sRgbToHex)({ red, green, blue }));
        red += scaleR;
        green += scaleG;
        blue += scaleB;
    }
    return ret;
};
/*****************************************************
 *  Shades are returned by mixing with black (#000000)
 ****************************************************/
const getShades = (rgb, size) => {
    if (!size || !isFinite(size)) {
        size = 10;
    }
    return scaleTo(rgb, size, 0);
};
exports.getShades = getShades;
/*****************************************************
 *  Tints are returned by mixing with white (#FFFFFF)
 ****************************************************/
const getTints = (rgb, size) => {
    if (!size || !isFinite(size)) {
        size = 10;
    }
    return scaleTo(rgb, size, 1);
};
exports.getTints = getTints;
/*****************************************************
 *  Tints are returned by mixing with gray (#777777)
 ****************************************************/
const getTones = (rgb, size) => {
    if (!size || !isFinite(size)) {
        size = 10;
    }
    return scaleTo(rgb, size, 0.5);
};
exports.getTones = getTones;
