import { rgbConverters, toRgbConverters } from "./convertor-map";
import { LAB, RGB, XYZ } from "../interfaces/color-spaces.interface";

import {
  RGBConverters,
  ToRGBConverters,
} from "../interfaces/converters.interface";
import { ColorExtendedData } from "../interfaces/color-data.interface";
import { ColorSpaceUnion, Spaces } from "../types";

export class ColorResolver {
  rgb!: RGB;
  lab!: LAB;
  xyz!: XYZ;

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
    for (let resolution of resolv) {
      const fun = rgbConverters[resolution as keyof RGBConverters] as Function;
      if (resolution === 'lch' && fun && this.lab) this[resolution as keyof this] = fun(this.lab) 
      else if (fun && resolution !== 'lch') this[resolution as keyof this] = fun(this.rgb);
    }
  }

  data(): Partial<ColorExtendedData> {
    return { ...this };
  }
}
