import { MAX_DECIMALS } from "../constants";
import {
  RGB,
} from "../interfaces/color-spaces.interface";
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

export const gamutCheck = (value: number): boolean => {
  return !isNaN(value) && value >= 0 && value <= 255;
}


export const formatValue = (value: number): number => Math.round(value * 100);

export const bound = (value: number): number => {
  return value < 0 ? 0 : value > 255 ? 255 : value; 
}

export const round = (value: number, decimals = MAX_DECIMALS): number => {
  const exp = Math.pow(10, decimals);
  return Math.round(+value * exp) / exp;
};

