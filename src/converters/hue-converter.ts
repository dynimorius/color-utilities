import { round } from "../helpers";

export const hueToRGB = (t1: number, t2: number, hue: number): number => {
  if (hue < 0) {
    hue += 6;
  }
  if (hue >= 6) {
    hue -= 6;
  }
  if (hue < 1) {
    return round(((t2 - t1) * hue + t1) * 255);
  } else if (hue < 3) {
    return round(t2 * 255);
  } else if (hue < 4) {
    return round(((t2 - t1) * (4 - hue) + t1) * 255);
  } else {
    return round(t1 * 255);
  }
};
