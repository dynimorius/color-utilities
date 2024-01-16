"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luvToLch_uv = void 0;
const luvToLch_uv = ({ L, u, v }) => {
    const chroma = Math.sqrt(u * u + v * v);
    let hue = Math.atan2(v, u) * 180 / Math.PI;
    hue = hue >= 0 ? hue : hue + 360;
    return { lightness: L, chroma, hue };
};
exports.luvToLch_uv = luvToLch_uv;
