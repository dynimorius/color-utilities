"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XYZResolver = void 0;
const color_resolver_1 = require("./color-resolver");
class XYZResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("xyz", color, resolv);
    }
}
exports.XYZResolver = XYZResolver;
