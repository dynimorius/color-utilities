import { rgbConverters, toRgbConverters } from "./convertor-map";
import { CMYK, LAB, LCH, RGB, XYZ } from "../interfaces/color-spaces.interface";

import {
  RGBConverters,
  ToRGBConverters,
} from "../interfaces/converters.interface";
import { ColorExtendedData } from "../interfaces/color-data.interface";
import { ColorSpaceUnion, Spaces } from "../types";

export class ColorResolver {
  rgb!: RGB;
  lab!: LAB;
  lch!: LCH;
  xyz!: XYZ;
  cmyk!: CMYK;


  constructor(space: Spaces, color: ColorSpaceUnion, resolv?: Spaces[]) {
    resolv = resolv
      ? resolv
      : [
          "ansi16",
          "ansi256",
          "cmyk",
          "hcg",
          "hex",
          "hsl",
          "hsv",
          "hwb",
          "lab",
          "lch",
          "xyz",
          "webSafe",
        ];
    this[space as keyof this] = color as any;
    if (!this.rgb) {
      const toRGBConFun = toRgbConverters[
        space as keyof ToRGBConverters
      ] as Function;
      this.rgb = toRGBConFun(color);
    }
    if (resolv.some(i => ['xyz', 'lab', 'lch'].includes(i))) {
      this.xyz = (rgbConverters.xyz as Function)(this.rgb);
      this.lab = (rgbConverters.lab as Function)(this.xyz);
      this.lch = (rgbConverters.lch as Function)(this.lab);
    } 
    for (let resolution of resolv) {
      if (resolution !== "xyz" && resolution !== "lch" && resolution !== 'lab') {
        const fun = rgbConverters[resolution as keyof RGBConverters] as Function;
        this[resolution as keyof this] = fun(this.rgb);
      }
    }
  }

  data(): Partial<ColorExtendedData> {
    return { ...this };
  }
}
