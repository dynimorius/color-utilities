"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRISTIMULUS_D50 = exports.MATRIX_XYZ_D50_LRGB = exports.MATRIX_LRGB_XYZ_D50 = exports.DEFAULT_SHADES_TINTS_STEPS = exports.DEFAULT_BLEND_STEPS = exports.MAX_DECIMALS = exports.NORMALIZED_BELOW_10 = exports.LAB_FT = void 0;
exports.LAB_FT = 0.008856451679035631;
exports.NORMALIZED_BELOW_10 = 0.03928;
exports.MAX_DECIMALS = 6;
exports.DEFAULT_BLEND_STEPS = 5;
exports.DEFAULT_SHADES_TINTS_STEPS = 5;
exports.MATRIX_LRGB_XYZ_D50 = [
    [0.4360747, 0.3850649, 0.1430804],
    [0.2225045, 0.7168786, 0.0606169],
    [0.0139322, 0.0971045, 0.7141733]
];
exports.MATRIX_XYZ_D50_LRGB = [
    [3.1338561, -1.6168667, -0.4906146],
    [-0.9787684, 1.9161415, 0.033454],
    [0.0719453, -0.2289914, 1.4052427]
];
exports.TRISTIMULUS_D50 = exports.MATRIX_LRGB_XYZ_D50.map((matrix) => {
    return matrix.reduce((sum, value) => sum + value, 0);
});
