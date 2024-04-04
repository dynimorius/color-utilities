"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsiToSrgb = void 0;
const hcy_conversions_1 = require("./hcy-conversions");
/**
 * Converts a color form an HSI space to sRGB space
 * @param {HSI}                   - HSI values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
const hsiToSrgb = (hsi) => {
    return (0, hcy_conversions_1.hcyOrHsiToSrgb)(hsi);
};
exports.hsiToSrgb = hsiToSrgb;
