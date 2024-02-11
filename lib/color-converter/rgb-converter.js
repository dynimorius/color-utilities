"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbConverter = void 0;
const convertor_map_1 = require("../convertor-map");
const color_converter_1 = require("./color-converter");
class RgbConverter extends color_converter_1.ColorConverter {
    constructor(color) {
        super("rgb", color);
        this.converterMap = convertor_map_1.fromRgbConverters;
    }
    get(spaces) {
        return this.converterMap[spaces](this.color);
    }
}
exports.RgbConverter = RgbConverter;
