/***************************************************************
 *  @license
 *  Copyright Slavko Mihajlovic All Rights Reserved.
 *
 *  Use of this source code is governed by an ISC-style license that can be
 *  found at https://opensource.org/license/isc-license-txt/
 *
 *  Matrices chromatic adaptation algorithms.
 ***************************************************************/
import { ResponceDomain } from "../interfaces/responce-domain";

/**
 * @description Bradford Transform Matrices
 */
export const BRADFORD_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description CIECAM00 Transform Matrices
 */
export const CIECAM00_COEFFICIENT_MATRICES: ResponceDomain = {
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
export const CIECAM02_COEFFICIENT_MATRICES: ResponceDomain = {
  MA: [
    [0.7328, 0.4296, -0.1624],
    [-0.7036, 1.6975, 0.0061],
    [0.003, 0.0136, 0.9834],
  ],
  MA_1: [
    [1.0961, -0.2788, 0.1827],
    [0.4543, 0.4735, 0.072],
    [-0.0096, -0.0056, 1.0153],
  ],
};

/**
 * @description CAM16 Transform Matrices
 */
export const CIECAM16_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description CIECAM97 Transform Matrices
 */
export const CIECAM97_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description CIECAT94 Transform Matrices
 */
export const CIECAT94_COEFFICIENT_MATRICES: ResponceDomain = {
  MA: [
    [0.40024, 0.7076, -0.08081],
    [-0.2663, 1.16532, 0.0457],
    [0.0, 0.0, 0.91822],
  ],
  MA_1: [
    [1.7795, -1.0805, 0.21039],
    [0.40666, 0.6112, 0.00536],
    [0.0, 0.0, 1.089],
  ],
};

/**
 * @description CMCCAT97 Transform Matrices
 */
export const CMCCAT97_COEFFICIENT_MATRICES: ResponceDomain = {
  MA: [
    [0.7982, 0.3389, -0.1371],
    [-0.5918, 1.5512, 0.0406],
    [0.0008, 0.0239, 0.9753],
  ],
  MA_1: [
    [1.0764, -0.23766, 0.16121],
    [0.41096, 0.55434, 0.03469],
    [-0.01095, -0.01338, 1.02434],
  ],
};

/**
 * @description HuntPointer-Estevez Transform Matrices
 */
export const HUNT_POINTER_ESTEVEZ_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description RLAB Transform Matrices
 */
export const RLAB_COEFFICIENT_MATRICES: ResponceDomain = {
  MA: [
    [1.9569, -1.1882, 0.2313],
    [0.3612, 0.6388, 0.0],
    [0.0, 0.0, 1.0],
  ],
  MA_1: [
    [0.3804, 0.70757, -0.08798],
    [-0.21509, 1.1653, 0.04975],
    [0.0, 0.0, 1.0],
  ],
};

/**
 * @description Sharp Transform Matrices
 */
export const SHARP_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description Stokman Transform Matrices
 */
export const STOKMAN_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description Von Kries Transform Matrices
 */
export const VON_KRIES_COEFFICIENT_MATRICES: ResponceDomain = {
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
 * @description Wassef Scaling Transform Matrices
 */
export const WASSEF_COEFFICIENT_MATRICES: ResponceDomain = {
  MA: [
    [0.926, 0.926, 0.141],
    [-0.619, 2.341, -0.303],
    [0.553, 0.923, 3.269],
  ],
  MA_1: [
    [1.004, -0.1659, -0.0586],
    [0.2349, 0.3732, 0.0244],
    [-0.2361, -0.0773, 0.3089],
  ],
};

/**
 * @description XYZ Scaling Transform Matrices
 */
export const XYZ_SCALING_COEFFICIENT_MATRICES: ResponceDomain = {
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
