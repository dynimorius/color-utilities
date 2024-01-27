"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorResolver = void 0;
const convertor_map_1 = require("./convertor-map");
const rgb_converter_1 = require("../../converters/rgb-converter");
const xyz_converter_1 = require("../../converters/xyz-converter");
const color_checks_1 = require("../../helpers/color-checks");
const init_spaces_1 = require("../../constants/init-spaces");
/**
 * @description
 * A class used to compute and retrieve any of the available
 * color space.
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {(Spaces | "web_safe")[]} - What information do we want back
 */
class ColorResolver {
    constructor(space, color, resolv = init_spaces_1.DefaultResolv) {
        var _a, _b;
        this.data = {};
        color = (0, color_checks_1.checkAndFormat)(space, color);
        this.data[space] = color;
        if (!this.data.rgb &&
            !!new RegExp(/hex|cmyk|hsl|hsv|hwb|ryb|xyz/g).exec(space)) {
            this.data.rgb = convertor_map_1.toRgbConverters[space](color);
            if (this.data.xyz)
                this.data.xyz = (0, rgb_converter_1.sRgbToXyz)(this.data.rgb);
        }
        if (!this.data.xyz &&
            !!new RegExp(/rgb|lab|luv|lch|ps5|xyy/g).exec(space)) {
            this.data.xyz = convertor_map_1.toXyzConverters[space](color);
            if (!this.data.rgb)
                this.data.rgb = (0, xyz_converter_1.xyzToSrgb)(this.data.xyz);
        }
        else
            this.data.xyz = convertor_map_1.toXyzConverters.rgb(this.data.rgb);
        for (let resolution of resolv) {
            if (!this.data[resolution]) {
                const fun = (_a = convertor_map_1.colorConverters[resolution]) === null || _a === void 0 ? void 0 : _a.fun;
                const param = (_b = convertor_map_1.colorConverters[resolution]) === null || _b === void 0 ? void 0 : _b.from;
                this.data[resolution] = fun(this.data[param]);
            }
        }
    }
}
exports.ColorResolver = ColorResolver;
