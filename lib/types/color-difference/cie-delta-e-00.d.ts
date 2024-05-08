/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { LAB, LCH, RGB } from 'interfaces/color-spaces.interface';
/**
 * Computes Delta E using the CIE2000 algorithm
 * - more infor: http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @param {LAB}				- values for the frist color
 * @param {LAB}				- values for the second color
 * @param {LCH}				- optional waight configuration object
 * @returns {number}	    - color difference value
*/
export declare const deltaECIE00Lab: (lab1: LAB, lab2: LAB, weights?: LCH) => number;
/**
 * Gets a delta E CIE 2000 value for a given colors
 * @param {RBG}                   - sRBG values for the frist color
 * @param {RBG}                   - sRBG values for the second color
 * @returns {number}              - color difference value
 *  ΔE - (Delta E, dE) The measure of change in visual
 *  perception of two given colors
 */
export declare const deltaECIE00Rgb: (rgb1: RGB, rgb2: RGB) => number;
