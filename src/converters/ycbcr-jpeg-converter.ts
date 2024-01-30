import { RGB, YCbCr } from '../interfaces/color-spaces.interface';
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

/**
 * Converts a color form an YCbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports 
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the 
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#JPEG_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yCbCrToSrgb = ({Y, Cb, Cr}: YCbCr): RGB => { 
  return {
    red: Y + 1.402 * (Cr - 128),
    green: Y - 0.34414 * (Cb - 128) - 0.71414 * (Cr - 128),
    blue: Y + 1.772 * (Cb - 128)
  }
}