import { SPACE_MATRICES } from "../constants";
import { linearAdobeRgb } from "../helpers";
import { RGB, XYZ } from "../interfaces/color-spaces.interface";

export const adobeRgbToXyz = ({ red, green, blue }: RGB): XYZ => {
  const Rlin = linearAdobeRgb(red);
  const Glin = linearAdobeRgb(green);
  const Blin = linearAdobeRgb(blue);
  const { X, Y, Z } = SPACE_MATRICES.ADOBE_RGB_1998.RGB_TO_XYZ;
  const x = (Rlin * X.r + Glin * X.g + Blin * X.b) * 100;
  const y = (Rlin * Y.r + Glin * Y.g + Blin * Y.b) * 100;
  const z = (Rlin * Z.r + Glin * Z.g + Blin * Z.b) * 100;
  return { x, y, z };
}

