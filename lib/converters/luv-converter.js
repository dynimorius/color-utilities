"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luvToXyz = exports.luvToLch_uv = void 0;
const constants_1 = require("../constants");
const luvToLch_uv = ({ L, u, v }) => {
    const chroma = Math.sqrt(u * u + v * v);
    let hue = (Math.atan2(v, u) * 180) / Math.PI;
    hue = hue >= 0 ? hue : hue + 360;
    return { lightness: L, chroma, hue };
};
exports.luvToLch_uv = luvToLch_uv;
const luvToXyz = ({ L, u, v }) => {
    const Xn = constants_1.REFERENCE_WHITES.D65.X;
    const Yn = constants_1.REFERENCE_WHITES.D65.Y;
    const Zn = constants_1.REFERENCE_WHITES.D65.Z;
    const v0 = 9 * Yn / (Xn + 15 * Yn + 3 * Zn);
    const u0 = 4 * Xn / (Xn + 15 * Yn + 3 * Zn);
    const y = (L > constants_1.CIE_κ * constants_1.CIE_ϵ) ? Math.pow((L + 16) / 116, 3) : L / constants_1.CIE_κ;
    const d = y * (39 * L / (v + 13 * L * v0) - 5) || 0;
    const c = -1 / 3;
    const b = -5 * y;
    const a = (52 * L / (u + 13 * L * u0) - 1) / 3 || 0;
    const x = (d - b) / (a - c);
    const z = x * a + b;
    // x,y,z in [0,1] multiply by 100 to scale to [0,100]
    // Add zero to prevent signed zeros (force 0 rather than -0)
    return { x: x * 100 + 0, y: y * 100 + 0, z: z * 100 + 0 };
};
exports.luvToXyz = luvToXyz;
