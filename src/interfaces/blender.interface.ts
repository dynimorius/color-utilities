/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { BlenderColor } from "../types/colors";
import { RGB } from "./color-spaces.interface";

/**
 * @description Options for a blenders constructor:
 *  - weight: the amount of the first color to blend with
 *  - returnType: color space that should the resulting color be returned in
 */
export interface BlenderOptions {
  weight: number;
  returnType?: "rgb" | "cmyk" | "hsl" | "hsv" | "hwb" | "hex" | "ryb" | "xyz";
}

/**
 * @description Represntation of the data form from blending two colors:
 *  - color1: first color used for blending
 *  - color2: second color used for blending
 *  - resultColor: resulting color
 */
export interface BlendData {
  color1: BlendColorData;
  color2: BlendColorData;
  resultColor: BlenderColor;
}

/**
 * @description Represntation of the color data used for blending:
 *  - data: color values in any of the acceptable formats
 *          (string | RGB | RGBA | RGB_M | RYB | RYB_M | HSL
 *          | HSLA | HSL_M | HSV | HSVA | HSV_M | CMYK | CMYK_M | XYZ)
 *  - rgb: RGB values for the color
 *  - amount: how much of this color was used in the blend
 */
export interface BlendColorData {
  data: BlenderColor;
  rgb: RGB;
  amount: number;
}
