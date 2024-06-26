/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  CIE_κ,
  CIE_ϵ,
  L_INVERSE_NORMALIZED_BELOW,
  SRGB_INVERSE_NORMALIZED_BELOW,
  SRGB_NORMALIZED_BELOW,
} from "../constants/conditionals";
import { RGB, SpaceData } from "../interfaces/color-spaces.interface";
import { bound, gamutCheck } from "./formats-and-checks";

/*************************************************************
 *                        COMPANDING
 ************************************************************/
/**
 * sRGB Companding
 * @param {number}                - color value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const sRgbCompanding = (value: number): number => {
  return (
    (value <= SRGB_NORMALIZED_BELOW
      ? 12.92 * value
      : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255
  );
};

/**
 * Gamma Companding
 * @param {number}                - color value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const gammaCompanding = (value: number, gamma: number): number => {
  return value < 0
    ? -Math.pow(Math.abs(value), 1 / gamma) * 255
    : Math.pow(value, 1 / gamma) * 255;
};

/**
 * L* Companding
 * @param {number}                - color value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const LCompanding = (value: number): number => {
  return (
    (value <= CIE_ϵ ? (value * CIE_κ) / 100 : 1.16 * Math.cbrt(value) - 0.16) *
    255
  );
};

/**
 * RGB Companding
 * @param {RGB}                   - RGB color values
 * @param {Function}              - function to preform companding whit
 * @param {{ gamma?: number | null; rounded?: boolean; whitInBounds?: boolean }} options
 *              - rounded: should the returned values be rounded
 *              - whitInBounds: should the return values be in range of 0 - 255
 *              - gamma: should the gamma value from the space data set be used
 *                while companding
 * @returns {RGB}                 - companded RGB values
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const companding = (
  { red, green, blue }: RGB,
  compandingFun: Function,
  options?: { gamma?: number | null; rounded?: boolean; whitInBounds?: boolean }
): RGB => {
  if (options?.rounded) {
    red = Math.round(compandingFun(...[red, options?.gamma]));
    green = Math.round(compandingFun(...[green, options?.gamma]));
    blue = Math.round(compandingFun(...[blue, options?.gamma]));
  } else {
    red = compandingFun(...[red, options?.gamma]);
    green = compandingFun(...[green, options?.gamma]);
    blue = compandingFun(...[blue, options?.gamma]);
  }

  return {
    red: options?.whitInBounds ? bound(red) : red,
    green: options?.whitInBounds ? bound(green) : green,
    blue: options?.whitInBounds ? bound(blue) : blue,
    inGamut: gamutCheck(red) && gamutCheck(green) && gamutCheck(blue),
  };
};

/*************************************************************
 *                    INVERSE COMPANDING
 ************************************************************/
/**
 * Inverse sRGB Companding
 * @param {number}                - color channel value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const inverseSrbgCompanding = (value: number): number => {
  value = value / 255;
  return value <= SRGB_INVERSE_NORMALIZED_BELOW
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
};

/**
 * Inverse Gamma Companding
 * @param {number}                - color channel value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const inverseGammaCompanding = (
  value: number,
  gamma: number
): number => {
  value = value / 255;
  return value < 0 ? -Math.pow(Math.abs(value), gamma) : Math.pow(value, gamma);
};

/**
 * Inverse L* Companding
 * @param {number}                - color channel value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export const inverseLCompanding = (value: number): number => {
  value = value / 255;
  return value <= L_INVERSE_NORMALIZED_BELOW
    ? (100 * value) / CIE_κ
    : Math.pow((value + 0.16) / 1.16, 3);
};

/**
 * RGB Inverse Companding
 * @param {RBG}                   - RGB color values
 * @param {SpaceData}             - RGB space dataset
 * @param {Function}              - function to preform inverse companding whit
 * @param {boolean}               - optional flag indicating if a gamma value
 *                                for a give RGB space data set should be used
 * @returns {RGB}                 - rgb values
 */
export const inverseCompanding = (
  { red, green, blue }: RGB,
  space: SpaceData,
  inverseCompandingFun: Function,
  gamma?: boolean
): { Rlin: number; Glin: number; Blin: number } => {
  let Rlin, Glin, Blin;
  if (gamma) {
    Rlin = inverseCompandingFun(red, space.GAMMA);
    Glin = inverseCompandingFun(green, space.GAMMA);
    Blin = inverseCompandingFun(blue, space.GAMMA);
  } else {
    Rlin = inverseCompandingFun(red);
    Glin = inverseCompandingFun(green);
    Blin = inverseCompandingFun(blue);
  }
  return { Rlin, Glin, Blin };
};
