/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { clamp } from "../helpers/formats-and-checks";
import { RGB } from "../interfaces/color-spaces.interface";

/**
 * Converts an Ansi16 numerical to sRBG
 * @param {number} - ansi16 color value
 * @returns {RGB} - sRBG color value
 */
export const ansi16ToRgb = (ansi: number): RGB => {
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

/**
 * Converts an Ansi256 numerical to sRBG
 * @param {number} - ansi256 color value
 * @returns {RGB} - sRBG color value
 */
export const ansi256ToRgb = (ansi: number): RGB => {
  ansi = clamp(ansi, 16, 255);

  if (ansi >= 232) {
    const c = (ansi - 232) * 10 + 8;
    return { red: c, green: c, blue: c };
  }

  const brights: number[] = [0, 95, 135, 175, 215, 255];

  const red = brights[Math.floor(((ansi - 16) / 36) % 6)];
  const green = brights[Math.floor(((ansi - 16) / 6) % 6)];
  const blue = brights[Math.floor((ansi - 16) % 6)];

  return { red, green, blue };
};

