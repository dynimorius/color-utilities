"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorResolver = void 0;
const convertor_map_1 = require("./convertor-map");
class ColorResolver {
    constructor(space, color, resolv = [
        'adobeRgb',
        'ansi16',
        'ansi256',
        'cmyk',
        'hcg',
        'hex',
        'hsl',
        'hsv',
        'hwb',
        'lab',
        'lch',
        'rgb_0_1',
        'rgb',
        'webSafe',
        'xyz',
    ]) {
        this[space] = color;
        if (!this.rgb)
            this.rgb = convertor_map_1.toRgbConverters[space](color);
        for (let resolution of resolv) {
            if (!this[resolution])
                this[resolution] = convertor_map_1.rgbConverters[resolution](this.rgb);
        }
    }
    data() {
        return Object.assign({}, this);
    }
}
exports.ColorResolver = ColorResolver;
