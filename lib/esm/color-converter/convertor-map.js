"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromXyzConverters = exports.toXyzConverters = exports.fromRgbConverters = exports.toRgbConverters = exports.colorConverters = void 0;
const ansi_conversions_1 = require("../conversions/ansi-conversions");
const cmy_conversions_1 = require("../conversions/cmy-conversions");
const cmyk_conversions_1 = require("../conversions/cmyk-conversions");
const hcy_conversions_1 = require("../conversions/hcy-conversions");
const hex_conversions_1 = require("../conversions/hex-conversions");
const hsi_conversions_1 = require("../conversions/hsi-conversions");
const hsl_conversions_1 = require("../conversions/hsl-conversions");
const hsv_conversions_1 = require("../conversions/hsv-conversions");
const hwb_conversions_1 = require("../conversions/hwb-conversions");
const lab_conversions_1 = require("../conversions/lab-conversions");
const lch_conversions_1 = require("../conversions/lch-conversions");
const lms_conversions_1 = require("../conversions/lms-conversions");
const luv_conversions_1 = require("../conversions/luv-conversions");
const rgb_conversions_1 = require("../conversions/rgb-conversions");
const ryb_conversions_1 = require("../conversions/ryb-conversions");
const tsl_conversions_1 = require("../conversions/tsl-conversions");
const uvw_conversions_1 = require("../conversions/uvw-conversions");
const xvycc_conversions_1 = require("../conversions/xvycc-conversions");
const xyy_conversions_1 = require("../conversions/xyy-conversions");
const xyz_conversions_1 = require("../conversions/xyz-conversions");
const ycbcr_jpeg_conversions_1 = require("../conversions/ycbcr-jpeg-conversions");
const yccbccrc_conversions_1 = require("../conversions/yccbccrc-conversions");
const ycocg_conversions_1 = require("../conversions/ycocg-conversions");
const ydbdr_conversions_1 = require("../conversions/ydbdr-conversions");
const yiq_conversions_1 = require("../conversions/yiq-conversions");
const ypbpr_conversions_1 = require("../conversions/ypbpr-conversions");
const formats_and_checks_1 = require("../helpers/formats-and-checks");
/**
 * Map of color converter paired with the
 * space used for fonversion
 */
exports.colorConverters = {
    adobe_98_rgb: { fun: xyz_conversions_1.xyzToAdobeRgb, from: "xyz" },
    apple_rgb: { fun: xyz_conversions_1.xyzToAppleRgb, from: "xyz" },
    ansi16: { fun: rgb_conversions_1.sRgbToAnsi16, from: "rgb" },
    ansi256: { fun: rgb_conversions_1.sRgbToAnsi256, from: "rgb" },
    best_rgb: { fun: xyz_conversions_1.xyzToBestRgb, from: "xyz" },
    beta_rgb: { fun: xyz_conversions_1.xyzToBetaRgb, from: "xyz" },
    bruce_rgb: { fun: xyz_conversions_1.xyzToBruceRgb, from: "xyz" },
    cie_rgb: { fun: xyz_conversions_1.xyzToCieRgb, from: "xyz" },
    color_match_rgb: { fun: xyz_conversions_1.xyzToColorMatchRgb, from: "xyz" },
    cmy: { fun: rgb_conversions_1.sRgbToCmy, from: "rgb" },
    cmyk: { fun: rgb_conversions_1.sRgbToCmyk, from: "rgb" },
    don_rgb_4: { fun: xyz_conversions_1.xyzToDonRgb4, from: "xyz" },
    eci_rgb_v2: { fun: xyz_conversions_1.xyzToEciRgbV2, from: "xyz" },
    etka_space_ps5: { fun: xyz_conversions_1.xyzToEtkaSpacePs5, from: "xyz" },
    hcy: { fun: rgb_conversions_1.sRgbToHcy, from: "rgb" },
    hex: { fun: rgb_conversions_1.sRgbToHex, from: "rgb" },
    hsi: { fun: rgb_conversions_1.sRgbToHsi, from: "rgb" },
    hsl: { fun: rgb_conversions_1.sRgbToHsl, from: "rgb" },
    hsv: { fun: rgb_conversions_1.sRgbToHsv, from: "rgb" },
    hunter_lab: { fun: xyz_conversions_1.xyzToHunterLab, from: "xyz" },
    hwb: { fun: rgb_conversions_1.sRgbToHwb, from: "rgb" },
    lab: { fun: xyz_conversions_1.xyzToLab, from: "xyz" },
    lch_ab: { fun: rgb_conversions_1.sRgbToLch_ab, from: "rgb" },
    lch_uv: { fun: rgb_conversions_1.sRgbToLch_uv, from: "rgb" },
    lms: { fun: xyz_conversions_1.xyzToLms, from: "xyz" },
    luv: { fun: xyz_conversions_1.xyzToLuv, from: "xyz" },
    ntsc_rgb: { fun: xyz_conversions_1.xyzToNtscRgb, from: "xyz" },
    pal_secam_rgb: { fun: xyz_conversions_1.xyzToPalSecamRgb, from: "xyz" },
    pro_photo_rgb: { fun: xyz_conversions_1.xyzToProPhotoRgb, from: "xyz" },
    rgb_0_1: { fun: rgb_conversions_1.rgbTo1_0rgb, from: "rgb" },
    rgb: { fun: xyz_conversions_1.xyzToSrgb, from: "xyz" },
    ryb: { fun: rgb_conversions_1.sRgbToRyb, from: "rgb" },
    tsl: { fun: rgb_conversions_1.sRgbToTsl, from: "rgb" },
    uvw: { fun: xyz_conversions_1.xyzToUvw, from: "xyz" },
    smpte_c_rgb: { fun: xyz_conversions_1.xyzToSmpteCRgb, from: "xyz" },
    web_safe: { fun: formats_and_checks_1.isWebSafeRGB, from: "rgb" },
    wide_gamut_rgb: { fun: xyz_conversions_1.xyzToWideGamutRgb, from: "xyz" },
    xvycc: { fun: rgb_conversions_1.sRgbToXvYcc, from: "rgb" },
    xyz: { fun: rgb_conversions_1.sRgbToXyz, from: "rgb" },
    xyy: { fun: xyz_conversions_1.xyzToXyY, from: "xyz" },
    ycbcr_BT601: { fun: rgb_conversions_1.sRgbToYCbCrBT601, from: "rgb" },
    ycbcr_BT709: { fun: rgb_conversions_1.sRgbToYCbCrBT709, from: "rgb" },
    ycbcr_BT2020: { fun: rgb_conversions_1.sRgbToYcCbcCrc, from: "rgb" },
    yccbccrc: { fun: rgb_conversions_1.sRgbToYcCbcCrc, from: "rgb" },
    ycocg: { fun: rgb_conversions_1.sRgbToYCgCo, from: "rgb" },
    ydbdr: { fun: rgb_conversions_1.sRgbToYDbDr, from: "rgb" },
    yiq: { fun: rgb_conversions_1.sRgbToYiq, from: "rgb" },
    ypbpr: { fun: rgb_conversions_1.sRgbToYPbPr, from: "rgb" },
};
/**
 * Map of conversion to get sRBG color
 */
exports.toRgbConverters = {
    ansi16: ansi_conversions_1.ansi16ToRgb,
    ansi265: ansi_conversions_1.ansi256ToRgb,
    cmy: cmy_conversions_1.cmyToSRgb,
    cmyk: cmyk_conversions_1.cmykToRgb,
    hcy: hcy_conversions_1.hcyToSrgb,
    hex: hex_conversions_1.hexToRgb,
    hsi: hsi_conversions_1.hsiToSrgb,
    hsl: hsl_conversions_1.hslToRgb,
    hsv: hsv_conversions_1.hsvToRgb,
    hwb: hwb_conversions_1.hwbToRgb,
    ryb: ryb_conversions_1.rybToSrgb,
    tsl: tsl_conversions_1.tslToSrgb,
    xvycc: xvycc_conversions_1.xvYccToSrgb,
    xyz: xyz_conversions_1.xyzToSrgb,
    ycbcr_BT601: ycbcr_jpeg_conversions_1.yCbCrBT601ToSrgb,
    yccbccrc: yccbccrc_conversions_1.ycCbcCrcToSrgb,
    ycocg: ycocg_conversions_1.yCgCoToSrgb,
    ydbdr: ydbdr_conversions_1.yDbDrToSrgb,
    yiq: yiq_conversions_1.yiqToSrgb,
    ypbpr: ypbpr_conversions_1.yPbPrToSrgb,
};
/**
 * Map of conversion to ftom sRGB space
 */
exports.fromRgbConverters = {
    adobe_98_rgb: rgb_conversions_1.sRgbToAdobeRgb,
    apple_rgb: rgb_conversions_1.sRgbToAppleRgb,
    ansi16: rgb_conversions_1.sRgbToAnsi16,
    ansi256: rgb_conversions_1.sRgbToAnsi256,
    best_rgb: rgb_conversions_1.sRgbToBestRgb,
    beta_rgb: rgb_conversions_1.sRgbToBetaRgb,
    bruce_rgb: rgb_conversions_1.sRgbToBruceRgb,
    cie_rgb: rgb_conversions_1.sRgbToCieRgb,
    color_match_rgb: rgb_conversions_1.sRgbToColorMatchRgb,
    cmy: rgb_conversions_1.sRgbToCmy,
    cmyk: rgb_conversions_1.sRgbToCmyk,
    don_rgb_4: rgb_conversions_1.sRgbToDonRgb4,
    etka_space_ps5: rgb_conversions_1.sRgbToEtkaSpacePs5,
    eci_rgb_v2: rgb_conversions_1.sRgbToEciRgbV2,
    hcy: rgb_conversions_1.sRgbToHcy,
    hex: rgb_conversions_1.sRgbToHex,
    hsi: rgb_conversions_1.sRgbToHsi,
    hsl: rgb_conversions_1.sRgbToHsl,
    hsv: rgb_conversions_1.sRgbToHsv,
    hwb: rgb_conversions_1.sRgbToHwb,
    lab: rgb_conversions_1.sRgbToLab,
    lch_ab: rgb_conversions_1.sRgbToLch_ab,
    lch_uv: rgb_conversions_1.sRgbToLch_uv,
    luv: rgb_conversions_1.sRgbToLuv,
    ntsc_rgb: rgb_conversions_1.sRgbToNtscRgb,
    pal_secam_rgb: rgb_conversions_1.sRgbToPalSecamRgb,
    pro_photo_rgb: rgb_conversions_1.sRgbToProPhotoRgb,
    ryb: rgb_conversions_1.sRgbToRyb,
    smpte_c_rgb: rgb_conversions_1.sRgbToSmpteCRgb,
    tsl: rgb_conversions_1.sRgbToTsl,
    uvw: rgb_conversions_1.sRgbToUvw,
    wide_gamut_rgb: rgb_conversions_1.sRgbToWideGamutRgb,
    ycbcr_BT601: rgb_conversions_1.sRgbToYCbCrBT601,
    ycbcr_BT709: rgb_conversions_1.sRgbToYCbCrBT709,
    ycbcr_BT2020: rgb_conversions_1.sRgbToYcCbcCrc,
    ydbdr: rgb_conversions_1.sRgbToYDbDr,
    ypbpr: rgb_conversions_1.sRgbToYPbPr,
    yccbccrc: rgb_conversions_1.sRgbToYcCbcCrc,
    ycocg: rgb_conversions_1.sRgbToYCgCo,
    yiq: rgb_conversions_1.sRgbToYiq,
    xvycc: rgb_conversions_1.sRgbToXvYcc,
    xyz: rgb_conversions_1.sRgbToXyz,
};
/**
 * Map of conversion to get XYZ
 */
exports.toXyzConverters = {
    adobe_98_rgb: rgb_conversions_1.adobeRgbToXyz,
    apple_rgb: rgb_conversions_1.appleRgbToXyz,
    best_rgb: rgb_conversions_1.bestRgbToXyz,
    beta_rgb: rgb_conversions_1.betaRgbToXyz,
    bruce_rgb: rgb_conversions_1.bruceRgbToXyz,
    cie_rgb: rgb_conversions_1.cieRgbToXyz,
    color_match_rgb: rgb_conversions_1.colorMatchRgbToXyz,
    don_rgb_4: rgb_conversions_1.donRgb4ToXyz,
    eci_rgb_v2: rgb_conversions_1.eciRgbV2ToXyz,
    etka_space_ps5: rgb_conversions_1.etkaSpacePs5ToXyz,
    hunter_lab: lab_conversions_1.hunterLabToXyz,
    lab: lab_conversions_1.labToXyz,
    luv: luv_conversions_1.luvToXyz,
    lch_ab: lch_conversions_1.lch_abToXyz,
    lch_uv: lch_conversions_1.lch_uvToXyz,
    lms: lms_conversions_1.lmsToXyz,
    ntsc_rgb: rgb_conversions_1.ntscRgbToXyz,
    pal_secam_rgb: rgb_conversions_1.palSecamRgbToXyz,
    pro_photo_rgb: rgb_conversions_1.proPhotoRgbToXyz,
    rgb: rgb_conversions_1.sRgbToXyz,
    uvw: uvw_conversions_1.uvwToXyz,
    smpte_c_rgb: rgb_conversions_1.smpteCRgbToXyz,
    wide_gamut_rgb: rgb_conversions_1.wideGamutRgbToXyz,
    xyy: xyy_conversions_1.xyYToXyz,
};
exports.fromXyzConverters = {
    lab: xyz_conversions_1.xyzToLab,
    lch_ab: xyz_conversions_1.xyzToLch_ab,
    lch_uv: xyz_conversions_1.xyzToLch_uv,
    luv: xyz_conversions_1.xyzToLuv,
    uvw: xyz_conversions_1.xyzToUvw,
    rgb: xyz_conversions_1.xyzToSrgb,
    adobe_98_rgb: xyz_conversions_1.xyzToAdobeRgb,
    apple_rgb: xyz_conversions_1.xyzToAppleRgb,
    best_rgb: xyz_conversions_1.xyzToBestRgb,
    beta_rgb: xyz_conversions_1.xyzToBetaRgb,
    bruce_rgb: xyz_conversions_1.xyzToBruceRgb,
    cie_rgb: xyz_conversions_1.xyzToCieRgb,
    color_match_rgb: xyz_conversions_1.xyzToColorMatchRgb,
    don_rgb_4: xyz_conversions_1.xyzToDonRgb4,
    etka_space_ps5: xyz_conversions_1.xyzToEtkaSpacePs5,
    eci_rgb_v2: xyz_conversions_1.xyzToEciRgbV2,
    ntsc_rgb: xyz_conversions_1.xyzToNtscRgb,
    pal_secam_rgb: xyz_conversions_1.xyzToPalSecamRgb,
    pro_photo_rgb: xyz_conversions_1.xyzToProPhotoRgb,
    smpte_c_rgb: xyz_conversions_1.xyzToSmpteCRgb,
    wide_gamut_rgb: xyz_conversions_1.xyzToWideGamutRgb,
    xyy: xyz_conversions_1.xyzToXyY,
    lms: xyz_conversions_1.xyzToLms,
    hunters_lab: xyz_conversions_1.xyzToHunterLab,
};
