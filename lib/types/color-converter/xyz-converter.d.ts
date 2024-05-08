import { XYZ } from "../public_api";
import { XyzConSpaces } from "../types/colors";
import { ColorConverter } from "./color-converter";
/**
 * @description
 * A class used to convert a XYZ color values in to other spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export declare class XyzConverter extends ColorConverter {
    constructor(color: XYZ);
    get(converts: XyzConSpaces): any;
}
