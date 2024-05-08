"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XyzConverter = void 0;
const convertor_map_1 = require("./convertor-map");
const color_converter_1 = require("./color-converter");
/**
 * @description
 * A class used to convert a XYZ color values in to other spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
class XyzConverter extends color_converter_1.ColorConverter {
    constructor(color) {
        super("xyz", color, convertor_map_1.fromXyzConverters);
    }
    get(converts) {
        return this.converterMap[converts](this.color);
    }
}
exports.XyzConverter = XyzConverter;
