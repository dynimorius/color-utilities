/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

/**
 * @description Options used for a Mixer constructor :
 *  - size: number of colors to return
 *  - prefexed: should the resulting colors start with #
 */
export interface MixerOptions {
  size?: number;
  prefexed?: boolean;
}