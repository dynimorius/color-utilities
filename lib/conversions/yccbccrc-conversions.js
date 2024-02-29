"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ycCbcCrcToSrgb = void 0;
const conditionals_1 = require("../constants/conditionals");
/**
 * Converts a color form an YcCbcCrc space to sRGB space:
 * @param {YcCbcCrc} ycCbcCrc YcCbcCrc values for a color
 * @returns {RGB} - sRGB values for a color
 */
const ycCbcCrcToSrgb = ({ Yc, Cbc, Crc }) => {
  const red = getChannel({ Yc, Cbc, Crc }, "red");
  const blue = getChannel({ Yc, Cbc, Crc }, "blue");
  const green = (Yc - 0.2627 * red - 0.0593 * blue) / 0.678;
  return { red, green, blue };
};
exports.ycCbcCrcToSrgb = ycCbcCrcToSrgb;
const getChannel = ({ Yc, Cbc, Crc }, channel) => {
  if (channel === "red") {
    const testRed = Yc + Crc * 1.7182;
    if (conditionals_1.Nr <= testRed - Yc || testRed - Yc <= 0) return testRed;
    else return Yc + Crc * 0.9938;
  }
  const testBlue = Yc + Cbc * 1.9404;
  if (conditionals_1.Nb <= testBlue - Yc || testBlue - Yc <= 0) return testBlue;
  else return Yc + Cbc * 1.582;
};
