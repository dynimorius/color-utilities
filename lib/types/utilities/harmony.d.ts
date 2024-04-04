/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { HSL, HSLA } from "../public_api";
/**
 * Gets a complementary color for a given one
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const complementaryHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const splitComplementaryHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const splitComplementaryCWHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Split harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const splitComplementaryCCWHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Triadic harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const triadicHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
export declare const clashHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Tetradic/Rectangle harmony color palet base on a given color
 * More info: https://www.color-meanings.com/rectangular-tetradic-color-schemes/
 * @param {HSL | HSLA}            - color from which to generate a harmony palet
 * @param {boolean}               - should return values start with #
 * @returns {string[]}            - return an array of colors in hex form
 */
export declare const tetradicHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fourToneCWHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Four Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fourToneCCWHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fiveToneAHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fiveToneBHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fiveToneCHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fiveToneDHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Five Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const fiveToneEHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const sixToneCWHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Six Tone harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const sixToneCCWHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Natural harmony color palet base on a given color
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const neutralHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Analogous harmony color palet base on a given color
 * More info: https://en.wikipedia.org/wiki/Harmony_(color)
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const analogousHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
/**
 * Creates a Square color palet base on a given color
 * More info: https://www.color-meanings.com/square-color-schemes/
 * @param {HSL | HSLA}           - color from which to generate a harmony palet
 * @param {boolean}              - should return values start with #
 * @returns {string[]}           - return an array of colors in hex form
 */
export declare const squareHarmony: (hsl: HSLA | HSL, prefixed?: boolean) => string[];
