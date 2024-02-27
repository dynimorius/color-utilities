/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CIE_κ, CIE_ϵ } from "../constants/conditionals";
import { REFERENCE_ILLUMINANT } from "../constants/reference-illuminants";
import { Fu, Fv } from "../helpers/white-point";
import { LCH, LUV, XYZ } from "../interfaces/color-spaces.interface";

/**
 * Converts a color from LUV color space to LCH(uv) color space
 * @param {LUV}                   - luv color value
 * @returns {LCH}                 - Lch(uv) color value
 */
export const luvToLch_uv = ({ L, u, v }: LUV): LCH => {
  const chroma = Math.sqrt(u * u + v * v);
  let hue = (Math.atan2(v, u) * 180) / Math.PI;
  hue = hue >= 0 ? hue : hue + 360;
  return { lightness: L, chroma, hue };
};

/**
 * Converts a color from LUV color space to XYZ
 * @param {LUV}                   - luv color value
 * @returns {XYZ}                 - xyz color value
 */
export const luvToXyz = (
  { L, u, v }: LUV,
  refIlluminant = REFERENCE_ILLUMINANT.D65
): XYZ => {
  const v0 = Fv({
    x: refIlluminant.X,
    y: refIlluminant.Y,
    z: refIlluminant.Z,
  });
  const u0 = Fu({
    x: refIlluminant.X,
    y: refIlluminant.Y,
    z: refIlluminant.Z,
  });
  const y = L > CIE_κ * CIE_ϵ ? Math.pow((L + 16) / 116, 3) : L / CIE_κ;
  const d = y * ((39 * L) / (v + 13 * L * v0) - 5) || 0;
  const c = -1 / 3;
  const b = -5 * y;
  const a = ((52 * L) / (u + 13 * L * u0) - 1) / 3 || 0;
  const x = (d - b) / (a - c);
  const z = x * a + b;
  // Add zero to prevent signed zeros (force 0 rather than -0)
  return { x: x * 100 + 0, y: y * 100 + 0, z: z * 100 + 0 };
};
