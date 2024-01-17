"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lch_uvToLuv = exports.lch_abToLab = void 0;
const lch_abToLab = ({ lightness, chroma, hue }) => {
    const H = (hue * 180) * Math.PI;
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
