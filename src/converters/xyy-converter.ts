import { XYY, XYZ } from "../interfaces/color-spaces.interface";

export const xyYToXyz = ({ x, y, Y }: XYY): XYZ => {
  return { x: (x * Y) / y, y: Y, z: ((1 - x - y) * Y) / y };
};
