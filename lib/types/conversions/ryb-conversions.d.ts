/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, RYB } from "../interfaces/color-spaces.interface";
/**
 * Converts a color form an RYB space to sRGB space
 * @param {RYB}                   - RYB values for a color
 * @returns {RBG}                 - sRBG values for a color
 */
export declare const rybToSrgb: ({ red, yellow, blue }: RYB) => RGB;
