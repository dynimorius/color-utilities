"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labToLch = exports.labToXyz = void 0;
const shared_1 = require("../shared");
const labToXyz = ({ luminance, a, b }) => {
    let x;
    let y;
    let z;
    y = (luminance + 16) / 116;
    x = a / 500 + y;
    z = y - b / 200;
    const y2 = y ** 3;
    const x2 = x ** 3;
    const z2 = z ** 3;
    y = y2 > shared_1.LAB_FT ? y2 : (y - 16 / 116) / 7.787;
    x = x2 > shared_1.LAB_FT ? x2 : (x - 16 / 116) / 7.787;
    z = z2 > shared_1.LAB_FT ? z2 : (z - 16 / 116) / 7.787;
    x *= 95.047;
    y *= 100;
    z *= 108.883;
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
