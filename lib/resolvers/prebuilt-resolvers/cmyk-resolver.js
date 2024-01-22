"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMYKResolver = void 0;
const color_resolver_1 = require("../color-resolver/color-resolver");
class CMYKResolver extends color_resolver_1.ColorResolver {
    constructor(color, resolv) {
        super("cmyk", color, resolv);
    }
}
exports.CMYKResolver = CMYKResolver;
