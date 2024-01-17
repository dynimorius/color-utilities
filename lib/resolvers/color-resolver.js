"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorResolver = void 0;
const convertor_map_1 = require("./convertor-map");
const color_checker_map_1 = require("./color-checker-map");
class ColorResolver {
    constructor(space, color, resolv = [
        "adobe_98_rgb",
        "apple_rgb",
        "ansi16",
        "ansi256",
        "best_rgb",
        "beta_rgb",
        "bruce_rgb",
        "cie_rgb",
        "color_match_rgb",
        "cmyk",
        "don_rgb_4",
        "etka_space_ps5",
        "hcg",
        "hex",
        "hsl",
        "hsv",
        "hwb",
        "lab",
        "lch_ab",
        "lch_uv",
        "luv",
        "ntsc_rgb",
        "pal_secam_rgb",
        "pro_photo_rgb",
        "rgb_0_1",
        "rgb",
        "smpte_c_rgb",
        "web_safe",
        "wide_gamut_rgb",
        "xyz",
    ]) {
        var _a, _b;
        color = this.checkAndFormat(space, color);
        this[space] = color;
        const initRgbCheck = new RegExp(/hex|cmyk|hsl|hsv|hwb|xyz/g);
        if (!this.rgb && !!initRgbCheck.exec(space))
            this.rgb = convertor_map_1.toRgbConverters[space](color);
        const initXyzCheck = new RegExp(/rgb|lab|luv|ps5/g);
        if (!this.xyz && !!initXyzCheck.exec(space))
            this.xyz = convertor_map_1.toXyzConverters[space](color);
        else
            this.xyz = convertor_map_1.toXyzConverters.rgb(this.rgb);
        for (let resolution of resolv) {
            if (!this[resolution]) {
                const fun = (_a = convertor_map_1.rgbConverters[resolution]) === null || _a === void 0 ? void 0 : _a.fun;
                const param = (_b = convertor_map_1.rgbConverters[resolution]) === null || _b === void 0 ? void 0 : _b.from;
                this[resolution] = fun(this[param]);
            }
        }
    }
    checkAndFormat(space, color) {
        const rgbCheck = new RegExp(/rgb|ps5/g);
        if (rgbCheck.exec(space))
            return color_checker_map_1.colorCheckerMap.rgb(color);
        const lchCheck = new RegExp(/lch/g);
        if (lchCheck.exec(space))
            return color_checker_map_1.colorCheckerMap.lch(color);
        else
            return color_checker_map_1.colorCheckerMap[space](color);
    }
    data() {
        return Object.assign({}, this);
    }
}
exports.ColorResolver = ColorResolver;
