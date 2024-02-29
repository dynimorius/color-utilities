/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

/**
 * Computes a hue value froma given sRGB values
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - number value of hue
 */
export const hueToRGB = (t1: number, t2: number, hue: number): number => {
  if (hue < 0) {
    hue += 6;
  }
  if (hue >= 6) {
    hue -= 6;
  }
  if (hue < 1) {
    return Math.round(((t2 - t1) * hue + t1) * 255);
  } else if (hue < 3) {
    return Math.round(t2 * 255);
  } else if (hue < 4) {
    return Math.round(((t2 - t1) * (4 - hue) + t1) * 255);
  } else {
    return Math.round(t1 * 255);
  }
};
