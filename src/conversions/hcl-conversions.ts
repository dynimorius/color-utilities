/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { HCL, LAB } from "../interfaces/color-spaces.interface"

/**
 * Converts a color from HCL color space to LAB color space
 * @param {HCL}                   - hcl color value
 * @returns {LAB}                 - lab color value
 */
export const hclToLab = ({ luminance, hue, chroma }: HCL): LAB => {
  const h = hue * (Math.PI / 180)

  return {
    luminance,
    a: Math.cos(h) * chroma,
    b: Math.sin(h) * chroma,
  }
}

