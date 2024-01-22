"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGBResolver = void 0;
const color_resolver_1 = require("../color-resolver/color-resolver");
class RGBResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("rgb", color, resolv);
    }
}
exports.RGBResolver = RGBResolver;
