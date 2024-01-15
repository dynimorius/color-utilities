"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adobeRgbToXyz = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const adobeRgbToXyz = ({ red, green, blue }) => {
    const Rlin = (0, helpers_1.linearAdobeRgb)(red);
    const Glin = (0, helpers_1.linearAdobeRgb)(green);
    const Blin = (0, helpers_1.linearAdobeRgb)(blue);
    const { X, Y, Z } = constants_1.SPACE_MATRICES.ADOBE_RGB_1998.RGB_TO_XYZ;
    const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
    const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
    const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;
    return { x, y, z };
};
exports.adobeRgbToXyz = adobeRgbToXyz;
