"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labToLch = exports.labToXyz = void 0;
const constants_1 = require("../constants");
const labToXyz = ({ luminance, a, b }) => {
    const f = (t) => {
        const tQR = Math.cbrt(t);
        return tQR > constants_1.CIE_ϵ ? tQR : (116 * t - 16) / constants_1.CIE_κ;
    };
    const Fy = (luminance + 16) / 116;
    const x = f(a / 500 + Fy) * (constants_1.REFERENCE_WHITES.D65.X * 10);
    const z = f(Fy - b / 200) * (constants_1.REFERENCE_WHITES.D65.Z * 10);
    const y = (luminance > constants_1.CIE_κ * constants_1.CIE_ϵ ? Math.cbrt(Fy) : luminance / constants_1.CIE_κ) *
        (constants_1.REFERENCE_WHITES.D65.Y * 10);
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
