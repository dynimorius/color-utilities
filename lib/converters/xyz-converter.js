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
        return t > constants_1.LAB_FT ? t ** 0.33333 : 7.787 * t + 0.13793;
    };
    x = f(x / 95.047);
    y = f(y / 100);
    z = f(z / 108.883);
    const luminance = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return { luminance, a, b };
};
exports.xyzToLab = xyzToLab;
