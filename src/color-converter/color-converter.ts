/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { checkAndFormat } from "../helpers/color-checks";
import { ColorSpaceUnion, Spaces } from "../types/colors";

/**
 * @description
 * A class used to compute and retrieve any of the available
 * color space.
 *  @param {Spaces} -space / type of color from which conversions are made
 *  @param {ColorSpaceUnion} - The actual color data (RGB, HSL etc..)
 *  @param {Spaces} - What information do we want back
 */
export abstract class ColorConverter {
  abstract converterMap: { [key: string]: Function };
  color!: ColorSpaceUnion;
  constructor(
    space: Spaces,
    color: ColorSpaceUnion,
  ) {
    this.color = checkAndFormat(space, color);
  }
}
