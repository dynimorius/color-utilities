"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmykToRgb = void 0;
const cmykToRgb = ({ cyan, magenta, yellow, key }) => {
    cyan = cyan / 100;
    magenta = magenta / 100;
    yellow = yellow / 100;
    key = key / 100;
    const red = (1 - Math.min(1, cyan * (1 - key) + key)) * 255;
    const green = (1 - Math.min(1, magenta * (1 - key) + key)) * 255;
    const blue = (1 - Math.min(1, yellow * (1 - key) + key)) * 255;
    return { red, green, blue };
};
exports.cmykToRgb = cmykToRgb;
