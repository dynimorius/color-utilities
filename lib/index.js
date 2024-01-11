"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lab_converter_1 = require("./converters/lab-converter");
const rgb_resolver_1 = require("./resolvers/rgb-resolver");
const color = new rgb_resolver_1.RGBResolver({ red: 65, green: 251, blue: 3 });
console.log(color.data());
console.log((0, lab_converter_1.labToXyz)(color.lab));
