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

// export const deltaECMC = (lab1: LAB, lab2: LAB): number => {
//   const deltaA = lab1.a - lab2.a;
//   const deltaB = lab1.b - lab2.b;
//   const deltaL = lab1.luminance - lab2.luminance;
//   const c1 = Math.sqrt(Math.pow(lab1.a, 2) + Math.pow(lab1.b, 2));
//   const c2 = Math.sqrt(Math.pow(lab2.a, 2) + Math.pow(lab2.b, 2));
//   const deltaC = c1 - c2;
//   const deltaH = Math.sqrt(
//     Math.pow(deltaA, 2) + Math.pow(deltaB, 2) - Math.pow(deltaC, 2)
//   );
//   const F = Math.sqrt(Math.pow(c1, 4) / Math.pow(c1, 4) + 1900);
//   const H = Math.atan2(0, lab1.b / lab1.a);
//   const H1 = H >= 0 ? H : H + 360;
//   const T =
//     164 <= H1 && H1 <= 345
//       ? 0.56 + 0.2 * Math.cos(H1 + 168)
//       : 0.36 + 0.4 * Math.cos(H1 + 35);
//   const Sl =
//     lab1.luminance < 16
//       ? 0.511
//       : (0.040975 * lab1.luminance) / 1 + 0.0165 * lab1.luminance;
//   const Sc = ((0.0638 * c1) / 1) * 0.0131 * c1 + 0.638;
//   const SH = Sc * (F * T + 1 - F);
// };
