"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hclToLab = void 0;
/**
 * Converts a color from HCL color space to LAB color space
 * @param {HCL} - hcl color value
 * @returns {LAB} - lab color value
 */
const hclToLab = ({ luminance, hue, chroma }) => {
    const h = hue * (Math.PI / 180);
    return {
        luminance,
        a: Math.cos(h) * chroma,
        b: Math.sin(h) * chroma,
    };
};
exports.hclToLab = hclToLab;
