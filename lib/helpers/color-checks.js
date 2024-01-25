"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rybColorCheck = exports.xyYColorCheck = exports.xyzColorCheck = exports.cmykColorCheck = exports.luvColorCheck = exports.lchColorCheck = exports.labColorCheck = exports.hclColorCheck = exports.hwbColorCheck = exports.hsvColorCheck = exports.hslColorCheck = exports.rgbColorCheck = exports.hexColorCheck = exports.colorCheck = exports.checkAndFormat = void 0;
const regex_1 = require("../regex");
const checkAndFormat = (space, color) => {
    const rgbCheck = new RegExp(/rgb|ps5/g);
    if (rgbCheck.exec(space))
        return (0, exports.rgbColorCheck)(color);
    const lchCheck = new RegExp(/lch/g);
    if (lchCheck.exec(space))
        return (0, exports.lchColorCheck)(color);
    else
        return colorCheckerMap[space](color);
};
exports.checkAndFormat = checkAndFormat;
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
        throw new Error("Color data is incorrect: color is not a proper hex value.");
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
    return {
        cyan: values[0],
        magenta: values[1],
        yellow: values[2],
        key: values[3],
    };
};
exports.cmykColorCheck = cmykColorCheck;
const xyzColorCheck = (color) => {
    const values = Object.values(color);
    return { x: values[0], y: values[1], z: values[2] };
};
exports.xyzColorCheck = xyzColorCheck;
const xyYColorCheck = (color) => {
    const values = Object.values(color);
    return { x: values[0], y: values[1], Y: values[2] };
};
exports.xyYColorCheck = xyYColorCheck;
const rybColorCheck = (color) => {
    const values = Object.values((0, exports.colorCheck)(color));
    return { red: values[0], yellow: values[1], blue: values[2] };
};
exports.rybColorCheck = rybColorCheck;
const colorCheckerMap = {
    hex: exports.hexColorCheck,
    rgb: exports.rgbColorCheck,
    hsl: exports.hslColorCheck,
    hsv: exports.hsvColorCheck,
    hwb: exports.hwbColorCheck,
    hcl: exports.hclColorCheck,
    lab: exports.labColorCheck,
    lch: exports.lchColorCheck,
    luv: exports.luvColorCheck,
    cmyk: exports.cmykColorCheck,
    ryb: exports.rybColorCheck,
    xyz: exports.xyzColorCheck,
    xyy: exports.xyYColorCheck,
};
