import { CIE_κ, CIE_ϵ, REFERENCE_WHITES } from "../constants";
import { LAB, LCH, XYZ } from "../interfaces/color-spaces.interface";

export const labToXyz = ({ luminance, a, b }: LAB): XYZ => {
  const f = (t: number): number => {
    const tQR = Math.cbrt(t);
    return tQR > CIE_ϵ ? tQR : (116 * t - 16) / CIE_κ;
  };
  const Fy = (luminance + 16) / 116;
  const x = f(a / 500 + Fy) * (REFERENCE_WHITES.D65.X * 10);
  const z = f(Fy - b / 200) * (REFERENCE_WHITES.D65.Z * 10);
  const y = (luminance > CIE_κ * CIE_ϵ ? Math.cbrt(Fy) : luminance / CIE_κ) * (REFERENCE_WHITES.D65.Y * 10);
  return { x, y, z };
};

export const labToLch_ab = ({ luminance, a, b }: LAB): LCH => {
  const hr = Math.atan2(b, a);
  const hue = hr < 0 ? ((hr * 360) / 2 / Math.PI) + 360 : (hr * 360) / 2 / Math.PI;
  const chroma = Math.sqrt(a * a + b * b);

  return { lightness: luminance, chroma, hue };
};
