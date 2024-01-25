"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_api_1 = require("../public_api");
const harmonizeHsl = (hsl, degrees) => {
    const harmonized = [];
    degrees.forEach((degree, i) => {
        if (isFinite(degree))
            harmonized.push((0, public_api_1.hslToHex)(hsl));
    });
    return harmonized;
};
const harmonizeHsla = (hsl, degrees) => {
    const harmonized = [];
    degrees.forEach((degree, i) => {
        if (isFinite(degree))
            harmonized.push((0, public_api_1.hslaToHex)(hsl));
    });
    return harmonized;
};
