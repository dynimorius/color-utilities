"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analogousHarmonyHsl = exports.neutralHarmonyHsl = exports.sixToneCCWHarmonyHsl = exports.sixToneCWHarmonyHsl = exports.fiveToneEHarmonyHsl = exports.fiveToneDHarmonyHsl = exports.fiveToneCHarmonyHsl = exports.fiveToneBHarmonyHsl = exports.fiveToneAHarmonyHsl = exports.fourToneCCWHarmonyHsl = exports.fourToneCWHarmonyHsl = exports.tetradicHarmonyHsl = exports.clashHarmonyHsl = exports.triadicHarmonyHsl = exports.splitComplementaryCCWHarmonyHsl = exports.splitComplementaryCWHarmonyHsl = exports.splitComplementaryHarmonyHsl = exports.complementaryHarmonyHsl = void 0;
const harmonies_1 = require("../constants/harmonies");
const public_api_1 = require("../public_api");
const harmonizeHsl = (hsl, degrees) => {
    const harmonized = [];
    degrees.forEach((degree) => {
        if (isFinite(degree)) {
            const harmonizedHue = (hsl.hue + ((1 / 360) * degree)) % 1;
            if (hsl.alpha) {
                harmonized.push((0, public_api_1.hslaToHex)({
                    hue: harmonizedHue,
                    saturation: hsl.saturation,
                    lightness: hsl.lightness,
                    alpha: hsl.alpha,
                }));
            }
            else {
                harmonized.push((0, public_api_1.hslToHex)({
                    hue: harmonizedHue,
                    saturation: hsl.saturation,
                    lightness: hsl.lightness,
                }));
            }
        }
    });
    return harmonized;
};
const complementaryHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.complementary);
};
exports.complementaryHarmonyHsl = complementaryHarmonyHsl;
const splitComplementaryHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementary);
};
exports.splitComplementaryHarmonyHsl = splitComplementaryHarmonyHsl;
const splitComplementaryCWHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementaryCW);
};
exports.splitComplementaryCWHarmonyHsl = splitComplementaryCWHarmonyHsl;
const splitComplementaryCCWHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.splitComplementaryCCW);
};
exports.splitComplementaryCCWHarmonyHsl = splitComplementaryCCWHarmonyHsl;
const triadicHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.triadic);
};
exports.triadicHarmonyHsl = triadicHarmonyHsl;
const clashHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.clash);
};
exports.clashHarmonyHsl = clashHarmonyHsl;
const tetradicHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.tetradic);
};
exports.tetradicHarmonyHsl = tetradicHarmonyHsl;
const fourToneCWHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCW);
};
exports.fourToneCWHarmonyHsl = fourToneCWHarmonyHsl;
const fourToneCCWHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fourToneCCW);
};
exports.fourToneCCWHarmonyHsl = fourToneCCWHarmonyHsl;
const fiveToneAHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneA);
};
exports.fiveToneAHarmonyHsl = fiveToneAHarmonyHsl;
const fiveToneBHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneB);
};
exports.fiveToneBHarmonyHsl = fiveToneBHarmonyHsl;
const fiveToneCHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneC);
};
exports.fiveToneCHarmonyHsl = fiveToneCHarmonyHsl;
const fiveToneDHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneD);
};
exports.fiveToneDHarmonyHsl = fiveToneDHarmonyHsl;
const fiveToneEHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.fiveToneE);
};
exports.fiveToneEHarmonyHsl = fiveToneEHarmonyHsl;
const sixToneCWHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCW);
};
exports.sixToneCWHarmonyHsl = sixToneCWHarmonyHsl;
const sixToneCCWHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.sixToneCCW);
};
exports.sixToneCCWHarmonyHsl = sixToneCCWHarmonyHsl;
const neutralHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.neutral);
};
exports.neutralHarmonyHsl = neutralHarmonyHsl;
const analogousHarmonyHsl = (hsl) => {
    return harmonizeHsl(hsl, harmonies_1.HARMONIES.analogous);
};
exports.analogousHarmonyHsl = analogousHarmonyHsl;
