"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToHex = exports.hslToHex = exports.hslToHsv = exports.hslToRgb = void 0;
const hslToRgb = ({ hue, saturation, lightness }) => {
    saturation /= 100;
    lightness /= 100;
    const k = (n) => (n + hue / 30) % 12;
    const a = saturation * Math.min(lightness, 1 - lightness);
    const f = (n) => Math.round((lightness -
        a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))) *
        255);
    return { red: f(0), green: f(8), blue: f(4) };
};
exports.hslToRgb = hslToRgb;
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
const hslToHex = ({ hue, saturation, lightness }) => {
    lightness /= 100;
    const a = (saturation * Math.min(lightness, 1 - lightness)) / 100;
    const f = (n) => {
        const k = (n + hue / 30) % 12;
        const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`.toLocaleUpperCase();
};
exports.hslToHex = hslToHex;
const hslaToHex = ({ hue, saturation, lightness, alpha, }) => {
    lightness /= 100;
    const a = (saturation * Math.min(lightness, 1 - lightness)) / 100;
    const f = (n) => {
        const k = (n + hue / 30) % 12;
        const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0");
    };
    const alphaHex = Math.round(alpha * 255)
        .toString(16)
        .padStart(2, "0");
    return `#${f(0)}${f(8)}${f(4)}${alphaHex}`.toLocaleUpperCase();
};
exports.hslaToHex = hslaToHex;
