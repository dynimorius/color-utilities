import { GAMMA_NORMALIZED_BELOW, LINEAR_NORMALIZED_BELOW } from "../constants";
import { RGB } from "../interfaces/color-spaces.interface";

export const isWebSafeRGB = (rgb: RGB): boolean => {
  return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};

export const isWebSafeHex = (color: string) => {
  const hexCheck = ["00", "33", "66", "99", "CC", "FF"];
  return (
    hexCheck.includes(color.slice(0, 2)) &&
    hexCheck.includes(color.slice(2, 2)) &&
    hexCheck.includes(color.slice(4))
  );
};

export const formatValue = (value: number): number => Math.round(value * 100);

export const linearSRGB = (value: number) => {
  value = value / 255;
  return value <= LINEAR_NORMALIZED_BELOW
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
};

export const gammaSrbg = (value: number): number => {
  return (value <= GAMMA_NORMALIZED_BELOW
    ? 12.92 * value
    : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255;
};

export const linearAdobeRgb = (value: number) => {
  value = value / 255;
  return Math.pow(value, 2.199);
};

export const gammaAdobeRgb = (value: number): number => {
  return Math.pow(value, 0.454752) * 255;
};

export const chromaticAdaptation = () => {
  
}
