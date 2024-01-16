import { LCH, LUV } from "../interfaces/color-spaces.interface";

export const luvToLch_uv = ({ L, u, v }: LUV): LCH => {
  const chroma = Math.sqrt(u * u + v * v);
  let hue = Math.atan2(v, u) * 180 / Math.PI;
  hue = hue >= 0 ? hue : hue + 360
  return {lightness: L, chroma, hue }
}