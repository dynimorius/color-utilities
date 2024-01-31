"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yPbPrToSrgb = void 0;
const cb_cr_conversions_1 = require("../constants/cb-cr-conversions");
/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr} ypbpr YPbPr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yPbPrToSrgb = ({ Y, Pb, Pr }, ituRBt = cb_cr_conversions_1.CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_709) => {
    const red = Y + 2 * Pr * (1 - ituRBt.Kr);
    const blue = Y + 2 * Pb * (1 - ituRBt.Kb);
    const green = (Y - ituRBt.Kr * red - ituRBt.Kb * blue) / (1 - ituRBt.Kr - ituRBt.Kb);
    return { red, green, blue };
};
exports.yPbPrToSrgb = yPbPrToSrgb;
