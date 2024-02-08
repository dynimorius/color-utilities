/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, YDbDr } from "../public_api";
/**
 * Converts a color form an YDbDr space to sRGB space:
 * @param {YDbDr} ydpdr YDbDr values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const yDbDrToSrgb = ({ Y, Db, Dr }: YDbDr): RGB => {
  const red = (Y + 0.000092303716148 * Db - 0.525912630661865 * Dr);
  const green = (Y - 0.129132898890509 * Db + 0.267899328207599 * Dr);
  const blue = (Y + 0.664679059978955 * Db - 0.000079202543533 * Dr);
  return {red, green, blue}
};
