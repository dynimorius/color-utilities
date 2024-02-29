"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hueToRGB = void 0;
const hueToRGB = (t1, t2, hue) => {
  if (hue < 0) {
    hue += 6;
  }
  if (hue >= 6) {
    hue -= 6;
  }
  if (hue < 1) {
    return Math.round(((t2 - t1) * hue + t1) * 255);
  } else if (hue < 3) {
    return Math.round(t2 * 255);
  } else if (hue < 4) {
    return Math.round(((t2 - t1) * (4 - hue) + t1) * 255);
  } else {
    return Math.round(t1 * 255);
  }
};
exports.hueToRGB = hueToRGB;
