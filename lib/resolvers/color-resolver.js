"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorResolver = void 0;
const convertor_map_1 = require("./convertor-map");
class ColorResolver {
    constructor(space, color, resolv) {
        resolv = resolv
            ? resolv
            : [
                "ansi16",
                "ansi256",
                "cmyk",
                "hcg",
                "hex",
                "hsl",
                "hsv",
                "hwb",
                "lab",
                "lch",
                "xyz",
                "webSafe",
            ];
        this[space] = color;
        if (!this.rgb) {
            const toRGBConFun = convertor_map_1.toRgbConverters[space];
            this.rgb = toRGBConFun(color);
        }
        for (let resolution of resolv) {
            const fun = convertor_map_1.rgbConverters[resolution];
            if (resolution === 'lch' && fun && this.lab)
                this[resolution] = fun(this.lab);
            else if (fun && resolution !== 'lch')
                this[resolution] = fun(this.rgb);
        }
    }
    data() {
        return Object.assign({}, this);
    }
}
exports.ColorResolver = ColorResolver;
