import { HCG, HWB, RGB } from "../interfaces/color-spaces.interface";

export const hwbToRgb = ({ hue, whiteness, blackness }: HWB): RGB => {
  hue = hue / 360;
  whiteness = whiteness / 100;
  blackness = blackness / 100;
  const ratio = whiteness + blackness;
  let f;

  if (ratio > 1) {
    whiteness /= ratio;
    blackness /= ratio;
  }

  const i = Math.floor(6 * hue);
  const v = 1 - blackness;
  f = 6 * hue - i;

  if ((i & 0x01) !== 0) {
    f = 1 - f;
  }

  const n = whiteness + f * (v - whiteness); // Linear interpolation

  switch (i) {
    case 1:
      return { red: n * 255, green: v * 255, blue: whiteness * 255 };
    case 2:
      return { red: whiteness * 255, green: v * 255, blue: n * 255 };
    case 3:
      return { red: whiteness * 255, green: n * 255, blue: v * 255 };
    case 4:
      return { red: n * 255, green: whiteness * 255, blue: v * 255 };
    case 5:
      return { red: v * 255, green: whiteness * 255, blue: n * 255 };
    case 6:
    case 0:
    default:
      return { red: v * 255, green: n * 255, blue: whiteness * 255 };
  }
};

export const hwbToHcg = ({ hue, whiteness, blackness }: HWB): HCG => {
  whiteness = whiteness / 100;
  blackness = blackness / 100;
  const v = 1 - blackness;
  const chroma = v - whiteness;
  let grayscale = 0;

  if (chroma < 1) {
    grayscale = ((v - chroma) / (1 - chroma)) * 100;
  }

  return { hue, chroma: chroma * 100, grayscale };
};
