"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yCbCrToYPbPr = exports.yCbCrToXvYcc = exports.yCbCrToSrgb = void 0;
/**
 * Converts a color form an Digital Y′CbCr space to sRGB space:
 * JFIF (JPEG File Interchange Format) usage of JPEG supports
 * a modified Rec. 601 Y′CbCr where Y′, CB and CR have the
 * full 8-bit range of [0...255].
 * - more info: https://en.wikipedia.org/wiki/YCbCr#JPEG_conversion
 * @param {YCbCr} ycbcr YCbCr values for a color
 * @returns {RGB} - sRGB values for a color
 */
const yCbCrToSrgb = ({ Y, Cb, Cr }) => {
    return {
        red: Math.round((1.16438 * Y) + (1.59602 * Cr) - 222.921),
        green: Math.round((1.16438 * Y) - (0.39176 * Cb) - (0.81296 * Cr) + 135.576),
        blue: Math.round((1.16438 * Y) + (2.01723 * Cb) - 276.836),
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
    Y = Y > 1 ? Y / 255 : Y;
    Cb = Cb > 1 ? Cb / 255 : Cb;
    Cr = Cr > 1 ? Cr / 255 : Cr;
    return {
        Y: 16 + 219 * Y,
        Cb: 128 + 224 * Cb,
        Cr: 128 + 224 * Cr,
    };
};
exports.yCbCrToXvYcc = yCbCrToXvYcc;
const yCbCrToYPbPr = ({ Y, Cb, Cr }) => {
    Y = Y > 1 ? Y / 255 : Y;
    Cb = Cb > 1 ? Cb / 255 : Cb;
    Cr = Cr > 1 ? Cr / 255 : Cr;
    return {
        Y: (Y - 16) / 219,
        Pb: (Cb - 128) / 224,
        Pr: (Cr - 128) / 224
    };
};
exports.yCbCrToYPbPr = yCbCrToYPbPr;
