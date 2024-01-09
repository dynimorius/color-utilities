"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hclToLab = void 0;
const hclToLab = ({ luminance, hue, chroma }) => {
    const h = hue * (Math.PI / 180);
    return {
        luminance,
        a: Math.cos(h) * chroma,
        b: Math.sin(h) * chroma,
    };
};
exports.hclToLab = hclToLab;
