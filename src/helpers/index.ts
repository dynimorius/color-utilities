import { BRADFORD_CONE_RESPONCE_DOMAINS, GAMMA_NORMALIZED_BELOW, LINEAR_NORMALIZED_BELOW } from "../constants";
import {
  CMYK,
  CMYK_M,
  HCG,
  HCG_M,
  HCL,
  HCL_M,
  HSL,
  HSL_M,
  HSV,
  HSV_M,
  HWB,
  HWB_M,
  LAB,
  LAB_M,
  LCH,
  LCH_M,
  LUV,
  RGB,
  RGB_M,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { FULL_HEX, HEX } from "../regex";
import { ColorSpaceUnion } from "../types";

export const isWebSafeRGB = (rgb: RGB): boolean => {
  return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};

export const isWebSafeHex = (color: string) => {
  const hexCheck = ["00", "33", "66", "99", "CC", "FF"];
  return (
    hexCheck.includes(color.slice(0, 2)) &&
    hexCheck.includes(color.slice(2, 2)) &&
    hexCheck.includes(color.slice(4))
  );
};

export const formatValue = (value: number): number => Math.round(value * 100);

export const linearSRGB = (value: number) => {
  value = value / 255;
  return value <= LINEAR_NORMALIZED_BELOW
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
};

export const gammaSrbg = (value: number): number => {
  return (
    (value <= GAMMA_NORMALIZED_BELOW
      ? 12.92 * value
      : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255
  );
};

export const linearRgb = (value: number, gamma: number) => {
  value = value / 255;
  return Math.pow(value, gamma);
};

export const gammaRgb = (value: number, gamma: number) => {
  return Math.pow(value, 1 / gamma) * 255;
};

export const matrice3x3Multiplication = (a: number[][], b: number[][]): number[][] => {
  if (a.length !== 3 || b.length !== 3) throw new Error('Not a 3 x 3 matrix.');
  return [
    [
      (a[0][0] * b[0][0]) + (a[0][1] * b[1][0]) + (a[0][2] * b[2][0]),
      (a[0][0] * b[0][1]) + (a[0][1] * b[1][1]) + (a[0][2] * b[2][1]),
      (a[0][0] * b[0][2]) + (a[0][1] * b[1][2]) + (a[0][2] * b[2][2])
    ],
    [
      (a[1][0] * b[0][0]) + (a[1][1] * b[1][0]) + (a[1][2] * b[2][0]),
      (a[1][0] * b[0][1]) + (a[1][1] * b[1][1]) + (a[1][2] * b[2][1]),
      (a[1][0] * b[0][2]) + (a[1][1] * b[1][2]) + (a[1][2] * b[2][2])
    ],
    [
      (a[2][0] * b[0][0]) + (a[2][1] * b[1][0]) + (a[2][2] * b[2][0]),
      (a[2][0] * b[0][1]) + (a[2][1] * b[1][1]) + (a[2][2] * b[2][1]),
      (a[2][0] * b[0][2]) + (a[2][1] * b[1][2]) + (a[2][2] * b[2][2])
    ]
  ]
}

export const matriceByVectorMultiplication = (matrix: number[][], vector: number[]): number[] => {
  if (matrix.length !== 3) throw new Error('Not a 3 x 3 matrix.');
  if (vector.length !== 3) throw new Error('Not a 3 x vector.');
  return [
    (matrix[0][0] * vector[0]) + (matrix[0][1] * vector[1]) + (matrix[0][2] * vector[2]),
    (matrix[1][0] * vector[0]) + (matrix[1][1] * vector[1]) + (matrix[1][2] * vector[2]),
    (matrix[2][0] * vector[0]) + (matrix[2][1] * vector[1]) + (matrix[2][2] * vector[2])
  ]
}

export const chromaticAdaptation = (sourceWhite: number[], destinationWhite: number[]): number[][] => {
  const Ma = BRADFORD_CONE_RESPONCE_DOMAINS.MA;
  const Ma_1 = BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
  const PsYsβs = matriceByVectorMultiplication(Ma, sourceWhite)
  const PdYdβd = matriceByVectorMultiplication(Ma, destinationWhite);
  const diff = [
    [PsYsβs[0] / PdYdβd[0], 0, 0],
    [0, PsYsβs[1] / PdYdβd[1], 0],
    [0, 0, PsYsβs[2] / PdYdβd[2]]
  ];

  return matrice3x3Multiplication(matrice3x3Multiplication(Ma_1, diff), Ma);
}

export const xyzChromaticAdaptation = (xyz: XYZ, sourceWhite: number[], destinationWhite: number[]): XYZ => {
  const S = [xyz.x, xyz.y, xyz.z];
  const M = chromaticAdaptation(sourceWhite, destinationWhite);
  const D = matriceByVectorMultiplication(M, S);
  return { x: D[0], y: D[1], z: D[2] }
}

export const colorCheck = (color: ColorSpaceUnion): ColorSpaceUnion => {
  const entries = Object.entries(color);
  entries.forEach((entry) => {
    if (isNaN(entry[1])) {
      throw new Error(`Color data is incorrect: ${entry[0]} is not a number.`);
    }
  });
  return color;
}

export const hexColorCheck = (color: string): string => {
  if (new RegExp(FULL_HEX).exec(color)) return color.slice(1).toUpperCase();
  else if (new RegExp(HEX).exec(color)) return color.toUpperCase()
  else throw new Error('Color data is incorrect: color is not a proper hex value.')
};

export const rgbColorCheck = (color: RGB | RGB_M): RGB => {
  const values = Object.values(colorCheck(color));
  return { red: values[0], green: values[1], blue: values[2] };
};

export const hslColorCheck = (color: HSL | HSL_M): HSL => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], saturation:  values[1], lightness: values[2] };
};

export const hsvColorCheck = (color: HSV | HSV_M): HSV => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], saturation: values[1], value: values[2] };
};

export const hwbColorCheck = (color: HWB | HWB_M): HWB => {
  const values = Object.values(colorCheck(color));
  return  { hue: values[0], whiteness: values[1], blackness: values[2] };
};

export const hcgColorCheck = (color: HCG | HCG_M): HCG => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], chroma: values[1], grayscale: values[2] };
};

export const hclColorCheck = (color: HCL | HCL_M): HCL => {
  const values = Object.values(colorCheck(color));
  return { hue: values[0], chroma: values[1], luminance: values[2] };
};

export const labColorCheck = (color: LAB | LAB_M): boolean | LAB => {
  const values = Object.values(colorCheck(color));
  return { luminance: values[0], a: values[1], b: values[2] };
};

export const lchColorCheck = (color: LCH | LCH_M): boolean | LCH => {
  const values = Object.values(colorCheck(color));
  return { lightness: values[0], chroma: values[1], hue: values[2] };
};

export const luvColorCheck = (color: LUV): LUV => {
  const values = Object.values(colorCheck(color));
  return {L: values[0], u: values[1], v: values[2]};
};

export const cmykColorCheck = (color: CMYK | CMYK_M): boolean | CMYK => {
  const values = Object.values(colorCheck(color));
  return { cyan: values[0], magenta: values[1], yellow: values[2], key: values[3] };
};

export const xyzColorCheck = (color: XYZ): XYZ => {
  const values = Object.values(color);
  return {x: values[0], y: values[1], z: values[2]};
};
