import { HARMONIES } from "../constants/harmonies";
import { HSL, HSLA, hslToHex, hslaToHex } from "../public_api";

const harmonizeHsl = (hsl: HSL, degrees: number[]): string[] => {
  const harmonized: string[] = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue: number = (hsl.hue + (1 / 360) * degree) % 1;
      harmonized.push(
        hslToHex({
          hue: harmonizedHue,
          saturation: hsl.saturation,
          lightness: hsl.lightness,
        })
      );
    }
  });
  return harmonized;
};

const harmonizeHsla = (hsl: HSLA, degrees: number[]): string[] => {
  const harmonized: string[] = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue: number = (hsl.hue + (1 / 360) * degree) % 1;
      harmonized.push(
        hslaToHex({
          hue: harmonizedHue,
          saturation: hsl.saturation,
          lightness: hsl.lightness,
          alpha: hsl.alpha,
        })
      );
    }
  });
  return harmonized;
};

export const complementaryHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.complementary);
  return harmonizeHsl(hsl, HARMONIES.complementary);
};

export const splitComplementaryHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.splitComplementary);
  return harmonizeHsl(hsl, HARMONIES.splitComplementary);
};

export const splitComplementaryCWHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.splitComplementaryCW);
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW);
};

export const splitComplementaryCCWHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.splitComplementaryCCW);
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW);
};

export const triadicHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.triadic);
  return harmonizeHsl(hsl, HARMONIES.triadic);
};

export const clashHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.clash);
  return harmonizeHsl(hsl, HARMONIES.clash);
};

export const tetradicHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.tetradic);
  return harmonizeHsl(hsl, HARMONIES.tetradic);
};

export const fourToneCWHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fourToneCW);
  return harmonizeHsl(hsl, HARMONIES.fourToneCW);
};

export const fourToneCCWHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fourToneCCW);
  return harmonizeHsl(hsl, HARMONIES.fourToneCCW);
};

export const fiveToneAHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fiveToneA);
  return harmonizeHsl(hsl, HARMONIES.fiveToneA);
};

export const fiveToneBHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fiveToneB);
  return harmonizeHsl(hsl, HARMONIES.fiveToneB);
};

export const fiveToneCHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fiveToneC);
  return harmonizeHsl(hsl, HARMONIES.fiveToneC);
};

export const fiveToneDHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fiveToneD);
  return harmonizeHsl(hsl, HARMONIES.fiveToneD);
};

export const fiveToneEHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.fiveToneE);
  return harmonizeHsl(hsl, HARMONIES.fiveToneE);
};

export const sixToneCWHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.sixToneCW);
  return harmonizeHsl(hsl, HARMONIES.sixToneCW);
};

export const sixToneCCWHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.sixToneCCW);
  return harmonizeHsl(hsl, HARMONIES.sixToneCCW);
};

export const neutralHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.neutral);
  return harmonizeHsl(hsl, HARMONIES.neutral);
};

export const analogousHarmonyHsl = (hsl: HSLA): string[] => {
  if (hsl.alpha) return harmonizeHsla(hsl, HARMONIES.analogous);
  return harmonizeHsl(hsl, HARMONIES.analogous);
};
