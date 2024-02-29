/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { HSL, HSV, RGB } from "../interfaces/color-spaces.interface";
import { sRgbToAnsi16 } from "./rgb-conversions";

/**
 * Converts a color from HSV color space to sRBG color space
 * @param {HSV}                   - hsl color value
 * @returns {RBG}                 - sRBG color value
 */
export const hsvToRgb = ({ hue, saturation, value }: HSV): RGB => {
  hue = (hue / 360) * 6;
  saturation = saturation / 100;
  value = value / 100;

  const i = Math.floor(hue);
  const f = hue - i;
  const p = value * (1 - saturation);
  const q = value * (1 - f * saturation);
  const t = value * (1 - (1 - f) * saturation);
  const mod = i % 6;
  const red = [value, q, p, p, t, value][mod] * 255;
  const green = [t, value, value, q, p, p][mod] * 255;
  const blue = [p, p, t, value, value, q][mod] * 255;

  return { red, green, blue };
};

/**
 * Converts a color from HSV color space to HSV color space
 * @param {HSV}                   - hsl color value
 * @returns {HSV}                 - hsv color value
 */
export const hsvToHsl = ({ hue, saturation, value }: HSV): HSL => {
  saturation = saturation / 100;
  value = value / 100;
  const vmin = Math.max(value, 0.01);
  let hslSaturation;
  let lightness;

  lightness = (2 - saturation) * value;
  const lmin = (2 - saturation) * vmin;
  hslSaturation = saturation * vmin;
  hslSaturation /= lmin <= 1 ? lmin : 2 - lmin;
  hslSaturation = hslSaturation || 0;
  lightness /= 2;

  return { hue, saturation: hslSaturation * 100, lightness: lightness * 100 };
};

/**
 * Converts a color from HSV color space to ansi16 numerical
 * @param {HSV}                   - hsl color value
 * @returns {number}              - ansi16 numberical value
 */
export const hsvToAnsi16 = (hsv: HSV): number => {
  const rgb = hsvToRgb(hsv);
  return sRgbToAnsi16(rgb, hsv.value);
};
