/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 *
 * HCY colour space is a tractable hue/chroma/luminance scheme developed
 * by Kuzma Shapran
 * - more info: http://chilliant.blogspot.ca/2012/08/rgbhcy-in-hlsl.html
 */
import { HCY, HSI, RGB } from "../interfaces/color-spaces.interface";
/**
 * Converts a color form an HCY space or Hsi to sRGB space
 * @param {HCY | HSI}             - HCY or HSI values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export declare const hcyOrHsiToSrgb: (val: HCY | HSI) => RGB;
/**
 * Converts a color form an HCY space to sRGB space
 * @param {HCY}                   -HCY values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export declare const hcyToSrgb: (hcy: HCY) => RGB;
