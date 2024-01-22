"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HWBResolver = void 0;
const color_resolver_1 = require("../color-resolver/color-resolver");
class HWBResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("hwb", color, resolv);
    }
}
exports.HWBResolver = HWBResolver;
