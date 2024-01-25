import { HSL, HSLA, HSV, RGB } from "../interfaces/color-spaces.interface";

export const hslToRgb = ({ hue, saturation, lightness }: HSL): RGB => {
  saturation /= 100;
  lightness /= 100;

  const k = (n: number): number => (n + hue / 30) % 12;
  const a = saturation * Math.min(lightness, 1 - lightness);
  const f = (n: number): number =>
    Math.round(
      (lightness -
        a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))) *
        255
    );

  return { red: f(0), green: f(8), blue: f(4) };
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

export const hslToHex = ({ hue, saturation, lightness }: HSL, prefixed?: boolean): string => {
  lightness /= 100;
  const a = (saturation * Math.min(lightness, 1 - lightness)) / 100;
  const f = (n: number) => {
    const k = (n + hue / 30) % 12;
    const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };

  return (prefixed ? '#' : '') + `${f(0)}${f(8)}${f(4)}`.toLocaleUpperCase();
};

export const hslaToHex = ({
  hue,
  saturation,
  lightness,
  alpha,
}: HSLA, prefixed?: boolean): string => {
  lightness /= 100;
  const a = (saturation * Math.min(lightness, 1 - lightness)) / 100;
  const f = (n: number) => {
    const k = (n + hue / 30) % 12;
    const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  const alphaHex = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0");

  return (prefixed ? '#' : '') + `${f(0)}${f(8)}${f(4)}${alphaHex}`.toLocaleUpperCase();
};
