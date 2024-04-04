import { LAB, LCH, RGB, XYZ } from "../interfaces/color-spaces.interface";
/*************************************************************
 *                        CIE-L*ab
 *************************************************************/
/**
 * Converts a color from CIE-L*ab color space to XYZ
 * @param {LAB}                   - Lab color value
 * @returns {xyz}                 - xyz value
 */
export declare const labToXyz: ({ luminance, a, b }: LAB) => XYZ;
/**
 * Converts a color from CIE-L*ab color space to LCH(ab) color space
 * @param {LAB}                   - Lab color value
 * @returns {LCH}                 - LCH(ab) color value
 */
export declare const labToLch_ab: ({ luminance, a, b }: LAB) => LCH;
/**
 * Converts a color from CIE-L*ab color space to sRGB color space
 * @param {LAB}                   - Lab color value
 * @returns {RGB}                 - sRGB color value
 */
export declare const labToSrgb: (lab: LAB) => RGB;
/*************************************************************
 *                        Hunter-Lab
 *************************************************************/
/**
 * Converts a color from Hunter's Lab color space to XYZ values
 * @param {LAB}                   - Lab color value
 * @returns {XYZ}                 - XYZ color value
 */
export declare const hunterLabToXyz: ({ luminance, a, b }: LAB) => XYZ;
