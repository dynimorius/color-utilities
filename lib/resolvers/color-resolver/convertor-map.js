"use strict";
/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toXyzConverters = exports.toRgbConverters = exports.colorConverters = void 0;
const ansi_conversions_1 = require("../../conversions/ansi-conversions");
const cmy_conversions_1 = require("../../conversions/cmy-conversions");
const cmyk_conversions_1 = require("../../conversions/cmyk-conversions");
const hcy_conversions_1 = require("../../conversions/hcy-conversions");
const hex_conversions_1 = require("../../conversions/hex-conversions");
const hsi_conversions_1 = require("../../conversions/hsi-conversions");
const hsl_conversions_1 = require("../../conversions/hsl-conversions");
const hsv_conversions_1 = require("../../conversions/hsv-conversions");
const hwb_conversions_1 = require("../../conversions/hwb-conversions");
const lab_conversions_1 = require("../../conversions/lab-conversions");
const lch_conversions_1 = require("../../conversions/lch-conversions");
const lms_conversions_1 = require("../../conversions/lms-conversions");
const luv_conversions_1 = require("../../conversions/luv-conversions");
const rgb_conversions_1 = require("../../conversions/rgb-conversions");
const ryb_conversions_1 = require("../../conversions/ryb-conversions");
const tsl_conversions_1 = require("../../conversions/tsl-conversions");
const uvw_conversions_1 = require("../../conversions/uvw-conversions");
const xvycc_conversions_1 = require("../../conversions/xvycc-conversions");
const xyy_conversions_1 = require("../../conversions/xyy-conversions");
const xyz_conversions_1 = require("../../conversions/xyz-conversions");
const yccbccrc_conversions_1 = require("../../conversions/yccbccrc-conversions");
const ycocg_conversions_1 = require("../../conversions/ycocg-conversions");
const ydbdr_conversions_1 = require("../../conversions/ydbdr-conversions");
const yiq_conversions_1 = require("../../conversions/yiq-conversions");
const ypbpr_conversions_1 = require("../../conversions/ypbpr-conversions");
const formats_and_checks_1 = require("../../helpers/formats-and-checks");
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
    hwb: { fun: rgb_conversions_1.sRgbToHwb, from: "rgb" },
    lab: { fun: xyz_conversions_1.xyzToLab, from: "xyz" },
    lch_ab: { fun: rgb_conversions_1.sRgbToLch_ab, from: "rgb" },
    lch_uv: { fun: rgb_conversions_1.sRgbToLch_uv, from: "rgb" },
    lms: { fun: xyz_conversions_1.xyzToLsm, from: "xyz" },
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
    ycbcr: { fun: rgb_conversions_1.sRgbToYCbCrBT601, from: "rgb" },
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
    ryb: ryb_conversions_1.rybToRgb,
    tsl: tsl_conversions_1.tslToSrgb,
    xvycc: xvycc_conversions_1.xvYccToSrgb,
    xyz: xyz_conversions_1.xyzToSrgb,
    ycbcr: rgb_conversions_1.sRgbToYCbCrBT601,
    yccbccrc: yccbccrc_conversions_1.ycCbcCrcToSrgb,
    ycocg: ycocg_conversions_1.yCgCoToSrgb,
    ydbdr: ydbdr_conversions_1.yDbDrToSrgb,
    yiq: yiq_conversions_1.yiqToSrgb,
    ypbpr: ypbpr_conversions_1.yPbPrToSrgb,
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
