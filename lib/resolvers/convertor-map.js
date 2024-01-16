"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRgbConverters = exports.rgbConverters = void 0;
const hcg_converter_1 = require("./../converters/hcg-converter");
const rgb_converter_1 = require("../converters/rgb-converter");
const helpers_1 = require("../helpers");
const hex_converter_1 = require("../converters/hex-converter");
const cmyk_converter_1 = require("../converters/cmyk-converter");
const hsl_converter_1 = require("../converters/hsl-converter");
const hsv_converter_1 = require("../converters/hsv-converter");
const xyz_converter_1 = require("../converters/xyz-converter");
exports.rgbConverters = {
    adobeRgb: rgb_converter_1.rgbToAdobeRgb,
    ansi16: rgb_converter_1.rgbToAnsi16,
    ansi256: rgb_converter_1.rgbToAnsi256,
    cmyk: rgb_converter_1.rgbToCmyk,
    hcg: rgb_converter_1.rgbToHcg,
    hex: rgb_converter_1.rgbToHex,
    hsl: rgb_converter_1.rgbToHsl,
    hsv: rgb_converter_1.rgbToHsv,
    hwb: rgb_converter_1.rgbToHwb,
    lab: rgb_converter_1.rgbToLab,
    lch_ab: rgb_converter_1.rgbToLch_ab,
    lch_uv: rgb_converter_1.rgbToLch_uv,
    luv: rgb_converter_1.rgbToLuv,
    rgb_0_1: rgb_converter_1.rgbTo1_0rgb,
    rgb_0_255: xyz_converter_1.xyzToRgb,
    xyz: rgb_converter_1.rgbToXyz,
    webSafe: helpers_1.isWebSafeRGB,
};
exports.toRgbConverters = {
    hex: hex_converter_1.hexToRgb,
    cmyk: cmyk_converter_1.cmykToRgb,
    hsl: hsl_converter_1.hslToRgb,
    hsv: hsv_converter_1.hsvToRgb,
    hwb: hcg_converter_1.hwbToRgb,
    xyz: xyz_converter_1.xyzToRgb,
};
