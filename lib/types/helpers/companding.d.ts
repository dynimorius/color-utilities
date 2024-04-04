/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { RGB, SpaceData } from "../interfaces/color-spaces.interface";
/*************************************************************
 *                        COMPANDING
 ************************************************************/
/**
 * sRGB Companding
 * @param {number}                - color value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare const sRgbCompanding: (value: number) => number;
/**
 * Gamma Companding
 * @param {number}                - color value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare const gammaCompanding: (value: number, gamma: number) => number;
/**
 * L* Companding
 * @param {number}                - color value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare const LCompanding: (value: number) => number;
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
export declare const companding: ({ red, green, blue }: RGB, compandingFun: Function, options?: {
    gamma?: number | null;
    rounded?: boolean;
    whitInBounds?: boolean;
}) => RGB;
/*************************************************************
 *                    INVERSE COMPANDING
 ************************************************************/
/**
 * Inverse sRGB Companding
 * @param {number}                - color channel value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare const inverseSrbgCompanding: (value: number) => number;
/**
 * Inverse Gamma Companding
 * @param {number}                - color channel value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare const inverseGammaCompanding: (value: number, gamma: number) => number;
/**
 * Inverse L* Companding
 * @param {number}                - color channel value
 * @returns {number}              - companded value
 * more info: http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
 */
export declare const inverseLCompanding: (value: number) => number;
/**
 * RGB Inverse Companding
 * @param {RBG}                   - RGB color values
 * @param {SpaceData}             - RGB space dataset
 * @param {Function}              - function to preform inverse companding whit
 * @param {boolean}               - optional flag indicating if a gamma value
 *                                for a give RGB space data set should be used
 * @returns {RGB}                 - rgb values
 */
export declare const inverseCompanding: ({ red, green, blue }: RGB, space: SpaceData, inverseCompandingFun: Function, gamma?: boolean) => {
    Rlin: number;
    Glin: number;
    Blin: number;
};
