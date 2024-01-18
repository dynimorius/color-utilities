"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyzChromaticAdaptation = exports.chromaticAdaptation = exports.formatValue = exports.isWebSafeHex = exports.isWebSafeRGB = void 0;
const constants_1 = require("../constants");
const matrix_1 = require("./matrix");
const isWebSafeRGB = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafeRGB = isWebSafeRGB;
const isWebSafeHex = (color) => {
    const hexCheck = ["00", "33", "66", "99", "CC", "FF"];
    return (hexCheck.includes(color.slice(0, 2)) &&
        hexCheck.includes(color.slice(2, 2)) &&
        hexCheck.includes(color.slice(4)));
};
exports.isWebSafeHex = isWebSafeHex;
const formatValue = (value) => Math.round(value * 100);
exports.formatValue = formatValue;
const chromaticAdaptation = (sourceWhite, destinationWhite) => {
    const Ma = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA;
    const Ma_1 = constants_1.BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
    const PsYsβs = (0, matrix_1.matrixMlutiVector)(Ma, sourceWhite);
    const PdYdβd = (0, matrix_1.matrixMlutiVector)(Ma, destinationWhite);
    const diff = [
        [PsYsβs[0] / PdYdβd[0], 0, 0],
        [0, PsYsβs[1] / PdYdβd[1], 0],
        [0, 0, PsYsβs[2] / PdYdβd[2]]
    ];
    return (0, matrix_1.matrixMulti3x3)((0, matrix_1.matrixMulti3x3)(Ma_1, diff), Ma);
};
exports.chromaticAdaptation = chromaticAdaptation;
const xyzChromaticAdaptation = (xyz, sourceWhite, destinationWhite) => {
    const S = [xyz.x, xyz.y, xyz.z];
    const M = (0, exports.chromaticAdaptation)(sourceWhite, destinationWhite);
    const D = (0, matrix_1.matrixMlutiVector)(M, S);
    return { x: D[0], y: D[1], z: D[2] };
};
exports.xyzChromaticAdaptation = xyzChromaticAdaptation;
