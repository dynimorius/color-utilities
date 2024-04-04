/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { HARMONIES } from "../constants/harmonies";
import { hslToHex } from "../public_api";
/**
 * Creates a harmony palet for a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {number[]}             - represents harmonization angles
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
const harmonizeHsl = (hsl, degrees, prefixed) => {
    const harmonized = [];
    degrees.forEach((degree) => {
        if (isFinite(degree)) {
            const harmonizedHue = (hsl.hue + degree) % 360;
            harmonized.push(hslToHex({
                hue: harmonizedHue,
                saturation: hsl.saturation,
                lightness: hsl.lightness,
                alpha: hsl.alpha,
            }, prefixed));
        }
    });
    return harmonized;
};
/**
 * Gets a complementary color for a given one
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const complementaryHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.complementary, prefixed);
};
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const splitComplementaryHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.splitComplementary, prefixed);
};
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const splitComplementaryCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW, prefixed);
};
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const splitComplementaryCCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW, prefixed);
};
/**
 * Creates a Triadic harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const triadicHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.triadic, prefixed);
};
export const clashHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.clash, prefixed);
};
/**
 * Creates a Tetradic/Rectangle harmony color palet base on a given color
 * More info: https://www.color-meanings.com/rectangular-tetradic-color-schemes/
 * @param {HSL | HSLA}            - color from which to generate a harmony palet
 * @param {boolean}               - should return values start with #
 * @returns {string[]}            - return an array of colors in hex form
 */
export const tetradicHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.tetradic, prefixed);
};
/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fourToneCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fourToneCW, prefixed);
};
/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fourToneCCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fourToneCCW, prefixed);
};
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fiveToneAHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fiveToneA, prefixed);
};
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fiveToneBHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fiveToneB, prefixed);
};
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fiveToneCHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fiveToneC, prefixed);
};
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fiveToneDHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fiveToneD, prefixed);
};
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const fiveToneEHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.fiveToneE, prefixed);
};
/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const sixToneCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.sixToneCW, prefixed);
};
/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const sixToneCCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.sixToneCCW, prefixed);
};
/**
 * Creates a Natural harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const neutralHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.neutral, prefixed);
};
/**
 * Creates a Analogous harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const analogousHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.analogous, prefixed);
};
/**
 * Creates a Square color palet base on a given color
 * More info: https://www.color-meanings.com/square-color-schemes/
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export const squareHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, HARMONIES.square, prefixed);
};
