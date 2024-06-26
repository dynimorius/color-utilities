"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yCgCoToSrgb = void 0;
/**
 * Converts a color form an YCoCg space to sRGB space:
 * @param {YCoCg}                   - YCoCg values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
const yCgCoToSrgb = ({ Y, Co, Cg }) => {
    const temp = Y - Cg;
    return {
        red: temp + Co,
        green: Y + Cg,
        blue: temp - Co,
    };
};
exports.yCgCoToSrgb = yCgCoToSrgb;
