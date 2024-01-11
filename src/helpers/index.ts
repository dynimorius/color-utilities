import { RGB } from "../interfaces/color-spaces.interface";

export const isWebSafeRGB = (rgb: RGB): boolean => {
  return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};

export const isWebSafeHex = () => {};

