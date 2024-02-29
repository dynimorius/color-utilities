"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansi256ToRgb = exports.ansi16ToRgb = void 0;
/**
 * Converts an Ansi16 numerical to sRBG
 * @param {number} - ansi16 color value
 * @returns {RGB} - sRBG color value
 */
const ansi16ToRgb = (ansi) => {
  let color = ansi % 10;
  // Handle greyscale
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
 * Converts an Ansi256 numerical to sRBG
 * @param {number} - ansi256 color value
 * @returns {RGB} - sRBG color value
 */
const ansi256ToRgb = (ansi) => {
  if (ansi >= 232) {
    const c = (ansi - 232) * 10 + 8;
    return { red: c, green: c, blue: c };
  }
  ansi -= 16;
  let rem = ansi % 36;
  const red = (Math.floor(ansi / 36) / 5) * 255;
  const green = (Math.floor(rem / 6) / 5) * 255;
  const blue = ((rem % 6) / 5) * 255;
  return { red, green, blue };
};
exports.ansi256ToRgb = ansi256ToRgb;
