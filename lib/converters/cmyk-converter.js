"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykToRgb = void 0;
const cmykToRgb = ({ cyan, magenta, yellow, key }) => {
    key = key / 100;
    const f = (t) => Math.round((1 - Math.min(1, (t / 100) * (1 - key) + key)) * 255);
    return { red: f(cyan), green: f(magenta), blue: f(yellow) };
};
exports.cmykToRgb = cmykToRgb;
