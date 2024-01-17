"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorCheckerMap = void 0;
const color_checks_1 = require("../helpers/color-checks");
exports.colorCheckerMap = {
    hex: color_checks_1.hexColorCheck,
    rgb: color_checks_1.rgbColorCheck,
    hsl: color_checks_1.hslColorCheck,
    hsv: color_checks_1.hsvColorCheck,
    hwb: color_checks_1.hwbColorCheck,
    hcg: color_checks_1.hcgColorCheck,
    hcl: color_checks_1.hclColorCheck,
    lab: color_checks_1.labColorCheck,
    lch: color_checks_1.lchColorCheck,
    luv: color_checks_1.luvColorCheck,
    cmyk: color_checks_1.cmykColorCheck,
    xyz: color_checks_1.xyzColorCheck
};
