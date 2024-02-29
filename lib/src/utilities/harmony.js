"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareHarmony =
  exports.analogousHarmony =
  exports.neutralHarmony =
  exports.sixToneCCWHarmony =
  exports.sixToneCWHarmony =
  exports.fiveToneEHarmony =
  exports.fiveToneDHarmony =
  exports.fiveToneCHarmony =
  exports.fiveToneBHarmony =
  exports.fiveToneAHarmony =
  exports.fourToneCCWHarmony =
  exports.fourToneCWHarmony =
  exports.tetradicHarmony =
  exports.clashHarmony =
  exports.triadicHarmony =
  exports.splitComplementaryCCWHarmony =
  exports.splitComplementaryCWHarmony =
  exports.splitComplementaryHarmony =
  exports.complementaryHarmony =
    void 0;
const harmonies_1 = require("../constants/harmonies");
const public_api_1 = require("../public_api");
/**
 * Creates a harmony palet for a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {number[]} - represents harmonization angles
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const harmonizeHsl = (hsl, degrees, prefixed) => {
  const harmonized = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue = (hsl.hue + degree) % 360;
      harmonized.push(
        (0, public_api_1.hslToHex)(
          {
            hue: harmonizedHue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
            alpha: hsl.alpha,
          },
          prefixed
        )
      );
    }
  });
  return harmonized;
};
/**
 * Gets a complementary color for a given one
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const complementaryHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.complementary, prefixed);
};
exports.complementaryHarmony = complementaryHarmony;
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const splitComplementaryHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementary, prefixed);
};
exports.splitComplementaryHarmony = splitComplementaryHarmony;
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const splitComplementaryCWHarmony = (hsl, prefixed) => {
  return harmonizeHsl(
    hsl,
    harmonies_1.HARMONIES.splitComplementaryCW,
    prefixed
  );
};
exports.splitComplementaryCWHarmony = splitComplementaryCWHarmony;
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const splitComplementaryCCWHarmony = (hsl, prefixed) => {
  return harmonizeHsl(
    hsl,
    harmonies_1.HARMONIES.splitComplementaryCCW,
    prefixed
  );
};
exports.splitComplementaryCCWHarmony = splitComplementaryCCWHarmony;
/**
 * Creates a Triadic harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const triadicHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.triadic, prefixed);
};
exports.triadicHarmony = triadicHarmony;
const clashHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.clash, prefixed);
};
exports.clashHarmony = clashHarmony;
/**
 * Creates a Tetradic/Rectangle harmony color palet base on a given color
 * More info: https://www.color-meanings.com/rectangular-tetradic-color-schemes/
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const tetradicHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.tetradic, prefixed);
};
exports.tetradicHarmony = tetradicHarmony;
/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fourToneCWHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCW, prefixed);
};
exports.fourToneCWHarmony = fourToneCWHarmony;
/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fourToneCCWHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCCW, prefixed);
};
exports.fourToneCCWHarmony = fourToneCCWHarmony;
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fiveToneAHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneA, prefixed);
};
exports.fiveToneAHarmony = fiveToneAHarmony;
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fiveToneBHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneB, prefixed);
};
exports.fiveToneBHarmony = fiveToneBHarmony;
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fiveToneCHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneC, prefixed);
};
exports.fiveToneCHarmony = fiveToneCHarmony;
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fiveToneDHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneD, prefixed);
};
exports.fiveToneDHarmony = fiveToneDHarmony;
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const fiveToneEHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneE, prefixed);
};
exports.fiveToneEHarmony = fiveToneEHarmony;
/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const sixToneCWHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCW, prefixed);
};
exports.sixToneCWHarmony = sixToneCWHarmony;
/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const sixToneCCWHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCCW, prefixed);
};
exports.sixToneCCWHarmony = sixToneCCWHarmony;
/**
 * Creates a Natural harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const neutralHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.neutral, prefixed);
};
exports.neutralHarmony = neutralHarmony;
/**
 * Creates a Analogous harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const analogousHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.analogous, prefixed);
};
exports.analogousHarmony = analogousHarmony;
/**
 * Creates a Square color palet base on a given color
 * More info: https://www.color-meanings.com/square-color-schemes/
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const squareHarmony = (hsl, prefixed) => {
  return harmonizeHsl(hsl, harmonies_1.HARMONIES.square, prefixed);
};
exports.squareHarmony = squareHarmony;
