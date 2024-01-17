"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wideGamutRgbToXyz = exports.smpteCRgbToXyz = exports.proPhotoRgbToXyz = exports.palSecamRgbToXyz = exports.ntscRgbToXyz = exports.etkaSpacePs5ToXyz = exports.donRgb4ToXyz = exports.colorMatchRgbToXyz = exports.cieRgbToXyz = exports.bruceRgbToXyz = exports.betaRgbToXyz = exports.bestRgbToXyz = exports.appleRgbToXyz = exports.adobeRgbToXyz = exports.rgbToAdobeRgb = exports.rgbSpaceToXyz = exports.rgbToHcgPrefactored = exports.rgbToHcg = exports.rgbaToHex = exports.rgbToHex = exports.rgbToAnsi256 = exports.rgbToAnsi16 = exports.rgbToLch_uv = exports.rgbToLch_ab = exports.rgbToLuv = exports.rgbToLab = exports.rgbToXyz = exports.comparativeDistance = exports.rgbToCmyk = exports.rgbToHwb = exports.rgbToHsv = exports.rgbToHsl = exports.sRgbToLuminance = exports.rgbTo1_0rgb = exports.rgbToHue = exports.getRange = exports.rgbInvert = exports.normalizeRgba = exports.normalizeRgb = void 0;
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const lab_converter_1 = require("./lab-converter");
const luv_converter_1 = require("./luv-converter");
const number_converter_1 = require("./number-converter");
const xyz_converter_1 = require("./xyz-converter");
const normalizeRgb = ({ red, green, blue }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
});
exports.normalizeRgb = normalizeRgb;
const normalizeRgba = ({ red, green, blue, alpha }) => ({
    red: red / 255,
    green: green / 255,
    blue: blue / 255,
    alpha,
});
exports.normalizeRgba = normalizeRgba;
const rgbInvert = ({ red, green, blue }) => ({
    red: 255 - red,
    green: 255 - green,
    blue: 255 - blue,
});
exports.rgbInvert = rgbInvert;
const getRange = (red, green, blue) => {
    const min = Math.min(red, green, blue);
    const max = Math.max(red, green, blue);
    const delta = max - min;
    return { min, max, delta };
};
exports.getRange = getRange;
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
const rgbTo1_0rgb = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    return {
        red,
        green,
        blue,
    };
};
exports.rgbTo1_0rgb = rgbTo1_0rgb;
const sRgbToLuminance = ({ red, green, blue }) => 0.2126 * red + 0.7152 * green + 0.0722 * blue;
exports.sRgbToLuminance = sRgbToLuminance;
const rgbToHsl = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = (0, exports.getRange)(red, green, blue);
    let lightness = (max + min) / 2;
    let hue = 0;
    let saturation = 0;
    if (!delta)
        return { hue, saturation, lightness };
    else
        saturation = (0, helpers_1.formatValue)(lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min));
    if (!pHue)
        hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    else
        hue = pHue;
    lightness = (0, helpers_1.formatValue)(lightness);
    return { hue, saturation, lightness };
};
exports.rgbToHsl = rgbToHsl;
const rgbToHsv = (rgb, pHue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { max, delta } = (0, exports.getRange)(red, green, blue);
    let hue = 0;
    let value = (0, helpers_1.formatValue)(max);
    let saturation = (0, helpers_1.formatValue)(max === 0 ? 0 : delta / max);
    if (!delta)
        return { hue, saturation, value };
    if (!pHue)
        hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    else
        hue = pHue;
    return { hue, saturation, value };
};
exports.rgbToHsv = rgbToHsv;
const rgbToHwb = (rgb, pHue) => {
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
exports.rgbToHwb = rgbToHwb;
const rgbToCmyk = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    let key = 1 - Math.max(red, green, blue);
    const K1 = 1 - key;
    const f = (t) => Math.round((K1 && (K1 - t) / K1) * 100);
    return { cyan: f(red), magenta: f(green), yellow: f(blue), key: key * 100 };
};
exports.rgbToCmyk = rgbToCmyk;
const comparativeDistance = (rgb1, rgb2) => {
    return ((rgb1.red - rgb2.red) ** 2 +
        (rgb1.green - rgb2.green) ** 2 +
        (rgb1.blue - rgb2.blue) ** 2);
};
exports.comparativeDistance = comparativeDistance;
const rgbToXyz = ({ red, green, blue }) => {
    const Rlin = (0, helpers_1.linearSRGB)(red);
    const Glin = (0, helpers_1.linearSRGB)(green);
    const Blin = (0, helpers_1.linearSRGB)(blue);
    const { X, Y, Z } = constants_1.SPACE_MATRICES.SRGB.RGB_TO_XYZ;
    const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
    const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
    const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;
    return { x, y, z };
};
exports.rgbToXyz = rgbToXyz;
const rgbToLab = (rgb, xyz = (0, exports.rgbToXyz)(rgb)) => {
    return (0, xyz_converter_1.xyzToLab)(xyz);
};
exports.rgbToLab = rgbToLab;
const rgbToLuv = (rgb, xyz = (0, exports.rgbToXyz)(rgb)) => {
    return (0, xyz_converter_1.xyzToLuv)(xyz);
};
exports.rgbToLuv = rgbToLuv;
const rgbToLch_ab = (rgb, xyz = (0, exports.rgbToXyz)(rgb)) => {
    return (0, lab_converter_1.labToLch_ab)((0, xyz_converter_1.xyzToLab)(xyz));
};
exports.rgbToLch_ab = rgbToLch_ab;
const rgbToLch_uv = (rgb, xyz = (0, exports.rgbToXyz)(rgb)) => {
    return (0, luv_converter_1.luvToLch_uv)((0, xyz_converter_1.xyzToLuv)(xyz));
};
exports.rgbToLch_uv = rgbToLch_uv;
const rgbToAnsi16 = (rgb, saturation = null) => {
    // Hsv -> ansi16 optimization
    let value = saturation !== null && saturation !== void 0 ? saturation : (0, exports.rgbToHsv)(rgb).value;
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
exports.rgbToAnsi16 = rgbToAnsi16;
const rgbToAnsi256 = ({ red, green, blue }) => {
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
exports.rgbToAnsi256 = rgbToAnsi256;
const rgbToHex = ({ red, green, blue }) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string;
};
exports.rgbToHex = rgbToHex;
const rgbaToHex = ({ red, green, blue, alpha }) => {
    const integer = ((Math.round(red) & 0xff) << 16) +
        ((Math.round(green) & 0xff) << 8) +
        (Math.round(blue) & 0xff);
    const string = integer.toString(16).toUpperCase();
    return "000000".substring(string.length) + string + (0, number_converter_1.decimalToHex)(alpha);
};
exports.rgbaToHex = rgbaToHex;
const rgbToHcg = (rgb) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, max, delta } = (0, exports.getRange)(red, green, blue);
    const grayscale = delta < 1 ? min / (1 - delta) : 0;
    let hue = (0, exports.rgbToHue)(red, green, blue, max, delta);
    return { hue, chroma: delta * 100, grayscale: grayscale * 100 };
};
exports.rgbToHcg = rgbToHcg;
const rgbToHcgPrefactored = (rgb, hue) => {
    const { red, green, blue } = (0, exports.normalizeRgb)(rgb);
    const { min, delta } = (0, exports.getRange)(red, green, blue);
    const grayscale = delta < 1 ? min / (1 - delta) : 0;
    return { hue, chroma: delta * 100, grayscale: grayscale * 100 };
};
exports.rgbToHcgPrefactored = rgbToHcgPrefactored;
const rgbSpaceToXyz = ({ red, green, blue }, ref) => {
    const Rlin = (0, helpers_1.linearRgb)(red, ref.GAMMA);
    const Glin = (0, helpers_1.linearRgb)(green, ref.GAMMA);
    const Blin = (0, helpers_1.linearRgb)(blue, ref.GAMMA);
    const { X, Y, Z } = ref.RGB_TO_XYZ;
    const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
    const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
    const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;
    return { x, y, z };
};
exports.rgbSpaceToXyz = rgbSpaceToXyz;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
const rgbToAdobeRgb = (rgb, xyz = (0, exports.rgbToXyz)(rgb)) => {
    const { red, green, blue } = (0, xyz_converter_1.xyzToAdobeRgb)(xyz);
    return { red, green, blue };
};
exports.rgbToAdobeRgb = rgbToAdobeRgb;
const adobeRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.ADOBE_RGB_1998);
};
exports.adobeRgbToXyz = adobeRgbToXyz;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
const appleRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.APPLE_RGB);
};
exports.appleRgbToXyz = appleRgbToXyz;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
const bestRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.BEST_RGB);
};
exports.bestRgbToXyz = bestRgbToXyz;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
const betaRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.BETA_RGB);
};
exports.betaRgbToXyz = betaRgbToXyz;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
const bruceRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.BRUCE_RGB);
};
exports.bruceRgbToXyz = bruceRgbToXyz;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
const cieRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.CIE_RGB);
};
exports.cieRgbToXyz = cieRgbToXyz;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
const colorMatchRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.COLOR_MATCH_RGB);
};
exports.colorMatchRgbToXyz = colorMatchRgbToXyz;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
const donRgb4ToXyz = (rgb) => {
    let xyz = (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.DON_RGB_4);
    const D50 = [constants_1.REFERENCE_WHITES.D50.X, constants_1.REFERENCE_WHITES.D50.Y, constants_1.REFERENCE_WHITES.D50.Z];
    const D65 = [constants_1.REFERENCE_WHITES.D65.X, constants_1.REFERENCE_WHITES.D65.Y, constants_1.REFERENCE_WHITES.D65.Z];
    xyz = (0, helpers_1.xyzChromaticAdaptation)(xyz, D65, D50);
    return xyz;
};
exports.donRgb4ToXyz = donRgb4ToXyz;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
const etkaSpacePs5ToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.ETKA_SPACE_PS5);
};
exports.etkaSpacePs5ToXyz = etkaSpacePs5ToXyz;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
const ntscRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.NTSC_RGB);
};
exports.ntscRgbToXyz = ntscRgbToXyz;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
const palSecamRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.PAL_SECAM_RGB);
};
exports.palSecamRgbToXyz = palSecamRgbToXyz;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
const proPhotoRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.PRO_PHOTO_RGB);
};
exports.proPhotoRgbToXyz = proPhotoRgbToXyz;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
const smpteCRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.SMPTE_C_RGB);
};
exports.smpteCRgbToXyz = smpteCRgbToXyz;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
const wideGamutRgbToXyz = (rgb) => {
    return (0, exports.rgbSpaceToXyz)(rgb, constants_1.SPACE_MATRICES.WIDE_GAMUT_RGB);
};
exports.wideGamutRgbToXyz = wideGamutRgbToXyz;
