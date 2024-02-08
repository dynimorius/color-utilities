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
/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
const ycCbcCrcToSrgb = (ycCbcCrc, ituRBt = cb_cr_conversions_coefficients_1.CB_CR_CONVERSIONS_COEFFICIENTS.ITU_R_BT_2020) => {
    //TODO needs more testing
    const redMultiplier = ycCbcCrc.Crc < 0 || ycCbcCrc.Crc > ycCbcCrc.Yc ? 1.7182 : 0.9938;
    const blueMultiplier = ycCbcCrc.Cbc < 0 || ycCbcCrc.Cbc > ycCbcCrc.Yc ? 1.9404 : 1.582;
    const red = ycCbcCrc.Yc + ycCbcCrc.Crc * redMultiplier;
    const blue = ycCbcCrc.Yc + ycCbcCrc.Cbc * blueMultiplier;
    const green = (ycCbcCrc.Yc - 0.2627 * red - 0.0593 * blue) / 0.678;
    return { red, green, blue };
};
exports.ycCbcCrcToSrgb = ycCbcCrcToSrgb;
