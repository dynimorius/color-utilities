import { RGB, YCbCr, YPbPr, xvYCC } from "../interfaces/color-spaces.interface";
/**
 * Converts a color form an ITU-R BT.601 Y′CbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.601_conversion
 * @param {YCbCr}                   - YCbCr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const yCbCrBT601ToSrgb: ({ Y, Cb, Cr }: YCbCr) => RGB;
/**
 * Converts a color from analog to digital form.
 * Scales to min/max ranges
 * @param {YCbCr}                   - YCbCr values for a color
 * @return {xvYCC}                  - Resulting digitized form
 */
export declare const yCbCrBT601ToXvYcc: ({ Y, Cb, Cr }: YCbCr) => xvYCC;
export declare const yCbCrBT601ToYPbPr: ({ Y, Cb, Cr }: YCbCr) => YPbPr;
/**
 * Converts a color form an ITU-R BT.709 Y′CbCr space to sRGB space:
 * - more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.709_conversion
 * @param {YCbCr}                   - YCbCr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const yCbCrBT709ToSrgb: ({ Y, Cb, Cr }: YCbCr) => RGB;
