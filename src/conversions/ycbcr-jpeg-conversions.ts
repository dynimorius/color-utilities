/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { CB_CR_CONVERSION_MATRICES } from "../constants/cb-cr-conversions-matrices";
import { matrixByVectorObjMultiAsSpace } from "../helpers/matrix";
import { RGB, YCbCr, YPbPr, xvYCC } from "../interfaces/color-spaces.interface";

/**
 * Converts a color form an ITU-R BT.601 Y′CbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yCbCrBT601ToSrgb = ({ Y, Cb, Cr }: YCbCr): RGB => {
  const { red, green, blue } = matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.BT_601_YCBCR_TO_RGB,
    { Y: Y - 16, Cb: Cb - 128, Cr: Cr - 128 },
    ["red", "green", "blue"]
  ) as unknown as RGB;
  return {
    red: Math.round(red),
    green: Math.round(green),
    blue: Math.round(blue),
  };
};

/**
 * Converts a color from analog to digital form.
 * Scales to min/max ranges
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @return {xvYCC} Resulting digitized form
 */
export const yCbCrBT601ToXvYcc = ({ Y, Cb, Cr }: YCbCr): xvYCC => {
  Y = Y > 1 ? Y / 255 : Y;
  Cb = Cb > 1 ? Cb / 255 : Cb;
  Cr = Cr > 1 ? Cr / 255 : Cr;
  return {
    Y: 16 + 219 * Y,
    Cb: 128 + 224 * Cb,
    Cr: 128 + 224 * Cr,
  };
};

export const yCbCrBT601ToYPbPr = ({ Y, Cb, Cr }: YCbCr): YPbPr => {
  Y = Y > 1 ? Y / 255 : Y;
  Cb = Cb > 1 ? Cb / 255 : Cb;
  Cr = Cr > 1 ? Cr / 255 : Cr;
  return {
    Y: (Y - 16) / 219,
    Pb: (Cb - 128) / 224,
    Pr: (Cr - 128) / 224,
  };
};

/**
 * Converts a color form an ITU-R BT.709 Y′CbCr space to sRGB space:
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.709_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yCbCrBT709ToSrgb = ({ Y, Cb, Cr }: YCbCr): RGB => {
  const { red, green, blue } = matrixByVectorObjMultiAsSpace(
    CB_CR_CONVERSION_MATRICES.BT_709_YCBCR_TO_RGB,
    { Y, Cb, Cr },
    ["red", "green", "blue"]
  ) as unknown as RGB;
  return {
    red: Math.round(red),
    green: Math.round(green),
    blue: Math.round(blue),
  };
};

/**
 * Converts a color form an ITU-R BT.2020-2 Y′CbCr space to sRGB space:
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.2020_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yCbCrBT2020ToSrgb = ({ Y, Cb, Cr }: YCbCr): RGB => {
  const red = (Cr + Y) * 1.4746;
  const blue = (Cb + Y) * 1.8814;
  const green = (Y - 0.2627 * red - 0.0593 * blue) / 0.678;
  return {
    red: Math.round(red),
    green: Math.round(green),
    blue: Math.round(blue),
  };
};
