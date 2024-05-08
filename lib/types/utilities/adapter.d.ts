/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import { Adaptations, AdaptiveColorSpaces, AdaptiveColors } from 'types/adaptations';
import { XYZ } from '../interfaces/color-spaces.interface';
/**
 * Preforms a chromatic adaptation on a color in a XYZ space
 *
 * @param {XYZ}			       - color to preform the chromatic adaptation on
 * @param {string}			   - string representation of the adaptation
 * @returns	{XYZ}			     - Chromatically adapted XYZ values
 */
export declare const adapt: (color: XYZ, adaptation: Adaptations) => XYZ;
/**
 * A class used for chromatic adaptation of colors
 * @param { XYZ }	           - color to preform the chromatic adaptation on
 */
export declare class Adapter {
    private color;
    constructor(color?: AdaptiveColors, colorSpace?: AdaptiveColorSpaces);
    private getXyz;
    /**
     * Method that returns a chromatically adopted color in a desired color space.
     * @param	{string}						- string representing the adaptation
     * @param	{string}						- string representing the  desired color space of the return values
     * @returns	{AdaptiveColors}  - adapted color
     */
    adapt(adaptation: Adaptations, returnSpace?: AdaptiveColorSpaces): AdaptiveColors;
    set(color: AdaptiveColors, colorSpace?: AdaptiveColorSpaces): void;
}
