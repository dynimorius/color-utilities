"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_api_1 = require("../public_api");
const testColor = { red: 217, green: 122, blue: 37 };
const rgb = new public_api_1.RgbConverter(testColor);
console.log(rgb.get('uvw'));
