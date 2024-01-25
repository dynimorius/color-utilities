import { HARMONIES } from "../constants/harmonies";
import { HSL, HSLA, hslToHex, hslaToHex } from "../public_api";

const harmonizeHsl = (
  hsl: HSL | HSLA,
  degrees: number[],
  prefixed?: boolean
): string[] => {
  const harmonized: string[] = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue: number = (hsl.hue + (1 / 360) * degree) % 1;
      if ((hsl as HSLA).alpha) {
        harmonized.push(
          hslaToHex(
            {
              hue: harmonizedHue,
              saturation: hsl.saturation,
              lightness: hsl.lightness,
              alpha: (hsl as HSLA).alpha,
            },
            prefixed
          )
        );
      } else {
        harmonized.push(
          hslToHex(
            {
              hue: harmonizedHue,
              saturation: hsl.saturation,
              lightness: hsl.lightness,
            },
            prefixed
          )
        );
      }
    }
  });
  return harmonized;
};

export const complementaryHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.complementary, prefixed);
};

export const splitComplementaryHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementary, prefixed);
};

export const splitComplementaryCWHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW, prefixed);
};

export const splitComplementaryCCWHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW, prefixed);
};

export const triadicHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.triadic, prefixed);
};

export const clashHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.clash, prefixed);
};

export const tetradicHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.tetradic, prefixed);
};

export const fourToneCWHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCW, prefixed);
};

export const fourToneCCWHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCCW, prefixed);
};

export const fiveToneAHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneA, prefixed);
};

export const fiveToneBHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneB, prefixed);
};

export const fiveToneCHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneC, prefixed);
};

export const fiveToneDHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneD, prefixed);
};

export const fiveToneEHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneE, prefixed);
};

export const sixToneCWHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCW, prefixed);
};

export const sixToneCCWHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCCW, prefixed);
};

export const neutralHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.neutral, prefixed);
};

export const analogousHarmonyHsl = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.analogous, prefixed);
};
