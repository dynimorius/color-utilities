/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://opensource.org/license/isc-license-txt/
 */

import { XyzToRgbOptions } from "./../interfaces/converter-options";
import { CIE_κ, CIE_ϵ } from "../constants";
import { REFERENCE_ILLUMINANT } from "../constants/reference-illuminants";
import { SPACE_DATASETS } from "../constants/space-datasets";

import {
  D65toCAdaptation,
  D65toD50Adaptation,
  D65toEAdaptation,
} from "../helpers/chromatic-adaptation";
import {
  LCompanding,
  companding,
  gammaCompanding,
  sRgbCompanding,
} from "../helpers/companding";
import {
  LAB,
  LUV,
  RGB,
  SpaceData,
  XYY,
  XYZ,
} from "../interfaces/color-spaces.interface";

/**
 * Gets Lab values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {LAB} - lab values for a color
 */
export const xyzToLab = ({ x, y, z }: XYZ): LAB => {
  const f = (t: number): number => {
    return t > CIE_ϵ ? Math.cbrt(t) : (CIE_κ * t + 16) / 116;
  };

  x = f(x / (REFERENCE_ILLUMINANT.D65.X * 100));
  y = f(y / (REFERENCE_ILLUMINANT.D65.Y * 100));
  z = f(z / (REFERENCE_ILLUMINANT.D65.Z * 100));

  const luminance = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return { luminance, a, b };
};

/**
 * Gets Luv values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {LUV} - luv values for a color
 */
export const xyzToLuv = ({ x, y, z }: XYZ): LUV => {
  x = x > 1 ? x / 100 : x;
  y = y > 1 ? y / 100 : y;
  z = z > 1 ? z / 100 : z;

  const yr = y / REFERENCE_ILLUMINANT.D65.Y;
  const uP = Fu({ x, y, z });
  const vP = Fv({ x, y, z });
  const uRef = Fu({
    x: REFERENCE_ILLUMINANT.D65.X,
    y: REFERENCE_ILLUMINANT.D65.Y,
    z: REFERENCE_ILLUMINANT.D65.Z,
  });
  const vRef = Fv({
    x: REFERENCE_ILLUMINANT.D65.X,
    y: REFERENCE_ILLUMINANT.D65.Y,
    z: REFERENCE_ILLUMINANT.D65.Z,
  });
  const L = yr > CIE_ϵ ? 116 * Math.cbrt(yr) - 16 : CIE_κ * yr;
  const u = 13 * L * (uP - uRef);
  const v = 13 * L * (vP - vRef);

  return { L, u, v };
};

export const Fu = ({ x, y, z }: XYZ): number => {
  return (4 * x) / (x + 15 * y + 3 * z);
};

export const Fv = ({ x, y, z }: XYZ): number => {
  return (9 * y) / (x + 15 * y + 3 * z);
};

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
export const xyzToRgb = (
  { x, y, z }: XYZ,
  space: SpaceData,
  compandingFun: Function,
  options?: XyzToRgbOptions
): RGB => {
  x = x > 1 ? x / 100 : x;
  y = y > 1 ? y / 100 : y;
  z = z > 1 ? z / 100 : z;

  //Get linear RGB
  const { R, G, B } = space.XYZ_TO_RGB;
  let red = x * R.x + y * R.y + z * R.z;
  let green = x * G.x + y * G.y + z * G.z;
  let blue = x * B.x + y * B.y + z * B.z;

  //Companding
  return companding({ red, green, blue }, compandingFun, {
    rounded: options?.rounded,
    whitInBounds: options?.whitInBounds,
    gamma: options?.gamma ? space.GAMMA : null,
  });
};

/**
 * Gets sRGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - sRGB values for a color
 */
export const xyzToSrgb = (xyz: XYZ): RGB => {
  return xyzToRgb(xyz, SPACE_DATASETS.SRGB, sRgbCompanding);
};


/**
 * Gets RGB values for a given RGB space, from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - RGB values for a color in a specified RGB space
 */
export const xyzToGammaRgb = (
  xyz: XYZ,
  ref: SpaceData,
  whitInBounds?: boolean
): RGB => {
  return xyzToRgb(xyz, ref, gammaCompanding, { gamma: true, whitInBounds });
};

/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Gets Adobe 98 RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Adobe 98 RGB values
 */
export const xyzToAdobeRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.ADOBE_RGB_1998);
};

/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Gets Apple RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Apple RGB values
 */
export const xyzToAppleRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.APPLE_RGB);
};

/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Gets Best RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Best RGB values
 */
export const xyzToBestRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.BEST_RGB);
};

/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Gets Beta RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Beta RGB values
 */
export const xyzToBetaRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.BETA_RGB);
};

/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Gets Bruce RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Bruce RGB values
 */
export const xyzToBruceRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.BRUCE_RGB);
};

/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Gets CIE RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - CIE RGB values
 */
export const xyzToCieRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toEAdaptation(xyz), SPACE_DATASETS.CIE_RGB);
};

/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Gets Color Match RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Color Match RGB values
 */
export const xyzToColorMatchRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.COLOR_MATCH_RGB);
};

/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Gets DON RGB 4 values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - DON RGB 4 values
 */
export const xyzToDonRgb4 = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.DON_RGB_4);
};

/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Gets Etka Space PS5 values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Etka Space PS5 values
 */
export const xyzToEtkaSpacePs5 = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.ETKA_SPACE_PS5);
};

/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Gets NTSC RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - NTSC RGB values
 */
export const xyzToNtscRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toCAdaptation(xyz), SPACE_DATASETS.NTSC_RGB);
};

/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Gets PAL/SECAM RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - PAL/SECAM RGB values
 */
export const xyzToPalSecamRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.PAL_SECAM_RGB);
};

/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Gets ProPhoto RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - ProPhoto RGB values
 */
export const xyzToProPhotoRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.PRO_PHOTO_RGB);
};

/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Gets SMPTE-C RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - SMPTE-C RGB values
 */
export const xyzToSmpteCRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.SMPTE_C_RGB);
};

/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Gets Wide Gamut RGB values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - Wide Gamut RGB values
 */
export const xyzToWideGamutRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.WIDE_GAMUT_RGB);
};

/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Gets ECI RGB V2 values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - ECI RGB V2 values
 */
export const xyzToEciRgbV2 = (xyz: XYZ): RGB => {
  return xyzToLRgb(D65toD50Adaptation(xyz));
};

/**
 * Gets ECI RGB V2 values from given xyz values but
 * but additional chromatic adaptation is needed
 * @param {XYZ} xyz xyz values for a color 
 * @returns {RGB} - ECI RGB V2 values
 */
export const xyzToLRgb = (xyz: XYZ): RGB => {
  return xyzToRgb(xyz, SPACE_DATASETS.ECI_RGB_V2, LCompanding);
};
/*******************************************************************
 *                             xyY
 * *****************************************************************/
/**
 * Gets xyY values from given xyz values
 * @param {XYZ} xyz xyz values for a color 
 * @returns {XYY} - xyY values
 */
export const xyzToXyY = ({ x, y, z }: XYZ): XYY => {
  const devider = x + y + z;
  return { x: x / devider, y: y / devider, Y: y };
};
