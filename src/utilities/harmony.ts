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

export const complementaryHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.complementary);
  return harmonizeHsl(hsl, HARMONIES.complementary);
};

export const splitComplementaryHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.splitComplementary);
  return harmonizeHsl(hsl, HARMONIES.splitComplementary);
};

export const splitComplementaryCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.splitComplementaryCW);
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW);
};

export const splitComplementaryCCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.splitComplementaryCCW);
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW);
};

export const triadicHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.triadic);
  return harmonizeHsl(hsl, HARMONIES.triadic);
};

export const clashHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.clash);
  return harmonizeHsl(hsl, HARMONIES.clash);
};

export const tetradicHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.tetradic);
  return harmonizeHsl(hsl, HARMONIES.tetradic);
};

export const fourToneCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fourToneCW);
  return harmonizeHsl(hsl, HARMONIES.fourToneCW);
};

export const fourToneCCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fourToneCCW);
  return harmonizeHsl(hsl, HARMONIES.fourToneCCW);
};

export const fiveToneAHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fiveToneA);
  return harmonizeHsl(hsl, HARMONIES.fiveToneA);
};

export const fiveToneBHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fiveToneB);
  return harmonizeHsl(hsl, HARMONIES.fiveToneB);
};

export const fiveToneCHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fiveToneC);
  return harmonizeHsl(hsl, HARMONIES.fiveToneC);
};

export const fiveToneDHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fiveToneD);
  return harmonizeHsl(hsl, HARMONIES.fiveToneD);
};

export const fiveToneEHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.fiveToneE);
  return harmonizeHsl(hsl, HARMONIES.fiveToneE);
};

export const sixToneCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.sixToneCW);
  return harmonizeHsl(hsl, HARMONIES.sixToneCW);
};

export const sixToneCCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.sixToneCCW);
  return harmonizeHsl(hsl, HARMONIES.sixToneCCW);
};

export const neutralHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.neutral);
  return harmonizeHsl(hsl, HARMONIES.neutral);
};

export const analogousHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  if ((hsl as HSLA).alpha) return harmonizeHsla(hsl as HSLA, HARMONIES.analogous);
  return harmonizeHsl(hsl, HARMONIES.analogous);
};
