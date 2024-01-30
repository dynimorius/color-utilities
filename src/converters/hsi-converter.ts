/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { HSI } from "../interfaces/color-spaces.interface";

//TODO move hsiToSrgb and hcyToSrgb in to a single shared function
/**
 * Converts a color form an HSI space to sRGB space
 * @param {HSI} hsi HSI values for a color
 * @returns {RGB} - sRGB values for a color
 */
export const hsiToSrgb = ({hue, saturation, intensity}: HSI) => {
  hue = (hue < 0 ? (hue % 360) + 360 : (hue % 360)) * Math.PI / 180;
  saturation = Math.max(0, Math.min(saturation, 100)) / 100;
  intensity = Math.max(0, Math.min(intensity, 255)) / 255;

  const thirdOfPI = Math.PI / 3;

  if (hue < (2 * thirdOfPI)) {
    return {
      red: (intensity * (1 + ( saturation * Math.cos(hue) / Math.cos(thirdOfPI - hue) ))) * 255,
      green: (intensity * (1 + (saturation * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
      blue: (intensity * ( 1 - saturation )) * 255,
    }

	}
	else if (hue < (4 * thirdOfPI) ) {
    hue = hue - 2 * thirdOfPI;
    return {
      red: (intensity * ( 1 - saturation )) * 255,
      green: (intensity * (1 + ( saturation * Math.cos(hue) / Math.cos(thirdOfPI - hue) ))) * 255,
      blue: (intensity * (1 + ( saturation * ( 1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
    }
	}
	else {
    hue = hue - 4 * thirdOfPI;
    return {
      red: (intensity * (1 + (saturation * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
      green: (intensity * (1 - saturation)) * 255,
      blue: (intensity * (1 + ( saturation * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
    }
	}
}