import { CIE_κ, CIE_ϵ, REFERENCE_WHITES, SPACE_MATRICES } from "../constants";
import { gammaAdobeRgb, gammaSrbg } from "../helpers";
import { LAB, RGB, XYZ } from "../interfaces/color-spaces.interface";

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
