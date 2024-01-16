import { LAB_FT } from "../constants";
import { LAB, LCH, XYZ } from "../interfaces/color-spaces.interface";


export const labToXyz = ({ luminance, a, b }: LAB): XYZ => {
  const f = (t: number): number => {
    const t3 = t ** 3;
    return t3 > LAB_FT ? t3 : (t - 0.137) / 7.787;
  };
  const y2 = (luminance + 16) / 116;
  const x = f(a / 500 + y2) * 95.047;
  const z = f(y2 - b / 200) * 108.883;
  const y = f(y2) * 100;

  return { x, y, z };
};

export const labToLch_ab = ({ luminance, a, b }: LAB): LCH => {
  const hr = Math.atan2(b, a);
  const hue = hr < 0 ? ((hr * 360) / 2 / Math.PI) + 360 : (hr * 360) / 2 / Math.PI;
  const chroma = Math.sqrt(a * a + b * b);

  return { lightness: luminance, chroma, hue };
};
