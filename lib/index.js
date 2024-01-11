"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_resolver_1 = require("./resolvers/color-resolver");
const rgb_resolver_1 = require("./resolvers/rgb-resolver");
const color = new rgb_resolver_1.RGBResolver({ red: 65, green: 251, blue: 3 });
console.log(color.data());
const color2 = new color_resolver_1.ColorResolver('rgb', { red: 65, green: 251, blue: 3 }, ['hex', 'rgb', 'hsl', 'hsv', 'lab', 'cmyk', 'xyz']);
console.log(color2.data());
