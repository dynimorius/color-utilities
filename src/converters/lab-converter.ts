import { CIE_κ, CIE_ϵ, REFERENCE_WHITES } from "../constants";
import { LAB, LCH, XYZ } from "../interfaces/color-spaces.interface";

export const labToXyz = ({ luminance, a, b }: LAB): XYZ => {
  const fY = (luminance + 16) / 116;
  const z = f(fY - b / 200) * REFERENCE_WHITES.D65.Z * 100 + 0;
  const x = f(a / 500 + fY) * REFERENCE_WHITES.D65.X * 100 + 0;
  const y =
    (luminance > CIE_κ * CIE_ϵ
      ? Math.pow((luminance + 16) / 116, 3)
      : luminance / CIE_κ) *
    REFERENCE_WHITES.D65.Y *
    100 + 0;
  return { x, y, z };
};

const f = (num: number): number => {
  return Math.pow(num, 3) > CIE_ϵ ? Math.pow(num, 3) : (116 * num - 16) / CIE_κ;
};

export const labToLch_ab = ({ luminance, a, b }: LAB): LCH => {
  const hr = Math.atan2(b, a);
  const hue =
    hr < 0 ? (hr * 360) / 2 / Math.PI + 360 : (hr * 360) / 2 / Math.PI;
  const chroma = Math.sqrt(a * a + b * b);

  return { lightness: luminance, chroma, hue };
};
