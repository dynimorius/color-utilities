"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbResolver = void 0;
const color_resolver_1 = require("./color-resolver");
const rgb_resolver_map_1 = require("./rgb-resolver-map");
class RgbResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("rgb", color, resolv, rgb_resolver_map_1.rgbResolverMap);
    }
}
exports.RgbResolver = RgbResolver;
