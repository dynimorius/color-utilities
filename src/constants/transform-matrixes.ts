/***************************************************************
 *  @license
 *  Copyright Slavko Mihajlovic All Rights Reserved.
 *
 *  Use of this source code is governed by an ISC-style license that can be
 *  found at https://opensource.org/license/isc-license-txt/
 *
 *  Cone response domains utilized for chromatic
 *  adaptation algorithms.
 *  The Bradford method is the newest of the three methods,
 *  and is considered by most experts to be the best of them.
 *  credit:
 *  http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
 ***************************************************************/
import { ResponceDomain } from "../interfaces/responce-domain";

/**
 * @description Sharp Transform Matrices
 */
export const SHARP_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [1.2694, -0.0988, -0.1706],
    [-0.8364, 1.8006, 0.0357],
    [0.0297, -0.0315, 1.0018],
  ],
  MA_1: [
    [0.9869929, -0.1470543, 0.1599627],
    [0.4323053, 0.5183603, 0.0492912],
    [-0.0085287, 0.0400428, 0.9684867],
  ],
};

/**
 * @description Bradford Transform Matrices
 */
export const BRADFORD_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.8951, 0.2664, -0.1614],
    [-0.7502, 1.7135, 0.0367],
    [0.0389, -0.0685, 1.0296],
  ],
  MA_1: [
    [0.9869929, -0.1470543, 0.1599627],
    [0.4323053, 0.5183603, 0.0492912],
    [-0.0085287, 0.0400428, 0.9684867],
  ],
};

/**
 * @description HuntPointer-Estevez Transform Matrices
 */
export const HUNT_POINTER_ESTEVEZ_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.38971, 0.68898, -0.07868],
    [-0.22981, 1.1834, 0.04641],
    [0.0, 0.0, 1.0],
  ],
  MA_1: [
    [1.9102, -1.1121, 0.2019],
    [0.371, 0.6291, 0.0],
    [0.0, 0.0, 1.0],
  ],
};

/**
 * @description Von Kries Transform Matrices
 */
export const VON_KRIES_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.40024, 0.7076, -0.08081],
    [-0.2263, 1.16532, 0.0457],
    [0.0, 0.0, 0.91822],
  ],
  MA_1: [
    [1.8599364, -1.1293816, 0.2198974],
    [0.3611914, 0.6388125, -0.0000064],
    [0.0, 0.0, 1.0890636],
  ],
};

/**
 * @description Stokman Transform Matrices
 */
export const STOKMAN_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.2689, -0.3962, 0.0214],
    [0.8518, 1.177, -0.0247],
    [-0.0358, 0.1055, 0.5404],
  ],
  MA_1: [
    [1.7896, 0.6079, -0.0499],
    [-1.2865, 0.4072, 0.0808],
    [0.3645, -0.0379, 1.804],
  ],
};

/**
 * @description CIECAM97 Transform Matrices
 */
export const CIECAM97_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.8562, 0.3372, -0.1934],
    [-0.836, 1.8327, 0.0033],
    [0.0357, -0.00469, 1.0112],
  ],
  MA_1: [
    [0.983811, -0.180529, 0.18875],
    [0.448831, 0.463277, 0.08433],
    [-0.032651, 0.008522, 0.982651],
  ],
};

/**
 * @description CIECAM00 Transform Matrices
 */
export const CIECAM00_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.7982, 0.3389, -0.1371],
    [-0.5918, 1.5512, 0.0406],
    [0.0008, 0.0239, 0.9753],
  ],
  MA_1: [
    [1.094262, -0.241595, 0.163879],
    [0.417976, 0.552793, 0.035743],
    [-0.0192184, -0.0115646, 1.023105],
  ],
};

/**
 * @description CIECAM02 Transform Matrices
 */
export const CIECAM02_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.7328, 0.4296, -0.1624],
    [-0.7036, 1.6975, 0.0061],
    [0.003, 0.0136, 0.9834],
  ],
  MA_1: [
    [0.38971, 0.68898, -0.07868],
    [-0.22981, 1.1834, 0.04641],
    [0.0, 0.0, 1.0],
  ],
};

/**
 * @description CAM16 Transform Matrices
 */
export const CIECAM16_CONE_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [0.401288, 0.650173, -0.051461],
    [-0.250268, 1.204414, 0.045854],
    [-0.002079, 0.048952, 0.953127],
  ],
  MA_1: [
    [1.8620678, -1.011254, 0.149186],
    [0.387526, 0.621447, -0.008973],
    [-0.015841, -0.034122, 1.0499644],
  ],
};

/**
 * @description XYZ Scaling Transform Matrices
 */
export const XYZ_SCALING_RESPONCE_DOMAINS: ResponceDomain = {
  MA: [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
  ],
  MA_1: [
    [1.0, 0.0, 0.0],
    [0.0, 1.0, 0.0],
    [0.0, 0.0, 1.0],
  ],
};
