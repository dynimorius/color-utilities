import { LAB, LCH, LUV } from "../interfaces/color-spaces.interface";

export const lch_abToLab = ({ lightness, chroma, hue }: LCH): LAB => {
  const H = (hue * 180) * Math.PI;
  const a = chroma * Math.cos(H);
  const b = chroma * Math.sin(H);

  return {luminance: lightness, a, b };
};

export const lch_uvToLuv = ({ lightness, chroma, hue }: LCH): LUV => {
  const H = (hue / 180) * Math.PI;
  const u = chroma * Math.cos(H);
  const v = chroma * Math.sin(H);

  return {L: lightness, u, v };
};