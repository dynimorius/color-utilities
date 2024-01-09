import { rgbToXyz } from "../converters/rgb-converter";
import { RGB } from "../interfaces/color-spaces.interface";

export const isWebSafe = (rgb: RGB): boolean => {
  return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};

// TODO 
// export const isOutOfGamut = (rgb: RGB): boolean => {
//   const { x, y, z } = rgbToXyz(rgb);
//   return false;
// };