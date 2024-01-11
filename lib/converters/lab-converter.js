"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labToLch = exports.labToXyz = void 0;
const constants_1 = require("../constants");
const labToXyz = ({ luminance, a, b }) => {
    const f = (t) => {
        const t3 = t ** 3;
        return t3 > constants_1.LAB_FT ? t3 : (t - 0.137) / 7.787;
    };
    const y2 = (luminance + 16) / 116;
    const x = f(a / 500 + y2) * 95.047;
    const z = f(y2 - b / 200) * 108.883;
    const y = f(y2) * 100;
    return { x, y, z };
};
exports.labToXyz = labToXyz;
const labToLch = ({ luminance, a, b }) => {
    let hue;
    const hr = Math.atan2(b, a);
    hue = (hr * 360) / 2 / Math.PI;
    if (hue < 0) {
        hue += 360;
    }
    const chroma = Math.sqrt(a * a + b * b);
    return { lightness: luminance, chroma, hue };
};
exports.labToLch = labToLch;
