/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { BlendData, BlenderOptions } from "../interfaces/blender.interface";
import { RGB } from "../public_api";
import { BlenderColor } from "../types/colors";
/**
 * Blends two colors
 * @param {RGB}                   - data for the first color to blend
 * @param {RGB}                   - data for the second color to blend
 * @param {number}                - weight / amount of the first color
 * @returns {RGB}                 - New blended color
 */
export declare const blend: (rgb1: RGB, rgb2: RGB, weight?: number) => RGB;
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
export declare class Blender {
    private rgb1;
    private rgb2;
    color: BlenderColor;
    blendData: BlendData;
    constructor(color1: BlenderColor, color2: BlenderColor, options: BlenderOptions);
}
