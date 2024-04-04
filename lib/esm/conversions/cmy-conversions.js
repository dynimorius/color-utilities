"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmyToSRgb = void 0;
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Converts a color form an CMY space to sRGB space
 * @param {CMY}                   - CMY values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
const cmyToSRgb = ({ cyan, magenta, yellow }) => {
    cyan = cyan / 100;
    magenta = magenta / 100;
    yellow = yellow / 100;
    return {
        red: (1 - cyan) * 255,
        green: (1 - magenta) * 255,
        blue: (1 - yellow) * 255,
    };
};
exports.cmyToSRgb = cmyToSRgb;
