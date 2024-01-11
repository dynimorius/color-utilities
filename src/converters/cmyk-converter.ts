import { CMYK, RGB } from "../interfaces/color-spaces.interface";

export const cmykToRgb = ({ cyan, magenta, yellow, key }: CMYK): RGB => {
  key = key / 100;
  const f = (t: number): number =>
    Math.round((1 - Math.min(1, (t / 100) * (1 - key) + key)) * 255);

  return { red: f(cyan), green: f(magenta), blue: f(yellow) };
};
