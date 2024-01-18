import { BRADFORD_CONE_RESPONCE_DOMAINS, REFERENCE_WHITES } from "../constants";
import { XYZ } from "../interfaces/color-spaces.interface";
import { Matrix3x3 } from "../types/math-types";
import { matrix3x3Multi, matrixVectorMulti, matrixVectorMultiAsXyz, } from "./matrix";

export const linearTransformation = (
  sourceWhite: number[],
  destinationWhite: number[]
): Matrix3x3 => {
  const Ma = BRADFORD_CONE_RESPONCE_DOMAINS.MA;
  const Ma_1 = BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
  const PYβs = matrixVectorMulti(Ma, sourceWhite);
  const PYβd = matrixVectorMulti(Ma, destinationWhite);
  const diff: Matrix3x3 = [
    [PYβs[0] / PYβd[0], 0, 0],
    [0, PYβs[1] / PYβd[1], 0],
    [0, 0, PYβs[2] / PYβd[2]],
  ];

  return matrix3x3Multi(matrix3x3Multi(Ma_1, diff), Ma);
};

export const chromaticAdaptation = (
  xyz: XYZ,
  sRefWhite: { X: number; Y: number; Z: number },
  dRefWhite: { X: number; Y: number; Z: number }
) => {
  const M = linearTransformation(
    [sRefWhite.X, sRefWhite.Y, sRefWhite.Z],
    [dRefWhite.X, dRefWhite.Y, dRefWhite.Z]
  );
  return matrixVectorMultiAsXyz(M, xyz);
};

export const D50toD65Adaptation = (xyz: XYZ) => {
  return chromaticAdaptation(xyz, REFERENCE_WHITES.D50, REFERENCE_WHITES.D65);
};

export const D65toD50Adaptation = (xyz: XYZ) => {
  return chromaticAdaptation(xyz, REFERENCE_WHITES.D65, REFERENCE_WHITES.D50);
};

export const CtoD65Adaptation = (xyz: XYZ) => {
  return chromaticAdaptation(xyz, REFERENCE_WHITES.C, REFERENCE_WHITES.D65);
};

export const D65toCAdaptation = (xyz: XYZ) => {
  return chromaticAdaptation(xyz, REFERENCE_WHITES.D65, REFERENCE_WHITES.C);
};

export const EtoD65Adaptation = (xyz: XYZ) => {
  return chromaticAdaptation(xyz, REFERENCE_WHITES.E, REFERENCE_WHITES.D65);
};

export const D65toEAdaptation = (xyz: XYZ) => {
  return chromaticAdaptation(xyz, REFERENCE_WHITES.D65, REFERENCE_WHITES.E);
};
