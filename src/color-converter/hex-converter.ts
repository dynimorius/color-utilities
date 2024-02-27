import { fromRgbConverters } from "../convertor-map";
import { RGBResolverMap } from "../interfaces/resolver.interface";
import { Spaces } from "../types/colors";
import { ColorConverter } from "./color-converter";

/**
 * @description
 * A class used to convert a color in RGB color space in to other color spaces
 *  @param {Spaces}                      -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion}             - The actual color data (RGB, HSL etc..)
 *  @param {{ [key: string]: Function }} - a converter map
 */
export class HexConverter extends ColorConverter {
  constructor(color: string) {
    super("hex", color, fromRgbConverters as unknown as { [key: string]: Function });
  }

  get(converts: Spaces) {
    return this.converterMap[converts as keyof RGBResolverMap](this.color);
  }
}
