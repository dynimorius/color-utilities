/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { LAB, LCH, LUV, XYZ } from "../interfaces/color-spaces.interface";
import { labToXyz } from "./lab-conversions";
import { luvToXyz } from "./luv-conversions";

/**
 * Converts a color from LCH(ab) color space to LAB color space
 * @param {LCH}                   - Lch(ab) color value
 * @returns {LAB}                 - lab color value
 */
export const lch_abToLab = ({ lightness, chroma, hue }: LCH): LAB => {
  const H = (hue / 180) * Math.PI;
  const a = chroma * Math.cos(H);
  const b = chroma * Math.sin(H);

  return { luminance: lightness, a, b };
};

/**
 * Converts a color from LCH(ab) color space to LUV color space
 * @param {LCH}                   - Lch(uv) color value
 * @returns {LUV}                 - luv color value
 */
export const lch_uvToLuv = ({ lightness, chroma, hue }: LCH): LUV => {
  const H = (hue / 180) * Math.PI;
  const u = chroma * Math.cos(H);
  const v = chroma * Math.sin(H);

  return { L: lightness, u, v };
};

/**
 * Converts a color from LCH(ab) color space to XYZ
 * @param {LCH}                   - Lch(ab) color value
 * @returns {XYZ}                 - xyz value
 */
export const lch_abToXyz = (lch: LCH): XYZ => {
  return labToXyz(lch_abToLab(lch));
};

/**
 * Converts a color from LCH(uv) color space to XYZ
 * @param {LCH}                   - Lch(uv) color value
 * @returns {XYZ}                 - xyz value
 */
export const lch_uvToXyz = (lch: LCH): XYZ => {
  return luvToXyz(lch_uvToLuv(lch));
};
