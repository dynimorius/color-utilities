/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { sRgbToHex, sRgbaToHex } from "../conversions/rgb-conversions";
/**
 * Creates an incremented color palet
 * @param {RGB}                   - data for the original color
 * @param {number}                - amount of colors to generate
 * @param {number}                - the number by which to increment
 * @returns {string[]}            - array of colors in hex format
 */
const scale = (rgb, size, scale, prefixed) => {
    let { red, green, blue } = rgb;
    const scaled = [];
    const scaleR = (scale - red) / size;
    const scaleG = (scale - green) / size;
    const scaleB = (scale - blue) / size;
    for (let i = 0; i < size; i++) {
        if (rgb.alpha)
            scaled.push(sRgbaToHex({ red, green, blue, alpha: rgb.alpha }, prefixed));
        else
            scaled.push(sRgbToHex({ red, green, blue }, prefixed));
        red += scaleR;
        green += scaleG;
        blue += scaleB;
    }
    return scaled;
};
/**
 * Creates an palet of shades by mixing a given color
 * with black (#000000)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the palet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]}            - array of shades in hex format
 */
export const getShades = (rgb, options) => {
    let size;
    if (!options?.size || !isFinite(options?.size)) {
        size = 10;
    }
    return scale(rgb, size, 0, options?.prefexed);
};
/**
 * Creates an palet of tints by mixing a given color
 * with white (#FFFFFF)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the palet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]} - array of tints in hex format
 */
export const getTints = (rgb, options) => {
    let size;
    if (!options?.size || !isFinite(options?.size)) {
        size = 10;
    }
    return scale(rgb, size, 1, options?.prefexed);
};
/**
 * Creates an palet of tones by mixing a given color
 * with gray (#777777)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the palet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]} - array of tones in hex format
 */
export const getTones = (rgb, options) => {
    let size;
    if (!options?.size || !isFinite(options?.size)) {
        size = 10;
    }
    return scale(rgb, size, 0.5, options?.prefexed);
};
