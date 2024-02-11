"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbResolver = void 0;
const color_resolver_1 = require("./color-resolver");
const convertor_map_1 = require("../convertor-map");
class RgbResolver extends color_resolver_1.ColorResolver {
    constructor(color) {
        super("rgb", color);
        this.resolverMap = convertor_map_1.fromRgbConverters;
        console.log(convertor_map_1.fromRgbConverters);
    }
    get(spaces) {
        return this.resolverMap[spaces](this.color);
    }
}
exports.RgbResolver = RgbResolver;
