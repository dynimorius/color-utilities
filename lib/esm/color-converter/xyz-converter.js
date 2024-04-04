import { fromXyzConverters } from "../convertor-map";
import { ColorConverter } from "./color-converter";
/**
 * @description
 * A class used to convert a XYZ color values in to other spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export class XyzConverter extends ColorConverter {
    constructor(color) {
        super("xyz", color, fromXyzConverters);
    }
    get(converts) {
        return this.converterMap[converts](this.color);
    }
}
