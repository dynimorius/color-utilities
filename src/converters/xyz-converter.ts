import { LAB_FT } from "../constants";
import { LAB, RGB, XYZ } from "../interfaces/color-spaces.interface";

export const xyzToRgb = ({ x, y, z }: XYZ): RGB => {
  const f = (t: number): number => {
    return t > 0.0031308 ? 1.055 * t ** 0.416666 - 0.055 : t * 12.92;
  };
  x = x / 100;
  y = y / 100;
  z = z / 100;

  let red = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
  let green = x * -0.969266 + y * 1.8760108 + z * 0.041556;
  let blue = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;

  red = Math.round(Math.min(Math.max(0, f(red)), 1) * 255);
  green = Math.round(Math.min(Math.max(0, f(green)), 1) * 255);
  blue = Math.round(Math.min(Math.max(0, f(blue)), 1) * 255);

  return { red, green, blue };
};

export const xyzToLab = ({ x, y, z }: XYZ): LAB => {
  const f = (t: number): number => {
    return t > LAB_FT ? t ** 0.33333 : 7.787 * t + 0.13793;
  };

  x = f(x / 95.047);
  y = f(y / 100);
  z = f(z / 108.883);

  const luminance = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return { luminance, a, b };
};
