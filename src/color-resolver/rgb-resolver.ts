import { RGB, RGBA, RGBA_M, RGB_M } from "../interfaces/color-spaces.interface";
import { Spaces } from "../types/colors";
import { ColorResolver } from "./color-resolver";
import { rgbResolverMap } from "./rgb-resolver-map";

export class RgbResolver extends ColorResolver {
  constructor(
    color: RGB | RGBA | RGB_M | RGBA_M,
    resolv:
      | Omit<Spaces, "hcl" | "uvw">
      | "ycbcr_BT601"
      | "ycbcr_BT709"
      | "ycbcr_BT2020",
  ) {
    super("rgb", color, resolv , rgbResolverMap as unknown as {[key: string]: Function});
  }
}
