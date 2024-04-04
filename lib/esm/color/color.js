/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { colorConverters, toRgbConverters, toXyzConverters, } from "../convertor-map";
import { AllResolv, DefaultResolv } from "../constants/init-spaces";
import { sRgbToXyz } from "../conversions/rgb-conversions";
import { xyzToSrgb } from "../conversions/xyz-conversions";
import { checkAndFormat } from "../helpers/color-checks";
/**
 *  @description A class representing a color, and its values in diferente spaces
 *  @param {Spaces}                     -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}            - The actual color data (RGB, HSL etc..)
 *  @param {(Spaces | "web_safe")[]}    - What information do we want back
 */
export class Color {
    constructor(space, color, resolv = DefaultResolv) {
        resolv = resolv === "all" ? AllResolv : resolv;
        color = checkAndFormat(space, color);
        this[space] = color;
        if (!this.rgb && /hex|cmy|sl|hc|hs|hwb|ryb|xyz|yc|yd|yiq|yp/g.test(space)) {
            this.rgb = toRgbConverters[space](color);
            if (this.xyz)
                this.xyz = sRgbToXyz(this.rgb);
        }
        if (!this.xyz && /rgb|ab|uv|lch|lms|ps5|xyy/g.test(space)) {
            this.xyz = toXyzConverters[space](color);
            if (!this.rgb)
                this.rgb = xyzToSrgb(this.xyz);
        }
        else
            this.xyz = toXyzConverters.rgb(this.rgb);
        for (let resolution of resolv) {
            if (!this[resolution]) {
                const fun = colorConverters[resolution]
                    ?.fun;
                const param = colorConverters[resolution]
                    ?.from;
                this[resolution] = fun(this[param]);
            }
        }
    }
    get data() {
        return this;
    }
}
