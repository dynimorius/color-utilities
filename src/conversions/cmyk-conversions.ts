/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CMYK, RGB } from "../interfaces/color-spaces.interface";

/**
 * Converts a color from CMYK color space to sRBG color space
 * @param {CMYK}                   - cmyk color value
 * @returns {RGB}                  - sRBG color value
 */

export const cmykToRgb = ({ cyan, magenta, yellow, key }: CMYK): RGB => {
  key = key / 100;
  const f = (t: number): number =>
    (1 - Math.min(1, (t / 100) * (1 - key) + key)) * 255;

  return { red: f(cyan), green: f(magenta), blue: f(yellow) };
};
