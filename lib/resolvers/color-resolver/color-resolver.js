"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorResolver = void 0;
const convertor_map_1 = require("./convertor-map");
const rgb_converter_1 = require("../../converters/rgb-converter");
const xyz_converter_1 = require("../../converters/xyz-converter");
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
        "eci_rgb_v2",
        "etka_space_ps5",
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
        "ryb",
        "smpte_c_rgb",
        "web_safe",
        "wide_gamut_rgb",
        "xyz",
        "xyy",
    ]) {
        var _a, _b;
        this.data = {};
        color = this.checkAndFormat(space, color);
        this.data[space] = color;
        if (!this.data.rgb &&
            !!new RegExp(/hex|cmyk|hsl|hsv|hwb|ryb|xyz/g).exec(space)) {
            this.data.rgb = convertor_map_1.toRgbConverters[space](color);
            if (this.data.xyz)
                this.data.xyz = (0, rgb_converter_1.sRgbToXyz)(this.data.rgb);
        }
        if (!this.data.xyz && !!new RegExp(/rgb|lab|luv|lch|ps5|xyy/g).exec(space)) {
            this.data.xyz = convertor_map_1.toXyzConverters[space](color);
            if (!this.data.rgb)
                this.data.rgb = (0, xyz_converter_1.xyzToSrgb)(this.data.xyz);
        }
        else
            this.data.xyz = convertor_map_1.toXyzConverters.rgb(this.data.rgb);
        for (let resolution of resolv) {
            if (!this.data[resolution]) {
                const fun = (_a = convertor_map_1.rgbConverters[resolution]) === null || _a === void 0 ? void 0 : _a.fun;
                const param = (_b = convertor_map_1.rgbConverters[resolution]) === null || _b === void 0 ? void 0 : _b.from;
                this.data[resolution] = fun(this.data[param]);
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
}
exports.ColorResolver = ColorResolver;
