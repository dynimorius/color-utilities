import { sRgbToHex, sRgbaToHex } from "../converters/rgb-converter";
import { RGB, RGBA } from "../interfaces/color-spaces.interface";
import { MixerOptions } from "../interfaces/mixer.interface";

const scale = (rgb: RGB | RGBA, size: number, scale: number, prefixed?: boolean): string[] => {
  let { red, green, blue } = rgb;
  const scaled = [];
  const scaleR = (scale - red) / size;
  const scaleG = (scale - green) / size;
  const scaleB = (scale - blue) / size;
  for (let i = 0; i < size; i++) {
    if ((rgb as RGBA).alpha)
      scaled.push(sRgbaToHex({ red, green, blue, alpha: (rgb as RGBA).alpha }, prefixed));
    else scaled.push(sRgbToHex({ red, green, blue }, prefixed));
    red += scaleR;
    green += scaleG;
    blue += scaleB;
  }
  return scaled;
};

/*****************************************************
 *  Shades are returned by mixing with black (#000000)
 ****************************************************/
export const getShades = (rgb: RGB | RGBA, options?: MixerOptions): string[] => {
  let size!: number;
  if (!options?.size || !isFinite(options?.size)) {
    size = 10;
  }
  return scale(rgb, size, 0, options?.prefexed);
};

/*****************************************************
 *  Tints are returned by mixing with white (#FFFFFF)
 ****************************************************/
export const getTints = (rgb: RGB | RGBA, options?: MixerOptions): string[] => {
  let size!: number;
  if (!options?.size || !isFinite(options?.size)) {
    size = 10;
  }
  return scale(rgb, size, 1, options?.prefexed);
};

/*****************************************************
 *  Tints are returned by mixing with gray (#777777)
 ****************************************************/
export const getTones = (rgb: RGB | RGBA, options?: MixerOptions): string[] => {
  let size!: number;
  if (!options?.size || !isFinite(options?.size)) {
    size = 10;
  }
  return scale(rgb, size, 0.5, options?.prefexed);
};

