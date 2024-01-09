"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebSafe = void 0;
const isWebSafe = (rgb) => {
    return rgb.red % 51 === 0 && rgb.green % 51 === 0 && rgb.blue % 51 === 0;
};
exports.isWebSafe = isWebSafe;
// TODO 
// export const isOutOfGamut = (rgb: RGB): boolean => {
//   const { x, y, z } = rgbToXyz(rgb);
//   return false;
// };
