"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorCheckerMap = void 0;
const helpers_1 = require("../helpers");
exports.colorCheckerMap = {
    hex: helpers_1.hexColorCheck,
    rgb: helpers_1.rgbColorCheck,
    hsl: helpers_1.hslColorCheck,
    hsv: helpers_1.hsvColorCheck,
    hwb: helpers_1.hwbColorCheck,
    hcg: helpers_1.hcgColorCheck,
    hcl: helpers_1.hclColorCheck,
    lab: helpers_1.labColorCheck,
    lch: helpers_1.lchColorCheck,
    luv: helpers_1.luvColorCheck,
    cmyk: helpers_1.cmykColorCheck,
    xyz: helpers_1.xyzColorCheck
};
