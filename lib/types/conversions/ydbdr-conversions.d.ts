/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, YDbDr } from "../public_api";
/**
 * Converts a color form an YDbDr space to sRGB space:
 * @param {YDbDr}                   - YDbDr values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const yDbDrToSrgb: ({ Y, Db, Dr }: YDbDr) => RGB;
