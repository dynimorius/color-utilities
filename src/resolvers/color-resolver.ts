import {
  rgbConverters,
  toRgbConverters,
  toXyzConverters,
} from "./convertor-map";
import { RGB, XYZ } from "../interfaces/color-spaces.interface";

import {
  ColorCheckers,
  ColorConverters,
  ToRGBConverters,
  ToXyzConverters,
} from "../interfaces/converters.interface";
import { ColorExtendedData } from "../interfaces/color-data.interface";
import { ColorSpaceUnion, Spaces } from "../types";
import { colorCheckerMap } from "./color-checker-map";
import { sRgbToXyz } from "../converters/rgb-converter";
import { xyzToSrgb } from "../converters/xyz-converter";

export class ColorResolver {
  data: ColorExtendedData = {};

  constructor(
    space: Spaces,
    color: ColorSpaceUnion,
    resolv: (Spaces | "web_safe")[] = [
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
      "eci_rgb_v2",
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
      "ryb",
      "smpte_c_rgb",
      "web_safe",
      "wide_gamut_rgb",
      "xyz",
      "xyy",
    ]
  ) {
    color = this.checkAndFormat(space, color);
    this.data[space as keyof ColorExtendedData] = color as any;

    if (
      !this.data.rgb &&
      !!new RegExp(/hex|cmyk|hsl|hsv|hwb|xyz/g).exec(space)
    ) {
      this.data.rgb = toRgbConverters[space as keyof ToRGBConverters](color);
      if (this.data.xyz) this.data.xyz = sRgbToXyz(this.data.rgb as RGB);
    }

    if (!this.data.xyz && !!new RegExp(/rgb|lab|luv|lch|ps5/g).exec(space)) {
      this.data.xyz = toXyzConverters[space as keyof ToXyzConverters](color);
      if (!this.data.rgb) this.data.rgb = xyzToSrgb(this.data.xyz as XYZ);
    } else this.data.xyz = toXyzConverters.rgb(this.data.rgb);
    
    for (let resolution of resolv) {
      if (!this.data[resolution as keyof ColorExtendedData]) {
        const fun = rgbConverters[resolution as keyof ColorConverters]
          ?.fun as Function;
        const param = rgbConverters[resolution as keyof ColorConverters]
          ?.from as string;
        this.data[resolution as keyof ColorExtendedData] = fun(
          this.data[param as keyof ColorExtendedData]
        );
      }
    }
  }

  checkAndFormat(space: Spaces, color: ColorSpaceUnion): ColorSpaceUnion {
    const rgbCheck = new RegExp(/rgb|ps5/g);
    if (rgbCheck.exec(space)) return colorCheckerMap.rgb(color);
    const lchCheck = new RegExp(/lch/g);
    if (lchCheck.exec(space)) return colorCheckerMap.lch(color);
    else return colorCheckerMap[space as keyof ColorCheckers](color);
  }
}
