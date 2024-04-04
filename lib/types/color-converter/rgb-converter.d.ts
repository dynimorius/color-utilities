import { RGB, RGBA, RGBA_M, RGB_M } from "../interfaces/color-spaces.interface";
import { RGBConSpaces } from "../types/colors";
import { ColorConverter } from "./color-converter";
/**
 * @description
 * A class used to convert a color in RGB color space in to other color spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export declare class RgbConverter extends ColorConverter {
    constructor(color: RGB | RGBA | RGB_M | RGBA_M);
    get(converts: RGBConSpaces): any;
}
