"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareHarmony = exports.analogousHarmony = exports.neutralHarmony = exports.sixToneCCWHarmony = exports.sixToneCWHarmony = exports.fiveToneEHarmony = exports.fiveToneDHarmony = exports.fiveToneCHarmony = exports.fiveToneBHarmony = exports.fiveToneAHarmony = exports.fourToneCCWHarmony = exports.fourToneCWHarmony = exports.tetradicHarmony = exports.clashHarmony = exports.triadicHarmony = exports.splitComplementaryCCWHarmony = exports.splitComplementaryCWHarmony = exports.splitComplementaryHarmony = exports.complementaryHarmony = void 0;
const harmonies_1 = require("../constants/harmonies");
const public_api_1 = require("../public_api");
const harmonizeHsl = (hsl, degrees, prefixed) => {
    const harmonized = [];
    degrees.forEach((degree) => {
        if (isFinite(degree)) {
            const harmonizedHue = (hsl.hue + degree) % 360;
            harmonized.push((0, public_api_1.hslToHex)({
                hue: harmonizedHue,
                saturation: hsl.saturation,
                lightness: hsl.lightness,
                alpha: hsl.alpha,
            }, prefixed));
        }
    });
    return harmonized;
};
const complementaryHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.complementary, prefixed);
};
exports.complementaryHarmony = complementaryHarmony;
const splitComplementaryHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementary, prefixed);
};
exports.splitComplementaryHarmony = splitComplementaryHarmony;
const splitComplementaryCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementaryCW, prefixed);
};
exports.splitComplementaryCWHarmony = splitComplementaryCWHarmony;
const splitComplementaryCCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementaryCCW, prefixed);
};
exports.splitComplementaryCCWHarmony = splitComplementaryCCWHarmony;
const triadicHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.triadic, prefixed);
};
exports.triadicHarmony = triadicHarmony;
const clashHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.clash, prefixed);
};
exports.clashHarmony = clashHarmony;
const tetradicHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.tetradic, prefixed);
};
exports.tetradicHarmony = tetradicHarmony;
const fourToneCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCW, prefixed);
};
exports.fourToneCWHarmony = fourToneCWHarmony;
const fourToneCCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCCW, prefixed);
};
exports.fourToneCCWHarmony = fourToneCCWHarmony;
const fiveToneAHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneA, prefixed);
};
exports.fiveToneAHarmony = fiveToneAHarmony;
const fiveToneBHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneB, prefixed);
};
exports.fiveToneBHarmony = fiveToneBHarmony;
const fiveToneCHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneC, prefixed);
};
exports.fiveToneCHarmony = fiveToneCHarmony;
const fiveToneDHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneD, prefixed);
};
exports.fiveToneDHarmony = fiveToneDHarmony;
const fiveToneEHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneE, prefixed);
};
exports.fiveToneEHarmony = fiveToneEHarmony;
const sixToneCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCW, prefixed);
};
exports.sixToneCWHarmony = sixToneCWHarmony;
const sixToneCCWHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCCW, prefixed);
};
exports.sixToneCCWHarmony = sixToneCCWHarmony;
const neutralHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.neutral, prefixed);
};
exports.neutralHarmony = neutralHarmony;
const analogousHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.analogous, prefixed);
};
exports.analogousHarmony = analogousHarmony;
const squareHarmony = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.square, prefixed);
};
exports.squareHarmony = squareHarmony;
