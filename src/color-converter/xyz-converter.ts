import { fromXyzConverters } from "./convertor-map";
import { XYZResolverMap } from "../interfaces/resolver.interface";
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
export class XyzConverter extends ColorConverter {
  constructor(color: XYZ) {
    super("xyz", color, fromXyzConverters as unknown as { [key: string]: Function });
  }

  get(converts: XyzConSpaces) {
    return this.converterMap[converts as keyof XYZResolverMap](this.color);
  }
}
