"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansi256ToRgb = exports.ansi16ToAnsi8 = exports.ansi16ToRgb = void 0;
const formats_and_checks_1 = require("../helpers/formats-and-checks");
/**
 * Converts an Ansi16 numerical to sRBG
 * @param {number} - ansi16 color value
 * @returns {RGB} - sRBG color value
 */
const ansi16ToRgb = (ansi) => {
    let color = ansi % 10;
    if (color === 0 || color === 7) {
        if (ansi > 50) {
            color += 3.5;
        }
        color = (color / 10.5) * 255;
        return { red: color, green: color, blue: color };
    }
    const mult = (~~(ansi > 50) + 1) * 0.5;
    const red = (color & 1) * mult * 255;
    const green = ((color >> 1) & 1) * mult * 255;
    const blue = ((color >> 2) & 1) * mult * 255;
    return { red, green, blue };
};
exports.ansi16ToRgb = ansi16ToRgb;
/**
 * Converts an Ansi16 numerical to Ansi8
 * @param {number}                 - ansi16 color value
 * @returns {number}               - ansi8 color value
 */
const ansi16ToAnsi8 = (ansi) => {
    ansi = (0, formats_and_checks_1.clamp)(ansi, 0, 15);
    return ansi > 7 ? ansi - 8 : ansi;
};
exports.ansi16ToAnsi8 = ansi16ToAnsi8;
/**
 * Converts an Ansi256 numerical to sRBG
 * @param {number}                - ansi256 color value
 * @returns {RGB}                 - sRBG color value
 *
 * - note: due to the nature of of Ansi256 to RGB conversion
 *         there is a significant data loss between RGB to Ansi256
 *         and Ansi256 to RGB conversions
 */
const ansi256ToRgb = (ansi) => {
    ansi = (0, formats_and_checks_1.clamp)(ansi, 16, 255);
    if (ansi >= 232) {
        const c = (ansi - 232) * 10 + 8;
        return { red: c, green: c, blue: c };
    }
    const brights = [0, 95, 135, 175, 215, 255];
    const red = brights[Math.floor(((ansi - 16) / 36) % 6)];
    const green = brights[Math.floor(((ansi - 16) / 6) % 6)];
    const blue = brights[Math.floor((ansi - 16) % 6)];
    return { red, green, blue };
};
exports.ansi256ToRgb = ansi256ToRgb;
