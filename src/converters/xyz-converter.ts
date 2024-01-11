import { LAB_FT, TRISTIMULUS_D50 } from "../constants";
import { LAB, RGB, XYZ } from "../interfaces/color-spaces.interface";
import { ColorArray } from "../types";

const from_CIE_XYZ_D50_to_CIE_LAB = (
  x: number,
  y: number,
  z: number
): ColorArray => {
  const f = (t: number): number => {
    return t > (6 / 29) ** 3 ? Math.cbrt(t) : t / (3 * (6 / 29) ** 2) + 4 / 29;
  };
  const fx = f(x / TRISTIMULUS_D50[0]);
  const fy = f(y / TRISTIMULUS_D50[1]);
  const fz = f(z / TRISTIMULUS_D50[2]);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
};

export const xyzToRgb = ({ x, y, z }: XYZ): RGB => {
  x = x / 100;
  y = y / 100;
  z = z / 100;
  let red;
  let green;
  let blue;

  red = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
  green = x * -0.969266 + y * 1.8760108 + z * 0.041556;
  blue = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;

  // Assume sRGB
  red = red > 0.0031308 ? 1.055 * red ** (1.0 / 2.4) - 0.055 : red * 12.92;
  green = green > 0.0031308 ? 1.055 * green ** (1.0 / 2.4) - 0.055 : green * 12.92;
  blue = blue > 0.0031308 ? 1.055 * blue ** (1.0 / 2.4) - 0.055 : blue * 12.92;

  red = (Math.min(Math.max(0, red), 1))* 255;
  green = (Math.min(Math.max(0, green), 1)) * 255;
  blue = (Math.min(Math.max(0, blue), 1)) * 255;

  return { red, green, blue };
};

export const xyzToLab = ({ x, y, z }: XYZ): LAB => {
  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
  y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
  z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;

  const luminance = 116 * y - 16;
  const a = 500 * (x - y);
  const b = 200 * (y - z);

  return { luminance, a, b };
};