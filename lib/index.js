"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rgb_resolver_1 = require("./resolvers/rgb-resolver");
const color = new rgb_resolver_1.RGBResolver({ red: 251, green: 189, blue: 3 });
console.log(color.data());
