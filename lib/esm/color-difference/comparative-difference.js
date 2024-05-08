"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparativeDistance = void 0;
/**
 * Gets comparative distance for a given sRBG colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - distance
 */
const comparativeDistance = (rgb1, rgb2) => {
    const diff = Math.sqrt(Math.pow(rgb1.red - rgb2.red, 2) +
        Math.pow(rgb1.green - rgb2.green, 2) +
        Math.pow(rgb1.blue - rgb2.blue, 2));
    return Math.round(Math.abs(diff));
};
exports.comparativeDistance = comparativeDistance;
