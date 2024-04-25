/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
import {
  Adaptations,
  AdaptiveColorSpaces,
  AdaptiveColors,
} from "types/adaptations";
import { XYZ } from "../interfaces/color-spaces.interface";
import { matrixVectorMultiAsXyz } from "../helpers/matrix";
import { AdaptiveMatrices } from "interfaces/adaptive-matrices.interface";
import { ADAPTIVE_MATRICES } from "../constants/adaptive_matrices";
import { toXyzConverters } from "../color-converter/convertor-map";
import { ToXyzConverters } from "interfaces/converters.interface";

/**
 * Preforms a chromatic adaptation on a color in a XYZ space
 *
 * @param {XYZ}			       - color to preform the chromatic adaptation on
 * @param {string}			   - string representation of the adaptation
 * @returns	{XYZ}			   - Chromatically adapted XYZ values
 */
export const adapt = (color: XYZ, adaptation: Adaptations): XYZ => {
  return matrixVectorMultiAsXyz(
    ADAPTIVE_MATRICES[adaptation as keyof AdaptiveMatrices],
    color
  );
};

/**
 * A class used for chromatic adaptation of colors
 * @param { XYZ }	           - color to preform the chromatic adaptation on
 */
export class Adapter {
  private color!: XYZ;
  constructor(color?: AdaptiveColors, colorSpace: AdaptiveColorSpaces = "xyz") {
    this.color = color
      ? this.getXyz(color, colorSpace)
      : { x: 95.05, y: 100.0, z: 108.9 };
  }

  private getXyz(color: AdaptiveColors, colorSpace: AdaptiveColorSpaces): XYZ {
    if (colorSpace === "xyz") return color as XYZ;
    else return toXyzConverters[colorSpace as keyof ToXyzConverters](color);
  }

  adapt(adaptation: Adaptations): XYZ {
    return adapt(this.color, adaptation);
  }

  set(color: AdaptiveColors, colorSpace?: AdaptiveColorSpaces): void {
    this.color = this.getXyz(color, colorSpace || "xyz");
  }
}
