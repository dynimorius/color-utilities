import { HCG, HSL, HSV, RGB } from "../interfaces/color-spaces.interface";
import { hueToRorGorB } from "./hue-converter";

export const hslToRgb = ({ hue, saturation, lightness }: HSL): RGB => {
  hue = hue / 360;
  saturation = saturation / 100;
  lightness = lightness / 100;

  if (saturation === 0) {
    return { red: lightness, green: lightness, blue: lightness };
  }

  const q =
    lightness < 0.5
      ? lightness * (1 + saturation)
      : lightness + saturation - lightness * saturation;
  const p = 2 * lightness - q;
  const red = hueToRorGorB(p, q, hue + 1 / 3) * 255;
  const green = hueToRorGorB(p, q, hue) * 255;
  const blue = hueToRorGorB(p, q, hue - 1 / 3) * 255;
  return { red, green, blue };
};

export const hslToHsv = ({ hue, saturation, lightness }: HSL): HSV => {
  saturation = saturation / 100;
  lightness = lightness / 100;
  let smin = saturation;
  const lmin = Math.max(lightness, 0.01);

  lightness *= 2;
  saturation *= lightness <= 1 ? lightness : 2 - lightness;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const value = ((lightness + saturation) / 2) * 100;
  const hsvSaturation =
    (lightness === 0
      ? (2 * smin) / (lmin + smin)
      : (2 * saturation) / (lightness + saturation)) * 100;

  return { hue, saturation: hsvSaturation, value };
};

export const hslToHcg = ({ hue, saturation, lightness }: HSL): HCG => {
  saturation = saturation / 100;
  lightness = lightness / 100;

  const chroma =
    lightness < 0.5
      ? 2.0 * saturation * lightness
      : 2.0 * saturation * (1.0 - lightness);

  let grayscale = 0;
  if (chroma < 1.0) {
    grayscale = (lightness - 0.5 * chroma) / (1.0 - chroma);
  }

  return { hue, chroma: chroma * 100, grayscale: grayscale * 100 };
};
