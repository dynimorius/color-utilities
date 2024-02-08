"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yPbPrToYCbCr = exports.yPbPrToSrgb = void 0;
const cb_cr_conversions_coefficients_1 = require("../constants/cb-cr-conversions-coefficients");
/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr} ypbpr YPbPr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yPbPrToSrgb = ({ Y, Pb, Pr }, ituRBt = cb_cr_conversions_coefficients_1.CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_709) => {
    return {
        red: Math.round(1 * Y - 0.000001 * Pb + 1.40199 * Pr),
        green: Math.round(1 * Y - 0.344135 * Pb - 0.714136 * Pr),
        blue: Math.round(1 * Y + 1.77200 * Pb + 0.000000 * Pr)
    };
};
exports.yPbPrToSrgb = yPbPrToSrgb;
const yPbPrToYCbCr = ({ Y, Pb, Pr }) => {
    return {
        Y: 16 + 219 * Y,
        Cb: 128 + 224 * Pb,
        Cr: 128 + 224 * Pr
    };
};
exports.yPbPrToYCbCr = yPbPrToYCbCr;
