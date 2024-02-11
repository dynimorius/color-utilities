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
const color_checks_1 = require("../helpers/color-checks");
/**
 * @description
 * A class used to compute and retrieve any of the available
 * color space.
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {Spaces} - What information do we want back
 */
class ColorResolver {
    constructor(space, color, resolv, resolverMap) {
        console.log(resolverMap);
        color = (0, color_checks_1.checkAndFormat)(space, color);
        this.resolution = resolverMap[resolv](color);
    }
}
exports.ColorResolver = ColorResolver;
