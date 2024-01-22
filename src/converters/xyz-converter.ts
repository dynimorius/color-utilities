import { CIE_κ, CIE_ϵ } from "../constants";
import { REFERENCE_ILLUMINANT } from "../constants/reference-illuminants";
import { SPACE_DATASETS } from "../constants/space-datasets";
import { bound } from "../helpers";
import { D65toCAdaptation, D65toD50Adaptation, D65toEAdaptation } from "../helpers/chromatic-adaptation";
import {
  LCompanding,
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

export const xyzToRgb = (
  { x, y, z }: XYZ,
  space: SpaceData,
  compandingFun: Function,
  gamma?: boolean,
  whitInBounds?:boolean
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
  if (gamma) {
    red = Math.round(compandingFun(red, space.GAMMA));
    green = Math.round(compandingFun(green, space.GAMMA));
    blue = Math.round(compandingFun(blue, space.GAMMA));
  } else {
    red = Math.round(compandingFun(red));
    green = Math.round(compandingFun(green));
    blue = Math.round(compandingFun(blue));
  }

  return {
    red: whitInBounds ? bound(red) : red,
    green: whitInBounds ? bound(green) : green,
    blue: whitInBounds ? bound(blue) : blue,
    inGamut: gamutCheck(red) && gamutCheck(green) && gamutCheck(blue),
  };
};

const gamutCheck = (value: number): boolean => {
  return !isNaN(value) && value >= 0 && value <= 255;
}

export const xyzToSrgb = (xyz: XYZ): RGB => {
  return xyzToRgb(xyz, SPACE_DATASETS.SRGB, sRgbCompanding);
};

export const xyzToLRgb = (xyz: XYZ): RGB => {
  return xyzToRgb(xyz, SPACE_DATASETS.ECI_RGB_V2, LCompanding);
};

export const xyzToGammaRgb = (xyz: XYZ, ref: SpaceData, whitInBounds?: boolean): RGB => {
  return xyzToRgb(xyz, ref, gammaCompanding, true, whitInBounds);
};

/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/
export const xyzToAdobeRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.ADOBE_RGB_1998);
};

/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/
export const xyzToAppleRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.APPLE_RGB);
};

/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
export const xyzToBestRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.BEST_RGB);
};

/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
export const xyzToBetaRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.BETA_RGB);
};

/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
export const xyzToBruceRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.BRUCE_RGB);
};

/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
export const xyzToCieRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toEAdaptation(xyz), SPACE_DATASETS.CIE_RGB);
};

/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
export const xyzToColorMatchRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.COLOR_MATCH_RGB);
};

/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
export const xyzToDonRgb4 = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.DON_RGB_4);
};

/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
export const xyzToEtkaSpacePs5 = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.ETKA_SPACE_PS5);
};

/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
export const xyzToNtscRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toCAdaptation(xyz), SPACE_DATASETS.NTSC_RGB);
};

/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
export const xyzToPalSecamRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.PAL_SECAM_RGB);
};

/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
export const xyzToProPhotoRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.PRO_PHOTO_RGB);
};

/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
export const xyzToSmpteCRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_DATASETS.SMPTE_C_RGB);
};

/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
export const xyzToWideGamutRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(D65toD50Adaptation(xyz), SPACE_DATASETS.WIDE_GAMUT_RGB);
};

/*******************************************************************
 *                         ECI RGB V2
 * *****************************************************************/
export const xyzToEciRgbV2 = (xyz: XYZ): RGB => {
  return xyzToLRgb(D65toD50Adaptation(xyz));
};

/*******************************************************************
 *                             xyY
 * *****************************************************************/
export const xyzToXyY = ({ x, y, z }: XYZ): XYY => {
  const devider = x + y + z;
  return { x: x / devider, y: y / devider, Y: y };
};
                                                                                                                                                                                            