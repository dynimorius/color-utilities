import { rgbConverters, toRgbConverters } from "./convertor-map";
import { CMYK, LAB, LCH, RGB, XYZ } from "../interfaces/color-spaces.interface";

import {
  RGBConverters,
  ToRGBConverters,
} from "../interfaces/converters.interface";
import { ColorExtendedData } from "../interfaces/color-data.interface";
import { ColorSpaceUnion, Spaces } from "../types";

export class ColorResolver {
  rgb_0_255!: RGB;
  lab?: LAB;
  lch?: LCH;
  xyz?: XYZ;
  cmyk!: CMYK;

  constructor(
    space: Spaces,
    color: ColorSpaceUnion,
    resolv: Spaces[] = [
      'adobeRgb',
      'ansi16',
      'ansi256',
      'cmyk',
      'hcg',
      'hex',
      'hsl',
      'hsv',
      'hwb',
      'lab',
      'lch',
      'rgb_0_1',
      'rgb_0_255',
      'webSafe',
      'xyz',
    ]
  ) {
    this[space as keyof this] = color as any;

    if (!this.rgb_0_255)
      this.rgb_0_255 = (toRgbConverters[space as keyof ToRGBConverters] as Function)(
        color
      );

    for (let resolution of resolv) {
      if (!this[resolution as keyof this])
        this[resolution as keyof this] = (
          rgbConverters[resolution as keyof RGBConverters] as Function
        )(this.rgb_0_255);
    }
  }

  data(): Partial<ColorExtendedData> {
    return { ...this };
  }
}
