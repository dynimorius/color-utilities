/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import {
  colorConverters,
  toRgbConverters,
  toXyzConverters,
} from "../convertor-map";
import { RGB, XYZ } from "../interfaces/color-spaces.interface";

import { DefaultResolv } from "../constants/init-spaces";
import { sRgbToXyz } from "../conversions/rgb-conversions";
import { xyzToSrgb } from "../conversions/xyz-conversions";
import { checkAndFormat } from "../helpers/color-checks";
import { ColorData } from "../interfaces/color-data.interface";
import {
  ColorConverters,
  ToRGBConverters,
  ToXyzConverters,
} from "../interfaces/converters.interface";
import { ColorSpaceUnion, Spaces } from "../types/colors";

/**
 *  @description A class representing a color, and its values in diferente spaces
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {(Spaces | "web_safe")[]} - What information do we want back
 */
export class Color {
  rgb!: RGB;
  xyz!: XYZ;

  constructor(
    space: Spaces,
    color: ColorSpaceUnion,
    resolv: (Spaces | "web_safe")[] = DefaultResolv
  ) {
    color = checkAndFormat(space, color);
    this[space as keyof this] = color as any;
    if (
      !this.rgb &&
      !!new RegExp(/hex|cmyk|hsl|hsv|hwb|ryb|xyz|yc|yd|yig|yp/g).exec(space)
    ) {
      this.rgb = toRgbConverters[space as keyof ToRGBConverters](color);
      if (this.xyz) this.xyz = sRgbToXyz(this.rgb);
    }

    if (
      !this.xyz &&
      !!new RegExp(/rgb|lab|luv|lch|ps5|xyy/g).exec(space)
    ) {
      this.xyz = toXyzConverters[space as keyof ToXyzConverters](color);
      if (!this.rgb) this.rgb = xyzToSrgb(this.xyz);
    } else this.xyz = toXyzConverters.rgb(this.rgb);

    for (let resolution of resolv) {
      if (!this[resolution as keyof this]) {
        const fun = colorConverters[resolution as keyof ColorConverters]
          ?.fun as Function;
        const param = colorConverters[resolution as keyof ColorConverters]
          ?.from as string;
        this[resolution as keyof this] = fun(
          this[param as keyof this]
        );
      }
    }
  }

  get data(): ColorData {
    return this as ColorData;
  }
}

