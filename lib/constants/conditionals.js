"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nr =
  exports.Nb =
  exports.Pr =
  exports.Pb =
  exports.L_INVERSE_NORMALIZED_BELOW =
  exports.SRGB_NORMALIZED_BELOW =
  exports.SRGB_INVERSE_NORMALIZED_BELOW =
  exports.CIE_κ =
  exports.CIE_ϵ =
  exports.MAX_DECIMALS =
    void 0;
exports.MAX_DECIMALS = 6;
//Actual CIE standard
exports.CIE_ϵ = 0.008856;
exports.CIE_κ = 903.3;
exports.SRGB_INVERSE_NORMALIZED_BELOW = 0.04045;
exports.SRGB_NORMALIZED_BELOW = 0.0031308;
exports.L_INVERSE_NORMALIZED_BELOW = 0.08;
//ITU-R BT.2020-2
exports.Pb = 0.791;
exports.Pr = 0.4969;
exports.Nb = -0.9702;
exports.Nr = -0.8591;
