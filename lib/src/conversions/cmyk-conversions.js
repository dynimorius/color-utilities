"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykToRgb = void 0;
/**
 * Converts a color from CMYK color space to sRBG color space
 * @param {CMYK} - cmyk color value
 * @returns {RGB} - sRBG color value
 */
const cmykToRgb = ({ cyan, magenta, yellow, key }) => {
  key = key / 100;
  const f = (t) => (1 - Math.min(1, (t / 100) * (1 - key) + key)) * 255;
  return { red: f(cyan), green: f(magenta), blue: f(yellow) };
};
exports.cmykToRgb = cmykToRgb;
