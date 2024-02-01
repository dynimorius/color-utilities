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
const cb_cr_conversions_coefficients_1 = require("../constants/cb-cr-conversions-coefficients");
const cb_cr_coef_conversions_1 = require("./cb-cr-coef-conversions");
/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr} ypbpr YPbPr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yPbPrToSrgb = (yPbPr, ituRBt = cb_cr_conversions_coefficients_1.CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_709) => {
    return (0, cb_cr_coef_conversions_1.ybrCoefToSrgb)(yPbPr, ituRBt);
};
exports.yPbPrToSrgb = yPbPrToSrgb;
