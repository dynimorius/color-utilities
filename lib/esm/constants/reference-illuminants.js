"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFERENCE_ILLUMINANT = void 0;
/****************************************************************
 *  @license
 *  Copyright Slavko Mihajlovic All Rights Reserved.
 *
 *  Use of this source code is governed by an ISC-style license that can be
 *  found at https://www.isc.org/licenses/
 *
 *  Reference illuminant tristimulus values
 *  B is from Wyszecki & Stiles and the rest are
 *  from  ASTM E308-01
 *  credit:
 *  http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
 *****************************************************************/
exports.REFERENCE_ILLUMINANT = {
    A: { X: 1.0985, Y: 1, Z: 0.35585 },
    B: { X: 0.99072, Y: 1, Z: 0.85223 },
    C: { X: 0.98074, Y: 1, Z: 1.18232 },
    D50: { X: 0.96422, Y: 1, Z: 0.82521 },
    D55: { X: 0.95682, Y: 1, Z: 0.92149 },
    D65: { X: 0.95047, Y: 1, Z: 1.08883 },
    D75: { X: 0.94972, Y: 1, Z: 1.22638 },
    E: { X: 1, Y: 1, Z: 1 },
    E2: { X: 0.99186, Y: 1, Z: 0.67393 },
    E7: { X: 0.95041, Y: 1, Z: 1.08747 },
    E11: { X: 1.00962, Y: 1, Z: 0.6435 },
};
