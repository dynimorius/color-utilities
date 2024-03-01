/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { RGB, RYB } from "../interfaces/color-spaces.interface";

/**
 * Converts a color form an RYB space to sRGB space
 * @param {RYB}                   - RYB values for a color
 * @returns {RBG}                 - sRBG values for a color
 */
export const rybToSrgb = ({ red, yellow, blue }: RYB): RGB => {
  const Iw = Math.min(red, yellow, blue);
  const Ib = Math.min(255 - red, 255 - yellow, 255 - blue);
  const rRYB = red - Iw;
  const yRYB = yellow - Iw;
  const bRYB = blue - Iw;
  const minYB = Math.min(yRYB, bRYB);
  const rRGB = rRYB + yRYB - minYB;
  const gRGB = yRYB + minYB;
  const bRGB = 2 * (bRYB - minYB);
  const n = Math.max(rRGB, gRGB, bRGB) / Math.max(rRYB, yRYB, bRYB);
  const N = isNaN(n) || n === Infinity || n <= 0 ? 1 : n;
  return {
    red: rRGB / N + Ib,
    green: gRGB / N + Ib,
    blue: bRGB / N + Ib,
  };
};
