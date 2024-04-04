/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { checkAndFormat } from "../helpers/color-checks";
/**
 * @description
 * A class used to convert a color space in to another
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export class ColorConverter {
    constructor(space, color, converterMap) {
        this.color = checkAndFormat(space, color);
        this.converterMap = converterMap;
    }
}
