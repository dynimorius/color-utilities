"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyzToLab = exports.xyzToAdobeRgb = exports.xyzToRgb = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const xyzToRgb = ({ x, y, z }) => {
    x = x / 100;
    y = y / 100;
    z = z / 100;
    const { R, G, B } = constants_1.SPACE_MATRICES.SRGB.XYZ_TO_RGB;
    let red = x * R.x + y * R.y + z * R.z;
    let green = x * G.x + y * G.y + z * G.z;
    let blue = x * B.x + y * B.y + z * B.z;
    red = Math.round((0, helpers_1.gammaSrbg)(red));
    green = Math.round((0, helpers_1.gammaSrbg)(green));
    blue = Math.round((0, helpers_1.gammaSrbg)(blue));
    return { red, green, blue };
};
exports.xyzToRgb = xyzToRgb;
const xyzToAdobeRgb = ({ x, y, z }) => {
    x = x / 100;
    y = y / 100;
    z = z / 100;
    const { R, G, B } = constants_1.SPACE_MATRICES.ADOBE_RGB_1998.XYZ_TO_RGB;
    let red = x * R.x + y * R.y + z * R.z;
    let green = x * G.x + y * G.y + z * G.z;
    let blue = x * B.x + y * B.y + z * B.z;
    red = Math.round((0, helpers_1.gammaAdobeRgb)(red));
    green = Math.round((0, helpers_1.gammaAdobeRgb)(green));
    blue = Math.round((0, helpers_1.gammaAdobeRgb)(blue));
    return { red, green, blue };
};
exports.xyzToAdobeRgb = xyzToAdobeRgb;
const xyzToLab = ({ x, y, z }) => {
    const f = (t) => {
        return t > constants_1.CIE_ϵ ? Math.cbrt(t) : (constants_1.CIE_κ * t + 16) / 116;
    };
    x = f(x / (constants_1.REFERENCE_WHITES.D65.X * 100));
    y = f(y / (constants_1.REFERENCE_WHITES.D65.Y * 100));
    z = f(z / (constants_1.REFERENCE_WHITES.D65.Z * 100));
    const luminance = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return { luminance, a, b };
};
exports.xyzToLab = xyzToLab;
