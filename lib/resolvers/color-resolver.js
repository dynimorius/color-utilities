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
        if (resolv.some(i => ['xyz', 'lab', 'lch'].includes(i))) {
            this.xyz = convertor_map_1.rgbConverters.xyz(this.rgb);
            this.lab = convertor_map_1.rgbConverters.lab(this.xyz);
            this.lch = convertor_map_1.rgbConverters.lch(this.lab);
        }
        for (let resolution of resolv) {
            if (resolution !== "xyz" && resolution !== "lch" && resolution !== 'lab') {
                const fun = convertor_map_1.rgbConverters[resolution];
                this[resolution] = fun(this.rgb);
            }
        }
    }
    data() {
        return Object.assign({}, this);
    }
}
exports.ColorResolver = ColorResolver;
