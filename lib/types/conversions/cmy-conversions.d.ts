import { CMY, RGB } from "../interfaces/color-spaces.interface";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Converts a color form an CMY space to sRGB space
 * @param {CMY}                   - CMY values for a color
 * @returns {RGB}                 - sRGB values for a color
 */
export declare const cmyToSRgb: ({ cyan, magenta, yellow }: CMY) => RGB;
