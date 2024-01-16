"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labToLch_ab = exports.labToXyz = void 0;
const constants_1 = require("../constants");
const labToXyz = ({ luminance, a, b }) => {
    const f = (t) => {
        const tQR = Math.cbrt(t);
        return tQR > constants_1.CIE_ϵ ? tQR : (116 * t - 16) / constants_1.CIE_κ;
    };
    const Fy = (luminance + 16) / 116;
    const x = f(a / 500 + Fy) * (constants_1.REFERENCE_WHITES.D65.X * 10);
    const z = f(Fy - b / 200) * (constants_1.REFERENCE_WHITES.D65.Z * 10);
    const y = (luminance > constants_1.CIE_κ * constants_1.CIE_ϵ ? Math.cbrt(Fy) : luminance / constants_1.CIE_κ) * (constants_1.REFERENCE_WHITES.D65.Y * 10);
    return { x, y, z };
};
exports.labToXyz = labToXyz;
const labToLch_ab = ({ luminance, a, b }) => {
    const hr = Math.atan2(b, a);
    const hue = hr < 0 ? ((hr * 360) / 2 / Math.PI) + 360 : (hr * 360) / 2 / Math.PI;
    const chroma = Math.sqrt(a * a + b * b);
    return { lightness: luminance, chroma, hue };
};
exports.labToLch_ab = labToLch_ab;
