"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yCbCrToXvYcc = exports.yCbCrToSrgb = void 0;
/**
 * Converts a color form an YCbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#JPEG_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yCbCrToSrgb = ({ Y, Cb, Cr }) => {
    return {
        red: Y + 1.402 * (Cr - 128),
        green: Y - 0.34414 * (Cb - 128) - 0.71414 * (Cr - 128),
        blue: Y + 1.772 * (Cb - 128),
    };
};
exports.yCbCrToSrgb = yCbCrToSrgb;
/**
 * Converts a color from analog to digital form.
 * Scales to min/max ranges
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @return {xvYCC} Resulting digitized form
 */
const yCbCrToXvYcc = ({ Y, Cb, Cr }) => {
    return {
        Y: 16 + 219 * Y,
        Cb: 128 + 224 * Cb,
        Cr: 128 + 224 * Cr,
    };
};
exports.yCbCrToXvYcc = yCbCrToXvYcc;
