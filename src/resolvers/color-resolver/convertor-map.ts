import { ansi16ToRgb, ansi256ToRgb } from "../../converters/ansi-converter";
import { cmykToRgb } from "../../converters/cmyk-converter";
import { hexToRgb } from "../../converters/hex-converter";
import { hslToRgb } from "../../converters/hsl-converter";
import { hsvToRgb } from "../../converters/hsv-converter";
import { hwbToRgb } from "../../converters/hwb-converter";
import { labToXyz } from "../../converters/lab-converter";
import { lch_abToXyz, lch_uvToXyz } from "../../converters/lch-converter";
import { luvToXyz } from "../../converters/luv-converter";
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
  sRgbToCmyk,
  sRgbToHex,
  sRgbToHsl,
  sRgbToHsv,
  sRgbToHwb,
  sRgbToLch_ab,
  sRgbToLch_uv,
  sRgbToRyb,
  sRgbToXyz,
  smpteCRgbToXyz,
  wideGamutRgbToXyz,
} from "../../converters/rgb-converter";
import { rybToRgb } from "../../converters/ryb-converter";
import { xyYToXyz } from "../../converters/xyy-converter";
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
  xyzToLuv,
  xyzToNtscRgb,
  xyzToPalSecamRgb,
  xyzToProPhotoRgb,
  xyzToSmpteCRgb,
  xyzToSrgb,
  xyzToWideGamutRgb,
  xyzToXyY,
} from "../../converters/xyz-converter";
import { isWebSafeRGB } from "../../helpers";
import {
  ColorConverters,
  ToRGBConverters,
  ToXyzConverters,
} from "../../interfaces/converters.interface";

export const rgbConverters: ColorConverters = {
  adobe_98_rgb: { fun: xyzToAdobeRgb, from: "xyz" },
  apple_rgb: { fun: xyzToAppleRgb, from: "xyz" },
  ansi16: { fun: sRgbToAnsi16, from: "rgb" },
  ansi256: { fun: sRgbToAnsi256, from: "rgb" },
  best_rgb: { fun: xyzToBestRgb, from: "xyz" },
  beta_rgb: { fun: xyzToBetaRgb, from: "xyz" },
  bruce_rgb: { fun: xyzToBruceRgb, from: "xyz" },
  cie_rgb: { fun: xyzToCieRgb, from: "xyz" },
  color_match_rgb: { fun: xyzToColorMatchRgb, from: "xyz" },
  cmyk: { fun: sRgbToCmyk, from: "rgb" },
  don_rgb_4: { fun: xyzToDonRgb4, from: "xyz" },
  eci_rgb_v2: { fun: xyzToEciRgbV2, from: "xyz" },
  etka_space_ps5: { fun: xyzToEtkaSpacePs5, from: "xyz" },
  hex: { fun: sRgbToHex, from: "rgb" },
  hsl: { fun: sRgbToHsl, from: "rgb" },
  hsv: { fun: sRgbToHsv, from: "rgb" },
  hwb: { fun: sRgbToHwb, from: "rgb" },
  lab: { fun: xyzToLab, from: "xyz" },
  lch_ab: { fun: sRgbToLch_ab, from: "rgb" },
  lch_uv: { fun: sRgbToLch_uv, from: "rgb" },
  luv: { fun: xyzToLuv, from: "xyz" },
  ntsc_rgb: { fun: xyzToNtscRgb, from: "xyz" },
  pal_secam_rgb: { fun: xyzToPalSecamRgb, from: "xyz" },
  pro_photo_rgb: { fun: xyzToProPhotoRgb, from: "xyz" },
  rgb_0_1: { fun: rgbTo1_0rgb, from: "rgb" },
  rgb: { fun: xyzToSrgb, from: "xyz" },
  ryb: { fun: sRgbToRyb, from: "rgb" },
  smpte_c_rgb: { fun: xyzToSmpteCRgb, from: "xyz" },
  xyz: { fun: sRgbToXyz, from: "rgb" },
  xyy: { fun: xyzToXyY, from: "xyz" },
  web_safe: { fun: isWebSafeRGB, from: "rgb" },
  wide_gamut_rgb: { fun: xyzToWideGamutRgb, from: "xyz" },
};

export const toRgbConverters: ToRGBConverters = {
  ansi16: ansi16ToRgb,
  ansi265: ansi256ToRgb,
  hex: hexToRgb,
  cmyk: cmykToRgb,
  hsl: hslToRgb,
  hsv: hsvToRgb,
  hwb: hwbToRgb,
  ryb: rybToRgb,
  xyz: xyzToSrgb,
};

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
  ntsc_rgb: ntscRgbToXyz,
  pal_secam_rgb: palSecamRgbToXyz,
  pro_photo_rgb: proPhotoRgbToXyz,
  rgb: sRgbToXyz,
  smpte_c_rgb: smpteCRgbToXyz,
  wide_gamut_rgb: wideGamutRgbToXyz,
  xyy: xyYToXyz,
};