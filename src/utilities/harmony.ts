import { HARMONIES } from "../constants/harmonies";
import { HSL, HSLA, hslToHex, hslaToHex } from "../public_api";

const harmonizeHsl = (hsl: HSL | HSLA, degrees: number[]): string[] => {
  const harmonized: string[] = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue: number = (hsl.hue + ((1 / 360) * degree)) % 1;
      if ((hsl as HSLA).alpha) {
        harmonized.push(
          hslaToHex({
            hue: harmonizedHue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
            alpha: (hsl as HSLA).alpha,
          })
        );
      } else {
        harmonized.push(
          hslToHex({
            hue: harmonizedHue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
          })
        );
      }
    }
  });
  return harmonized;
};

export const complementaryHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.complementary);
};

export const splitComplementaryHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementary);
};

export const splitComplementaryCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW);
};

export const splitComplementaryCCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW);
};

export const triadicHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.triadic);
};

export const clashHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.clash);
};

export const tetradicHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.tetradic);
};

export const fourToneCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCW);
};

export const fourToneCCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCCW);
};

export const fiveToneAHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneA);
};

export const fiveToneBHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneB);
};

export const fiveToneCHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneC);
};

export const fiveToneDHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneD);
};

export const fiveToneEHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneE);
};

export const sixToneCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCW);
};

export const sixToneCCWHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCCW);
};

export const neutralHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.neutral);
};

export const analogousHarmonyHsl = (hsl: HSLA | HSL): string[] => {
  return harmonizeHsl(hsl, HARMONIES.analogous);
};
