import { LAB, LCH, LUV, XYZ } from "../interfaces/color-spaces.interface";
import { labToXyz } from "./lab-converter";
import { luvToXyz } from "./luv-converter";

export const lch_abToLab = ({ lightness, chroma, hue }: LCH): LAB => {
  const H = (hue / 180) * Math.PI;
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

export const lch_abToXyz = (lch: LCH): XYZ => {
  return labToXyz(lch_abToLab(lch));
}

export const lch_uvToXyz = (lch: LCH): XYZ => {
  return luvToXyz(lch_uvToLuv(lch));
}