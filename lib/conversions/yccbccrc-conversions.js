"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ycCbcCrcToSrgb = void 0;
const cb_cr_conversions_coefficients_1 = require("../constants/cb-cr-conversions-coefficients");
const cb_cr_coef_conversions_1 = require("./cb-cr-coef-conversions");
/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
const ycCbcCrcToSrgb = (ycCbcCrc, ituRBt = cb_cr_conversions_coefficients_1.CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_2020) => {
    return (0, cb_cr_coef_conversions_1.ybrCoefToSrgb)(ycCbcCrc, ituRBt);
};
exports.ycCbcCrcToSrgb = ycCbcCrcToSrgb;
