import { LAB, LCH } from "../interfaces/color-spaces.interface";

export const lchToLab = ({ lightness, chroma, hue }: LCH): LAB => {
  const hr = (hue / 360) * 2 * Math.PI;
  const a = chroma * Math.cos(hr);
  const b = chroma * Math.sin(hr);

  return {luminance: lightness, a, b };
};