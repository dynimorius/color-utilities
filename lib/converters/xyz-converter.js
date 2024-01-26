"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyzToXyY = exports.xyzToEciRgbV2 = exports.xyzToWideGamutRgb = exports.xyzToSmpteCRgb = exports.xyzToProPhotoRgb = exports.xyzToPalSecamRgb = exports.xyzToNtscRgb = exports.xyzToEtkaSpacePs5 = exports.xyzToDonRgb4 = exports.xyzToColorMatchRgb = exports.xyzToCieRgb = exports.xyzToBruceRgb = exports.xyzToBetaRgb = exports.xyzToBestRgb = exports.xyzToAppleRgb = exports.xyzToAdobeRgb = exports.xyzToGammaRgb = exports.xyzToLRgb = exports.xyzToSrgb = exports.xyzToRgb = exports.Fv = exports.Fu = exports.xyzToLuv = exports.xyzToLab = void 0;
const constants_1 = require("../constants");
const reference_illuminants_1 = require("../constants/reference-illuminants");
const space_datasets_1 = require("../constants/space-datasets");
const chromatic_adaptation_1 = require("../helpers/chromatic-adaptation");
const companding_1 = require("../helpers/companding");
const xyzToLab = ({ x, y, z }) => {
    const f = (t) => {
        return t > constants_1.CIE_ϵ ? Math.cbrt(t) : (constants_1.CIE_κ * t + 16) / 116;
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
    const L = yr > constants_1.CIE_ϵ ? 116 * Math.cbrt(yr) - 16 : constants_1.CIE_κ * yr;
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
const xyzToSrgb = (xyz) => {
    return (0, exports.xyzToRgb)(xyz, space_datasets_1.SPACE_DATASETS.SRGB, companding_1.sRgbCompanding);
};
exports.xyzToSrgb = xyzToSrgb;
const xyzToLRgb = (xyz) => {
    return (0, exports.xyzToRgb)(xyz, space_datasets_1.SPACE_DATASETS.ECI_RGB_V2, companding_1.LCompanding);
};
exports.xyzToLRgb = xyzToLRgb;
const xyzToGammaRgb = (xyz, ref, whitInBounds) => {
    return (0, exports.xyzToRgb)(xyz, ref, companding_1.gammaCompanding, { gamma: true, whitInBounds });
};
exports.xyzToGammaRgb = xyzToGammaRgb;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
const xyzToAdobeRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.ADOBE_RGB_1998);
};
exports.xyzToAdobeRgb = xyzToAdobeRgb;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
const xyzToAppleRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.APPLE_RGB);
};
exports.xyzToAppleRgb = xyzToAppleRgb;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
const xyzToBestRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.BEST_RGB);
};
exports.xyzToBestRgb = xyzToBestRgb;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
const xyzToBetaRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.BETA_RGB);
};
exports.xyzToBetaRgb = xyzToBetaRgb;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
const xyzToBruceRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.BRUCE_RGB);
};
exports.xyzToBruceRgb = xyzToBruceRgb;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
const xyzToCieRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toEAdaptation)(xyz), space_datasets_1.SPACE_DATASETS.CIE_RGB);
};
exports.xyzToCieRgb = xyzToCieRgb;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
const xyzToColorMatchRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.COLOR_MATCH_RGB);
};
exports.xyzToColorMatchRgb = xyzToColorMatchRgb;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
const xyzToDonRgb4 = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.DON_RGB_4);
};
exports.xyzToDonRgb4 = xyzToDonRgb4;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
const xyzToEtkaSpacePs5 = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.ETKA_SPACE_PS5);
};
exports.xyzToEtkaSpacePs5 = xyzToEtkaSpacePs5;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
const xyzToNtscRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toCAdaptation)(xyz), space_datasets_1.SPACE_DATASETS.NTSC_RGB);
};
exports.xyzToNtscRgb = xyzToNtscRgb;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
const xyzToPalSecamRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.PAL_SECAM_RGB);
};
exports.xyzToPalSecamRgb = xyzToPalSecamRgb;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
const xyzToProPhotoRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.PRO_PHOTO_RGB);
};
exports.xyzToProPhotoRgb = xyzToProPhotoRgb;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
const xyzToSmpteCRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, space_datasets_1.SPACE_DATASETS.SMPTE_C_RGB);
};
exports.xyzToSmpteCRgb = xyzToSmpteCRgb;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
const xyzToWideGamutRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz), space_datasets_1.SPACE_DATASETS.WIDE_GAMUT_RGB);
};
exports.xyzToWideGamutRgb = xyzToWideGamutRgb;
/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
const xyzToEciRgbV2 = (xyz) => {
    return (0, exports.xyzToLRgb)((0, chromatic_adaptation_1.D65toD50Adaptation)(xyz));
};
exports.xyzToEciRgbV2 = xyzToEciRgbV2;
/*******************************************************************
 *                             xyY
 * *****************************************************************/
const xyzToXyY = ({ x, y, z }) => {
    const devider = x + y + z;
    return { x: x / devider, y: y / devider, Y: y };
};
exports.xyzToXyY = xyzToXyY;
