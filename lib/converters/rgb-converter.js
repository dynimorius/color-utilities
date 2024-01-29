"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sRgbToRyb = exports.sRgbToHwb = exports.sRgbToHsv = exports.sRgbToHsl = exports.sRgbaToHex = exports.sRgbToHex = exports.sRgbToLch_uv = exports.sRgbToLch_ab = exports.sRgbToLuv = exports.sRgbToLab = exports.sRgbToCmyk = exports.sRgbToAnsi256 = exports.sRgbToAnsi16 = exports.sRgbToXyz = exports.lRgbToXyz = exports.eciRgbV2ToXyz = exports.wideGamutRgbToXyz = exports.smpteCRgbToXyz = exports.proPhotoRgbToXyz = exports.palSecamRgbToXyz = exports.ntscRgbToXyz = exports.etkaSpacePs5ToXyz = exports.donRgb4ToXyz = exports.colorMatchRgbToXyz = exports.cieRgbToXyz = exports.bruceRgbToXyz = exports.betaRgbToXyz = exports.bestRgbToXyz = exports.appleRgbToXyz = exports.adobeRgbToXyz = exports.rgbToAdobeRgb = exports.gammaRgbToXyz = exports.comparativeDistance = exports.sRgbToLuminance = exports.rgbTo1_0rgb = exports.rgbToHue = exports.getRange = exports.rgbInvert = exports.normalizeRgba = exports.normalizeRgb = void 0;
const space_datasets_1 = require("../constants/space-datasets");
const companding_1 = require("../helpers/companding");
const formats_and_checks_1 = require("../helpers/formats-and-checks");
const chromatic_adaptation_1 = require("./../helpers/chromatic-adaptation");
const lab_converter_1 = require("./lab-converter");
const luv_converter_1 = require("./luv-converter");
const number_converter_1 = require("./number-converter");
const xyz_converter_1 = require("./xyz-converter");
/*******************************************************************
 *                           HELPERS
 * *****************************************************************/
/**
 * Normalizes an RBG value
 * @param {RBG} rgb color to normalize
 * @returns {RGB} - normalized sRBG color value
 */
const normalizeRgb = ({ red, green, blue }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
});
exports.normalizeRgb = normalizeRgb;
/**
 * Normalizes an RBGA value
 * @param {RBGA} rgba color to normalize
 * @returns {RGBA} - normalized sRBGA color value
 */
const normalizeRgba = ({ red, green, blue, alpha }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
    alpha,
});
exports.normalizeRgba = normalizeRgba;
/**
 * Inverts a sRBG color
 * @param {RBG} rgb color to invert
 * @returns {RGB} - inverted sRBG color value
 */
const rgbInvert = ({ red, green, blue }) => ({
    red: 255 - red,
    green: 255 - green,
    blue: 255 - blue,
});
exports.rgbInvert = rgbInvert;
/**
 * Gets a maximum, minimum values and their difference
 * @param {number} red value for red
 * @param {number} green value for green
 * @param {number} blue value for blue
 * @returns {number, number, number}  max, min and delta values
 */
const getRange = (red, green, blue) => {
    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);
    const delta = max - min;
    return { min, max, delta };
};
exports.getRange = getRange;
/**
 * Gets Hue for a given sRBG color
 * @param {number} red value for red
 * @param {number} green value for green
 * @param {number} blue value for blue
 * @param {number} max maximum value
 * @param {number} delta difference between maximum and minimum value
 * @returns {number}  value of hue
 */
const rgbToHue = (red, green, blue, max, delta) => {
    let hue = 0;
    switch (max) {
        case red:
            hue = (green - blue) / delta;
            break;
        case green:
            hue = 2 + (blue - red) / delta;
            break;
        case blue:
            hue = 4 + (red - green) / delta;
            break;
        default:
            break;
    }
    hue = Math.min(hue * 60, 360);
    hue = Math.round(hue < 0 ? hue + 360 : hue);
    return hue;
};
exports.rgbToHue = rgbToHue;
/**
 * Gets a sRBG color values in a range between 0 and 1
 * @param {RBG} rgb color in range 0 to 255
 * @returns {RGB} color in range 0 to 1
 */
const rgbTo1_0rgb = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    return {
        red,
        green,
        blue,
    };
};
exports.rgbTo1_0rgb = rgbTo1_0rgb;
/**
 * Gets luminance for a given sRBG color
 * @param {RBG} - sRBG values for a color
 * @returns {number} - luminance value
 */
const sRgbToLuminance = ({ red, green, blue }) => 0.2126 * red + 0.7152 * green + 0.0722 * blue;
exports.sRgbToLuminance = sRgbToLuminance;
/**
 * Gets comparative distance for a given sRBG color
 * @param {RBG} rgb1 sRBG values for the frist color
 * @param {RBG} rgb2 sRBG values for the second color
 * @returns {number} - distance
 */
const comparativeDistance = (rgb1, rgb2) => {
    return ((rgb1.red - rgb2.red) ** 2 +
        (rgb1.green - rgb2.green) ** 2 +
        (rgb1.blue - rgb2.blue) ** 2);
};
exports.comparativeDistance = comparativeDistance;
/*******************************************************************
 *                              XYZ
 * *****************************************************************/
/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space
 * @param {RBG} rgb RBG values
 * @param {SpaceData} space RGB space dataset
 * @param {Function} inverseCompandingFun function to preform inverse companding whit
 * @param {boolean} gamma optional flag indicating if a gamma value
 *                        for a give RGB space data set should be used
 * @returns {XYZ} - xyz values
 */
const rgbToXyz = ({ red, green, blue }, space, inverseCompandingFun, gamma) => {
    let Rlin, Glin, Blin;
    if (gamma) {
        Rlin = inverseCompandingFun(red, space.GAMMA);
        Glin = inverseCompandingFun(green, space.GAMMA);
        Blin = inverseCompandingFun(blue, space.GAMMA);
    }
    else {
        Rlin = inverseCompandingFun(red);
        Glin = inverseCompandingFun(green);
        Blin = inverseCompandingFun(blue);
    }
    const { X, Y, Z } = space.RGB_TO_XYZ;
    const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
    const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
    const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;
    return { x, y, z };
};
/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG} rgb RBG values
 * @param {SpaceData} space RGB space dataset
 * @returns {XYZ} - xyz values
 */
const gammaRgbToXyz = (rgb, ref) => {
    return rgbToXyz(rgb, ref, companding_1.inverseGammaCompanding, true);
};
exports.gammaRgbToXyz = gammaRgbToXyz;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Adobe 98 RGB space
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG} rgb sRBG values
 * @param {XYZ} xyz xyz values
 *                  (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB} - Adobe 98 RGB values
 */
const rgbToAdobeRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_converter_1.xyzToAdobeRgb)(xyz);
};
exports.rgbToAdobeRgb = rgbToAdobeRgb;
/**
 * Gets XYZ values for a given color in Adobe 98 RGB space
 * @param {RBG} rgb Adobe 98 RGB values
 * @returns {XYZ} - xyz values
 */
const adobeRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.ADOBE_RGB_1998);
};
exports.adobeRgbToXyz = adobeRgbToXyz;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Apple RGB space
 * @param {RBG} rgb Apple RGB values
 * @returns {XYZ} - xyz values
 */
const appleRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.APPLE_RGB);
};
exports.appleRgbToXyz = appleRgbToXyz;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Best RGB space
 * @param {RBG} rgb Best RGB values
 * @returns {XYZ} - xyz values
 */
const bestRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.BEST_RGB));
};
exports.bestRgbToXyz = bestRgbToXyz;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Beta RGB space
 * @param {RBG} rgb Beta RGB values
 * @returns {XYZ} - xyz values
 */
const betaRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.BETA_RGB));
};
exports.betaRgbToXyz = betaRgbToXyz;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Bruce RGB space
 * @param {RBG} rgb Bruce RGB values
 * @returns {XYZ} - xyz values
 */
const bruceRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.BRUCE_RGB);
};
exports.bruceRgbToXyz = bruceRgbToXyz;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in CIE RGB space
 * @param {RBG} rgb CIE RGB values
 * @returns {XYZ} - xyz values
 */
const cieRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.EtoD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.CIE_RGB));
};
exports.cieRgbToXyz = cieRgbToXyz;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Color Match RGB space
 * @param {RBG} rgb Color Match RGB values
 * @returns {XYZ} - xyz values
 */
const colorMatchRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.COLOR_MATCH_RGB));
};
exports.colorMatchRgbToXyz = colorMatchRgbToXyz;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in DON RGB 4 space
 * @param {RBG} rgb DON RGB 4 values
 * @returns {XYZ} - xyz values
 */
const donRgb4ToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.DON_RGB_4));
};
exports.donRgb4ToXyz = donRgb4ToXyz;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Etka Space PS5 space
 * @param {RBG} rgb Etka Space PS5 values
 * @returns {XYZ} - xyz values
 */
const etkaSpacePs5ToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.ETKA_SPACE_PS5));
};
exports.etkaSpacePs5ToXyz = etkaSpacePs5ToXyz;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in NTSC RGB space
 * @param {RBG} rgb NTSC RGB values
 * @returns {XYZ} - xyz values
 */
const ntscRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.CtoD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.NTSC_RGB));
};
exports.ntscRgbToXyz = ntscRgbToXyz;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in PAL/SECAM RGB space
 * @param {RBG} rgb PAL/SECAM RGB values
 * @returns {XYZ} - xyz values
 */
const palSecamRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.PAL_SECAM_RGB);
};
exports.palSecamRgbToXyz = palSecamRgbToXyz;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in ProPhoto RGB space
 * @param {RBG} rgb ProPhoto RGB values
 * @returns {XYZ} - xyz values
 */
const proPhotoRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.PRO_PHOTO_RGB));
};
exports.proPhotoRgbToXyz = proPhotoRgbToXyz;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in SMPTE-C RGB space
 * @param {RBG} rgb SMPTE-C RGB values
 * @returns {XYZ} - xyz values
 */
const smpteCRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.SMPTE_C_RGB);
};
exports.smpteCRgbToXyz = smpteCRgbToXyz;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in Wide Gamut RGB space
 * @param {RBG} rgb Wide Gamut RGB values
 * @returns {XYZ} - xyz values
 */
const wideGamutRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.WIDE_GAMUT_RGB));
};
exports.wideGamutRgbToXyz = wideGamutRgbToXyz;
/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 * @param {RBG} rgb ECI RGB V2 values for a color
 * @returns {XYZ} - xyz values
 */
const eciRgbV2ToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.lRgbToXyz)(rgb));
};
exports.eciRgbV2ToXyz = eciRgbV2ToXyz;
/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 * but additional chromatic adaptation is needed
 * @param {RBG} rgb ECI RGB V2 values for a color
 * @returns {XYZ} - xyz values
 */
const lRgbToXyz = (rgb) => {
    return rgbToXyz(rgb, space_datasets_1.SPACE_DATASETS.ECI_RGB_V2, companding_1.inverseLCompanding);
};
exports.lRgbToXyz = lRgbToXyz;
/*******************************************************************
 *                             SRGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in sRGB space
 * @param {RBG} rgb sRBG values for a color
 * @returns {XYZ} - xyz values
 */
const sRgbToXyz = (rgb) => {
    return rgbToXyz(rgb, space_datasets_1.SPACE_DATASETS.SRGB, companding_1.inverseSrbgCompanding);
};
exports.sRgbToXyz = sRgbToXyz;
/*******************************************************************
 *                             ANSI
 * *****************************************************************/
/**
 * Gets ansi16 value for a given color in sRGB space
 * @param {RBG} rgb sRBG values for a color
 * @returns {number} - ansi16 numeric value
 */
const sRgbToAnsi16 = (rgb, saturation = null) => {
    // Hsv -> ansi16 optimization
    let value = saturation !== null && saturation !== void 0 ? saturation : (0, exports.sRgbToHsv)(rgb).value;
    value = Math.round(value / 50);
    if (value === 0) {
        return 30;
    }
    let ansi = 30 +
        ((Math.round(rgb.blue / 255) << 2) |
            (Math.round(rgb.green / 255) << 1) |
            Math.round(rgb.red / 255));
    if (value === 2) {
        ansi += 60;
    }
    return ansi;
};
exports.sRgbToAnsi16 = sRgbToAnsi16;
/**
 * Gets ansi256 value for a given color in sRGB space
 * @param {RBG} rgb sRBG values for a color
 * @returns {number} - ansi256 numeric value
 */
const sRgbToAnsi256 = ({ red, green, blue }) => {
    if (red >> 4 === green >> 4 && green >> 4 === blue >> 4) {
        if (red < 8) {
            return 16;
        }
        if (red > 248) {
            return 231;
        }
        return Math.round(((red - 8) / 247) * 24) + 232;
    }
    const ansi = 16 +
        36 * Math.round((red / 255) * 5) +
        6 * Math.round((green / 255) * 5) +
        Math.round((blue / 255) * 5);
    return ansi;
};
exports.sRgbToAnsi256 = sRgbToAnsi256;
/*******************************************************************
 *                            CMYK
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMYK space
 * @param {RBG} rgb sRBG values for a color
 * @returns {CMYK} - CMYK values for a color
 */
const sRgbToCmyk = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    let key = 1 - Math.max(red, green, blue);
    const K1 = 1 - key;
    const f = (t) => Math.round((K1 && (K1 - t) / K1) * 100);
    return { cyan: f(red), magenta: f(green), yellow: f(blue), key: key * 100 };
};
exports.sRgbToCmyk = sRgbToCmyk;
/*******************************************************************
 *                             LAB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Lab space
 * @param {RBG} rgb sRBG values for a color
 * @returns {LAB} - Lab values for a color
 */
const sRgbToLab = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_converter_1.xyzToLab)(xyz);
};
exports.sRgbToLab = sRgbToLab;
/*******************************************************************
 *                             LUV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Luv space
 * @param {RBG} rgb sRBG values for a color
 * @returns {LUV} - Luv values for a color
 */
const sRgbToLuv = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_converter_1.xyzToLuv)(xyz);
};
exports.sRgbToLuv = sRgbToLuv;
/*******************************************************************
 *                             LCH
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to LCH(ab) space
 * @param {RBG} rgb sRBG values for a color
 * @returns {LCH} - LCH(ab) values for a color
 */
const sRgbToLch_ab = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, lab_converter_1.labToLch_ab)((0, xyz_converter_1.xyzToLab)(xyz));
};
exports.sRgbToLch_ab = sRgbToLch_ab;
/**
 * Converts a color form an sRGB space to LCH(uv) space
 * @param {RBG} rgb sRBG values for a color
 * @returns {LCH} - LCH(uv) values for a color
 */
const sRgbToLch_uv = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, luv_converter_1.luvToLch_uv)((0, xyz_converter_1.xyzToLuv)(xyz));
};
exports.sRgbToLch_uv = sRgbToLch_uv;
/*******************************************************************
 *                             HEX
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to hex value
 * @param {RBG} rgb sRBG values for a color
 * @returns {string} - hex string
 */
const sRgbToHex = ({ red, green, blue }, prefixed) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return (prefixed ? "#" : "") + "000000".substring(string.length) + string;
};
exports.sRgbToHex = sRgbToHex;
/**
 * Converts a color form an sRGBA space to hex value
 * @param {RBGA} rgba sRBGA values for a color
 * @returns {string} - hex string
 */
const sRgbaToHex = ({ red, green, blue, alpha }, prefixed) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return ((prefixed ? "#" : "") +
        "000000".substring(string.length) +
        string +
        (0, number_converter_1.decimalToHex)(alpha));
};
exports.sRgbaToHex = sRgbaToHex;
/*******************************************************************
 *                             HSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSL space
 * @param {RBG} rgb sRBG values for a color
 * @returns {HSL} - HSL values for a color
 */
const sRgbToHsl = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = (0, exports.getRange)(red, green, blue);
    let lightness = (max + min) / 2;
    let hue = 0;
    let saturation = 0;
    if (!delta)
        return { hue, saturation, lightness };
    else
        saturation = (0, formats_and_checks_1.formatValue)(lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min));
    if (!pHue)
        hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    else
        hue = pHue;
    lightness = (0, formats_and_checks_1.formatValue)(lightness);
    return { hue, saturation, lightness };
};
exports.sRgbToHsl = sRgbToHsl;
/*******************************************************************
 *                             HSV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSV space
 * @param {RBG} rgb sRBG values for a color
 * @returns {HSV} - HSV values for a color
 */
const sRgbToHsv = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { max, delta } = (0, exports.getRange)(red, green, blue);
    let hue = 0;
    let value = (0, formats_and_checks_1.formatValue)(max);
    let saturation = (0, formats_and_checks_1.formatValue)(max === 0 ? 0 : delta / max);
    if (!delta)
        return { hue, saturation, value };
    if (!pHue)
        hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    else
        hue = pHue;
    return { hue, saturation, value };
};
exports.sRgbToHsv = sRgbToHsv;
/*******************************************************************
 *                             HWG
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HWB space
 * @param {RBG} rgb sRBG values for a color
 * @returns {HWB} - HWB values for a color
 */
const sRgbToHwb = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    let hue;
    if (!pHue) {
        const { max, delta } = (0, exports.getRange)(red, green, blue);
        hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    }
    else
        hue = pHue;
    const whiteness = (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
    const blackness = (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;
    return { hue, whiteness, blackness };
};
exports.sRgbToHwb = sRgbToHwb;
/*******************************************************************
 *                             RYB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to RYB space
 * @param {RBG} rgb sRBG values for a color
 * @returns {RYB} - RYB values for a color
 */
const sRgbToRyb = ({ red, green, blue }) => {
    const Iw = Math.min(red, green, blue);
    const Ib = Math.min(255 - red, 255 - green, 255 - blue);
    const rRGB = red - Iw;
    const gRGB = green - Iw;
    const bRGB = blue - Iw;
    const minRG = Math.min(rRGB, gRGB);
    const rRYB = rRGB - minRG;
    const yRYB = (gRGB + minRG) / 2;
    const bRYB = (bRGB + gRGB - minRG) / 2;
    const n = Math.max(rRYB, yRYB, bRYB) / Math.max(rRGB, gRGB, bRGB);
    const N = isNaN(n) || n === Infinity || n <= 0 ? 1 : n;
    return {
        red: rRYB / N + Ib,
        yellow: yRYB / N + Ib,
        blue: bRYB / N + Ib,
    };
};
exports.sRgbToRyb = sRgbToRyb;
