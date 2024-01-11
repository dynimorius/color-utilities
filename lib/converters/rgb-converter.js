"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHcgPrefactored = exports.rgbToHcg = exports.rgbaToHex = exports.rgbToHex = exports.rgbToAnsi256 = exports.rgbToAnsi16 = exports.rgbToLab = exports.rgbToXyz = exports.comparativeDistance = exports.rgbToCmyk = exports.rgbToHwbPrefactored = exports.rgbToHwb = exports.rgbToHsvPrefactored = exports.rgbToHsv = exports.rgbToHslPrefactored = exports.rgbToHsl = exports.rgbToRgba = exports.rgbToLuminance = exports.sRgbToLuminance = exports.rgbToSrgb = exports.tosRBG = exports.rgbToHue = exports.getRange = exports.formatValue = exports.rgbInvert = exports.normalizeRgba = exports.normalizeRgb = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const number_converter_1 = require("./number-converter");
const normalizeRgb = ({ red, green, blue }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
});
exports.normalizeRgb = normalizeRgb;
const normalizeRgba = ({ red, green, blue, alpha }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
    alpha,
});
exports.normalizeRgba = normalizeRgba;
const rgbInvert = ({ red, green, blue }) => ({
    red: 255 - red,
    green: 255 - green,
    blue: 255 - blue,
});
exports.rgbInvert = rgbInvert;
const formatValue = (value) => Math.round(value * 100);
exports.formatValue = formatValue;
const getRange = (red, green, blue) => {
    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);
    const delta = max - min;
    return { min, max, delta };
};
exports.getRange = getRange;
const rgbToHue = (red, green, blue, max, delta) => {
    let hue = 0;
    switch (max) {
        case red:
            hue = (green - blue) / delta;
            break;
        case green:
            hue = 2 + (blue - red) / delta;
            break;
        case blue:
            hue = 4 + (red - green) / delta;
            break;
        default:
            break;
    }
    hue = Math.min(hue * 60, 360);
    if (hue < 0) {
        hue += 360;
    }
    hue = Math.round(hue);
    return hue;
};
exports.rgbToHue = rgbToHue;
//TODO fix incorect
const tosRBG = (value) => value > constants_1.NORMALIZED_BELOW_10
    ? Math.pow((value + 0.055) / 1.055, 2.4)
    : value / 12.92;
exports.tosRBG = tosRBG;
//TODO fix incorect
const rgbToSrgb = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    return {
        red: (0, exports.tosRBG)(red),
        green: (0, exports.tosRBG)(green),
        blue: (0, exports.tosRBG)(blue),
    };
};
exports.rgbToSrgb = rgbToSrgb;
const sRgbToLuminance = ({ red, green, blue }) => {
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};
exports.sRgbToLuminance = sRgbToLuminance;
const rgbToLuminance = (rgb) => (0, exports.sRgbToLuminance)((0, exports.rgbToSrgb)(rgb));
exports.rgbToLuminance = rgbToLuminance;
const rgbToRgba = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    return {
        red,
        green,
        blue,
        alpha: 1,
    };
};
exports.rgbToRgba = rgbToRgba;
const rgbToHsl = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = (0, exports.getRange)(red, green, blue);
    let lightness = (max + min) / 2;
    let hue = 0;
    let saturation = 0;
    if (!delta) {
        return { hue, saturation, lightness };
    }
    else {
        saturation = (0, exports.formatValue)(lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min));
    }
    hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    lightness = (0, exports.formatValue)(lightness);
    return { hue, saturation, lightness };
};
exports.rgbToHsl = rgbToHsl;
const rgbToHslPrefactored = (rgb, hue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = (0, exports.getRange)(red, green, blue);
    let lightness = (max + min) / 2;
    let saturation = 0;
    if (!delta) {
        return { hue, saturation, lightness };
    }
    else {
        saturation = (0, exports.formatValue)(lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min));
    }
    lightness = (0, exports.formatValue)(lightness);
    return { hue, saturation, lightness };
};
exports.rgbToHslPrefactored = rgbToHslPrefactored;
const rgbToHsv = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { max, delta } = (0, exports.getRange)(red, green, blue);
    let hue = 0;
    let value = (0, exports.formatValue)(max);
    let saturation = (0, exports.formatValue)(max === 0 ? 0 : delta / max);
    if (!delta) {
        return { hue, saturation, value };
    }
    hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    return { hue, saturation, value };
};
exports.rgbToHsv = rgbToHsv;
const rgbToHsvPrefactored = (rgb, hue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { max, delta } = (0, exports.getRange)(red, green, blue);
    let value = (0, exports.formatValue)(max);
    let saturation = (0, exports.formatValue)(max === 0 ? 0 : delta / max);
    if (!delta) {
        return { hue, saturation, value };
    }
    return { hue, saturation, value };
};
exports.rgbToHsvPrefactored = rgbToHsvPrefactored;
const rgbToHwb = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { max, delta } = (0, exports.getRange)(red, green, blue);
    const hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    const whiteness = (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
    const blackness = (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;
    return { hue, whiteness, blackness };
};
exports.rgbToHwb = rgbToHwb;
const rgbToHwbPrefactored = (rgb, hue) => {
    const whiteness = (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
    const blackness = (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;
    return { hue, whiteness, blackness };
};
exports.rgbToHwbPrefactored = rgbToHwbPrefactored;
const rgbToCmyk = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    let key = 1 - Math.max(red, green, blue);
    const K1 = 1 - key;
    const cyan = (0, helpers_1.round)((K1 && (K1 - red) / K1) * 100);
    const magenta = (0, helpers_1.round)((K1 && (K1 - green) / K1) * 100);
    const yellow = (0, helpers_1.round)((K1 && (K1 - blue) / K1) * 100);
    key = key * 100;
    return { cyan, magenta, yellow, key };
};
exports.rgbToCmyk = rgbToCmyk;
const comparativeDistance = (rgb1, rgb2) => {
    return ((rgb1.red - rgb2.red) ** 2 +
        (rgb1.green - rgb2.green) ** 2 +
        (rgb1.blue - rgb2.blue) ** 2);
};
exports.comparativeDistance = comparativeDistance;
const rgbToXyz = (rgb) => {
    let { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const f = (t) => {
        return t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92;
    };
    red = f(red);
    green = f(green);
    blue = f(blue);
    const x = (red * 0.4124564 + green * 0.3575761 + blue * 0.1804375) * 100;
    const y = (red * 0.2126729 + green * 0.7151522 + blue * 0.072175) * 100;
    const z = (red * 0.0193339 + green * 0.119192 + blue * 0.9503041) * 100;
    return { x, y, z };
};
exports.rgbToXyz = rgbToXyz;
const rgbToLab = (rgb) => {
    let { x, y, z } = (0, exports.rgbToXyz)(rgb);
    const f = (t) => {
        return t > constants_1.LAB_FT ? t ** 0.333333 : 7.787 * x + 16 / 116;
    };
    x = f(x / 95.047);
    y = f(y / 100);
    z = f(z / 108.883);
    const luminance = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return { luminance, a, b };
};
exports.rgbToLab = rgbToLab;
//TODO fix incorect
const rgbToAnsi16 = (rgb, saturation = null) => {
    // Hsv -> ansi16 optimization
    let value = saturation !== null && saturation !== void 0 ? saturation : (0, exports.rgbToHsv)(rgb).value;
    value = Math.round(value / 50);
    if (value === 0) {
        return 30;
    }
    let ansi = 30 +
        ((Math.round(rgb.blue / 255) << 2) |
            (Math.round(rgb.green / 255) << 1) |
            Math.round(rgb.red / 255));
    if (value === 2) {
        ansi += 60;
    }
    return ansi;
};
exports.rgbToAnsi16 = rgbToAnsi16;
const rgbToAnsi256 = ({ red, green, blue }) => {
    if (red >> 4 === green >> 4 && green >> 4 === blue >> 4) {
        if (red < 8) {
            return 16;
        }
        if (red > 248) {
            return 231;
        }
        return Math.round(((red - 8) / 247) * 24) + 232;
    }
    const ansi = 16 +
        36 * Math.round((red / 255) * 5) +
        6 * Math.round((green / 255) * 5) +
        Math.round((blue / 255) * 5);
    return ansi;
};
exports.rgbToAnsi256 = rgbToAnsi256;
const rgbToHex = ({ red, green, blue }) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
};
exports.rgbToHex = rgbToHex;
const rgbaToHex = ({ red, green, blue, alpha }) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string + (0, number_converter_1.decimalToHex)(alpha);
};
exports.rgbaToHex = rgbaToHex;
const rgbToHcg = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = (0, exports.getRange)(red, green, blue);
    const grayscale = delta < 1 ? min / (1 - delta) : 0;
    let hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    return { hue, chroma: delta * 100, grayscale: grayscale * 100 };
};
exports.rgbToHcg = rgbToHcg;
const rgbToHcgPrefactored = (rgb, hue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, delta } = (0, exports.getRange)(red, green, blue);
    const grayscale = delta < 1 ? min / (1 - delta) : 0;
    return { hue, chroma: delta * 100, grayscale: grayscale * 100 };
};
exports.rgbToHcgPrefactored = rgbToHcgPrefactored;
