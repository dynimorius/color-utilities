/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, YcCbcCrc } from "../interfaces/color-spaces.interface";
/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc}                - YcCbcCrc values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const ycCbcCrcToSrgb: ({ Yc, Cbc, Crc }: YcCbcCrc) => RGB;
