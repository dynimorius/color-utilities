"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lchToLab = void 0;
const lchToLab = ({ lightness, chroma, hue }) => {
    const hr = (hue / 360) * 2 * Math.PI;
    const a = chroma * Math.cos(hr);
    const b = chroma * Math.sin(hr);
    return { luminance: lightness, a, b };
};
exports.lchToLab = lchToLab;
