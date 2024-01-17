"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyzColorCheck = exports.cmykColorCheck = exports.luvColorCheck = exports.lchColorCheck = exports.labColorCheck = exports.hclColorCheck = exports.hcgColorCheck = exports.hwbColorCheck = exports.hsvColorCheck = exports.hslColorCheck = exports.rgbColorCheck = exports.hexColorCheck = exports.colorCheck = exports.xyzChromaticAdaptation = exports.chromaticAdaptation = exports.matriceByVectorMultiplication = exports.matriceMultiplication = exports.gammaRgb = exports.linearRgb = exports.gammaSrbg = exports.linearSRGB = exports.formatValue = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const constants_1 = require("../constants");
const regex_1 = require("../regex");
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
    return ((value <= constants_1.GAMMA_NORMALIZED_BELOW
        ? 12.92 * value
        : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255);
};
exports.gammaSrbg = gammaSrbg;
const linearRgb = (value, gamma) => {
    value = value / 255;
    return Math.pow(value, gamma);
};
exports.linearRgb = linearRgb;
const gammaRgb = (value, gamma) => {
    return Math.pow(value, 1 / gamma) * 255;
};
exports.gammaRgb = gammaRgb;
const matriceMultiplication = (a, b) => {
    const M00 = (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]) + (a[0][2] * b[2][0]);
    const M01 = (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]) + (a[0][2] * b[2][1]);
    const M02 = (a[0][0] * b[0][2]) + (a[0][1] * b[1][2]) + (a[0][2] * b[2][2]);
    const M10 = (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]) + (a[1][2] * b[2][0]);
    const M11 = (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]) + (a[1][2] * b[2][1]);
    const M12 = (a[1][0] * b[0][2]) + (a[1][1] * b[1][2]) + (a[1][2] * b[2][2]);
    const M13 = (a[2][0] * b[0][0]) + (a[2][1] * b[1][0]) + (a[2][2] * b[2][0]);
    const M14 = (a[2][0] * b[0][1]) + (a[2][1] * b[1][1]) + (a[2][2] * b[2][1]);
    const M15 = (a[2][0] * b[0][2]) + (a[2][1] * b[1][2]) + (a[2][2] * b[2][2]);
    return [
        [M00, M01, M02],
        [M10, M11, M12],
        [M13, M14, M15]
    ];
};
exports.matriceMultiplication = matriceMultiplication;
const matriceByVectorMultiplication = (matrix, vector) => {
    const M00 = (matrix[0][0] * vector[0]) + (matrix[0][1] * vector[1]) + (matrix[0][2] * vector[2]);
    const M01 = (matrix[1][0] * vector[0]) + (matrix[1][1] * vector[1]) + (matrix[1][2] * vector[2]);
    const M02 = (matrix[2][0] * vector[0]) + (matrix[2][1] * vector[1]) + (matrix[2][2] * vector[2]);
    return [M00, M01, M02];
};
exports.matriceByVectorMultiplication = matriceByVectorMultiplication;
const chromaticAdaptation = (sourceWhite, destinationWhite) => {
    const Ma = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA;
    const Ma_1 = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
    const PsYsβs = (0, exports.matriceByVectorMultiplication)(Ma, sourceWhite);
    const PdYdβd = (0, exports.matriceByVectorMultiplication)(Ma, destinationWhite);
    const diff = [
        [PsYsβs[0] / PdYdβd[0], 0, 0],
        [0, PsYsβs[1] / PdYdβd[1], 0],
        [0, 0, PsYsβs[2] / PdYdβd[2]]
    ];
    return (0, exports.matriceMultiplication)((0, exports.matriceMultiplication)(Ma_1, diff), Ma);
};
exports.chromaticAdaptation = chromaticAdaptation;
const xyzChromaticAdaptation = (xyz, sourceWhite, destinationWhite) => {
    const S = [xyz.x, xyz.y, xyz.z];
    const M = (0, exports.chromaticAdaptation)(sourceWhite, destinationWhite);
    const D = (0, exports.matriceByVectorMultiplication)(M, S);
    return { x: D[0], y: D[1], z: D[2] };
};
exports.xyzChromaticAdaptation = xyzChromaticAdaptation;
const colorCheck = (color) => {
    const entries = Object.entries(color);
    entries.forEach((entry) => {
        if (isNaN(entry[1])) {
            throw new Error(`Color data is incorrect: ${entry[0]} is not a number.`);
        }
    });
    return color;
};
exports.colorCheck = colorCheck;
const hexColorCheck = (color) => {
    if (new RegExp(regex_1.FULL_HEX).exec(color))
        return color.slice(1).toUpperCase();
    else if (new RegExp(regex_1.HEX).exec(color))
        return color.toUpperCase();
    else
        throw new Error('Color data is incorrect: color is not a proper hex value.');
};
exports.hexColorCheck = hexColorCheck;
const rgbColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { red: values[0], green: values[1], blue: values[2] };
};
exports.rgbColorCheck = rgbColorCheck;
const hslColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { hue: values[0], saturation: values[1], lightness: values[2] };
};
exports.hslColorCheck = hslColorCheck;
const hsvColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { hue: values[0], saturation: values[1], value: values[2] };
};
exports.hsvColorCheck = hsvColorCheck;
const hwbColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { hue: values[0], whiteness: values[1], blackness: values[2] };
};
exports.hwbColorCheck = hwbColorCheck;
const hcgColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { hue: values[0], chroma: values[1], grayscale: values[2] };
};
exports.hcgColorCheck = hcgColorCheck;
const hclColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { hue: values[0], chroma: values[1], luminance: values[2] };
};
exports.hclColorCheck = hclColorCheck;
const labColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { luminance: values[0], a: values[1], b: values[2] };
};
exports.labColorCheck = labColorCheck;
const lchColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { lightness: values[0], chroma: values[1], hue: values[2] };
};
exports.lchColorCheck = lchColorCheck;
const luvColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { L: values[0], u: values[1], v: values[2] };
};
exports.luvColorCheck = luvColorCheck;
const cmykColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { cyan: values[0], magenta: values[1], yellow: values[2], key: values[3] };
};
exports.cmykColorCheck = cmykColorCheck;
const xyzColorCheck = (color) => {
    const values = Object.values(color);
    return { x: values[0], y: values[1], z: values[2] };
};
exports.xyzColorCheck = xyzColorCheck;
