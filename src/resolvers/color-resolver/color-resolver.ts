/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { RGB, XYZ } from "../../interfaces/color-spaces.interface";
import {
  colorConverters,
  toRgbConverters,
  toXyzConverters,
} from "./convertor-map";

import { DefaultResolv } from "../../constants/init-spaces";
import { sRgbToXyz } from "../../conversions/rgb-conversions";
import { xyzToSrgb } from "../../conversions/xyz-conversions";
import { checkAndFormat } from "../../helpers/color-checks";
import { ColorExtendedData } from "../../interfaces/color-data.interface";
import {
  ColorConverters,
  ToRGBConverters,
  ToXyzConverters,
} from "../../interfaces/converters.interface";
import { ColorSpaceUnion, Spaces } from "../../types/colors";

/**
 * @description
 * A class used to compute and retrieve any of the available
 * color space.
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {(Spaces | "web_safe")[]} - What information do we want back
 */
export class ColorResolver {
  data: ColorExtendedData = {};

  constructor(
    space: Spaces,
    color: ColorSpaceUnion,
    resolv: (Spaces | "web_safe")[] = DefaultResolv
  ) {
    color = checkAndFormat(space, color);
    this.data[space as keyof ColorExtendedData] = color as any;
    if (
      !this.data.rgb &&
      !!new RegExp(/hex|cmyk|hsl|hsv|hwb|ryb|xyz/g).exec(space)
    ) {
      this.data.rgb = toRgbConverters[space as keyof ToRGBConverters](color);
      if (this.data.xyz) this.data.xyz = sRgbToXyz(this.data.rgb as RGB);
    }

    if (
      !this.data.xyz &&
      !!new RegExp(/rgb|lab|luv|lch|ps5|xyy/g).exec(space)
    ) {
      this.data.xyz = toXyzConverters[space as keyof ToXyzConverters](color);
      if (!this.data.rgb) this.data.rgb = xyzToSrgb(this.data.xyz as XYZ);
    } else this.data.xyz = toXyzConverters.rgb(this.data.rgb);

    for (let resolution of resolv) {
      if (!this.data[resolution as keyof ColorExtendedData]) {
        const fun = colorConverters[resolution as keyof ColorConverters]
          ?.fun as Function;
        const param = colorConverters[resolution as keyof ColorConverters]
          ?.from as string;
        this.data[resolution as keyof ColorExtendedData] = fun(
          this.data[param as keyof ColorExtendedData]
        );
      }
    }
  }
}
