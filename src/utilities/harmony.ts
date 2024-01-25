import { HARMONIES } from "../constants/harmonies";
import { HSL, HSLA, hslToHex } from "../public_api";

const harmonizeHsl = (
  hsl: HSL | HSLA,
  degrees: number[],
  prefixed?: boolean
): string[] => {
  const harmonized: string[] = [];
  degrees.forEach((degree) => {
    if (isFinite(degree)) {
      const harmonizedHue: number = (hsl.hue + degree) % 360;
      harmonized.push(
        hslToHex(
          {
            hue: harmonizedHue,
            saturation: hsl.saturation,
            lightness: hsl.lightness,
            alpha: (hsl as HSLA).alpha,
          },
          prefixed
        )
      );
    }
  });
  return harmonized;
};

export const complementaryHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.complementary, prefixed);
};

export const splitComplementaryHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementary, prefixed);
};

export const splitComplementaryCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCW, prefixed);
};

export const splitComplementaryCCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.splitComplementaryCCW, prefixed);
};

export const triadicHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.triadic, prefixed);
};

export const clashHarmony = (hsl: HSLA | HSL, prefixed?: boolean): string[] => {
  return harmonizeHsl(hsl, HARMONIES.clash, prefixed);
};

export const tetradicHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.tetradic, prefixed);
};

export const fourToneCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCW, prefixed);
};

export const fourToneCCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fourToneCCW, prefixed);
};

export const fiveToneAHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneA, prefixed);
};

export const fiveToneBHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneB, prefixed);
};

export const fiveToneCHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneC, prefixed);
};

export const fiveToneDHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneD, prefixed);
};

export const fiveToneEHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.fiveToneE, prefixed);
};

export const sixToneCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCW, prefixed);
};

export const sixToneCCWHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.sixToneCCW, prefixed);
};

export const neutralHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.neutral, prefixed);
};

export const analogousHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.analogous, prefixed);
};

export const squareHarmony = (
  hsl: HSLA | HSL,
  prefixed?: boolean
): string[] => {
  return harmonizeHsl(hsl, HARMONIES.square, prefixed);
};
