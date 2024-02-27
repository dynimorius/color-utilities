import { fromXyzConverters } from "../convertor-map";
import { XYZRezolverMap } from "../interfaces/resolver.interface";
import { XYZ } from "../public_api";
import { Spaces, XyzConSpaces } from "../types/colors";
import { ColorConverter } from "./color-converter";

/**
 * @description
 * A class used to convert a color in RGB color space in to other color spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export class HexConverter extends ColorConverter {
  constructor(color: XYZ) {
    super("xyz", color, fromXyzConverters as unknown as { [key: string]: Function });
  }

  get(converts: XyzConSpaces) {
    return this.converterMap[converts as keyof XYZRezolverMap](this.color);
  }
}
