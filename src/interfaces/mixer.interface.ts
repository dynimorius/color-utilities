/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

/**
 * @description Options used for a Mixer constructor :
 *  - size: number of colors to return
 *  - prefixed: should the resulting colors start with #
 */
export interface MixerOptions {
  size?: number;
  prefixed?: boolean;
}
