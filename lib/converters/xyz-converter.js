"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyzToXyY = exports.xyzToLRgb = exports.xyzToEciRgbV2 = exports.xyzToWideGamutRgb = exports.xyzToSmpteCRgb = exports.xyzToProPhotoRgb = exports.xyzToPalSecamRgb = exports.xyzToNtscRgb = exports.xyzToEtkaSpacePs5 = exports.xyzToDonRgb4 = exports.xyzToColorMatchRgb = exports.xyzToCieRgb = exports.xyzToBruceRgb = exports.xyzToBetaRgb = exports.xyzToBestRgb = exports.xyzToAppleRgb = exports.xyzToAdobeRgb = exports.xyzToGammaRgb = exports.xyzToSrgb = exports.xyzToRgb = exports.Fv = exports.Fu = exports.xyzToLuv = exports.xyzToLab = void 0;
const conditionals_1 = require("../constants/conditionals");
const reference_illuminants_1 = require("../constants/reference-illuminants");
const space_datasets_1 = require("../constants/space-datasets");
const chromatic_adaptation_1 = require("../helpers/chromatic-adaptation");
const companding_1 = require("../helpers/companding");
/**
 * Gets Lab values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {LAB} - lab values for a color
 */
const xyzToLab = ({ x, y, z }) => {
    const f = (t) => {
        return t > conditionals_1.CIE_ϵ ? Math.cbrt(t) : (conditionals_1.CIE_κ * t + 16) / 116;
    };
    x = f(x / (reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X * 100));
    y = f(y / (reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y * 100));
    z = f(z / (reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z * 100));
    const luminance = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z);
    return { luminance, a, b };
};
exports.xyzToLab = xyzToLab;
/**
 * Gets Luv values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {LUV} - luv values for a color
 */
const xyzToLuv = ({ x, y, z }) => {
    x = x > 1 ? x / 100 : x;
    y = y > 1 ? y / 100 : y;
    z = z > 1 ? z / 100 : z;
    const yr = y / reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y;
    const uP = (0, exports.Fu)({ x, y, z });
    const vP = (0, exports.Fv)({ x, y, z });
    const uRef = (0, exports.Fu)({
        x: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X,
        y: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y,
        z: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z,
    });
    const vRef = (0, exports.Fv)({
        x: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.X,
        y: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Y,
        z: reference_illuminants_1.REFERENCE_ILLUMINANT.D65.Z,
    });
    const L = yr > conditionals_1.CIE_ϵ ? 116 * Math.cbrt(yr) - 16 : conditionals_1.CIE_κ * yr;
    const u = 13 * L * (uP - uRef);
    const v = 13 * L * (vP - vRef);
    return { L, u, v };
};
exports.xyzToLuv = xyzToLuv;
const Fu = ({ x, y, z }) => {
    return (4 * x) / (x + 15 * y + 3 * z);
};
exports.Fu = Fu;
const Fv = ({ x, y, z }) => {
    return (9 * y) / (x + 15 * y + 3 * z);
};
exports.Fv = Fv;
/**
 * Gets RGB values from given xyz values in a given RGB space
 * @param {XYZ} xyz xyz values for a color
 * @param {SpaceData} space RGB space dataset
 * @param {Function} compandingFun function to preform companding whit
 * @param {XyzToRgbOptions} options - optional paramter to set
 *              - rounded: should the returned values be rounded
 *              - presition: to what decimal should return values go to
 *              - whitInBounds: should the return values be in range of 0 - 255
 *              - gamma: should the gamma value from the space data set be used
 *                while companding
 * @returns {RGB} - sRGB values for a color
 */
const xyzToRgb = ({ x, y, z }, space, compandingFun, options) => {
    x = x > 1 ? x / 100 : x;
    y = y > 1 ? y / 100 : y;
    z = z > 1 ? z / 100 : z;
    //Get linear RGB
    const { R, G, B } = space.XYZ_TO_RGB;
    let red = x * R.x + y * R.y + z * R.z;
    let green = x * G.x + y * G.y + z * G.z;
    let blue = x * B.x + y * B.y + z * B.z;
    //Companding
    return (0, companding_1.companding)({ red, green, blue }, compandingFun, {
        rounded: options === null || options === void 0 ? void 0 : options.rounded,
        whitInBounds: options === null || options === void 0 ? void 0 : options.whitInBounds,
        gamma: (options === null || options === void 0 ? void 0 : options.gamma) ? space.GAMMA : null,
    });
};
exports.xyzToRgb = xyzToRgb;
/**
 * Gets sRGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - sRGB values for a color
 */
const xyzToSrgb = (xyz) => {
    return (0, exports.xyzToRgb)(xyz, space_datasets_1.SPACE_DATASETS.SRGB, companding_1.sRgbCompanding);
};
exports.xyzToSrgb = xyzToSrgb;
/**
 * Gets RGB values for a given RGB space, from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - RGB values for a color in a specified RGB space
 */
const xyzToGammaRgb = (xyz, ref, whitInBounds) => {
    return (0, exports.xyzToRgb)(xyz, ref, companding_1.gammaCompanding, { gamma: true, whitInBounds });
};
exports.xyzToGammaRgb = xyzToGammaRgb;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Gets Adobe 98 RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Adobe 98 RGB values
 */
const xyzToAdobeRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.ADOBE_RGB_1998);
};
exports.xyzToAdobeRgb = xyzToAdobeRgb;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Gets Apple RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Apple RGB values
 */
const xyzToAppleRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.APPLE_RGB);
};
exports.xyzToAppleRgb = xyzToAppleRgb;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Gets Best RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Best RGB values
 */
const xyzToBestRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.BEST_RGB);
};
exports.xyzToBestRgb = xyzToBestRgb;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Gets Beta RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Beta RGB values
 */
const xyzToBetaRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.BETA_RGB);
};
exports.xyzToBetaRgb = xyzToBetaRgb;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Gets Bruce RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Bruce RGB values
 */
const xyzToBruceRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.BRUCE_RGB);
};
exports.xyzToBruceRgb = xyzToBruceRgb;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Gets CIE RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - CIE RGB values
 */
const xyzToCieRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toEAdaptation)(xyz), space_datasets_1.SPACE_DATASETS.CIE_RGB);
};
exports.xyzToCieRgb = xyzToCieRgb;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Gets Color Match RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Color Match RGB values
 */
const xyzToColorMatchRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.COLOR_MATCH_RGB);
};
exports.xyzToColorMatchRgb = xyzToColorMatchRgb;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Gets DON RGB 4 values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - DON RGB 4 values
 */
const xyzToDonRgb4 = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.DON_RGB_4);
};
exports.xyzToDonRgb4 = xyzToDonRgb4;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Gets Etka Space PS5 values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Etka Space PS5 values
 */
const xyzToEtkaSpacePs5 = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.ETKA_SPACE_PS5);
};
exports.xyzToEtkaSpacePs5 = xyzToEtkaSpacePs5;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Gets NTSC RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - NTSC RGB values
 */
const xyzToNtscRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toCAdaptation)(xyz), space_datasets_1.SPACE_DATASETS.NTSC_RGB);
};
exports.xyzToNtscRgb = xyzToNtscRgb;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Gets PAL/SECAM RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - PAL/SECAM RGB values
 */
const xyzToPalSecamRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.PAL_SECAM_RGB);
};
exports.xyzToPalSecamRgb = xyzToPalSecamRgb;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Gets ProPhoto RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - ProPhoto RGB values
 */
const xyzToProPhotoRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.PRO_PHOTO_RGB);
};
exports.xyzToProPhotoRgb = xyzToProPhotoRgb;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Gets SMPTE-C RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - SMPTE-C RGB values
 */
const xyzToSmpteCRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.SMPTE_C_RGB);
};
exports.xyzToSmpteCRgb = xyzToSmpteCRgb;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Gets Wide Gamut RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - Wide Gamut RGB values
 */
const xyzToWideGamutRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.WIDE_GAMUT_RGB);
};
exports.xyzToWideGamutRgb = xyzToWideGamutRgb;
/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Gets ECI RGB V2 values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - ECI RGB V2 values
 */
const xyzToEciRgbV2 = (xyz) => {
    return (0, exports.xyzToLRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz));
};
exports.xyzToEciRgbV2 = xyzToEciRgbV2;
/**
 * Gets ECI RGB V2 values from given xyz values but
 * but additional chromatic adaptation is needed
 * @param {XYZ} xyz xyz values for a color
 * @returns {RGB} - ECI RGB V2 values
 */
const xyzToLRgb = (xyz) => {
    return (0, exports.xyzToRgb)(xyz, space_datasets_1.SPACE_DATASETS.ECI_RGB_V2, companding_1.LCompanding);
};
exports.xyzToLRgb = xyzToLRgb;
/*******************************************************************
 *                             xyY
 * *****************************************************************/
/**
 * Gets xyY values from given xyz values
 * @param {XYZ} xyz xyz values for a color
 * @returns {XYY} - xyY values
 */
const xyzToXyY = ({ x, y, z }) => {
    const devider = x + y + z;
    return { x: x / devider, y: y / devider, Y: y };
};
exports.xyzToXyY = xyzToXyY;
