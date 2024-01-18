import { RGB, RYB } from "../interfaces/color-spaces.interface";

export const rybToRgb = ({red, yellow, blue}: RYB): RGB => {
  const Iw = Math.min(red, yellow, blue);
  const Ib = Math.min(255 - red, 255 - yellow, 255 - blue);
  const rRYB = red - Iw;
  const yRYB = yellow - Iw;
  const bRYB = blue - Iw;
  const minYB = Math.min(yRYB, bRYB);
  const rRGB = rRYB + yRYB - minYB;
  const gRGB = yRYB + minYB;
  const bRGB = 2 * (bRYB - minYB);
  const n = Math.max(rRGB, gRGB, bRGB) / Math.max(rRYB, yRYB, bRYB);
  const N = isNaN(n) || n === Infinity || n <= 0 ? 1 : n;
  return {
      red: rRGB / N + Ib,
      green: gRGB / N + Ib,
      blue: bRGB / N + Ib
  };
};

//---Hue RYB
export const hueRyb = (hue: number, toRYB: boolean): number => {

  if (hue < 0) hue += 360;
  if (hue > 360) hue -= 360;

  if (hue === 360 || hue === 0) return hue;

  const map1: [number, number][] = [
      [0, 120],
      [120, 180],
      [180, 240],
      [240, 360]
  ];
  const map2: [number, number][] = [
      [0, 60],
      [60, 120],
      [120, 240],
      [240, 360]
  ];
  const from = toRYB ? map1 : map2;
  const to = toRYB ? map2 : map1;

  let A = 0;
  let B = 0;
  let C = 0;
  let D = 0;

  from.find((arr: [number, number], index: number): boolean => {
      if (hue >= arr[0] && hue < arr[1]) {
          A = arr[0];
          B = arr[1];
          C = to[index][0];
          D = to[index][1];
          return true;
      }
      return false;
  });

  return C + (hue - A) * ((D - C) / (B - A));

};