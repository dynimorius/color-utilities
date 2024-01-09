import { LAB, LCH, XYZ } from "../interfaces/color-spaces.interface";
import { LAB_FT } from "../shared";

export const labToXyz = ({ luminance, a, b }: LAB): XYZ => {
  let x;
  let y;
  let z;

  y = (luminance + 16) / 116;
  x = a / 500 + y;
  z = y - b / 200;

  const y2 = y ** 3;
  const x2 = x ** 3;
  const z2 = z ** 3;
  y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
  x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
  z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;

  x *= 95.047;
  y *= 100;
  z *= 108.883;

  return { x, y, z };
};

export const labToLch = ({ luminance, a, b }: LAB): LCH => {
  let hue;

  const hr = Math.atan2(b, a);
  hue = (hr * 360) / 2 / Math.PI;

  if (hue < 0) {
    hue += 360;
  }

  const chroma = Math.sqrt(a * a + b * b);

  return { lightness: luminance, chroma, hue };
};