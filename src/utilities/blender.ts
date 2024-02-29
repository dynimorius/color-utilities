/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { colorConverters, toRgbConverters } from "../convertor-map";
import { checkAndFormat } from "../helpers/color-checks";
import { BlendData, BlenderOptions } from "../interfaces/blender.interface";
import {
  ColorConverters,
  ToRGBConverters,
} from "../interfaces/converters.interface";
import {
  CMYK,
  CMYK_M,
  HSL,
  HSL_M,
  HSV,
  HSV_M,
  RGB,
  RGB_M,
  RYB,
  RYB_M,
  XYZ,
} from "../public_api";
import { BlenderColor } from "../types/colors";

/**
 * Blends two colors
 * @param {RGB}                   - data for the first color to blend
 * @param {RGB}                   - data for the second color to blend
 * @param {number}                - weight / amount of the first color
 * @returns {RGB}                 - New blended color
 */
export const blend = (rgb1: RGB, rgb2: RGB, weight = 0.5): RGB => {
  return {
    red: Math.round(rgb1.red * weight + rgb2.red * (1 - weight)),
    green: Math.round(rgb1.green * weight + rgb2.green * (1 - weight)),
    blue: Math.round(rgb1.blue * weight + rgb2.blue * (1 - weight)),
  };
};

/**
 * @description
 * A class used to blend two colors
 * color space.
 *  @param {BlenderColor} - The actual data for the first color (RGB, HSL etc..)
 *  @param {BlenderColor} - TThe actual data for the second color (RGB, HSL etc..)
 *  @param {BlenderOptions} - blend options which state:
 *  - the waight (amount of the first color, default 0.5 / 50%)
 *  - return type (what color space would you like the return color to be in, default RGB)
 */
export class Blender {
  private rgb1!: RGB;
  private rgb2!: RGB;
  color!: BlenderColor;
  blendData!: BlendData;
  constructor(
    color1: BlenderColor,
    color2: BlenderColor,
    oprions: BlenderOptions
  ) {
    const type1 = getColorType(color1);
    color1 = checkAndFormat(type1, color1) as BlenderColor;
    const type2 = getColorType(color2);
    color2 = checkAndFormat(type2, color2) as BlenderColor;
    this.rgb1 =
      type1 === "rgb"
        ? color1
        : toRgbConverters[getColorType(color1) as keyof ToRGBConverters](
            color1
          );
    this.rgb2 =
      type2 === "rgb"
        ? color2
        : toRgbConverters[getColorType(color2) as keyof ToRGBConverters](
            color2
          );
    const weight = oprions.weight ? oprions.weight : 0.5;
    this.color =
      oprions.returnType === "rgb" || !oprions.returnType
        ? blend(this.rgb1, this.rgb2, weight)
        : (
            colorConverters[oprions.returnType as keyof ColorConverters]
              ?.fun as Function
          )(blend(this.rgb1, this.rgb2, weight));
    this.blendData = {
      color1: {
        data: color1,
        rgb: checkAndFormat("rgb", this.rgb1) as RGB,
        amount: weight,
      },
      color2: {
        data: color2,
        rgb: checkAndFormat("rgb", this.rgb2) as RGB,
        amount: 1 - weight,
      },
      resultColor: this.color,
    };
  }
}

/**
 * Get  color type / space
 * @param {BlenderColor} - Color data
 * @returns {string} - type / space of color
 */
const getColorType = (color: BlenderColor): string => {
  if (
    typeof (color as RGB).green === "number" ||
    typeof (color as RGB_M).g === "number"
  )
    return "rgb";
  if (
    typeof (color as CMYK).cyan === "number" ||
    typeof (color as CMYK_M).c === "number"
  )
    return "cmyk";
  if (typeof (color as XYZ).x == "number") return "xyz";
  if (
    typeof (color as RYB).yellow === "number" ||
    typeof (color as RYB_M).y === "number"
  )
    return "ryb";
  if (
    typeof (color as HSL).lightness === "number" ||
    typeof (color as HSL_M).l === "number"
  )
    return "hsl";
  if (
    typeof (color as HSV).value === "number" ||
    typeof (color as HSV_M).v === "number"
  )
    return "hsv";
  return "hex";
};
