import { fromRgbConverters } from "../convertor-map";
import { RGB, RGBA, RGBA_M, RGB_M } from "../interfaces/color-spaces.interface";
import { RGBResolverMap } from "../interfaces/resolver.interface";
import { Spaces } from "../types/colors";
import { ColorConverter } from "./color-converter";

export class RgbConverter extends ColorConverter {
  converterMap: { [key: string]: Function } = fromRgbConverters as unknown as {
    [key: string]: Function;
  };
  constructor(color: RGB | RGBA | RGB_M | RGBA_M) {
    super("rgb", color);
  }

  get(
    spaces:
      | Omit<Spaces, "hcl" | "uvw">
      | "ycbcr_BT601"
      | "ycbcr_BT709"
      | "ycbcr_BT2020"
  ) {
    return this.converterMap[spaces as keyof RGBResolverMap](this.color);
  }
}
