"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 *
 * HCY colour space is a tractable hue/chroma/luminance scheme developed
 * by Kuzma Shapran
 * - more info: http://chilliant.blogspot.ca/2012/08/rgbhcy-in-hlsl.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hcyToSrgb = void 0;
//TODO move hsiToSrgb and hcyToSrgb in to a single shared function
/**
 * Converts a color form an HCY space to sRGB space
 * @param {HCY} hcy HCY values for a color
 * @returns {RGB} - sRGB values for a color
 */
const hcyToSrgb = ({ hue, chroma, Yluminance }) => {
    hue = (hue < 0 ? (hue % 360) + 360 : (hue % 360)) * Math.PI / 180;
    chroma = Math.max(0, Math.min(chroma, 100)) / 100;
    Yluminance = Math.max(0, Math.min(Yluminance, 255)) / 255;
    const thirdOfPI = Math.PI / 3;
    if (hue < (2 * thirdOfPI)) {
        return {
            red: (Yluminance * (1 + (chroma * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
            green: (Yluminance * (1 + (chroma * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
            blue: (Yluminance * (1 - chroma)) * 255,
        };
    }
    else if (hue < (4 * thirdOfPI)) {
        hue = hue - 2 * thirdOfPI;
        return {
            red: (Yluminance * (1 - chroma)) * 255,
            green: (Yluminance * (1 + (chroma * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
            blue: (Yluminance * (1 + (chroma * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
        };
    }
    else {
        hue = hue - 4 * thirdOfPI;
        return {
            red: (Yluminance * (1 + (chroma * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
            green: (Yluminance * (1 - chroma)) * 255,
            blue: (Yluminance * (1 + (chroma * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
        };
    }
};
exports.hcyToSrgb = hcyToSrgb;
