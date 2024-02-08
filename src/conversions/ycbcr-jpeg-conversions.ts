/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { RGB, YCbCr, YPbPr, xvYCC } from "../interfaces/color-spaces.interface";

/**
 * Converts a color form an Digital Y′CbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#JPEG_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yCbCrToSrgb = ({ Y, Cb, Cr }: YCbCr): RGB => {
  return {
    red: Math.round((1.16438 * Y) + (1.59602 * Cr) - 222.921),
    green: Math.round((1.16438 * Y) - (0.39176 * Cb) - (0.81296 * Cr) + 135.576),
    blue: Math.round((1.16438 * Y) + (2.01723* Cb) - 276.836),
  };
};

/**
 * Converts a color from analog to digital form.
 * Scales to min/max ranges
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @return {xvYCC} Resulting digitized form
 */
export const yCbCrToXvYcc = ({ Y, Cb, Cr }: YCbCr): xvYCC => {
  Y =  Y > 1 ? Y / 255 : Y;
  Cb = Cb > 1 ? Cb / 255 : Cb;
  Cr = Cr > 1 ? Cr / 255 : Cr;
  return {
    Y: 16 + 219 * Y,
    Cb: 128 + 224 * Cb,
    Cr: 128 + 224 * Cr,
  };
};

export const yCbCrToYPbPr = ({ Y, Cb, Cr }: YCbCr): YPbPr => {
  Y =  Y > 1 ? Y / 255 : Y;
  Cb = Cb > 1 ? Cb / 255 : Cb;
  Cr = Cr > 1 ? Cr / 255 : Cr;
  return {
    Y: (Y - 16) / 219,
    Pb: (Cb - 128) / 224,
    Pr: (Cr - 128) / 224
  }
}
