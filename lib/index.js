"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lab_converter_1 = require("./converters/lab-converter");
const luv_converter_1 = require("./converters/luv-converter");
const rgb_resolver_1 = require("./resolvers/rgb-resolver");
const color = new rgb_resolver_1.RGBResolver({ red: 102, green: 51, blue: 153 });
console.log(color.data());
console.log((0, lab_converter_1.labToXyz)(color.lab));
console.log((0, luv_converter_1.luvToXyz)(color.luv));
