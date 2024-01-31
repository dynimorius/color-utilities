"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmyToSRgb = void 0;
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
/**
 * Converts a color form an CMY space to sRGB space
 * @param {CMY} cmy CMY values for a color
 * @returns {RGB} - sRGB values for a color
 */
const cmyToSRgb = ({ c, m, y }) => {
    c = c / 100;
    m = m / 100;
    y = y / 100;
    return {
        red: (1 - c) * 255,
        green: (1 - m) * 255,
        blue: (1 - y) * 255,
    };
};
exports.cmyToSRgb = cmyToSRgb;
