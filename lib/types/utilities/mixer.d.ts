/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, RGBA } from "../interfaces/color-spaces.interface";
import { MixerOptions } from "../interfaces/mixer.interface";
/**
 * Creates an palet of shades by mixing a given color
 * with black (#000000)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the palet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]}            - array of shades in hex format
 */
export declare const getShades: (rgb: RGB | RGBA, options?: MixerOptions) => string[];
/**
 * Creates an palet of tints by mixing a given color
 * with white (#FFFFFF)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the palet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]} - array of tints in hex format
 */
export declare const getTints: (rgb: RGB | RGBA, options?: MixerOptions) => string[];
/**
 * Creates an palet of tones by mixing a given color
 * with gray (#777777)
 * @param {RGB}                   - data for the original color
 * @param {MixerOptions}          - options for generating the palet:
 *                                - size: how many colors to generate
 *                                - prefixed: should the return values start with #
 * @returns {string[]} - array of tones in hex format
 */
export declare const getTones: (rgb: RGB | RGBA, options?: MixerOptions) => string[];
