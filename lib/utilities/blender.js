"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blender = exports.blend = void 0;
const color_checks_1 = require("../helpers/color-checks");
const convertor_map_1 = require("../resolvers/color-resolver/convertor-map");
const blend = (rgb1, rgb2, weight = 0.5) => {
    return {
        red: Math.round(rgb1.red * weight + rgb2.red * (1 - weight)),
        green: Math.round(rgb1.green * weight + rgb2.green * (1 - weight)),
        blue: Math.round(rgb1.blue * weight + rgb2.blue * (1 - weight)),
    };
};
exports.blend = blend;
class Blender {
    constructor(color1, color2, oprions) {
        var _a;
        const type1 = getColorType(color1);
        color1 = (0, color_checks_1.checkAndFormat)(type1, color1);
        const type2 = getColorType(color2);
        color2 = (0, color_checks_1.checkAndFormat)(type2, color2);
        this.rgb1 =
            type1 === "rgb"
                ? color1
                : convertor_map_1.toRgbConverters[getColorType(color1)](color1);
        this.rgb2 =
            type2 === "rgb"
                ? color2
                : convertor_map_1.toRgbConverters[getColorType(color2)](color2);
        const weight = oprions.weight ? oprions.weight : 0.5;
        this.color =
            oprions.returnType === "rgb" || !oprions.returnType
                ? (0, exports.blend)(this.rgb1, this.rgb2, weight)
                : ((_a = convertor_map_1.rgbConverters[oprions.returnType]) === null || _a === void 0 ? void 0 : _a.fun)((0, exports.blend)(this.rgb1, this.rgb2, weight));
        this.blendData = {
            color1: {
                data: color1,
                rgb: (0, color_checks_1.checkAndFormat)('rgb', this.rgb1),
                amount: weight
            },
            color2: {
                data: color2,
                rgb: (0, color_checks_1.checkAndFormat)('rgb', this.rgb2),
                amount: 1 - weight
            },
            resultColor: this.color
        };
    }
}
exports.Blender = Blender;
const getColorType = (color) => {
    if (typeof color.green === "number" ||
        typeof color.g === "number")
        return "rgb";
    if (typeof color.cyan === "number" ||
        typeof color.c === "number")
        return "cmyk";
    if (typeof color.x == "number")
        return "xyz";
    if (typeof color.yellow === "number" ||
        typeof color.y === "number")
        return "ryb";
    if (typeof color.lightness === "number" ||
        typeof color.l === "number")
        return "hsl";
    if (typeof color.value === "number" ||
        typeof color.v === "number")
        return "hsv";
    return "hex";
};
