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
exports.hcyToSrgb = exports.hcyOrHsiToSrgb = void 0;
const hcyOrHsiToSrgb = (val) => {
    const values = Object.values(val);
    let hue = values[0];
    let chromaOrSaturation = values[1];
    let yOrIntensity = values[2];
    hue = (hue < 0 ? (hue % 360) + 360 : (hue % 360)) * Math.PI / 180;
    chromaOrSaturation = Math.max(0, Math.min(chromaOrSaturation, 100)) / 100;
    yOrIntensity = Math.max(0, Math.min(yOrIntensity, 255)) / 255;
    const thirdOfPI = Math.PI / 3;
    if (hue < (2 * thirdOfPI)) {
        return {
            red: (yOrIntensity * (1 + (chromaOrSaturation * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
            green: (yOrIntensity * (1 + (chromaOrSaturation * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
            blue: (yOrIntensity * (1 - chromaOrSaturation)) * 255,
        };
    }
    else if (hue < (4 * thirdOfPI)) {
        hue = hue - 2 * thirdOfPI;
        return {
            red: (yOrIntensity * (1 - chromaOrSaturation)) * 255,
            green: (yOrIntensity * (1 + (chromaOrSaturation * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
            blue: (yOrIntensity * (1 + (chromaOrSaturation * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
        };
    }
    else {
        hue = hue - 4 * thirdOfPI;
        return {
            red: (yOrIntensity * (1 + (chromaOrSaturation * (1 - Math.cos(hue) / Math.cos(thirdOfPI - hue))))) * 255,
            green: (yOrIntensity * (1 - chromaOrSaturation)) * 255,
            blue: (yOrIntensity * (1 + (chromaOrSaturation * Math.cos(hue) / Math.cos(thirdOfPI - hue)))) * 255,
        };
    }
};
exports.hcyOrHsiToSrgb = hcyOrHsiToSrgb;
/**
 * Converts a color form an HCY space to sRGB space
 * @param {HCY} hcy HCY values for a color
 * @returns {RGB} - sRGB values for a color
 */
const hcyToSrgb = (hcy) => {
    return (0, exports.hcyOrHsiToSrgb)(hcy);
};
exports.hcyToSrgb = hcyToSrgb;
