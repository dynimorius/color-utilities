"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yCgCoToSrgb = void 0;
/**
 * Converts a color form an YCoCg space to sRGB space:
 * @param {YCoCg} ycocg YCoCg values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yCgCoToSrgb = ({ Y, Co, Cg }) => {
    const temp = Y - Cg;
    return {
        red: (temp + Co) * 255,
        green: (Y + Cg) * 255,
        blue: (temp - Co) * 255,
    };
};
exports.yCgCoToSrgb = yCgCoToSrgb;
