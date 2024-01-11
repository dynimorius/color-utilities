"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hueToRGB = void 0;
const helpers_1 = require("../helpers");
const hueToRGB = (t1, t2, hue) => {
    if (hue < 0) {
        hue += 6;
    }
    if (hue >= 6) {
        hue -= 6;
    }
    if (hue < 1) {
        return (0, helpers_1.round)(((t2 - t1) * hue + t1) * 255);
    }
    else if (hue < 3) {
        return (0, helpers_1.round)(t2 * 255);
    }
    else if (hue < 4) {
        return (0, helpers_1.round)(((t2 - t1) * (4 - hue) + t1) * 255);
    }
    else {
        return (0, helpers_1.round)(t1 * 255);
    }
};
exports.hueToRGB = hueToRGB;
