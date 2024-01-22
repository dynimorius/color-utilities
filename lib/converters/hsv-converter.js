"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hsvToHcg = exports.hsvToAnsi16 = exports.hsvToHsl = exports.hsvToRgb = void 0;
const rgb_converter_1 = require("./rgb-converter");
const hsvToRgb = ({ hue, saturation, value }) => {
    hue = (hue / 360) * 6;
    saturation = saturation / 100;
    value = value / 100;
    const i = Math.floor(hue);
    const f = hue - i;
    const p = value * (1 - saturation);
    const q = value * (1 - f * saturation);
    const t = value * (1 - (1 - f) * saturation);
    const mod = i % 6;
    const red = Math.round([value, q, p, p, t, value][mod] * 255);
    const green = Math.round([t, value, value, q, p, p][mod] * 255);
    const blue = Math.round([p, p, t, value, value, q][mod] * 255);
    return { red, green, blue };
};
exports.hsvToRgb = hsvToRgb;
const hsvToHsl = ({ hue, saturation, value }) => {
    saturation = saturation / 100;
    value = value / 100;
    const vmin = Math.max(value, 0.01);
    let hslSaturation;
    let lightness;
    lightness = (2 - saturation) * value;
    const lmin = (2 - saturation) * vmin;
    hslSaturation = saturation * vmin;
    hslSaturation /= lmin <= 1 ? lmin : 2 - lmin;
    hslSaturation = hslSaturation || 0;
    lightness /= 2;
    return { hue, saturation: hslSaturation * 100, lightness: lightness * 100 };
};
exports.hsvToHsl = hsvToHsl;
const hsvToAnsi16 = (hsv) => {
    const rgb = (0, exports.hsvToRgb)(hsv);
    return (0, rgb_converter_1.sRgbToAnsi16)(rgb, hsv.value);
};
exports.hsvToAnsi16 = hsvToAnsi16;
const hsvToHcg = ({ hue, saturation, value }) => {
    saturation = saturation / 100;
    value = value / 100;
    const chroma = saturation * value;
    let grayscale = 0;
    if (chroma < 1.0) {
        grayscale = ((value - chroma) / (1 - chroma)) * 100;
    }
    return { hue, chroma: chroma * 100, grayscale };
};
exports.hsvToHcg = hsvToHcg;
