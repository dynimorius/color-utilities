"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.yDbDrToSrgb = void 0;
/**
 * Converts a color form an YDbDr space to sRGB space:
 * @param {YDbDr} ydpdr YDbDr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yDbDrToSrgb = ({ Y, Db, Dr }) => {
    const red = (Y + 0.000092303716148 * Db - 0.525912630661865 * Dr) * 255;
    const green = (Y - 0.129132898890509 * Db + 0.267899328207599 * Dr) * 255;
    const blue = (Y + 0.664679059978955 * Db - 0.000079202543533 * Dr) * 255;
    return { red, green, blue };
};
exports.yDbDrToSrgb = yDbDrToSrgb;
