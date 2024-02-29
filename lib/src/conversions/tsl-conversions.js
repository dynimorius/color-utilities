"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tslToSrgb = void 0;
/**
 * Converts a color form an TSL space to sRGB
 * @param {TSL} tsl TSL values for a color
 * @returns {RGB} - RGB values for a color
 */
const tslToSrgb = ({ tint, saturation, lightness }, round) => {
  const x = Math.pow(Math.tan(2 * Math.PI * (tint - 1 / 4)), 2);
  const r =
    Math.sqrt((5 * (saturation * saturation)) / (9 * (1 / x + 1))) + 1 / 3;
  const g = Math.sqrt((5 * (saturation * saturation)) / (9 * (x + 1))) + 1 / 3;
  const k = lightness / (0.185 * r + 0.473 * g + 0.114);
  const red = round ? Math.round(k * r * 255) : k * r * 255;
  const green = round ? Math.round(k * g * 255) : k * g * 255;
  const blue = round
    ? Math.round(k * (1 - r - g) * 255)
    : k * (1 - r - g) * 255;
  return { red, green, blue };
};
exports.tslToSrgb = tslToSrgb;
