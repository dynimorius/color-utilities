"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rgb_resolver_1 = require("./resolvers/rgb-resolver");
const color = new rgb_resolver_1.RGBResolver({ red: 102, green: 51, blue: 153 });
console.log(color.data());
