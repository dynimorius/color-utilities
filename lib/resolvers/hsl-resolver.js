"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSLResolver = void 0;
const color_resolver_1 = require("./color-resolver");
class HSLResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("hsl", color, resolv);
    }
}
exports.HSLResolver = HSLResolver;
