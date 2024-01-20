"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lch_uvToXyz = exports.lch_abToXyz = exports.lch_uvToLuv = exports.lch_abToLab = void 0;
const lab_converter_1 = require("./lab-converter");
const luv_converter_1 = require("./luv-converter");
const lch_abToLab = ({ lightness, chroma, hue }) => {
    const H = (hue / 180) * Math.PI;
    const a = chroma * Math.cos(H);
    const b = chroma * Math.sin(H);
    return { luminance: lightness, a, b };
};
exports.lch_abToLab = lch_abToLab;
const lch_uvToLuv = ({ lightness, chroma, hue }) => {
    const H = (hue / 180) * Math.PI;
    const u = chroma * Math.cos(H);
    const v = chroma * Math.sin(H);
    return { L: lightness, u, v };
};
exports.lch_uvToLuv = lch_uvToLuv;
const lch_abToXyz = (lch) => {
    return (0, lab_converter_1.labToXyz)((0, exports.lch_abToLab)(lch));
};
exports.lch_abToXyz = lch_abToXyz;
const lch_uvToXyz = (lch) => {
    return (0, luv_converter_1.luvToXyz)((0, exports.lch_uvToLuv)(lch));
};
exports.lch_uvToXyz = lch_uvToXyz;
