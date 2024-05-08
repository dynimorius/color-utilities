/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ColorSpaceUnion, RGBConSpaces, Spaces, XyzConSpaces } from "../types/colors";
/**
 * @description
 * A class used to convert a color space in to another
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export declare abstract class ColorConverter {
    protected color: ColorSpaceUnion;
    protected converterMap: {
        [key: string]: Function;
    };
    constructor(space: Spaces, color: ColorSpaceUnion, converterMap: {
        [key: string]: Function;
    });
    abstract get(converts: Spaces | XyzConSpaces | RGBConSpaces): ColorSpaceUnion;
}
