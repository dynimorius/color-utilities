import { CIE_κ, CIE_ϵ, REFERENCE_WHITES } from "../constants";
import { LCH, LUV, XYZ } from "../interfaces/color-spaces.interface";
import { Fu, Fv } from "./xyz-converter";

export const luvToLch_uv = ({ L, u, v }: LUV): LCH => {
  const chroma = Math.sqrt(u * u + v * v);
  let hue = (Math.atan2(v, u) * 180) / Math.PI;
  hue = hue >= 0 ? hue : hue + 360;
  return { lightness: L, chroma, hue };
};

export const luvToXyz = ({ L, u, v }: LUV): XYZ => {
  const v0 = Fv({x: REFERENCE_WHITES.D65.X, y: REFERENCE_WHITES.D65.Y, z: REFERENCE_WHITES.D65.Z});
  const u0 = Fu({x: REFERENCE_WHITES.D65.X, y: REFERENCE_WHITES.D65.Y, z: REFERENCE_WHITES.D65.Z});
  const y = (L > CIE_κ * CIE_ϵ) ? Math.pow((L + 16) / 116, 3) : L / CIE_κ;
  const d = y * (39 * L / (v + 13 * L * v0) - 5) || 0;
  const c = -1 / 3;
  const b = -5 * y;
  const a = (52 * L / (u + 13 * L * u0) - 1) / 3 || 0;
  const x = (d - b) / (a - c);
  const z = x * a + b;
  // Add zero to prevent signed zeros (force 0 rather than -0)
  return { x: x * 100 + 0, y: y * 100 + 0, z: z * 100 + 0};
};

