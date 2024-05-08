"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeltaChroma = void 0;
/**
 * Calculates Delta Chroma (chroma difference).
 * @param {number}                 - a value
 * @param {number}                 - b value
 * @returns {number}               - chroma value
 */
const getDeltaChroma = (a, b) => {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};
exports.getDeltaChroma = getDeltaChroma;
