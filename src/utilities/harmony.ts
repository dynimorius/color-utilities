/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { HARMONIES } from "../constants/harmonies";
import { HSL, HSLA, hslToHex } from "../public_api";

/**
 * Creates a harmony palet for a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {number[]} - represents harmonization angles
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
const harmonizeHsl = (
  hsl: HSL | HSLA,
  degrees: number[],
  prefixed?: boolean
): string[] => {
  const harmonized: string[] = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue: number = (hsl.hue + degree) % 360;
      harmonized.push(
        hslToHex(
          {
            hue: harmonizedHue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
            alpha: (hsl as HSLA).alpha,
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
export const complementaryHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.complementary, prefixed);
};

/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const splitComplementaryHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementary, prefixed);
};

/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const splitComplementaryCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW, prefixed);
};

/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const splitComplementaryCCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW, prefixed);
};

/**
 * Creates a Triadic harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const triadicHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.triadic, prefixed);
};

export const clashHarmony = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.clash, prefixed);
};

/**
 * Creates a Tetradic/Rectangle harmony color palet base on a given color
 * More info: https://www.color-meanings.com/rectangular-tetradic-color-schemes/
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const tetradicHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.tetradic, prefixed);
};

/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fourToneCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCW, prefixed);
};

/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fourToneCCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCCW, prefixed);
};

/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fiveToneAHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneA, prefixed);
};

/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fiveToneBHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneB, prefixed);
};

/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fiveToneCHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneC, prefixed);
};

/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fiveToneDHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneD, prefixed);
};

/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const fiveToneEHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneE, prefixed);
};

/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const sixToneCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCW, prefixed);
};

/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const sixToneCCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCCW, prefixed);
};

/**
 * Creates a Natural harmony color palet base on a given color
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const neutralHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.neutral, prefixed);
};

/**
 * Creates a Analogous harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const analogousHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.analogous, prefixed);
};

/**
 * Creates a Square color palet base on a given color
 * More info: https://www.color-meanings.com/square-color-schemes/
 * @param {HSL | HSLA} - color from which to generate a harmony palet
 * @param {boolean} - should return values start with #
 * @returns {string[]} - return an array of colors in hex form
 */
export const squareHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.square, prefixed);
};
