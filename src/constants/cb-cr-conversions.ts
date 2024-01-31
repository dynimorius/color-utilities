/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
 

export const CB_CR_CONVERSIONS_COEFFICIENTS = {
  ITU_R_BT_601: {
    Kr: 0.299,
    Kg: 0.587,
    Kb: 0.117
  },
  ITU_R_BT_709: {
    Kr: 0.2126,
    Kg: 0.7152,
    Kb: 0.0722
  },
  ITU_R_BT_2020: {
    Kr: 0.2627,
    Kg: 0.6780,
    Kb: 0.0593
  },
  SMPTE_240M: {
    Kr: 0.212,
    Kb: 0.087
  },
  BT_470_6: {
    Kr: 0.222,
    Kb: 0.0713
  }
}