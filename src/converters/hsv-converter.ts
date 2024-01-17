import { HCG, HSL, HSV, RGB } from "../interfaces/color-spaces.interface";
import { rgbToAnsi16 } from "./rgb-converter";

export const hsvToRgb = ({ hue, saturation, value }: HSV): RGB => {
  hue = (hue / 360) * 6;
  saturation = saturation / 100;
  value = value / 100;

  const i = Math.floor(hue);
  const f = hue - i;
  const p = value * (1 - saturation);
  const q = value * (1 - f * saturation);
  const t = value * (1 - (1 - f) * saturation);
  const mod = i % 6;
  const red = Math.ceil([value, q, p, p, t, value][mod] * 255);
  const green = Math.ceil([t, value, value, q, p, p][mod] * 255);
  const blue = Math.ceil([p, p, t, value, value, q][mod] * 255);

  return { red, green, blue };
};

export const hsvToHsl = ({ hue, saturation, value }: HSV): HSL => {
  saturation = saturation / 100;
  value = value / 100;
  const vmin = Math.max(value, 0.01);
  let hslSaturation;
  let lightness;

  lightness = (2 - saturation) * value;
  const lmin = (2 - saturation) * vmin;
  hslSaturation = saturation * vmin;
  hslSaturation /= lmin <= 1 ? lmin : 2 - lmin;
  hslSaturation = hslSaturation || 0;
  lightness /= 2;

  return { hue, saturation: hslSaturation * 100, lightness: lightness * 100 };
};

export const hsvToAnsi16 = (hsv: HSV): number => {
  const rgb = hsvToRgb(hsv);
  return rgbToAnsi16(rgb, hsv.value);
};

export const hsvToHcg = ({ hue, saturation, value }: HSV): HCG => {
  saturation = saturation / 100;
  value = value / 100;

  const chroma = saturation * value;
  let grayscale = 0;

  if (chroma < 1.0) {
    grayscale = ((value - chroma) / (1 - chroma)) * 100;
  }

  return { hue, chroma: chroma * 100, grayscale };
};
