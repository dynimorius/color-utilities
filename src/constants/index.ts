import { ColorArray } from "../types";

export const LAB_FT = 0.008856451679035631;

export const NORMALIZED_BELOW_10 = 0.03928;

export const MAX_DECIMALS = 6;
export const DEFAULT_BLEND_STEPS = 5;
export const DEFAULT_SHADES_TINTS_STEPS = 5;

// export const MATRIX_LRGB_XYZ_D50: [ColorArray, ColorArray, ColorArray] = [
//   [0.4360747, 0.3850649, 0.1430804],
//   [0.2225045, 0.7168786, 0.0606169],
//   [0.0139322, 0.0971045, 0.7141733]
// ];

// export const MATRIX_XYZ_D50_LRGB: [ColorArray, ColorArray, ColorArray] = [
//   [3.1338561, -1.6168667, -0.4906146],
//   [-0.9787684, 1.9161415, 0.033454],
//   [0.0719453, -0.2289914, 1.4052427]
// ];

// export const TRISTIMULUS_D50 = MATRIX_LRGB_XYZ_D50.map(
//   (matrix: ColorArray): number => {
//     return matrix.reduce(
//       (sum: number, value: number): number => sum + value,
//       0
//     );
//   }
// ) as ColorArray;