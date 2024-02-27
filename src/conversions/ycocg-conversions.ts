/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, YCoCg } from "../public_api";

/**
 * Converts a color form an YCoCg space to sRGB space:
 * @param {YCoCg}                   - YCoCg values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export const yCgCoToSrgb = ({ Y, Co, Cg }: YCoCg): RGB => {
  const temp = Y - Cg;
  return {
    red: (temp + Co),
    green: (Y + Cg),
    blue: (temp - Co),
  };
};
