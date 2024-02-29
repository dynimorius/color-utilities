"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
const convertor_map_1 = require("../convertor-map");
const init_spaces_1 = require("../constants/init-spaces");
const rgb_conversions_1 = require("../conversions/rgb-conversions");
const xyz_conversions_1 = require("../conversions/xyz-conversions");
const color_checks_1 = require("../helpers/color-checks");
/**
 *  @description A class representing a color, and its values in diferente spaces
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {(Spaces | "web_safe")[]} - What information do we want back
 */
class Color {
  constructor(space, color, resolv = init_spaces_1.DefaultResolv) {
    var _a, _b;
    color = (0, color_checks_1.checkAndFormat)(space, color);
    this[space] = color;
    if (
      !this.rgb &&
      !!new RegExp(/hex|cmy|sl|hc|hs|hwb|ryb|xyz|yc|yd|yiq|yp/g).exec(space)
    ) {
      this.rgb = convertor_map_1.toRgbConverters[space](color);
      if (this.xyz) this.xyz = (0, rgb_conversions_1.sRgbToXyz)(this.rgb);
    }
    if (!this.xyz && !!new RegExp(/rgb|ab|uv|lch|lms|ps5|xyy/g).exec(space)) {
      this.xyz = convertor_map_1.toXyzConverters[space](color);
      if (!this.rgb) this.rgb = (0, xyz_conversions_1.xyzToSrgb)(this.xyz);
    } else this.xyz = convertor_map_1.toXyzConverters.rgb(this.rgb);
    for (let resolution of resolv) {
      if (!this[resolution]) {
        const fun =
          (_a = convertor_map_1.colorConverters[resolution]) === null ||
          _a === void 0
            ? void 0
            : _a.fun;
        const param =
          (_b = convertor_map_1.colorConverters[resolution]) === null ||
          _b === void 0
            ? void 0
            : _b.from;
        this[resolution] = fun(this[param]);
      }
    }
  }
  get data() {
    return this;
  }
}
exports.Color = Color;
