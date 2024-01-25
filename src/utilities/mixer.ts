import { sRgbToHex, sRgbaToHex } from "../converters/rgb-converter";
import { RGB, RGBA } from "../interfaces/color-spaces.interface";

const scale = (rgb: RGB | RGBA, size: number, scale: number): string[] => {
  let { red, green, blue } = rgb;
  const scaled = [];
  const scaleR = (scale - red) / size;
  const scaleG = (scale - green) / size;
  const scaleB = (scale - blue) / size;
  for (let i = 0; i < size; i++) {
    if ((rgb as RGBA).alpha)
      scaled.push(sRgbaToHex({ red, green, blue, alpha: (rgb as RGBA).alpha }));
    else scaled.push(sRgbToHex({ red, green, blue }));
    red += scaleR;
    green += scaleG;
    blue += scaleB;
  }
  return scaled;
};

/*****************************************************
 *  Shades are returned by mixing with black (#000000)
 ****************************************************/
export const getShades = (rgb: RGB | RGBA, size?: number): string[] => {
  if (!size || !isFinite(size)) {
    size = 10;
  }
  return scale(rgb, size, 0);
};

/*****************************************************
 *  Tints are returned by mixing with white (#FFFFFF)
 ****************************************************/
export const getTints = (rgb: RGB | RGBA, size?: number): string[] => {
  if (!size || !isFinite(size)) {
    size = 10;
  }
  return scale(rgb, size, 1);
};

/*****************************************************
 *  Tints are returned by mixing with gray (#777777)
 ****************************************************/
export const getTones = (rgb: RGB | RGBA, size?: number): string[] => {
  if (!size || !isFinite(size)) {
    size = 10;
  }
  return scale(rgb, size, 0.5);
};

