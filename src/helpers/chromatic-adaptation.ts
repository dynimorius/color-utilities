import { BRADFORD_CONE_RESPONCE_DOMAINS, REFERENCE_WHITES } from "../constants";
import { XYZ } from "../interfaces/color-spaces.interface";
import { matrixMlutiVector, matrixMulti3x3 } from "./matrix";

export const chromaticAdaptation = (
  sourceWhite: number[],
  destinationWhite: number[]
): number[][] => {
  const Ma = BRADFORD_CONE_RESPONCE_DOMAINS.MA;
  const Ma_1 = BRADFORD_CONE_RESPONCE_DOMAINS.MA_1;
  const PYβs = matrixMlutiVector(Ma, sourceWhite);
  const PYβd = matrixMlutiVector(Ma, destinationWhite);
  const diff = [
    [PYβs[0] / PYβd[0], 0, 0],
    [0, PYβs[1] / PYβd[1], 0],
    [0, 0, PYβs[2] / PYβd[2]],
  ];

  return matrixMulti3x3(matrixMulti3x3(Ma_1, diff), Ma);
};

export const D50toD65Adaptation = (xyz: XYZ) => {
  const M = chromaticAdaptation(
    [REFERENCE_WHITES.D50.X, REFERENCE_WHITES.D50.Y, REFERENCE_WHITES.D50.Z],
    [REFERENCE_WHITES.D65.X, REFERENCE_WHITES.D65.Y, REFERENCE_WHITES.D65.Z]
  );
  const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
  const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
  const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
  return { x, y, z };
};

export const D65toD50Adaptation = (xyz: XYZ) => {
  const M = chromaticAdaptation(
    [REFERENCE_WHITES.D65.X, REFERENCE_WHITES.D65.Y, REFERENCE_WHITES.D65.Z],
    [REFERENCE_WHITES.D50.X, REFERENCE_WHITES.D50.Y, REFERENCE_WHITES.D50.Z]
  );
  const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
  const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
  const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
  return { x, y, z };
};

export const CtoD65Adaptation = (xyz: XYZ) => {
  const M = chromaticAdaptation(
    [REFERENCE_WHITES.C.X, REFERENCE_WHITES.C.Y, REFERENCE_WHITES.C.Z],
    [REFERENCE_WHITES.D65.X, REFERENCE_WHITES.D65.Y, REFERENCE_WHITES.D65.Z]
  );
  const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
  const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
  const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
  return { x, y, z };
};

export const D65toCAdaptation = (xyz: XYZ) => {
  const M = chromaticAdaptation(
    [REFERENCE_WHITES.D65.X, REFERENCE_WHITES.D65.Y, REFERENCE_WHITES.D65.Z],
    [REFERENCE_WHITES.C.X, REFERENCE_WHITES.C.Y, REFERENCE_WHITES.C.Z]
  );
  const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
  const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
  const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
  return { x, y, z };
};

export const EtoD65Adaptation = (xyz: XYZ) => {
  const M = chromaticAdaptation(
    [REFERENCE_WHITES.E.X, REFERENCE_WHITES.E.Y, REFERENCE_WHITES.E.Z],
    [REFERENCE_WHITES.D65.X, REFERENCE_WHITES.D65.Y, REFERENCE_WHITES.D65.Z]
  );
  const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
  const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
  const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
  return { x, y, z };
};

export const D65toEAdaptation = (xyz: XYZ) => {
  const M = chromaticAdaptation(
    [REFERENCE_WHITES.D65.X, REFERENCE_WHITES.D65.Y, REFERENCE_WHITES.D65.Z],
    [REFERENCE_WHITES.E.X, REFERENCE_WHITES.E.Y, REFERENCE_WHITES.E.Z]
  );
  const x = M[0][0] * xyz.x + M[0][1] * xyz.y + M[0][2] * xyz.z;
  const y = M[1][0] * xyz.x + M[1][1] * xyz.y + M[1][2] * xyz.z;
  const z = M[2][0] * xyz.x + M[2][1] * xyz.y + M[2][2] * xyz.z;
  return { x, y, z };
};
