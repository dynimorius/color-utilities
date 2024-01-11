"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslToHcg = exports.hslToHsv = exports.hslToSrgb = exports.hslToRgb = void 0;
const hue_converter_1 = require("./hue-converter");
const hslToRgb = ({ hue, saturation, lightness }) => {
    hue = hue / 360;
    saturation = saturation / 100;
    lightness = lightness / 100;
    if (saturation === 0) {
        return { red: lightness, green: lightness, blue: lightness };
    }
    const q = lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    const red = (0, hue_converter_1.hueToRGB)(p, q, hue + 1 / 3) * 255;
    const green = (0, hue_converter_1.hueToRGB)(p, q, hue) * 255;
    const blue = (0, hue_converter_1.hueToRGB)(p, q, hue - 1 / 3) * 255;
    return { red, green, blue };
};
exports.hslToRgb = hslToRgb;
const hslToSrgb = ({ hue, saturation, lightness }) => {
    hue = hue % 360;
    if (hue < 0) {
        hue += 360;
    }
    saturation /= 100;
    lightness /= 100;
    function f(n) {
        let k = (n + hue / 30) % 12;
        let a = saturation * Math.min(lightness, 1 - lightness);
        return lightness - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    }
    return { red: f(0), green: f(8), blue: f(4) };
};
exports.hslToSrgb = hslToSrgb;
const hslToHsv = ({ hue, saturation, lightness }) => {
    saturation = saturation / 100;
    lightness = lightness / 100;
    let smin = saturation;
    const lmin = Math.max(lightness, 0.01);
    lightness *= 2;
    saturation *= lightness <= 1 ? lightness : 2 - lightness;
    smin *= lmin <= 1 ? lmin : 2 - lmin;
    const value = ((lightness + saturation) / 2) * 100;
    const hsvSaturation = (lightness === 0
        ? (2 * smin) / (lmin + smin)
        : (2 * saturation) / (lightness + saturation)) * 100;
    return { hue, saturation: hsvSaturation, value };
};
exports.hslToHsv = hslToHsv;
const hslToHcg = ({ hue, saturation, lightness }) => {
    saturation = saturation / 100;
    lightness = lightness / 100;
    const chroma = lightness < 0.5
        ? 2.0 * saturation * lightness
        : 2.0 * saturation * (1.0 - lightness);
    let grayscale = 0;
    if (chroma < 1.0) {
        grayscale = (lightness - 0.5 * chroma) / (1.0 - chroma);
    }
    return { hue, chroma: chroma * 100, grayscale: grayscale * 100 };
};
exports.hslToHcg = hslToHcg;
