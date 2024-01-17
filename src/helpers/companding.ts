import { CIE_κ, CIE_ϵ, GAMMA_NORMALIZED_BELOW, LINEAR_NORMALIZED_BELOW } from "../constants";
import { RGB, XYZ } from "../interfaces/color-spaces.interface";
import { matrixMlutiVector } from "./matrix";

export const sRgbCompanding = (value: number): number => {
  return (
    (value <= GAMMA_NORMALIZED_BELOW
      ? 12.92 * value
      : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255
  );
};

export const inverseSrbgCompanding = (value: number): number => {
  value = value / 255;
  return value <= LINEAR_NORMALIZED_BELOW
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
};

export const gammaCompanding = (value: number, gamma: number) => {
  return Math.pow(value, 1 / gamma) * 255;
};

export const inverseGammaCompanding = (value: number, gamma: number) => {
  value = value / 255;
  return Math.pow(value, gamma);
};

export const LCompanding = (value: number): number => { 
  value = value / 255;
  return value <= 0.08 ?
    (100 * value) / CIE_κ : Math.pow(((value + 0.16) / 1.16), 3);
}

export const inverseLCompanding = (value: number): number => { 
  value = value / 255;
  return value <= CIE_ϵ ?
    (value * CIE_κ) / 100 : 116 * Math.cbrt(value - 0.16);
}

export const linearCompanding = (xyz: XYZ, matrix: number[][]): RGB => {
  const xyzArr = [xyz.x, xyz.y, xyz.z];
  const rgbArr = matrixMlutiVector(matrix, xyzArr)
  return {red: rgbArr[0], green: rgbArr[1], blue: rgbArr[2]}
}