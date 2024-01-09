"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGBResolver = void 0;
const index_1 = require("./../helpers/index");
const rgb_converter_1 = require("../converters/rgb-converter");
const lab_converter_1 = require("../converters/lab-converter");
class RGBResolver {
    constructor(rgb) {
        const { red, green, blue } = rgb;
        const { max, delta } = (0, rgb_converter_1.getRange)(red, green, blue);
        const hue = (0, rgb_converter_1.rgbToHue)(red, green, blue, max, delta);
        this.alpha = 1;
        this.rgb = rgb;
        this.ansi16 = (0, rgb_converter_1.rgbToAnsi16)(rgb);
        this.ansi256 = (0, rgb_converter_1.rgbToAnsi256)(rgb);
        this.cmyk = (0, rgb_converter_1.rgbToCmyk)(rgb);
        this.hcg = (0, rgb_converter_1.rgbToHcgPrefactored)(rgb, hue);
        this.hex = (0, rgb_converter_1.rgbToHex)(rgb);
        this.hsl = (0, rgb_converter_1.rgbToHslPrefactored)(rgb, hue);
        this.hsv = (0, rgb_converter_1.rgbToHsvPrefactored)(rgb, hue);
        this.hwb = (0, rgb_converter_1.rgbToHwbPrefactored)(rgb, hue);
        this.lab = (0, rgb_converter_1.rgbToLab)(rgb);
        this.lch = (0, lab_converter_1.labToLch)(this.lab);
        this.srgb = (0, rgb_converter_1.rgbToSrgb)(rgb);
        this.xyz = (0, rgb_converter_1.rgbToXyz)(rgb);
        this.webSafe = (0, index_1.isWebSafe)(rgb);
        // this.outOfGamut = isisOutOfGamut(rgb);
    }
    data() {
        return {
            alpha: this.alpha,
            ansi16: this.ansi16,
            ansi256: this.ansi256,
            cmyk: this.cmyk,
            hcg: this.hcg,
            hex: this.hex,
            hsl: this.hsl,
            hsv: this.hsv,
            hwb: this.hwb,
            lab: this.lab,
            lch: this.lch,
            outOfGamut: this.outOfGamut,
            rgb: this.rgb,
            srgb: this.srgb,
            webSafe: this.webSafe,
            xyz: this.xyz
        };
    }
}
exports.RGBResolver = RGBResolver;
