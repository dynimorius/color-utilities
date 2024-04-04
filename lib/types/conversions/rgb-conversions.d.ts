/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { CMY, CMYK, HCY, HSI, HSL, HSV, HWB, LAB, LCH, LUV, RGB, RGBA, RYB, SpaceData, TSL, UVW, XYZ, YCbCr, YCoCg, YDbDr, YIQ, YPbPr, YcCbcCrc, xvYCC } from "../interfaces/color-spaces.interface";
/*******************************************************************
 *                           HELPERS
 * *****************************************************************/
/**
 * Normalizes an RBG value
 *
 * @param {RBG}                   -  color to normalize
 * @returns {RGB}                 - normalized sRBG color value
 */
export declare const normalizeRgb: ({ red, green, blue }: RGB) => RGB;
/**
 * Normalizes an RBGA value
 *
 * @param {RBGA}                   - color to normalize
 * @returns {RGBA}                 - normalized sRBGA color value
 */
export declare const normalizeRgba: ({ red, green, blue, alpha }: RGBA) => RGBA;
export declare const deNormalizeRGB: ({ red, green, blue }: RGB) => RGB;
/**
 * Inverts a sRBG color
 *
 * @param {RBG}                   - color to invert
 * @returns {RGB}                 - inverted sRBG color value
 */
export declare const rgbInvert: ({ red, green, blue }: RGB) => RGB;
/**
 * Gets Hue for a given sRBG color
 *
 * @param {number}                   - red value for red
 * @param {number}                   - green value for green
 * @param {number}                   - blue value for blue
 * @param {number}                   - max maximum value
 * @param {number}                   - delta difference between maximum and minimum value
 * @returns {number}                 - value of hue
 */
export declare const sRgbToHue: (red: number, green: number, blue: number, max: number, delta: number) => number;
/**
 * Gets a sRBG color values in a range between 0 and 1
 *
 * @param {RBG}                   - color in range 0 to 255
 * @returns {RGB}                 - color in range 0 to 1
 */
export declare const rgbTo1_0rgb: (rgb: RGB) => RGB;
/**
 * Gets luminance for a given sRBG color
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - luminance value
 */
export declare const sRgbToLuminance: ({ red, green, blue }: RGB) => number;
/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Adobe 98 RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                              (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Adobe 98 RGB values
 */
export declare const sRgbToAdobeRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Adobe 98 RGB space
 *
 * @param {RGB}                   - Adobe 98 RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const adobeRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Apple RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Apple RGB values
 */
export declare const sRgbToAppleRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Apple RGB space
 *
 * @param {RBG}                   - Apple RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const appleRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Best RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}              - Best RGB values
 */
export declare const sRgbToBestRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Best RGB space
 * @param {RBG}                   - Best RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const bestRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Beta RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Beta RGB values
 */
export declare const sRgbToBetaRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Beta RGB space
 * @param {RBG}                    - Beta RGB values
 * @returns {XYZ}                  - xyz values
 */
export declare const betaRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Bruce RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Bruce RGB values
 */
export declare const sRgbToBruceRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Bruce RGB space
 *
 * @param {RBG}                   - Bruce RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const bruceRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to CIE RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                   - CIE RGB values
 */
export declare const sRgbToCieRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in CIE RGB space
 * @param {RBG}                   - CIE RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const cieRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Color Match RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Color Match RGB values
 */
export declare const sRgbToColorMatchRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Color Match RGB space
 *
 * @param {RBG}                   - Color Match RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const colorMatchRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Don RGB 4 space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                 - sRBG values
 * @param {XYZ}                 - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}               - Don RGB 4 values
 */
export declare const sRgbToDonRgb4: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in DON RGB 4 space
 * @param {RBG}                  - DON RGB 4 values
 * @returns {XYZ}                - xyz values
 */
export declare const donRgb4ToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to ETKA SPACE PS5 space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - ETKA SPACE PS5 values
 */
export declare const sRgbToEtkaSpacePs5: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Etka Space PS5 space
 *
 * @param {RBG}                  - Etka Space PS5 values
 * @returns {XYZ}                - xyz values
 */
export declare const etkaSpacePs5ToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to NTSC RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - NTSC RGB values
 */
export declare const sRgbToNtscRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in NTSC RGB space
 *
 * @param {RBG}                   - NTSC RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const ntscRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to PAL/SECAM RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                                (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - PAL/SECAM RGB values
 */
export declare const sRgbToPalSecamRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in PAL/SECAM RGB space
 *
 * @param {RBG}                   - PAL/SECAM RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const palSecamRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Pro Photo RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *                                (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Pro Photo RGB values
 */
export declare const sRgbToProPhotoRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in ProPhoto RGB space
 * @param {RBG}                   - ProPhoto RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const proPhotoRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to SMPTE-C RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                  - sRBG values
 * @param {XYZ}                  - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                - SMPTE-C RGB values
 */
export declare const sRgbToSmpteCRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in SMPTE-C RGB space
 *
 * @param {RBG}                   - SMPTE-C RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const smpteCRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Wide Gamut RGB space
 *
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - Wide Gamut RGB values
 */
export declare const sRgbToWideGamutRgb: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in Wide Gamut RGB space
 * @param {RBG}                   - Wide Gamut RGB values
 * @returns {XYZ}                 - xyz values
 */
export declare const wideGamutRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
/**
 * Converts a given color from an sRBG space to Color ECI RGB V2 space
 *
 * that RGB Space utilizing inverse gamma companding
 * @param {RBG}                   - sRBG values
 * @param {XYZ}                   - xyz values
 *    (optional - they will otherwise be computed out of the rgb values)
 * @returns {RGB}                 - ECI RGB V2 values
 */
export declare const sRgbToEciRgbV2: (rgb: RGB, xyz?: XYZ) => RGB;
/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 *
 * @param {RBG}                   - ECI RGB V2 values for a color
 * @returns {XYZ}                 - xyz values
 */
export declare const eciRgbV2ToXyz: (rgb: RGB) => XYZ;
/**
 * Gets XYZ values for a given color in ECI RGB V2 space
 * but additional chromatic adaptation is needed
 *
 * @param {RBG}                   - ECI RGB V2 values for a color
 * @returns {XYZ}                 - xyz values
 */
export declare const lRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                             SRGB
 * *****************************************************************/
/**
 * Gets XYZ values for a given color in sRGB space
 * @param {RBG}                   - sRBG values for a color
 * @returns {XYZ}                 - xyz values
 */
export declare const sRgbToXyz: (rgb: RGB) => XYZ;
/*******************************************************************
 *                             ANSI
 * *****************************************************************/
/**
 * Gets ansi16 value for a given color in sRGB space
 *
 * @param {RBG}                  - sRBG values for a color
 * @returns {number}             - ansi16 numeric value
 */
export declare const sRgbToAnsi16: (rgb: RGB, saturation?: number | null) => number;
/**
 * Gets ansi256 value for a given color in sRGB space
 * @param {RBG}                   - sRBG values for a color
 * @returns {number}              - ansi256 numeric value
 */
export declare const sRgbToAnsi256: ({ red, green, blue }: RGB) => number;
/*******************************************************************
 *                             CMY
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMY space
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @returns {CMY}                 - CMY values for a color
 */
export declare const sRgbToCmy: (rgb: RGB) => CMY;
/*******************************************************************
 *                            CMYK
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to CMYK space
 *
 * @param {RBG}                   - rgb sRBG values for a color
 * @returns {CMYK}                - CMYK values for a color
 */
export declare const sRgbToCmyk: (rgb: RGB, round?: boolean) => CMYK;
/**
 * Converts a color form an sRGB space to HCY space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HCY}                 - HCY values for a color
 */
export declare const sRgbToHcy: (rgb: RGB) => HCY;
/*******************************************************************
 *                             HEX
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to hex value
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {string}              - hex string
 */
export declare const sRgbToHex: ({ red, green, blue }: RGB, prefixed?: boolean) => string;
/**
 * Converts a color form an sRGBA space to hex value
 *
 * @param {RBGA}                   - sRBGA values for a color
 * @returns {string}               - hex string
 */
export declare const sRgbaToHex: ({ red, green, blue, alpha }: RGBA, prefixed?: boolean) => string;
/*******************************************************************
 *                             HSI
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSI space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSI}                 - HSI values for a color
 */
export declare const sRgbToHsi: (rgb: RGB) => HSI;
/*******************************************************************
 *                             HSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSL space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSL}                 - HSL values for a color
 */
export declare const sRgbToHsl: (rgb: RGB, pHue?: number) => HSL;
/*******************************************************************
 *                             HSV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HSV space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HSV}                 - HSV values for a color
 */
export declare const sRgbToHsv: (rgb: RGB, pHue?: number) => HSV;
/*******************************************************************
 *                             HWG
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to HWB space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {HWB}                 - HWB values for a color
 */
export declare const sRgbToHwb: (rgb: RGB, pHue?: number) => HWB;
/*******************************************************************
 *                             LAB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Lab space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LAB}                 - Lab values for a color
 */
export declare const sRgbToLab: (rgb: RGB, xyz?: XYZ) => LAB;
/*******************************************************************
 *                             LCH
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to LCH(ab) space
 * @param {RBG}                   - sRBG values for a color
 * @returns {LCH}                 - LCH(ab) values for a color
 */
export declare const sRgbToLch_ab: (rgb: RGB, xyz?: XYZ) => LCH;
/**
 * Converts a color form an sRGB space to LCH(uv) space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LCH}                 - LCH(uv) values for a color
 */
export declare const sRgbToLch_uv: (rgb: RGB, xyz?: XYZ) => LCH;
/*******************************************************************
 *                             LUV
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to Luv space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {LUV}                 - Luv values for a color
 */
export declare const sRgbToLuv: (rgb: RGB, xyz?: XYZ) => LUV;
/*******************************************************************
 *                             RYB
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to RYB space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {RYB}                 - RYB values for a color
 */
export declare const sRgbToRyb: ({ red, green, blue }: RGB) => RYB;
/*******************************************************************
 *                              TSL
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to TSL space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {TSL}                 - TSL values for a color
 */
export declare const sRgbToTsl: ({ red, green, blue }: RGB) => TSL;
/*******************************************************************
 *                              UVW
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to UVW space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {UVW}                 - UVW values for a color
 */
export declare const sRgbToUvw: (rgb: RGB) => UVW;
/**
 * Gets XYZ values for a given RGB color in a given RGB space
 * that RGB Space utilizing inverse gamma companding
 *
 * @param {RBG}                   - RBG values
 * @param {SpaceData}             - RGB space dataset
 * @returns {XYZ}                 - xyz values
 */
export declare const gammaRgbToXyz: (rgb: RGB, ref: SpaceData) => XYZ;
/*******************************************************************
 *  JPEG / YCbCr / YcCbcCrc / YCoCg / YDbDr / YPbPr / YIQ / xvYCC
 * *****************************************************************/
/**
 * Converts a color form an sRGB space to ITU-R BT.601 Y′CbCr (YUV) space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCbCr}               - YCbCr values for a color
 */
export declare const sRgbToYCbCrBT601: ({ red, green, blue }: RGB) => YCbCr;
/**
 * Converts a color form an sRGB space to ITU-R BT.709 Y′CbCr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCbCr}               - YCbCr values for a color
 */
export declare const sRgbToYCbCrBT709: ({ red, green, blue }: RGB) => YCbCr;
/**
 * Converts a color form an sRGB space to YDbDr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YDbDr}               - YDbDr values for a color
 */
export declare const sRgbToYDbDr: ({ red, green, blue }: RGB) => YDbDr;
/**
 * Converts a color form an sRGB space to Analog YPbPr space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YPbPr}               - YPbPr values for a color
 */
export declare const sRgbToYPbPr: ({ red, green, blue }: RGB) => YPbPr;
/**
 * Converts a color form an sRGB space to YcCbcCrc space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YcCbcCrc}            - YcCbcCrc values for a color
 *
 * -more info: https://en.wikipedia.org/wiki/YCbCr#ITU-R_BT.2020_conversion
 */
export declare const sRgbToYcCbcCrc: ({ red, green, blue }: RGB) => YcCbcCrc;
/**
 * Converts a color form an sRGB space to YCoCg space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YCoCg}               - YCoCg values for a color
 */
export declare const sRgbToYCgCo: ({ red, green, blue }: RGB) => YCoCg;
/**
 * Converts a color form an sRGB space to YIQ  space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {YIQ}                 - YIQ  values for a color
 */
export declare const sRgbToYiq: ({ red, green, blue }: RGB) => YIQ;
/**
 * Converts a color form an sRGB space to xvYCC space
 *
 * @param {RBG}                   - sRBG values for a color
 * @returns {xvYCC}               - xvYCC values for a color
 */
export declare const sRgbToXvYcc: (rgb: RGB) => xvYCC;
