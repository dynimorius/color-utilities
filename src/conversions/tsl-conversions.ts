/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { RGB, TSL } from "../interfaces/color-spaces.interface";

/**
 * Converts a color form an TSL space to sRGB
 * @param {TSL}                   - TSL values for a color
 * @returns {RGB}                 - RGB values for a color
 */
export const tslToSrgb = (
  { tint, saturation, lightness }: TSL,
  round?: boolean
): RGB => {
  let _g;
  let _r;
  if (lightness === 0) return { red: 0, green: 0, blue: 0 };
  else if (tint < 0) {
    _g = 0;
    _r = (-2.2360679774998 / 3) * saturation;
  } else if (tint === 0) {
    _g = 0;
    _r = (2.2360679774998 / 3) * saturation;
  } else {
    const x = -1 / Math.tan(2 * Math.PI * tint);
    _g = (Math.sqrt(5.0 / (1 + x * x)) / 3.0) * saturation;
    _g = tint > 0.5 ? -_g : _g;
    _r = x * _g;
  }
  const r = _r + 0.333333;
  const g = _g + 0.333333;
  const k = lightness / (0.185 * r + 0.473 * g + 0.114);
  const red = round ? Math.round(k * r * 255) : k * r * 255;
  const green = round ? Math.round(k * g * 255) : k * g * 255;
  const blue = round
    ? Math.round(k * (1 - r - g) * 255)
    : k * (1 - r - g) * 255;
  return { red, green, blue };
};
