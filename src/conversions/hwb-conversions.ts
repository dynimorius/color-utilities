/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { HWB, RGB } from "../interfaces/color-spaces.interface";

/**
 * Converts a color from HWB color space to sRBG color space
 * @param {HWB}                   - hwb color value
 * @returns {RBG}                 - sRBG color value
 */
export const hwbToRgb = ({ hue, whiteness, blackness }: HWB): RGB => {
  hue = hue / 360;
  whiteness = whiteness / 100;
  blackness = blackness / 100;
  const ratio = whiteness + blackness;

  if (ratio > 1) {
    whiteness /= ratio;
    blackness /= ratio;
  }

  const mod = Math.floor(6 * hue);
  let f = 6 * hue - mod;
  f = (mod & 0x01) !== 0 ? 1 - f : f;
  let v = 1 - blackness;
  const n = whiteness + f * (v - whiteness);
  const red = [v, n, whiteness, whiteness, n, v, v][mod] * 255;
  const green = [n, v, v, n, whiteness, whiteness, n][mod] * 255;
  const blue = [whiteness, whiteness, n, v, v, n, whiteness][mod] * 255;

  return { red, green, blue };
};
