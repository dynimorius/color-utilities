"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blender = exports.blend = void 0;
const convertor_map_1 = require("../color-converter/convertor-map");
const color_checks_1 = require("../helpers/color-checks");
/**
 * Blends two colors
 * @param {RGB}                   - data for the first color to blend
 * @param {RGB}                   - data for the second color to blend
 * @param {number}                - weight / amount of the first color
 * @returns {RGB}                 - New blended color
 */
const blend = (rgb1, rgb2, weight = 0.5) => {
    return {
        red: Math.round(rgb1.red * weight + rgb2.red * (1 - weight)),
        green: Math.round(rgb1.green * weight + rgb2.green * (1 - weight)),
        blue: Math.round(rgb1.blue * weight + rgb2.blue * (1 - weight)),
    };
};
exports.blend = blend;
/**
 * @description
 * A class used to blend two colors
 * color space.
 *  @param {BlenderColor} - The actual data for the first color (RGB, HSL etc..)
 *  @param {BlenderColor} - TThe actual data for the second color (RGB, HSL etc..)
 *  @param {BlenderOptions} - blend options which state:
 *  - the waight (amount of the first color, default 0.5 / 50%)
 *  - return type (what color space would you like the return color to be in, default RGB)
 */
class Blender {
    constructor(color1, color2, options) {
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
        const weight = options.weight ? options.weight : 0.5;
        this.color =
            options.returnType === "rgb" || !options.returnType
                ? (0, exports.blend)(this.rgb1, this.rgb2, weight)
                : (convertor_map_1.colorConverters[options.returnType]
                    ?.fun)((0, exports.blend)(this.rgb1, this.rgb2, weight));
        this.blendData = {
            color1: {
                data: color1,
                rgb: (0, color_checks_1.checkAndFormat)("rgb", this.rgb1),
                amount: weight,
            },
            color2: {
                data: color2,
                rgb: (0, color_checks_1.checkAndFormat)("rgb", this.rgb2),
                amount: 1 - weight,
            },
            resultColor: this.color,
        };
    }
}
exports.Blender = Blender;
/**
 * Get  color type / space
 * @param {BlenderColor} - Color data
 * @returns {string} - type / space of color
 */
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
