/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, TSL } from "../interfaces/color-spaces.interface";
/**
 * Converts a color form an TSL space to sRGB
 * @param {TSL}                   - TSL values for a color
 * @returns {RGB}                 - RGB values for a color
 */
export declare const tslToSrgb: ({ tint, saturation, lightness }: TSL, round?: boolean) => RGB;
