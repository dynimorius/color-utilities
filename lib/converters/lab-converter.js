"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labToLch_ab = exports.labToXyz = void 0;
const constants_1 = require("../constants");
const reference_illuminants_1 = require("../constants/reference-illuminants");
const labToXyz = ({ luminance, a, b }) => {
    const fY = (luminance + 16) / 116;
    const z = f(fY - b / 200) * reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z * 100 + 0;
    const x = f(a / 500 + fY) * reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X * 100 + 0;
    const y = (luminance > constants_1.CIE_κ * constants_1.CIE_ϵ
        ? Math.pow((luminance + 16) / 116, 3)
        : luminance / constants_1.CIE_κ) *
        reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y *
        100 + 0;
    return { x, y, z };
};
exports.labToXyz = labToXyz;
const f = (num) => {
    return Math.pow(num, 3) > constants_1.CIE_ϵ ? Math.pow(num, 3) : (116 * num - 16) / constants_1.CIE_κ;
};
const labToLch_ab = ({ luminance, a, b }) => {
    const hr = Math.atan2(b, a);
    const hue = hr < 0 ? (hr * 360) / 2 / Math.PI + 360 : (hr * 360) / 2 / Math.PI;
    const chroma = Math.sqrt(a * a + b * b);
    return { lightness: luminance, chroma, hue };
};
exports.labToLch_ab = labToLch_ab;
