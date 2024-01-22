"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSVResolver = void 0;
const color_resolver_1 = require("../color-resolver/color-resolver");
class HSVResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("hsv", color, resolv);
    }
}
exports.HSVResolver = HSVResolver;
