"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sRbgToXyz = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const sRbgToXyz = ({ red, green, blue }) => {
    const Rlin = (0, helpers_1.linearSRGB)(red / 255.0);
    const Glin = (0, helpers_1.linearSRGB)(green / 255.0);
    const Blin = (0, helpers_1.linearSRGB)(blue / 255.0);
    const { X, Y, Z } = constants_1.SPACE_MATRICES.SRGB.RGB_TO_XYZ;
    const x = Rlin * X.r + Glin * X.g + Blin * X.b;
    const y = Rlin * Y.r + Glin * Y.g + Blin * Y.b;
    const z = Rlin * Z.r + Glin * Z.g + Blin * Z.b;
    return { x, y, z };
};
exports.sRbgToXyz = sRbgToXyz;
