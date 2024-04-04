import { RGB, YCbCr, YPbPr } from "../public_api";
/**
 * Converts a color form an YPbPr space to sRGB space:
 * @param {YPbPr}                   - YPbPr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const yPbPrToSrgb: ({ Y, Pb, Pr }: YPbPr) => RGB;
/**
 * Converts a color form an YPbPr space to YCbCr space:
 * @param {YPbPr}                   - YPbPr values for a color
 * @returns {YCbCr}                 - YCbCr values for a color
 */
export declare const yPbPrToYCbCr: ({ Y, Pb, Pr }: YPbPr) => YCbCr;
