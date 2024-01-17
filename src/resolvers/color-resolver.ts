import {
  rgbConverters,
  toRgbConverters,
  toXyzConverters,
} from "./convertor-map";
import { RGB, XYZ } from "../interfaces/color-spaces.interface";

import {
  ColorConverters,
  ToRGBConverters,
  ToXyzConverters,
} from "../interfaces/converters.interface";
import { ColorExtendedData } from "../interfaces/color-data.interface";
import { ColorSpaceUnion, Spaces } from "../types";

export class ColorResolver {
  xyz!: XYZ;
  rgb!: RGB;

  constructor(
    space: Spaces,
    color: ColorSpaceUnion,
    resolv: Spaces[] = [
      "adobe_98_rgb",
      "apple_rgb",
      "ansi16",
      "ansi256",
      "best_rgb",
      "beta_rgb",
      "bruce_rgb",
      "cie_rgb",
      "color_match_rgb",
      "cmyk",
      "don_rgb_4",
      "etka_space_ps5",
      "hcg",
      "hex",
      "hsl",
      "hsv",
      "hwb",
      "lab",
      "lch_ab",
      "lch_uv",
      "luv",
      "ntsc_rgb",
      "pal_secam_rgb",
      "pro_photo_rgb",
      "rgb_0_1",
      "rgb",
      "smpte_c_rgb",
      "web_safe",
      "wide_gamut_rgb",
      "xyz",
    ]
  ) {
    this[space as keyof this] = color as any;
    const initXyzCheck = new RegExp(/rgb|lab|luv|ps5/g);
    if (!this.xyz && initXyzCheck.exec(space)) 
      this.xyz = toXyzConverters[space as keyof ToXyzConverters](color);
    
    const initRgbCheck = new RegExp(/hex|cmyk|hsl|hsv|hwb|xyz/g);
    if (!this.rgb && initRgbCheck.exec(space))
      this.rgb = toRgbConverters[space as keyof ToRGBConverters](color);

    const initLabCheck = new RegExp(/lch/g);

    for (let resolution of resolv) {
      if (!this[resolution as keyof this]) {
        const fun = rgbConverters[resolution as keyof ColorConverters]?.fun as Function;
        const param = rgbConverters[resolution as keyof ColorConverters]?.from as string;
        this[resolution as keyof this] = fun(this[param as keyof this]);
      }
 
    }
  }

  data(): Partial<ColorExtendedData> {
    return { ...this };
  }
}
