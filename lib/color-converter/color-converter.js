"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorConverter = void 0;
const color_checks_1 = require("../helpers/color-checks");
/**
 * @description
 * A class used to convert a color space in to another
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
class ColorConverter {
    constructor(space, color, converterMap) {
        this.color = (0, color_checks_1.checkAndFormat)(space, color);
        this.converterMap = converterMap;
    }
}
exports.ColorConverter = ColorConverter;
