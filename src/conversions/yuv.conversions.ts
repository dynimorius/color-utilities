/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-coefficients";
import { RGB, YUV, deNormalizeRGB } from "../public_api";
import { Matrix3x3 } from "../types/math-types";
import { yuvByMatrix } from "./cb-cr-coef-conversions";

/**
 * Converts a color form an YUV space to sRGB space
 * @param {YUV} yuv YUV values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yuvToRgb = ({ y, u, v }: YUV, normalized?: boolean): RGB => {
  const red = y + 1.14 * v;
  const green = y - 0.395 * u - 0.581 * v;
  const blue = y + 2.032 * u;
  // return normalized ? deNormalizeRGB({ red, green, blue }) : { red, green, blue };
  return yuvByMatrix({ y, u, v }, CB_CR_CONVERSION_MATRICES.YUV_TO_RGB as Matrix3x3, ["red", "green", "blue"]) as unknown as RGB;
};

