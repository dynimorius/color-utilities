"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = exports.adapt = void 0;
const matrix_1 = require("../helpers/matrix");
const adaptive_matrices_1 = require("../constants/adaptive_matrices");
const convertor_map_1 = require("../color-converter/convertor-map");
/**
 * Preforms a chromatic adaptation on a color in a XYZ space
 *
 * @param {XYZ}			       - color to preform the chromatic adaptation on
 * @param {string}			   - string representation of the adaptation
 * @returns	{XYZ}			     - Chromatically adapted XYZ values
 */
const adapt = (color, adaptation) => {
    return (0, matrix_1.matrixVectorMultiAsXyz)(adaptive_matrices_1.ADAPTIVE_MATRICES[adaptation], color);
};
exports.adapt = adapt;
/**
 * A class used for chromatic adaptation of colors
 * @param { XYZ }	           - color to preform the chromatic adaptation on
 */
class Adapter {
    constructor(color, colorSpace = 'xyz') {
        this.color = color
            ? this.getXyz(color, colorSpace)
            : { x: 95.05, y: 100.0, z: 108.9 };
    }
    getXyz(color, colorSpace) {
        if (colorSpace === 'xyz')
            return color;
        else
            return convertor_map_1.toXyzConverters[colorSpace](color);
    }
    /**
     * Method that returns a chromatically adopted color in a desired color space.
     * @param	{string}						- string representing the adaptation
     * @param	{string}						- string representing the  desired color space of the return values
     * @returns	{AdaptiveColors}  - adapted color
     */
    adapt(adaptation, returnSpace = 'xyz') {
        if (returnSpace === 'xyz') {
            return (0, exports.adapt)(this.color, adaptation);
        }
        else {
            return convertor_map_1.fromXyzConverters[returnSpace]((0, exports.adapt)(this.color, adaptation));
        }
    }
    set(color, colorSpace) {
        this.color = this.getXyz(color, colorSpace ?? 'xyz');
    }
}
exports.Adapter = Adapter;
