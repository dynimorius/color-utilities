"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyzToWideGamutRgb = exports.xyzToSmpteCRgb = exports.xyzToProPhotoRgb = exports.xyzToPalSecamRgb = exports.xyzToNtscRgb = exports.xyzToEtkaSpacePs5 = exports.xyzToDonRgb4 = exports.xyzToColorMatchRgb = exports.xyzToCieRgb = exports.xyzToBruceRgb = exports.xyzToBetaRgb = exports.xyzToBestRgb = exports.xyzToAppleRgb = exports.xyzToAdobeRgb = exports.xyzToGammaRgb = exports.xyzToSrgb = exports.Fv = exports.Fu = exports.xyzToLuv = exports.xyzToLab = void 0;
const constants_1 = require("../constants");
const companding_1 = require("../helpers/companding");
const xyzToLab = ({ x, y, z }) => {
    const f = (t) => {
        return t > constants_1.CIE_ϵ ? Math.cbrt(t) : (constants_1.CIE_κ * t + 16) / 116;
    };
    x = f(x / (constants_1.REFERENCE_WHITES.D65.X * 100));
    y = f(y / (constants_1.REFERENCE_WHITES.D65.Y * 100));
    z = f(z / (constants_1.REFERENCE_WHITES.D65.Z * 100));
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
    const yr = y / constants_1.REFERENCE_WHITES.D65.Y;
    const uP = (0, exports.Fu)({ x, y, z });
    const vP = (0, exports.Fv)({ x, y, z });
    const uRef = (0, exports.Fu)({
        x: constants_1.REFERENCE_WHITES.D65.X,
        y: constants_1.REFERENCE_WHITES.D65.Y,
        z: constants_1.REFERENCE_WHITES.D65.Z,
    });
    const vRef = (0, exports.Fv)({
        x: constants_1.REFERENCE_WHITES.D65.X,
        y: constants_1.REFERENCE_WHITES.D65.Y,
        z: constants_1.REFERENCE_WHITES.D65.Z,
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
const xyzToSrgb = ({ x, y, z }) => {
    x = x > 1 ? x / 100 : x;
    y = y > 1 ? y / 100 : y;
    z = z > 1 ? z / 100 : z;
    //Get linear RGB
    const { R, G, B } = constants_1.SPACE_MATRICES.SRGB.XYZ_TO_RGB;
    let red = x * R.x + y * R.y + z * R.z;
    let green = x * G.x + y * G.y + z * G.z;
    let blue = x * B.x + y * B.y + z * B.z;
    //Companding
    red = Math.round((0, companding_1.sRgbCompanding)(red));
    green = Math.round((0, companding_1.sRgbCompanding)(green));
    blue = Math.round((0, companding_1.sRgbCompanding)(blue));
    return { red, green, blue };
};
exports.xyzToSrgb = xyzToSrgb;
const xyzToGammaRgb = ({ x, y, z }, ref) => {
    x = x > 1 ? x / 100 : x;
    y = y > 1 ? y / 100 : y;
    z = z > 1 ? z / 100 : z;
    //Get linear RGB
    const { R, G, B } = ref.XYZ_TO_RGB;
    let red = x * R.x + y * R.y + z * R.z;
    let green = x * G.x + y * G.y + z * G.z;
    let blue = x * B.x + y * B.y + z * B.z;
    //Companding
    red = Math.round((0, companding_1.gammaCompanding)(red, ref.GAMMA));
    green = Math.round((0, companding_1.gammaCompanding)(green, ref.GAMMA));
    blue = Math.round((0, companding_1.gammaCompanding)(blue, ref.GAMMA));
    return { red, green, blue };
};
exports.xyzToGammaRgb = xyzToGammaRgb;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
const xyzToAdobeRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.ADOBE_RGB_1998);
};
exports.xyzToAdobeRgb = xyzToAdobeRgb;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
const xyzToAppleRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.APPLE_RGB);
};
exports.xyzToAppleRgb = xyzToAppleRgb;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
const xyzToBestRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.BEST_RGB);
};
exports.xyzToBestRgb = xyzToBestRgb;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
const xyzToBetaRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.BETA_RGB);
};
exports.xyzToBetaRgb = xyzToBetaRgb;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
const xyzToBruceRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.BRUCE_RGB);
};
exports.xyzToBruceRgb = xyzToBruceRgb;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
const xyzToCieRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.CIE_RGB);
};
exports.xyzToCieRgb = xyzToCieRgb;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
const xyzToColorMatchRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.COLOR_MATCH_RGB);
};
exports.xyzToColorMatchRgb = xyzToColorMatchRgb;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
const xyzToDonRgb4 = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.DON_RGB_4);
};
exports.xyzToDonRgb4 = xyzToDonRgb4;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
const xyzToEtkaSpacePs5 = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.ETKA_SPACE_PS5);
};
exports.xyzToEtkaSpacePs5 = xyzToEtkaSpacePs5;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
const xyzToNtscRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.NTSC_RGB);
};
exports.xyzToNtscRgb = xyzToNtscRgb;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
const xyzToPalSecamRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.PAL_SECAM_RGB);
};
exports.xyzToPalSecamRgb = xyzToPalSecamRgb;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
const xyzToProPhotoRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.PRO_PHOTO_RGB);
};
exports.xyzToProPhotoRgb = xyzToProPhotoRgb;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
const xyzToSmpteCRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.SMPTE_C_RGB);
};
exports.xyzToSmpteCRgb = xyzToSmpteCRgb;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
const xyzToWideGamutRgb = (xyz) => {
    return (0, exports.xyzToGammaRgb)(xyz, constants_1.SPACE_MATRICES.WIDE_GAMUT_RGB);
};
exports.xyzToWideGamutRgb = xyzToWideGamutRgb;
