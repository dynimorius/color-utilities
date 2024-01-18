import { BRADFORD_CONE_RESPONCE_DOMAINS } from "../constants";
import {
  RGB,
  XYZ,
} from "../interfaces/color-spaces.interface";
import { matrixMlutiVector, matrixMulti3x3 } from "./matrix";

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



export const chromaticAdaptation = (sourceWhite: number[], destinationWhite: number[]): number[][] => {
  const Ma = BRADFORD_CONE_RESPONCE_DOMAINS.MA;
  const Ma_1 = BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
  const PsYsβs = matrixMlutiVector(Ma, sourceWhite)
  const PdYdβd = matrixMlutiVector(Ma, destinationWhite);
  const diff = [
    [PsYsβs[0] / PdYdβd[0], 0, 0],
    [0, PsYsβs[1] / PdYdβd[1], 0],
    [0, 0, PsYsβs[2] / PdYdβd[2]]
  ];

  return matrixMulti3x3(matrixMulti3x3(Ma_1, diff), Ma);
}

export const xyzChromaticAdaptation = (xyz: XYZ, sourceWhite: number[], destinationWhite: number[]): XYZ => {
  const S = [xyz.x, xyz.y, xyz.z];
  const M = chromaticAdaptation(sourceWhite, destinationWhite);
  const D = matrixMlutiVector(M, S);
  return { x: D[0], y: D[1], z: D[2] }
}


