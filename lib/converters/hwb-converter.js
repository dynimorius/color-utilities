"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hwbToHcg = exports.hwbToRgb = void 0;
const hwbToRgb = ({ hue, whiteness, blackness }) => {
    hue = hue / 360;
    whiteness = whiteness / 100;
    blackness = blackness / 100;
    const ratio = whiteness + blackness;
    if (ratio > 1) {
        whiteness /= ratio;
        blackness /= ratio;
    }
    const mod = Math.floor(6 * hue);
    let f = 6 * hue - mod;
    f = (mod & 0x01) !== 0 ? f = 1 - f : f;
    let v = 1 - blackness;
    const n = whiteness + f * (v - whiteness);
    const red = Math.round([v, n, whiteness, whiteness, v, v][mod] * 255);
    const green = Math.round([n, v, v, n, whiteness, whiteness, n][mod] * 255);
    const blue = Math.round([whiteness, whiteness, n, v, v, n, whiteness][mod] * 255);
    return { red, green, blue };
};
exports.hwbToRgb = hwbToRgb;
const hwbToHcg = ({ hue, whiteness, blackness }) => {
    whiteness = whiteness / 100;
    blackness = blackness / 100;
    const v = 1 - blackness;
    const chroma = v - whiteness;
    let grayscale = 0;
    if (chroma < 1) {
        grayscale = ((v - chroma) / (1 - chroma)) * 100;
    }
    return { hue, chroma: chroma * 100, grayscale };
};
exports.hwbToHcg = hwbToHcg;