/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { LAB, RGB } from "../interfaces/color-spaces.interface";

/**
 * Gets comparative distance for a given sRBG color
 * @param {RBG} rgb1 sRBG values for the frist color
 * @param {RBG} rgb2 sRBG values for the second color
 * @returns {number} - distance
 */
export const comparativeDistance = (rgb1: RGB, rgb2: RGB): number => {
  const diff = Math.sqrt(
    Math.pow(rgb1.red - rgb2.red, 2) +
      Math.pow(rgb1.green - rgb2.green, 2) +
      Math.pow(rgb1.blue - rgb2.blue, 2)
  );
  return Math.round(Math.abs(diff));
};

export const deltaECIE76 = (lab1: LAB, lab2: LAB): number => {
  return Math.sqrt(
    Math.pow(lab1.luminance - lab2.luminance, 2) +
      Math.pow(lab1.a - lab2.a, 2) +
      Math.pow(lab1.b - lab2.b, 2)
  );
};

