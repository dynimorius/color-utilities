import { MAX_DECIMALS } from "../constants";
import { RGB } from "../interfaces/color-spaces.interface";
import { ColorArray } from "../types";

export const isWebSafeRGB = (rgb: RGB): boolean => {
  return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};

export const isWebSafeHex = () => {};

export const minmax = (n: number, min: number, max: number): number =>
  Math.max(min, Math.min(n, max));

//--Radians to degrees
export const degrees = (radian: number): number => (radian * 180) / Math.PI;

//--Degrees to radians
export const radians = (degrees: number): number => (degrees * Math.PI) / 180;

export const round = (
  value: number | string,
  decimals = MAX_DECIMALS
): number => {
  const exp = Math.pow(10, decimals);
  return Math.round(+value * exp) / exp;
};
