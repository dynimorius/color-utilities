import { LAB, LCH, LMS, LUV, RGB, SpaceData, UVW, XYY, XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
/**
 * Gets Lab values from given xyz values
 * @param {XYZ}                   - xyz values for a color
 * @returns {LAB}                 - lab values for a color
 */
export declare const xyzToLab: ({ x, y, z }: XYZ) => LAB;
/**
 * Gets Lch(ab) values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {LCH}                   - LCH values for a color
 */
export declare const xyzToLch_ab: (xyz: XYZ) => LCH;
/**
 * Gets Luv values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {LUV}                   - luv values for a color
 */
export declare const xyzToLuv: ({ x, y, z }: XYZ, refIlluminant?: {
    X: number;
    Y: number;
    Z: number;
}) => LUV;
/**
 * Gets Lch(uv) values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {LCH}                   - LCH values for a color
 */
export declare const xyzToLch_uv: (xyz: XYZ) => LCH;
/**
 * Gets UVW values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {UVW}                   - uvw values for a color
 */
export declare const xyzToUvw: ({ x, y, z }: XYZ, refIlluminant?: {
    X: number;
    Y: number;
    Z: number;
}) => UVW;
/**
 * Gets sRGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - sRGB values for a color
 */
export declare const xyzToSrgb: (xyz: XYZ) => RGB;
/**
 * Gets RGB values for a given RGB space, from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - RGB values for a color in a specified RGB space
 */
export declare const xyzToGammaRgb: (xyz: XYZ, ref: SpaceData, whitInBounds?: boolean) => RGB;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Gets Adobe 98 RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Adobe 98 RGB values
 */
export declare const xyzToAdobeRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Gets Apple RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Apple RGB values
 */
export declare const xyzToAppleRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Gets Best RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Best RGB values
 */
export declare const xyzToBestRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Gets Beta RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Beta RGB values
 */
export declare const xyzToBetaRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Gets Bruce RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Bruce RGB values
 */
export declare const xyzToBruceRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Gets CIE RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - CIE RGB values
 */
export declare const xyzToCieRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Gets Color Match RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Color Match RGB values
 */
export declare const xyzToColorMatchRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Gets DON RGB 4 values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - DON RGB 4 values
 */
export declare const xyzToDonRgb4: (xyz: XYZ) => RGB;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Gets Etka Space PS5 values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Etka Space PS5 values
 */
export declare const xyzToEtkaSpacePs5: (xyz: XYZ) => RGB;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Gets NTSC RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - NTSC RGB values
 */
export declare const xyzToNtscRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Gets PAL/SECAM RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - PAL/SECAM RGB values
 */
export declare const xyzToPalSecamRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Gets ProPhoto RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - ProPhoto RGB values
 */
export declare const xyzToProPhotoRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Gets SMPTE-C RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - SMPTE-C RGB values
 */
export declare const xyzToSmpteCRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Gets Wide Gamut RGB values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - Wide Gamut RGB values
 */
export declare const xyzToWideGamutRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Gets ECI RGB V2 values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - ECI RGB V2 values
 */
export declare const xyzToEciRgbV2: (xyz: XYZ) => RGB;
/**
 * Gets ECI RGB V2 values from given xyz values but
 * but additional chromatic adaptation is needed
 * @param {XYZ}                     - xyz values for a color
 * @returns {RGB}                   - ECI RGB V2 values
 */
export declare const xyzToLRgb: (xyz: XYZ) => RGB;
/*******************************************************************
 *                             xyY
 * *****************************************************************/
/**
 * Gets xyY values from given xyz values
 * @param {XYZ}                     - xyz values for a color
 * @returns {XYY}                   - xyY values
 */
export declare const xyzToXyY: ({ x, y, z }: XYZ) => XYY;
/*******************************************************************
 *                             LMS
 * *****************************************************************/
/**
 * Gets LMS values from given xyz values
 * @param {XYZ}                     - XYZ values for a color
 * @returns {LMS}                   - lms values
 */
export declare const xyzToLms: (xyz: XYZ, matrix?: Matrix3x3) => LMS;
/*************************************************************
 *                        Hunter-Lab
 *************************************************************/
/**
 * Gets Hunter's Lab values from given xyz values
 * @param {XYZ}                     - XYZ values for a color
 * @returns {LAB}                   - LAB values
 */
export declare const xyzToHunterLab: ({ x, y, z }: XYZ) => LAB;
