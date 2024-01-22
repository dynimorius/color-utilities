"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toXyzConverters = exports.toRgbConverters = exports.rgbConverters = void 0;
const lch_converter_1 = require("./../converters/lch-converter");
const hwb_converter_1 = require("../converters/hwb-converter");
const rgb_converter_1 = require("../converters/rgb-converter");
const helpers_1 = require("../helpers");
const hex_converter_1 = require("../converters/hex-converter");
const cmyk_converter_1 = require("../converters/cmyk-converter");
const hsl_converter_1 = require("../converters/hsl-converter");
const hsv_converter_1 = require("../converters/hsv-converter");
const xyz_converter_1 = require("../converters/xyz-converter");
const lab_converter_1 = require("../converters/lab-converter");
const luv_converter_1 = require("../converters/luv-converter");
const ansi_converter_1 = require("../converters/ansi-converter");
const ryb_converter_1 = require("../converters/ryb-converter");
const xyy_converter_1 = require("../converters/xyy-converter");
exports.rgbConverters = {
    adobe_98_rgb: { fun: xyz_converter_1.xyzToAdobeRgb, from: "xyz" },
    apple_rgb: { fun: xyz_converter_1.xyzToAppleRgb, from: "xyz" },
    ansi16: { fun: rgb_converter_1.sRgbToAnsi16, from: "rgb" },
    ansi256: { fun: rgb_converter_1.sRgbToAnsi256, from: "rgb" },
    best_rgb: { fun: xyz_converter_1.xyzToBestRgb, from: "xyz" },
    beta_rgb: { fun: xyz_converter_1.xyzToBetaRgb, from: "xyz" },
    bruce_rgb: { fun: xyz_converter_1.xyzToBruceRgb, from: "xyz" },
    cie_rgb: { fun: xyz_converter_1.xyzToCieRgb, from: "xyz" },
    color_match_rgb: { fun: xyz_converter_1.xyzToColorMatchRgb, from: "xyz" },
    cmyk: { fun: rgb_converter_1.sRgbToCmyk, from: "rgb" },
    don_rgb_4: { fun: xyz_converter_1.xyzToDonRgb4, from: "xyz" },
    eci_rgb_v2: { fun: xyz_converter_1.xyzToEciRgbV2, from: "xyz" },
    etka_space_ps5: { fun: xyz_converter_1.xyzToEtkaSpacePs5, from: "xyz" },
    hcg: { fun: rgb_converter_1.sRgbToHcg, from: "rgb" },
    hex: { fun: rgb_converter_1.sRgbToHex, from: "rgb" },
    hsl: { fun: rgb_converter_1.sRgbToHsl, from: "rgb" },
    hsv: { fun: rgb_converter_1.sRgbToHsv, from: "rgb" },
    hwb: { fun: rgb_converter_1.sRgbToHwb, from: "rgb" },
    lab: { fun: xyz_converter_1.xyzToLab, from: "xyz" },
    lch_ab: { fun: rgb_converter_1.sRgbToLch_ab, from: "rgb" },
    lch_uv: { fun: rgb_converter_1.sRgbToLch_uv, from: "rgb" },
    luv: { fun: xyz_converter_1.xyzToLuv, from: "xyz" },
    ntsc_rgb: { fun: xyz_converter_1.xyzToNtscRgb, from: "xyz" },
    pal_secam_rgb: { fun: xyz_converter_1.xyzToPalSecamRgb, from: "xyz" },
    pro_photo_rgb: { fun: xyz_converter_1.xyzToProPhotoRgb, from: "xyz" },
    rgb_0_1: { fun: rgb_converter_1.rgbTo1_0rgb, from: "rgb" },
    rgb: { fun: xyz_converter_1.xyzToSrgb, from: "xyz" },
    ryb: { fun: rgb_converter_1.sRgbToRyb, from: "rgb" },
    smpte_c_rgb: { fun: xyz_converter_1.xyzToSmpteCRgb, from: "xyz" },
    xyz: { fun: rgb_converter_1.sRgbToXyz, from: "rgb" },
    xyy: { fun: xyz_converter_1.xyzToXyY, from: "xyz" },
    web_safe: { fun: helpers_1.isWebSafeRGB, from: "rgb" },
    wide_gamut_rgb: { fun: xyz_converter_1.xyzToWideGamutRgb, from: "xyz" },
};
exports.toRgbConverters = {
    ansi16: ansi_converter_1.ansi16ToRgb,
    ansi265: ansi_converter_1.ansi256ToRgb,
    hex: hex_converter_1.hexToRgb,
    cmyk: cmyk_converter_1.cmykToRgb,
    hsl: hsl_converter_1.hslToRgb,
    hsv: hsv_converter_1.hsvToRgb,
    hwb: hwb_converter_1.hwbToRgb,
    ryb: ryb_converter_1.rybToRgb,
    xyz: xyz_converter_1.xyzToSrgb,
};
exports.toXyzConverters = {
    adobe_98_rgb: rgb_converter_1.adobeRgbToXyz,
    apple_rgb: rgb_converter_1.appleRgbToXyz,
    best_rgb: rgb_converter_1.bestRgbToXyz,
    beta_rgb: rgb_converter_1.betaRgbToXyz,
    bruce_rgb: rgb_converter_1.bruceRgbToXyz,
    cie_rgb: rgb_converter_1.cieRgbToXyz,
    color_match_rgb: rgb_converter_1.colorMatchRgbToXyz,
    don_rgb_4: rgb_converter_1.donRgb4ToXyz,
    eci_rgb_v2: rgb_converter_1.eciRgbV2ToXyz,
    etka_space_ps5: rgb_converter_1.etkaSpacePs5ToXyz,
    lab: lab_converter_1.labToXyz,
    luv: luv_converter_1.luvToXyz,
    lch_ab: lch_converter_1.lch_abToXyz,
    lch_uv: lch_converter_1.lch_uvToXyz,
    ntsc_rgb: rgb_converter_1.ntscRgbToXyz,
    pal_secam_rgb: rgb_converter_1.palSecamRgbToXyz,
    pro_photo_rgb: rgb_converter_1.proPhotoRgbToXyz,
    rgb: rgb_converter_1.sRgbToXyz,
    smpte_c_rgb: rgb_converter_1.smpteCRgbToXyz,
    wide_gamut_rgb: rgb_converter_1.wideGamutRgbToXyz,
    xyy: xyy_converter_1.xyYToXyz,
};
