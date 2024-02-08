/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

export const CB_CR_CONVERSIONS_COEFFICIENTS = {
  ITU_R_BT_601: {
    a: 0.299,
    b: 0.587,
    c: 0.114,
    d: 1.772,
    e: 1.402,
  },
  ITU_R_BT_709: {
    a: 0.2126,
    b: 0.7152,
    c: 0.0722,
    d: 1.8556,
    e: 1.5748,
  },
  ITU_R_BT_2020: {
    a: 0.2627,
    b: 0.678,
    c: 0.0593,
    d: 1.8814,
    e: 1.4746,
  },
  // SMPTE_240M: {
  //   Kr: 0.212,
  //   Kb: 0.087
  // },
  // BT_470_6: {
  //   Kr: 0.222,
  //   Kb: 0.0713
  // }
};

export const CB_CR_CONVERSION_MATRICES = {
  RGB_TO_YCBCR: [
    [0.257, 0.504, 0.098],
    [-0.148, -0.291, 0.439],
    [0.439, -0.368, -0.071],
  ],
  YCBCR_TO_RGB: [
    [1.164, 0.0, 1.596],
    [1.164, -0.392, -0.813],
    [1.164, 2.017, 0.0],
  ],
  RGB_TO_FULL_RANGE_YCBCR: [
    [0.299, 0.587, 0.114],
    [-0.169, -0.331, 0.5],
    [0.5, -0.419, -0.081],
  ],
  FULL_RANGE_YCBCR_TO_RGB: [
    [1.0, 0.0, 1.4],
    [1.0, -0.343, -0.711],
    [1.0, 1.765, 0.0],
  ],
  RGB_TO_HDTV_YCBCR: [
    [0.183, 0.614, 0.062],
    [-0.101, -0.339, 0.439],
    [0.439, -0.399, -0.04],
  ],
  HDTV_YCBCR_TO_RGB: [
    [1.164, 0.0, 1.793],
    [1.164, -0.213, -0.533],
    [1.164, 2.122, 0.0],
  ],
  RGB_TO_YPBPR: [
    [0.299, 0.587, 0.114],
    [-0.168736, -0.331264, 0.5],
    [0.5, -0.418688, -0.081312],
  ],
  YPBPR_TO_RGB: [
    [1.0, 0.0, 1.402],
    [1.0, -0.344, -0.714],
    [1.0, 1.772, 0.0],
  ],
  RGB_TO_HDTV_YPBPR: [
    [0.213, 0.715, 0.072],
    [-0.115, -0.385, 0.5],
    [0.5, -0.454, -0.046],
  ],
  HDTV_YPBPR_TO_RGB: [
    [1.0, 0.0, 1.575],
    [1.0, -0.187, -0.468],
    [1.0, 1.85, 0.0],
  ],
};
