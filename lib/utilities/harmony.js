"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareHarmonyHsl = exports.analogousHarmonyHsl = exports.neutralHarmonyHsl = exports.sixToneCCWHarmonyHsl = exports.sixToneCWHarmonyHsl = exports.fiveToneEHarmonyHsl = exports.fiveToneDHarmonyHsl = exports.fiveToneCHarmonyHsl = exports.fiveToneBHarmonyHsl = exports.fiveToneAHarmonyHsl = exports.fourToneCCWHarmonyHsl = exports.fourToneCWHarmonyHsl = exports.tetradicHarmonyHsl = exports.clashHarmonyHsl = exports.triadicHarmonyHsl = exports.splitComplementaryCCWHarmonyHsl = exports.splitComplementaryCWHarmonyHsl = exports.splitComplementaryHarmonyHsl = exports.complementaryHarmonyHsl = void 0;
const harmonies_1 = require("../constants/harmonies");
const public_api_1 = require("../public_api");
const harmonizeHsl = (hsl, degrees, prefixed) => {
    const harmonized = [];
    degrees.forEach((degree) => {
        if (isFinite(degree)) {
            const harmonizedHue = (hsl.hue + degree) % 360;
            harmonized.push(hsl.alpha
                ? (0, public_api_1.hslaToHex)({
                    hue: harmonizedHue,
                    saturation: hsl.saturation,
                    lightness: hsl.lightness,
                    alpha: hsl.alpha,
                }, prefixed)
                : (0, public_api_1.hslToHex)({
                    hue: harmonizedHue,
                    saturation: hsl.saturation,
                    lightness: hsl.lightness,
                }, prefixed));
        }
    });
    return harmonized;
};
const complementaryHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.complementary, prefixed);
};
exports.complementaryHarmonyHsl = complementaryHarmonyHsl;
const splitComplementaryHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementary, prefixed);
};
exports.splitComplementaryHarmonyHsl = splitComplementaryHarmonyHsl;
const splitComplementaryCWHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementaryCW, prefixed);
};
exports.splitComplementaryCWHarmonyHsl = splitComplementaryCWHarmonyHsl;
const splitComplementaryCCWHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementaryCCW, prefixed);
};
exports.splitComplementaryCCWHarmonyHsl = splitComplementaryCCWHarmonyHsl;
const triadicHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.triadic, prefixed);
};
exports.triadicHarmonyHsl = triadicHarmonyHsl;
const clashHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.clash, prefixed);
};
exports.clashHarmonyHsl = clashHarmonyHsl;
const tetradicHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.tetradic, prefixed);
};
exports.tetradicHarmonyHsl = tetradicHarmonyHsl;
const fourToneCWHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCW, prefixed);
};
exports.fourToneCWHarmonyHsl = fourToneCWHarmonyHsl;
const fourToneCCWHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCCW, prefixed);
};
exports.fourToneCCWHarmonyHsl = fourToneCCWHarmonyHsl;
const fiveToneAHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneA, prefixed);
};
exports.fiveToneAHarmonyHsl = fiveToneAHarmonyHsl;
const fiveToneBHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneB, prefixed);
};
exports.fiveToneBHarmonyHsl = fiveToneBHarmonyHsl;
const fiveToneCHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneC, prefixed);
};
exports.fiveToneCHarmonyHsl = fiveToneCHarmonyHsl;
const fiveToneDHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneD, prefixed);
};
exports.fiveToneDHarmonyHsl = fiveToneDHarmonyHsl;
const fiveToneEHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneE, prefixed);
};
exports.fiveToneEHarmonyHsl = fiveToneEHarmonyHsl;
const sixToneCWHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCW, prefixed);
};
exports.sixToneCWHarmonyHsl = sixToneCWHarmonyHsl;
const sixToneCCWHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCCW, prefixed);
};
exports.sixToneCCWHarmonyHsl = sixToneCCWHarmonyHsl;
const neutralHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.neutral, prefixed);
};
exports.neutralHarmonyHsl = neutralHarmonyHsl;
const analogousHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.analogous, prefixed);
};
exports.analogousHarmonyHsl = analogousHarmonyHsl;
const squareHarmonyHsl = (hsl, prefixed) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.square, prefixed);
};
exports.squareHarmonyHsl = squareHarmonyHsl;
