import { CIE_κ, CIE_ϵ, REFERENCE_WHITES, SPACE_MATRICES } from "../constants";
import { gammaAdobeRgb, gammaSrbg } from "../helpers";
import { LAB, LUV, RGB, XYZ } from "../interfaces/color-spaces.interface";

export const xyzToRgb = ({ x, y, z }: XYZ): RGB => {
  x = x / 100;
  y = y / 100;
  z = z / 100;

  const { R, G, B } = SPACE_MATRICES.SRGB.XYZ_TO_RGB;
  let red = x * R.x + y * R.y + z * R.z;
  let green = x * G.x + y * G.y + z * G.z;
  let blue = x * B.x + y * B.y + z * B.z;

  red = Math.round(gammaSrbg(red));
  green = Math.round(gammaSrbg(green));
  blue = Math.round(gammaSrbg(blue));

  return { red, green, blue };
};

export const xyzToAdobeRgb = ({ x, y, z }: XYZ): RGB => {
  x = x / 100;
  y = y / 100;
  z = z / 100;

  const { R, G, B } = SPACE_MATRICES.ADOBE_RGB_1998.XYZ_TO_RGB;

  let red = x * R.x + y * R.y + z * R.z;
  let green = x * G.x + y * G.y + z * G.z;
  let blue = x * B.x + y * B.y + z * B.z;

  red = Math.round(gammaAdobeRgb(red));
  green = Math.round(gammaAdobeRgb(green));
  blue = Math.round(gammaAdobeRgb(blue));

  return { red, green, blue };
};

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
  const refWhite = REFERENCE_WHITES.D65;
  x = x > 1 ? x / 100 : x;
  y = y > 1 ? y / 100 : y;
  z = z > 1 ? z / 100 : z;
  const yr = y / refWhite.Y;
  const uP = Fu({ x, y, z });
  const vP = Fv({ x, y, z });
  const uRef = Fu({ x: refWhite.X, y: refWhite.Y, z: refWhite.Z });
  const vRef = Fv({ x: refWhite.X, y: refWhite.Y, z: refWhite.Z });
  const L = yr > CIE_ϵ ? 116 * Math.cbrt(yr) - 16 : CIE_κ * yr;
  const u = 13 * L * (uP - uRef);
  const v = 13 * L * (vP - vRef);
  return { L, u, v };
};

export const Fu = ({ x, y, z }: XYZ): number => {
  return (4 * x) / (x + 15 * y + 3 * z);
};

const Fv = ({ x, y, z }: XYZ): number => {
  return (9 * y) / (x + 15 * y + 3 * z);
};

