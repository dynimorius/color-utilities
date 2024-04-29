/**
 * Calculates Delta Chroma (chroma difference).
 * @param {number}                 - a value
 * @param {number}                 - b value
 * @returns {number}               - chroma value
 */
export const getDeltaChroma = (a: number, b: number): number => {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};
