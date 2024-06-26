"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sRgbToHwb = exports.sRgbToHsv = exports.sRgbToHsl = exports.sRgbToHsi = exports.sRgbaToHex = exports.sRgbToHex = exports.sRgbToHcy = exports.sRgbToCmyk = exports.sRgbToCmy = exports.sRgbToAnsi256 = exports.sRgbToAnsi16 = exports.sRgbToXyz = exports.lRgbToXyz = exports.eciRgbV2ToXyz = exports.sRgbToEciRgbV2 = exports.wideGamutRgbToXyz = exports.sRgbToWideGamutRgb = exports.smpteCRgbToXyz = exports.sRgbToSmpteCRgb = exports.proPhotoRgbToXyz = exports.sRgbToProPhotoRgb = exports.palSecamRgbToXyz = exports.sRgbToPalSecamRgb = exports.ntscRgbToXyz = exports.sRgbToNtscRgb = exports.etkaSpacePs5ToXyz = exports.sRgbToEtkaSpacePs5 = exports.donRgb4ToXyz = exports.sRgbToDonRgb4 = exports.colorMatchRgbToXyz = exports.sRgbToColorMatchRgb = exports.cieRgbToXyz = exports.sRgbToCieRgb = exports.bruceRgbToXyz = exports.sRgbToBruceRgb = exports.betaRgbToXyz = exports.sRgbToBetaRgb = exports.bestRgbToXyz = exports.sRgbToBestRgb = exports.appleRgbToXyz = exports.sRgbToAppleRgb = exports.adobeRgbToXyz = exports.sRgbToAdobeRgb = exports.sRgbToLuminance = exports.rgbTo1_0rgb = exports.sRgbToHue = exports.rgbInvert = exports.deNormalizeRGB = exports.normalizeRgba = exports.normalizeRgb = void 0;
exports.sRgbToXvYcc = exports.sRgbToYiq = exports.sRgbToYCgCo = exports.sRgbToYcCbcCrc = exports.sRgbToYPbPr = exports.sRgbToYDbDr = exports.sRgbToYCbCrBT709 = exports.sRgbToYCbCrBT601 = exports.gammaRgbToXyz = exports.sRgbToUvw = exports.sRgbToTsl = exports.sRgbToRyb = exports.sRgbToLuv = exports.sRgbToLch_uv = exports.sRgbToLch_ab = exports.sRgbToLab = void 0;
const cb_cr_conversions_matrices_1 = require("../constants/cb-cr-conversions-matrices");
const conditionals_1 = require("../constants/conditionals");
const space_datasets_1 = require("../constants/space-datasets");
const chromatic_adaptation_1 = require("../helpers/chromatic-adaptation");
const companding_1 = require("../helpers/companding");
const formats_and_checks_1 = require("../helpers/formats-and-checks");
const matrix_1 = require("../helpers/matrix");
const lab_conversions_1 = require("./lab-conversions");
const luv_conversions_1 = require("./luv-conversions");
const number_conversions_1 = require("./number-conversions");
const xyz_conversions_1 = require("./xyz-conversions");
const ycbcr_jpeg_conversions_1 = require("./ycbcr-jpeg-conversions");
/*******************************************************************
 *                           HELPERS
 * *****************************************************************/
/**
 * Normalizes an RBG value
 *
 * @param {RBG}                   -  color to normalize
 * @returns {RGB}                 - normalized sRBG color value
 */
const normalizeRgb = ({ red, green, blue }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
});
exports.normalizeRgb = normalizeRgb;
/**
 * Normalizes an RBGA value
 *
 * @param {RBGA}                   - color to normalize
 * @returns {RGBA}                 - normalized sRBGA color value
 */
const normalizeRgba = ({ red, green, blue, alpha }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
    alpha,
});
exports.normalizeRgba = normalizeRgba;
const deNormalizeRGB = ({ red, green, blue }) => ({
    red: red * 255,
    green: green * 255,
    blue: blue * 255,
});
exports.deNormalizeRGB = deNormalizeRGB;
/**
 * Inverts a sRBG color
 *
 * @param {RBG}                   - color to invert
 * @returns {RGB}                 - inverted sRBG color value
 */
const rgbInvert = ({ red, green, blue }) => ({
    red: 255 - red,
    green: 255 - green,
    blue: 255 - blue,
});
exports.rgbInvert = rgbInvert;
/**
 * Gets a maximum, minimum values and their difference
 *
 * @param {number}                   - red value for red
 * @param {number}                   - green value for green
 * @param {number}                   - blue value for blue
 * @returns {number, number, number} -max, min and delta values
 */
const getRange = (red, green, blue) => {
    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);
    const delta = max - min;
    return { min, max, delta };
};
/**
 * Gets Hue for a given sRBG color
 *
 * @param {number}                   - red value for red
 * @param {number}                   - green value for green
 * @param {number}                   - blue value for blue
 * @param {number}                   - max maximum value
 * @param {number}                   - delta difference between maximum and minimum value
 * @returns {number}                 - value of hue
 */
const sRgbToHue = (red, green, blue, max, delta) => {
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
exports.sRgbToHue = sRgbToHue;
/**
 * Gets a sRBG color values in a range between 0 and 1
 *
 * @param {RBG}                   - color in range 0 to 255
 * @returns {RGB}                 - color in range 0 to 1
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
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - luminance value
 */
const sRgbToLuminance = ({ red, green, blue }) => 0.2126 * red + 0.7152 * green + 0.0722 * blue;
exports.sRgbToLuminance = sRgbToLuminance;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Adobe 98 RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                              (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Adobe 98 RGB values
 */
const sRgbToAdobeRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToAdobeRgb)(xyz);
};
exports.sRgbToAdobeRgb = sRgbToAdobeRgb;
/**
 * Gets XYZ values for a given color in Adobe 98 RGB space
 *
 * @param {RGB}                   - Adobe 98 RGB values
 * @returns {XYZ}                 - xyz values
 */
const adobeRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.ADOBE_RGB_1998);
};
exports.adobeRgbToXyz = adobeRgbToXyz;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Apple RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Apple RGB values
 */
const sRgbToAppleRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToAppleRgb)(xyz);
};
exports.sRgbToAppleRgb = sRgbToAppleRgb;
/**
 * Gets XYZ values for a given color in Apple RGB space
 *
 * @param {RBG}                   - Apple RGB values
 * @returns {XYZ}                 - xyz values
 */
const appleRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.APPLE_RGB);
};
exports.appleRgbToXyz = appleRgbToXyz;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Best RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}              - Best RGB values
 */
const sRgbToBestRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToBestRgb)(xyz);
};
exports.sRgbToBestRgb = sRgbToBestRgb;
/**
 * Gets XYZ values for a given color in Best RGB space
 * @param {RBG}                   - Best RGB values
 * @returns {XYZ}                 - xyz values
 */
const bestRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.BEST_RGB));
};
exports.bestRgbToXyz = bestRgbToXyz;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Beta RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Beta RGB values
 */
const sRgbToBetaRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToBetaRgb)(xyz);
};
exports.sRgbToBetaRgb = sRgbToBetaRgb;
/**
 * Gets XYZ values for a given color in Beta RGB space
 * @param {RBG}                    - Beta RGB values
 * @returns {XYZ}                  - xyz values
 */
const betaRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.BETA_RGB));
};
exports.betaRgbToXyz = betaRgbToXyz;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Bruce RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Bruce RGB values
 */
const sRgbToBruceRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToBruceRgb)(xyz);
};
exports.sRgbToBruceRgb = sRgbToBruceRgb;
/**
 * Gets XYZ values for a given color in Bruce RGB space
 *
 * @param {RBG}                   - Bruce RGB values
 * @returns {XYZ}                 - xyz values
 */
const bruceRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.BRUCE_RGB);
};
exports.bruceRgbToXyz = bruceRgbToXyz;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to CIE RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                   - CIE RGB values
 */
const sRgbToCieRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToCieRgb)(xyz);
};
exports.sRgbToCieRgb = sRgbToCieRgb;
/**
 * Gets XYZ values for a given color in CIE RGB space
 * @param {RBG}                   - CIE RGB values
 * @returns {XYZ}                 - xyz values
 */
const cieRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.EtoD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.CIE_RGB));
};
exports.cieRgbToXyz = cieRgbToXyz;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Color Match RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Color Match RGB values
 */
const sRgbToColorMatchRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToColorMatchRgb)(xyz);
};
exports.sRgbToColorMatchRgb = sRgbToColorMatchRgb;
/**
 * Gets XYZ values for a given color in Color Match RGB space
 *
 * @param {RBG}                   - Color Match RGB values
 * @returns {XYZ}                 - xyz values
 */
const colorMatchRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.COLOR_MATCH_RGB));
};
exports.colorMatchRgbToXyz = colorMatchRgbToXyz;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Don RGB 4 space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                 - sRBG values
 * @param {XYZ}                 - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}               - Don RGB 4 values
 */
const sRgbToDonRgb4 = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToDonRgb4)(xyz);
};
exports.sRgbToDonRgb4 = sRgbToDonRgb4;
/**
 * Gets XYZ values for a given color in DON RGB 4 space
 * @param {RBG}                  - DON RGB 4 values
 * @returns {XYZ}                - xyz values
 */
const donRgb4ToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.DON_RGB_4));
};
exports.donRgb4ToXyz = donRgb4ToXyz;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to ETKA SPACE PS5 space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - ETKA SPACE PS5 values
 */
const sRgbToEtkaSpacePs5 = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToEtkaSpacePs5)(xyz);
};
exports.sRgbToEtkaSpacePs5 = sRgbToEtkaSpacePs5;
/**
 * Gets XYZ values for a given color in Etka Space PS5 space
 *
 * @param {RBG}                  - Etka Space PS5 values
 * @returns {XYZ}                - xyz values
 */
const etkaSpacePs5ToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.ETKA_SPACE_PS5));
};
exports.etkaSpacePs5ToXyz = etkaSpacePs5ToXyz;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to NTSC RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - NTSC RGB values
 */
const sRgbToNtscRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToNtscRgb)(xyz);
};
exports.sRgbToNtscRgb = sRgbToNtscRgb;
/**
 * Gets XYZ values for a given color in NTSC RGB space
 *
 * @param {RBG}                   - NTSC RGB values
 * @returns {XYZ}                 - xyz values
 */
const ntscRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.CtoD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.NTSC_RGB));
};
exports.ntscRgbToXyz = ntscRgbToXyz;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to PAL/SECAM RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                                (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - PAL/SECAM RGB values
 */
const sRgbToPalSecamRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToPalSecamRgb)(xyz);
};
exports.sRgbToPalSecamRgb = sRgbToPalSecamRgb;
/**
 * Gets XYZ values for a given color in PAL/SECAM RGB space
 *
 * @param {RBG}                   - PAL/SECAM RGB values
 * @returns {XYZ}                 - xyz values
 */
const palSecamRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.PAL_SECAM_RGB);
};
exports.palSecamRgbToXyz = palSecamRgbToXyz;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Pro Photo RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                                (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Pro Photo RGB values
 */
const sRgbToProPhotoRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToProPhotoRgb)(xyz);
};
exports.sRgbToProPhotoRgb = sRgbToProPhotoRgb;
/**
 * Gets XYZ values for a given color in ProPhoto RGB space
 * @param {RBG}                   - ProPhoto RGB values
 * @returns {XYZ}                 - xyz values
 */
const proPhotoRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.PRO_PHOTO_RGB));
};
exports.proPhotoRgbToXyz = proPhotoRgbToXyz;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to SMPTE-C RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                  - sRBG values
 * @param {XYZ}                  - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                - SMPTE-C RGB values
 */
const sRgbToSmpteCRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToSmpteCRgb)(xyz);
};
exports.sRgbToSmpteCRgb = sRgbToSmpteCRgb;
/**
 * Gets XYZ values for a given color in SMPTE-C RGB space
 *
 * @param {RBG}                   - SMPTE-C RGB values
 * @returns {XYZ}                 - xyz values
 */
const smpteCRgbToXyz = (rgb) => {
    return (0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.SMPTE_C_RGB);
};
exports.smpteCRgbToXyz = smpteCRgbToXyz;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Wide Gamut RGB space
 *
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Wide Gamut RGB values
 */
const sRgbToWideGamutRgb = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToWideGamutRgb)(xyz);
};
exports.sRgbToWideGamutRgb = sRgbToWideGamutRgb;
/**
 * Gets XYZ values for a given color in Wide Gamut RGB space
 * @param {RBG}                   - Wide Gamut RGB values
 * @returns {XYZ}                 - xyz values
 */
const wideGamutRgbToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.gammaRgbToXyz)(rgb, space_datasets_1.SPACE_DATASETS.WIDE_GAMUT_RGB));
};
exports.wideGamutRgbToXyz = wideGamutRgbToXyz;
/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Color ECI RGB V2 space
 *
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - ECI RGB V2 values
 */
const sRgbToEciRgbV2 = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToEciRgbV2)(xyz);
};
exports.sRgbToEciRgbV2 = sRgbToEciRgbV2;
/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 *
 * @param {RBG}                   - ECI RGB V2 values for a color
 * @returns {XYZ}                 - xyz values
 */
const eciRgbV2ToXyz = (rgb) => {
    return (0, chromatic_adaptation_1.D50toD65Adaptation)((0, exports.lRgbToXyz)(rgb));
};
exports.eciRgbV2ToXyz = eciRgbV2ToXyz;
/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 * but additional chromatic adaptation is needed
 *
 * @param {RBG}                   - ECI RGB V2 values for a color
 * @returns {XYZ}                 - xyz values
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
 * @param {RBG}                   - sRBG values for a color
 * @returns {XYZ}                 - xyz values
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
 *
 * @param {RBG}                  - sRBG values for a color
 * @returns {number}             - ansi16 numeric value
 */
const sRgbToAnsi16 = (rgb, saturation = null) => {
    let value;
    if (saturation)
        value = saturation;
    else {
        const max = Math.max(rgb.red, rgb.green, rgb.blue);
        value = (0, formats_and_checks_1.formatValue)(max);
    }
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
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - ansi256 numeric value
 */
const sRgbToAnsi256 = ({ red, green, blue }) => {
    red = (0, formats_and_checks_1.clamp)(red, 0, 255);
    green = (0, formats_and_checks_1.clamp)(green, 0, 255);
    blue = (0, formats_and_checks_1.clamp)(blue, 0, 255);
    if (red >> 4 === green >> 4 && green >> 4 === blue >> 4) {
        if (red >= 0 && red <= 7)
            return 16;
        if (red >= 255 - 7)
            return 231;
        return Math.floor(((red - 8) / 240) * 24) + 232;
    }
    return (16 +
        36 * Math.round((red / 255) * 5) +
        6 * Math.round((green / 255) * 5) +
        Math.round((blue / 255) * 5));
};
exports.sRgbToAnsi256 = sRgbToAnsi256;
/*******************************************************************
 *                             CMY
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMY space
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @returns {CMY}                 - CMY values for a color
 */
const sRgbToCmy = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    return {
        cyan: (1 - red) * 100 || 0,
        magenta: (1 - green) * 100 || 0,
        yellow: (1 - blue) * 100 || 0,
    };
};
exports.sRgbToCmy = sRgbToCmy;
/*******************************************************************
 *                            CMYK
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMYK space
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @returns {CMYK}                - CMYK values for a color
 */
const sRgbToCmyk = (rgb, round) => {
    if (!(0, formats_and_checks_1.gamutCheck)(rgb.red) || !(0, formats_and_checks_1.gamutCheck)(rgb.green) || !(0, formats_and_checks_1.gamutCheck)(rgb.blue)) {
        throw new Error("Provided rgb values must be within range of 0 to 255!");
    }
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    let key = 1 - Math.max(red, green, blue);
    const K1 = 1 - key;
    const f = (t) => round
        ? Math.round((K1 && (K1 - t) / K1) * 100)
        : (K1 && (K1 - t) / K1) * 100;
    return { cyan: f(red), magenta: f(green), yellow: f(blue), key: key * 100 };
};
exports.sRgbToCmyk = sRgbToCmyk;
/*******************************************************************
 *                             HCY
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HCY or HSI value
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @param {'hcy' | 'hsi'}         - color space to retrun
 * @returns {HCY | HSI}           - resultion color space values
 */
const sRgbToHcyOrHsi = ({ red, green, blue }, ret) => {
    if (!(0, formats_and_checks_1.gamutCheck)(red) || !(0, formats_and_checks_1.gamutCheck)(green) || !(0, formats_and_checks_1.gamutCheck)(blue)) {
        throw new Error("Provided rgb values must be within range of 0 to 255!");
    }
    const sum = red + green + blue;
    red = red / sum;
    green = green / sum;
    blue = blue / sum;
    let hue = Math.acos((0.5 * (red - green + (red - blue))) /
        Math.sqrt((red - green) * (red - green) + (red - blue) * (green - blue)));
    if (blue > green)
        hue = ((2 * Math.PI - hue) * 180) / Math.PI;
    else
        hue = (hue * 180) / Math.PI;
    if (ret === "hsi") {
        const intensity = sum / 3;
        const saturation = (1 - 3 * Math.min(red, green, blue)) * 100;
        return { hue, saturation, intensity };
    }
    else {
        const chroma = (1 - 3 * Math.min(red, green, blue)) * 100;
        const Yluminance = sum / 3;
        return { hue, chroma, Yluminance };
    }
};
/**
 * Converts a color form an sRGB space to HCY space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HCY}                 - HCY values for a color
 */
const sRgbToHcy = (rgb) => {
    return sRgbToHcyOrHsi(rgb, "hcy");
};
exports.sRgbToHcy = sRgbToHcy;
/*******************************************************************
 *                             HEX
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to hex value
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {string}              - hex string
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
 *
 * @param {RBGA}                   - sRBGA values for a color
 * @returns {string}               - hex string
 */
const sRgbaToHex = ({ red, green, blue, alpha }, prefixed) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return ((prefixed ? "#" : "") +
        "000000".substring(string.length) +
        string +
        (0, number_conversions_1.decimalToHex)(alpha));
};
exports.sRgbaToHex = sRgbaToHex;
/*******************************************************************
 *                             HSI
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSI space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSI}                 - HSI values for a color
 */
const sRgbToHsi = (rgb) => {
    return sRgbToHcyOrHsi(rgb, "hsi");
};
exports.sRgbToHsi = sRgbToHsi;
/*******************************************************************
 *                             HSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSL space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSL}                 - HSL values for a color
 */
const sRgbToHsl = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = getRange(red, green, blue);
    let lightness = (max + min) / 2;
    let hue = 0;
    let saturation = 0;
    if (!delta)
        return { hue, saturation, lightness };
    else
        saturation = (0, formats_and_checks_1.formatValue)(lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min));
    if (!pHue)
        hue = (0, exports.sRgbToHue)(red, green, blue, max, delta);
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
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSV}                 - HSV values for a color
 */
const sRgbToHsv = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { max, delta } = getRange(red, green, blue);
    let hue = 0;
    const value = (0, formats_and_checks_1.formatValue)(max);
    const saturation = (0, formats_and_checks_1.formatValue)(max === 0 ? 0 : delta / max);
    if (!delta)
        return { hue, saturation, value };
    if (!pHue)
        hue = (0, exports.sRgbToHue)(red, green, blue, max, delta);
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
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HWB}                 - HWB values for a color
 */
const sRgbToHwb = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    let hue;
    if (!pHue) {
        const { max, delta } = getRange(red, green, blue);
        hue = (0, exports.sRgbToHue)(red, green, blue, max, delta);
    }
    else
        hue = pHue;
    const whiteness = (1 / 255) * Math.min(rgb.red, Math.min(rgb.green, rgb.blue)) * 100;
    const blackness = (1 - (1 / 255) * Math.max(rgb.red, Math.max(rgb.green, rgb.blue))) * 100;
    return { hue, whiteness, blackness };
};
exports.sRgbToHwb = sRgbToHwb;
/*******************************************************************
 *                             LAB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Lab space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LAB}                 - Lab values for a color
 */
const sRgbToLab = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToLab)(xyz);
};
exports.sRgbToLab = sRgbToLab;
/*******************************************************************
 *                             LCH
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to LCH(ab) space
 * @param {RBG}                   - sRBG values for a color
 * @returns {LCH}                 - LCH(ab) values for a color
 */
const sRgbToLch_ab = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, lab_conversions_1.labToLch_ab)((0, xyz_conversions_1.xyzToLab)(xyz));
};
exports.sRgbToLch_ab = sRgbToLch_ab;
/**
 * Converts a color form an sRGB space to LCH(uv) space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LCH}                 - LCH(uv) values for a color
 */
const sRgbToLch_uv = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, luv_conversions_1.luvToLch_uv)((0, xyz_conversions_1.xyzToLuv)(xyz));
};
exports.sRgbToLch_uv = sRgbToLch_uv;
/*******************************************************************
 *                             LUV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Luv space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LUV}                 - Luv values for a color
 */
const sRgbToLuv = (rgb, xyz = (0, exports.sRgbToXyz)(rgb)) => {
    return (0, xyz_conversions_1.xyzToLuv)(xyz);
};
exports.sRgbToLuv = sRgbToLuv;
/*******************************************************************
 *                             RYB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to RYB space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {RYB}                 - RYB values for a color
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
/*******************************************************************
 *                              TSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to TSL space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {TSL}                 - TSL values for a color
 */
const sRgbToTsl = ({ red, green, blue }) => {
    const r_ = (red / (red + green + blue) || 0) - 1 / 3;
    const g_ = (green / (red + green + blue) || 0) - 1 / 3;
    const tint = g_ != 0 ? 0.5 - Math.atan2(g_, r_) / 2 / Math.PI : 0;
    const saturation = Math.sqrt((9 / 5) * (r_ * r_ + g_ * g_));
    const lightness = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;
    return { tint, saturation, lightness };
};
exports.sRgbToTsl = sRgbToTsl;
/*******************************************************************
 *                              UVW
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to UVW space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {UVW}                 - UVW values for a color
 */
const sRgbToUvw = (rgb) => {
    return (0, xyz_conversions_1.xyzToUvw)((0, exports.sRgbToXyz)(rgb));
};
exports.sRgbToUvw = sRgbToUvw;
/*******************************************************************
 *                              XYZ
 * *****************************************************************/
/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space
 *
 * @param {RBG}                   - RBG values
 * @param {SpaceData}             - RGB space dataset
 * @param {Function}              - function to preform inverse companding whit
 * @param {boolean}               - gamma optional flag indicating if a gamma value
 *                                for a give RGB space data set should be used
 * @returns {XYZ}                 - xyz values
 */
const rgbToXyz = (rgb, space, inverseCompandingFun, gamma) => {
    const { Rlin, Glin, Blin } = (0, companding_1.inverseCompanding)(rgb, space, inverseCompandingFun, gamma);
    const { X, Y, Z } = space.RGB_TO_XYZ;
    const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
    const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
    const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;
    return { x, y, z };
};
/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - RBG values
 * @param {SpaceData}             - RGB space dataset
 * @returns {XYZ}                 - xyz values
 */
const gammaRgbToXyz = (rgb, ref) => {
    return rgbToXyz(rgb, ref, companding_1.inverseGammaCompanding, true);
};
exports.gammaRgbToXyz = gammaRgbToXyz;
/*******************************************************************
 *  JPEG / YCbCr / YcCbcCrc / YCoCg / YDbDr / YPbPr / YIQ / xvYCC
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to ITU-R BT.601 Y′CbCr (YUV) space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCbCr}               - YCbCr values for a color
 */
const sRgbToYCbCrBT601 = ({ red, green, blue }) => {
    const { Y, Cb, Cr } = (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_YCBCR_BT_601, { red, green, blue }, ["Y", "Cb", "Cr"]);
    return {
        Y: 16 + Y,
        Cb: 128 + Cb,
        Cr: 128 + Cr,
    };
};
exports.sRgbToYCbCrBT601 = sRgbToYCbCrBT601;
/**
 * Converts a color form an sRGB space to ITU-R BT.709 Y′CbCr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCbCr}               - YCbCr values for a color
 */
const sRgbToYCbCrBT709 = ({ red, green, blue }) => {
    return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_BT_709_YCBCR, { red, green, blue }, ["Y", "Cb", "Cr"]);
};
exports.sRgbToYCbCrBT709 = sRgbToYCbCrBT709;
/**
 * Converts a color form an sRGB space to YDbDr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YDbDr}               - YDbDr values for a color
 */
const sRgbToYDbDr = ({ red, green, blue }) => {
    return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_YDBDR, { red, green, blue }, ["Y", "Db", "Dr"]);
};
exports.sRgbToYDbDr = sRgbToYDbDr;
/**
 * Converts a color form an sRGB space to Analog YPbPr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YPbPr}               - YPbPr values for a color
 */
const sRgbToYPbPr = ({ red, green, blue }) => {
    return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_YPBPR, { red, green, blue }, ["Y", "Pb", "Pr"]);
};
exports.sRgbToYPbPr = sRgbToYPbPr;
/**
 * Converts a color form an sRGB space to YcCbcCrc space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YcCbcCrc}            - YcCbcCrc values for a color
 *
 * -more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.2020_conversion
 */
const sRgbToYcCbcCrc = ({ red, green, blue }) => {
    const Yc = 0.2627 * red + 0.678 * green + 0.0593 * blue;
    const Cbc = (blue - Yc) / getDivider({ red, green, blue }, Yc, "Cbc");
    const Crc = (red - Yc) / getDivider({ red, green, blue }, Yc, "Crc");
    return { Yc, Cbc, Crc };
};
exports.sRgbToYcCbcCrc = sRgbToYcCbcCrc;
const getDivider = ({ red, blue }, Yc, chroma) => {
    if (chroma === "Crc") {
        if (conditionals_1.Nr <= red - Yc || red - Yc <= 0)
            return 1.7182;
        else
            return 0.9938;
    }
    if (conditionals_1.Nb <= blue - Yc || blue - Yc <= 0)
        return 1.9404;
    else
        return 1.582;
};
/**
 * Converts a color form an sRGB space to YCoCg space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCoCg}               - YCoCg values for a color
 */
const sRgbToYCgCo = ({ red, green, blue }) => {
    return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_YCOCG, { red, green, blue }, ["Y", "Co", "Cg"]);
};
exports.sRgbToYCgCo = sRgbToYCgCo;
/**
 * Converts a color form an sRGB space to YIQ  space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YIQ}                 - YIQ  values for a color
 */
const sRgbToYiq = ({ red, green, blue }) => {
    if (red !== green || green !== blue) {
        return (0, matrix_1.matrixByVectorObjMultiAsSpace)(cb_cr_conversions_matrices_1.CB_CR_CONVERSION_MATRICES.RGB_TO_YIQ, { red, green, blue }, ["Y", "I", "Q"]);
    }
    else
        return { Y: red * 0.299 + green * 0.587 + blue * 0.114, I: 0, Q: 0 };
};
exports.sRgbToYiq = sRgbToYiq;
/**
 * Converts a color form an sRGB space to xvYCC space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {xvYCC}               - xvYCC values for a color
 */
const sRgbToXvYcc = (rgb) => {
    return (0, ycbcr_jpeg_conversions_1.yCbCrBT601ToXvYcc)((0, exports.sRgbToYCbCrBT601)(rgb));
};
exports.sRgbToXvYcc = sRgbToXvYcc;
