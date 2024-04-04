import { fromRgbConverters } from "../convertor-map";
import { ColorConverter } from "./color-converter";
/**
 * @description
 * A class used to convert a color in RGB color space in to other color spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export class RgbConverter extends ColorConverter {
    constructor(color) {
        super("rgb", color, fromRgbConverters);
    }
    get(converts) {
        return this.converterMap[converts](this.color);
    }
}
