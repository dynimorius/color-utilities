/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { Coefficients } from "../interfaces/con-coefficients";
import { RGB, YCbCr, YPbPr, YUV, YcCbcCrc, normalizeRgb } from "../public_api";
import { Matrix3x3 } from "../types/math-types";

/**
 * Converts a color form an YPbPr | YCbCr | YcCbcCrc space to sRGB space:
 * @param {YPbPr | YCbCr | YcCbcCrc} color YPbPr | YCbCr | YcCbcCrc values for a color
 * @param {{Kr: number, Kg: number, Kb: number}} ituRBt conversion coefficients
 * @returns {RGB} - sRGB values for a color
 */
export const ybrCoefToSrgb = (
  color: YPbPr | YCbCr | YcCbcCrc,
  ituRBt: Coefficients
): RGB => {
  const values = Object.values(color);
  const Y = values[0];
  const b = values[1];
  const r = values[2];
  const red = Y + ituRBt.e * r;
  const blue = Y + ituRBt.e * b;
  const green =
    Y -
    ((ituRBt.a * ituRBt.e) / ituRBt.b) * r -
    ((ituRBt.c * ituRBt.d) / ituRBt.b) * b;
  return { red, green, blue };
};

export const sRgbToYbrCoef = (
  { red, green, blue }: RGB,
  ituRBt: Coefficients,
  space: "ycbcr" | "yccbccrc" | "ypbpr" = "ypbpr"
): YPbPr | YCbCr | YcCbcCrc => {
  // const { red, green, blue } = normalizeRgb(rgb);
  const Y = ituRBt.a * red + ituRBt.b * green + ituRBt.c * blue;
  const b = (blue - Y) / ituRBt.d;
  const r = (red - Y) / ituRBt.e;
  if (space === "ypbpr") return { Y, Pb: b, Pr: r };
  else if (space === "ycbcr") return { Y, Cb: b, Cr: r };
  else return { Yc: Y, Cbc: b, Crc: r };
};

export const sRgbByMatrix = ({ red, green, blue }: RGB, matrix: Matrix3x3, fileds: string[]) => {
  return {
    [fileds[0]]: matrix[0][0] * red + matrix[0][1] * green + matrix[0][2] * blue,
    [fileds[1]]: matrix[1][0] * red - matrix[1][1] * green + matrix[1][2] * blue,
    [fileds[2]]: matrix[2][0] * red - matrix[2][1] * green - matrix[2][2] * blue,
  }
}

export const yuvByMatrix = ({ y, u, v }: YUV, matrix: Matrix3x3, fileds: string[]) => {
  return {
    [fileds[0]]: matrix[0][0] * y + matrix[0][1] * u + matrix[0][2] * v,
    [fileds[1]]: matrix[1][0] * y- matrix[1][1] * u + matrix[1][2] * v,
    [fileds[2]]: matrix[2][0] * y - matrix[2][1] * u - matrix[2][2] * v,
  }
}
