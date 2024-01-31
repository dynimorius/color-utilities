"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tslToSrgb = void 0;
/**
 * Converts a color form an TSL space to sRGB
 * @param {TSL} tsl TSL values for a color
 * @returns {RGB} - RGB values for a color
 */
const tslToSrgb = ({ tint, saturation, lightness }) => {
    const x = Math.pow(Math.tan(2 * Math.PI * (tint - 1 / 4)), 2);
    const r = Math.sqrt((5 * (saturation * saturation)) / (9 * (1 / x + 1))) + 1 / 3;
    const g = Math.sqrt((5 * (saturation * saturation)) / (9 * (x + 1))) + 1 / 3;
    const k = lightness / (0.185 * r + 0.473 * g + 0.114);
    const red = k * r * 255;
    const green = k * g * 255;
    const blue = k * (1 - r - g) * 255;
    return { red, green, blue };
};
exports.tslToSrgb = tslToSrgb;
