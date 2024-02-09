import { Matrix3x3 } from "../types/math-types";

export interface Coefficients {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
}

export interface CoefficientsMatrices {
  RGB_TO_FULL_RANGE_YCBCR: Matrix3x3;
  FULL_RANGE_YCBCR_TO_RGB: Matrix3x3;
  RGB_TO_YDBDR: Matrix3x3;
  YDBDR_TO_RGB: Matrix3x3;
  RGB_TO_YPBPR: Matrix3x3;
  YPBPR_TO_RGB: Matrix3x3;
  RGB_TO_YIQ: Matrix3x3;
  YIQ_TO_RGB: Matrix3x3;
  RGB_TO_HDTV_YPBPR: Matrix3x3;
  HDTV_YPBPR_TO_RGB: Matrix3x3;
  RGB_TO_YCBCR: Matrix3x3;
  YCBCR_TO_RGB: Matrix3x3;
  RGB_TO_YCCRCCBC: Matrix3x3;
  YCCRCCBC_TO_RGB: Matrix3x3;
  RGB_TO_HDTV_YCBCR: Matrix3x3;
  HDTV_YCBCR_TO_RGB: Matrix3x3;
  RGB_TO_YCOCG: Matrix3x3;
}