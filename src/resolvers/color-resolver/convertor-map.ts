/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { ansi16ToRgb, ansi256ToRgb } from "../../conversions/ansi-conversions";
import { cmyToSRgb } from "../../conversions/cmy-conversions";
import { cmykToRgb } from "../../conversions/cmyk-conversions";
import { hcyToSrgb } from "../../conversions/hcy-conversions";
import { hexToRgb } from "../../conversions/hex-conversions";
import { hsiToSrgb } from "../../conversions/hsi-conversions";
import { hslToRgb } from "../../conversions/hsl-conversions";
import { hsvToRgb } from "../../conversions/hsv-conversions";
import { hwbToRgb } from "../../conversions/hwb-conversions";
import { labToXyz } from "../../conversions/lab-conversions";
import { lch_abToXyz, lch_uvToXyz } from "../../conversions/lch-conversions";
import { lmsToXyz } from "../../conversions/lms-conversions";
import { luvToXyz } from "../../conversions/luv-conversions";
import {
  adobeRgbToXyz,
  appleRgbToXyz,
  bestRgbToXyz,
  betaRgbToXyz,
  bruceRgbToXyz,
  cieRgbToXyz,
  colorMatchRgbToXyz,
  donRgb4ToXyz,
  eciRgbV2ToXyz,
  etkaSpacePs5ToXyz,
  ntscRgbToXyz,
  palSecamRgbToXyz,
  proPhotoRgbToXyz,
  rgbTo1_0rgb,
  sRgbToAnsi16,
  sRgbToAnsi256,
  sRgbToCmy,
  sRgbToCmyk,
  sRgbToHcy,
  sRgbToHex,
  sRgbToHsi,
  sRgbToHsl,
  sRgbToHsv,
  sRgbToHwb,
  sRgbToLch_ab,
  sRgbToLch_uv,
  sRgbToRyb,
  sRgbToXvYcc,
  sRgbToXyz,
  sRgbToYCbCr,
  sRgbToYCgCo,
  sRgbToYDbDr,
  sRgbToYPbPr,
  sRgbToYcCbcCrc,
  sRgbToYiq,
  smpteCRgbToXyz,
  wideGamutRgbToXyz,
} from "../../conversions/rgb-conversions";
import { rybToRgb } from "../../conversions/ryb-conversions";
import { tslToSrgb } from "../../conversions/tsl-conversions";
import { uvwToXyz } from "../../conversions/uvw-conversions";
import { xvYccToSrgb } from "../../conversions/xvycc-conversions";
import { xyYToXyz } from "../../conversions/xyy-conversions";
import {
  xyzToAdobeRgb,
  xyzToAppleRgb,
  xyzToBestRgb,
  xyzToBetaRgb,
  xyzToBruceRgb,
  xyzToCieRgb,
  xyzToColorMatchRgb,
  xyzToDonRgb4,
  xyzToEciRgbV2,
  xyzToEtkaSpacePs5,
  xyzToLab,
  xyzToLsm,
  xyzToLuv,
  xyzToNtscRgb,
  xyzToPalSecamRgb,
  xyzToProPhotoRgb,
  xyzToSmpteCRgb,
  xyzToSrgb,
  xyzToUvw,
  xyzToWideGamutRgb,
  xyzToXyY,
} from "../../conversions/xyz-conversions";
import { yCbCrToSrgb } from "../../conversions/ycbcr-jpeg-conversions";
import { ycCbcCrcToSrgb } from "../../conversions/yccbccrc-conversions";
import { yCgCoToSrgb } from "../../conversions/ycocg-conversions";
import { yDbDrToSrgb } from "../../conversions/ydbdr-conversions";
import { yiqToSrgb } from "../../conversions/yiq-conversions";
import { yPbPrToSrgb } from "../../conversions/ypbpr-conversions";
import { isWebSafeRGB } from "../../helpers/formats-and-checks";
import {
  ColorConverters,
  ToRGBConverters,
  ToXyzConverters,
} from "../../interfaces/converters.interface";

/**
 * Map of color converter paired with the
 * space used for fonversion
 */
export const colorConverters: ColorConverters = {
  adobe_98_rgb: { fun: xyzToAdobeRgb, from: "xyz" },
  apple_rgb: { fun: xyzToAppleRgb, from: "xyz" },
  ansi16: { fun: sRgbToAnsi16, from: "rgb" },
  ansi256: { fun: sRgbToAnsi256, from: "rgb" },
  best_rgb: { fun: xyzToBestRgb, from: "xyz" },
  beta_rgb: { fun: xyzToBetaRgb, from: "xyz" },
  bruce_rgb: { fun: xyzToBruceRgb, from: "xyz" },
  cie_rgb: { fun: xyzToCieRgb, from: "xyz" },
  color_match_rgb: { fun: xyzToColorMatchRgb, from: "xyz" },
  cmy: { fun: sRgbToCmy, from: "rgb" },
  cmyk: { fun: sRgbToCmyk, from: "rgb" },
  don_rgb_4: { fun: xyzToDonRgb4, from: "xyz" },
  eci_rgb_v2: { fun: xyzToEciRgbV2, from: "xyz" },
  etka_space_ps5: { fun: xyzToEtkaSpacePs5, from: "xyz" },
  hcy: { fun: sRgbToHcy, from: "rgb" },
  hex: { fun: sRgbToHex, from: "rgb" },
  hsi: { fun: sRgbToHsi, from: "rgb" },
  hsl: { fun: sRgbToHsl, from: "rgb" },
  hsv: { fun: sRgbToHsv, from: "rgb" },
  hwb: { fun: sRgbToHwb, from: "rgb" },
  lab: { fun: xyzToLab, from: "xyz" },
  lch_ab: { fun: sRgbToLch_ab, from: "rgb" },
  lch_uv: { fun: sRgbToLch_uv, from: "rgb" },
  lms: { fun: xyzToLsm, from: "xyz" },
  luv: { fun: xyzToLuv, from: "xyz" },
  ntsc_rgb: { fun: xyzToNtscRgb, from: "xyz" },
  pal_secam_rgb: { fun: xyzToPalSecamRgb, from: "xyz" },
  pro_photo_rgb: { fun: xyzToProPhotoRgb, from: "xyz" },
  rgb_0_1: { fun: rgbTo1_0rgb, from: "rgb" },
  rgb: { fun: xyzToSrgb, from: "xyz" },
  ryb: { fun: sRgbToRyb, from: "rgb" },
  //tsl: { fun: sRgbToTsl, from: "rgb" }, //TODO
  uvw: { fun: xyzToUvw , from: "xyz" },
  smpte_c_rgb: { fun: xyzToSmpteCRgb, from: "xyz" },
  web_safe: { fun: isWebSafeRGB, from: "rgb" },
  wide_gamut_rgb: { fun: xyzToWideGamutRgb, from: "xyz" },
  xvycc: { fun: sRgbToXvYcc, from: "rgb" },
  xyz: { fun: sRgbToXyz, from: "rgb" },
  xyy: { fun: xyzToXyY, from: "xyz" },
  ycbcr: { fun: sRgbToYCbCr, from: "rgb" },
  yccbccrc: { fun: sRgbToYcCbcCrc, from: "rgb" },
  ycocg: { fun: sRgbToYCgCo, from: "rgb" },
  ydbdr: { fun: sRgbToYDbDr, from: "rgb" },
  yiq: { fun: sRgbToYiq, from: "rgb" },
  ypbpr: { fun: sRgbToYPbPr, from: "rgb" },
};
/**
 * Map of conversion to get sRBG color
 */
export const toRgbConverters: ToRGBConverters = {
  ansi16: ansi16ToRgb,
  ansi265: ansi256ToRgb,
  cmy: cmyToSRgb,
  cmyk: cmykToRgb,
  hcy: hcyToSrgb,
  hex: hexToRgb,
  hsi: hsiToSrgb,
  hsl: hslToRgb,
  hsv: hsvToRgb,
  hwb: hwbToRgb,
  ryb: rybToRgb,
  tsl: tslToSrgb,
  xvycc: xvYccToSrgb,
  xyz: xyzToSrgb,
  ycbcr: yCbCrToSrgb,
  yccbccrc: ycCbcCrcToSrgb,
  ycocg: yCgCoToSrgb,
  ydbdr: yDbDrToSrgb,
  yiq: yiqToSrgb,
  ypbpr: yPbPrToSrgb,
};

/**
 * Map of conversion to get XYZ
 */
export const toXyzConverters: ToXyzConverters = {
  adobe_98_rgb: adobeRgbToXyz,
  apple_rgb: appleRgbToXyz,
  best_rgb: bestRgbToXyz,
  beta_rgb: betaRgbToXyz,
  bruce_rgb: bruceRgbToXyz,
  cie_rgb: cieRgbToXyz,
  color_match_rgb: colorMatchRgbToXyz,
  don_rgb_4: donRgb4ToXyz,
  eci_rgb_v2: eciRgbV2ToXyz,
  etka_space_ps5: etkaSpacePs5ToXyz,
  lab: labToXyz,
  luv: luvToXyz,
  lch_ab: lch_abToXyz,
  lch_uv: lch_uvToXyz,
  lms: lmsToXyz,
  ntsc_rgb: ntscRgbToXyz,
  pal_secam_rgb: palSecamRgbToXyz,
  pro_photo_rgb: proPhotoRgbToXyz,
  rgb: sRgbToXyz,
  uvw: uvwToXyz,
  smpte_c_rgb: smpteCRgbToXyz,
  wide_gamut_rgb: wideGamutRgbToXyz,
  xyy: xyYToXyz,
};
