import { CIE_κ, CIE_ϵ, REFERENCE_WHITES, SPACE_MATRICES } from "../constants";
import { gammaCompanding, sRgbCompanding } from "../helpers/companding";
import {
  LAB,
  LUV,
  RGB,
  SpaceData,
  XYZ,
} from "../interfaces/color-spaces.interface";

export const xyzToLab = ({ x, y, z }: XYZ): LAB => {
  const f = (t: number): number => {
    return t > CIE_ϵ ? Math.cbrt(t) : (CIE_κ * t + 16) / 116;
  };

  x = f(x / (REFERENCE_WHITES.D65.X * 100));
  y = f(y / (REFERENCE_WHITES.D65.Y * 100));
  z = f(z / (REFERENCE_WHITES.D65.Z * 100));

  const luminance = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return { luminance, a, b };
};

export const xyzToLuv = ({ x, y, z }: XYZ): LUV => {
  x = x > 1 ? x / 100 : x;
  y = y > 1 ? y / 100 : y;
  z = z > 1 ? z / 100 : z;

  const yr = y / REFERENCE_WHITES.D65.Y;
  const uP = Fu({ x, y, z });
  const vP = Fv({ x, y, z });
  const uRef = Fu({
    x: REFERENCE_WHITES.D65.X,
    y: REFERENCE_WHITES.D65.Y,
    z: REFERENCE_WHITES.D65.Z,
  });
  const vRef = Fv({
    x: REFERENCE_WHITES.D65.X,
    y: REFERENCE_WHITES.D65.Y,
    z: REFERENCE_WHITES.D65.Z,
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

export const xyzToSrgb = ({ x, y, z }: XYZ): RGB => {
  x = x > 1 ? x / 100 : x;
  y = y > 1 ? y / 100 : y;
  z = z > 1 ? z / 100 : z;

  //Get linear RGB
  const { R, G, B } = SPACE_MATRICES.SRGB.XYZ_TO_RGB;
  let red = x * R.x + y * R.y + z * R.z;
  let green = x * G.x + y * G.y + z * G.z;
  let blue = x * B.x + y * B.y + z * B.z;

  //Companding
  red = Math.round(sRgbCompanding(red));
  green = Math.round(sRgbCompanding(green));
  blue = Math.round(sRgbCompanding(blue));

  return { red, green, blue };
};

export const xyzToGammaRgb = ({ x, y, z }: XYZ, ref: SpaceData): RGB => {
  x = x > 1 ? x / 100 : x;
  y = y > 1 ? y / 100 : y;
  z = z > 1 ? z / 100 : z;

   //Get linear RGB
  const { R, G, B } = ref.XYZ_TO_RGB;
  let red = x * R.x + y * R.y + z * R.z;
  let green = x * G.x + y * G.y + z * G.z;
  let blue = x * B.x + y * B.y + z * B.z;

  //Companding
  red = Math.round(gammaCompanding(red, ref.GAMMA));
  green = Math.round(gammaCompanding(green, ref.GAMMA));
  blue = Math.round(gammaCompanding(blue, ref.GAMMA));

  return { red, green, blue };
};

/*******************************************************************
 *                        ADOBE 1998 RGB
 * *****************************************************************/ 
export const xyzToAdobeRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.ADOBE_RGB_1998);
};

/*******************************************************************
 *                          APPLE RGB
 * *****************************************************************/ 
export const xyzToAppleRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.APPLE_RGB);
};

/*******************************************************************
 *                           BEST RGB
 * *****************************************************************/
export const xyzToBestRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.BEST_RGB);
};

/*******************************************************************
 *                           BETA RGB
 * *****************************************************************/
export const xyzToBetaRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.BETA_RGB);
};

/*******************************************************************
 *                          BRUCE RGB
 * *****************************************************************/
export const xyzToBruceRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.BRUCE_RGB);
};

/*******************************************************************
 *                            CIE RGB
 * *****************************************************************/
export const xyzToCieRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.CIE_RGB);
};

/*******************************************************************
 *                        COLOR MATCH RGB
 * *****************************************************************/
export const xyzToColorMatchRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.COLOR_MATCH_RGB);
};

/*******************************************************************
 *                           DON RGB 4
 * *****************************************************************/
export const xyzToDonRgb4 = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.DON_RGB_4);
};

/*******************************************************************
 *                        ETKA SPACE PS5
 * *****************************************************************/
export const xyzToEtkaSpacePs5 = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.ETKA_SPACE_PS5);
};

/*******************************************************************
 *                           NTSC RGB
 * *****************************************************************/
export const xyzToNtscRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.NTSC_RGB);
};

/*******************************************************************
 *                        PAL/SECAM RGB
 * *****************************************************************/
export const xyzToPalSecamRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.PAL_SECAM_RGB);
};

/*******************************************************************
 *                        PRO PHOTO RGB
 * *****************************************************************/
export const xyzToProPhotoRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.PRO_PHOTO_RGB);
};

/*******************************************************************
 *                          SMPTE-C RGB
 * *****************************************************************/
export const xyzToSmpteCRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.SMPTE_C_RGB);
};

/*******************************************************************
 *                        WIDE GAMUT RGB
 * *****************************************************************/
export const xyzToWideGamutRgb = (xyz: XYZ): RGB => {
  return xyzToGammaRgb(xyz, SPACE_MATRICES.WIDE_GAMUT_RGB);
};