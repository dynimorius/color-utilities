/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, XYZ } from "../interfaces/color-spaces.interface";
import { ColorData } from "../interfaces/color-data.interface";
import { ColorSpaceUnion, Spaces } from "../types/colors";
/**
 *  @description A class representing a color, and its values in diferente spaces
 *  @param {Spaces}                     -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}            - The actual color data (RGB, HSL etc..)
 *  @param {(Spaces | "web_safe")[]}    - What information do we want back
 */
export declare class Color {
    rgb: RGB;
    xyz: XYZ;
    constructor(space: Spaces, color: ColorSpaceUnion, resolv?: (Spaces | "web_safe")[] | "all");
    get data(): ColorData;
}
