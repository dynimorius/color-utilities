/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { REFERENCE_ILLUMINANT } from "../constants/reference-illuminants";
import { Fu, Fv } from "../helpers/white-point";
import { UVW, XYZ } from "../interfaces/color-spaces.interface";

export const uvwToXyz = (
  { u, v, w }: UVW,
  refIlluminant = REFERENCE_ILLUMINANT.D65
): XYZ => {
  if (w === 0) return { x: 0, y: 0, z: 0 };
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

  const y = Math.pow((w + 17) / 25, 3);
  const _u = u / (13 * w) + u0 || 0;
  const _v = v / (13 * w) + v0 || 0;
  const x = ((6 / 4) * y * _u) / _v;
  const z = y * (2 / _v - (0.5 * _u) / _v - 5);
  return { x, y, z };
};