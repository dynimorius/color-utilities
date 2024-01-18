"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xyYToXyz = void 0;
const xyYToXyz = ({ x, y, Y }) => {
    return { x: (x * Y) / y, y: Y, z: ((1 - x - y) * Y) / y };
};
exports.xyYToXyz = xyYToXyz;
