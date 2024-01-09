import { RGB } from "../interfaces/color-spaces.interface";

export const decimalToHex = (d: string | number): string => {
  return Math.round(parseFloat(d as string) * 255).toString(16);
};

export const numberToRGB = (color: number): RGB => {
  return {
    red: color >> 16,
    green: (color & 0xff00) >> 8,
    blue: color & 0xff,
  };
};
