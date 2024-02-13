"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("../color/color");
const color = { red: 238, green: 200, blue: 27 };
const testColor = new color_1.Color("rgb", color);
test("Checking RGB values of a color", () => {
    expect(testColor.data.rgb).toStrictEqual({
        red: 238,
        green: 200,
        blue: 27,
        inGamut: true,
    });
});
test("Checking if a color created from a HEX value is correct", () => {
    var _a;
    const color = new color_1.Color("hex", `#${(_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hex}`);
    expect(color.data.rgb).toStrictEqual({
        red: 238,
        green: 200,
        blue: 27,
    });
});
test("Checking if a color created from a HSL values is correct", () => {
    var _a;
    const color = new color_1.Color("hsl", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hsl);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a HSV values is correct", () => {
    var _a;
    const color = new color_1.Color("hsv", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hsv);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a HWB values is correct", () => {
    var _a;
    const color = new color_1.Color("hwb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hwb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a LUV values is correct", () => {
    var _a;
    const color = new color_1.Color("luv", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.luv);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a LAB values is correct", () => {
    var _a;
    const color = new color_1.Color("lab", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.lab);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a LCH(ab) values is correct", () => {
    var _a;
    const color = new color_1.Color("lch_ab", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.lch_ab);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a LCH(uv) values is correct", () => {
    var _a;
    const color = new color_1.Color("lch_uv", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.lch_uv);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a RYB values is correct", () => {
    var _a;
    const color = new color_1.Color("ryb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.ryb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a XYZ values is correct", () => {
    var _a;
    const color = new color_1.Color("xyz", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.xyz);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a XYY values is correct", () => {
    var _a;
    const color = new color_1.Color("xyy", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.xyy);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a CMY values is correct", () => {
    var _a;
    const color = new color_1.Color("cmy", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.cmy);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a CMYK values is correct", () => {
    var _a;
    const color = new color_1.Color("cmyk", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.cmyk);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a HCY values is correct", () => {
    var _a;
    const color = new color_1.Color("hcy", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hcy);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Adobe 98 RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("adobe_98_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.adobe_98_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Apple RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("apple_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.apple_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Best RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("best_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.best_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Beta RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("beta_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.beta_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Bruce RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("bruce_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.bruce_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a CIE RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("cie_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.cie_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Color Match RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("color_match_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.color_match_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Don RGB 4 values is correct", () => {
    var _a;
    const color = new color_1.Color("don_rgb_4", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.don_rgb_4);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a ECI RGB v2 values is correct", () => {
    var _a;
    const color = new color_1.Color("eci_rgb_v2", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.eci_rgb_v2);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Etka Space ps5 values is correct", () => {
    var _a;
    const color = new color_1.Color("etka_space_ps5", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.etka_space_ps5);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a NTSC RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("ntsc_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.ntsc_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a PAL/SECAM RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("pal_secam_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.pal_secam_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Pro Photo RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("pro_photo_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.pro_photo_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a SMPTE/C RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("smpte_c_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.smpte_c_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Wide Gamut RGB values is correct", () => {
    var _a;
    const color = new color_1.Color("wide_gamut_rgb", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.wide_gamut_rgb);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a YCbCr values is correct", () => {
    var _a;
    const color = new color_1.Color("ycbcr", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.ycbcr);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a YcCbcCrc values is correct", () => {
    var _a;
    const color = new color_1.Color("yccbccrc", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.yccbccrc);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a YCoCg values is correct", () => {
    var _a;
    const color = new color_1.Color("ycocg", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.ycocg);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a YDbDr values is correct", () => {
    var _a;
    const color = new color_1.Color("ydbdr", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.ydbdr);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a YIQ values is correct", () => {
    var _a;
    const color = new color_1.Color("yiq", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.yiq);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a YPbPr values is correct", () => {
    var _a;
    const color = new color_1.Color("ypbpr", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.ypbpr);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a TSL values is correct", () => {
    var _a;
    const color = new color_1.Color("tsl", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.tsl);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a UVW values is correct", () => {
    var _a;
    const color = new color_1.Color("uvw", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.uvw);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a Hunter's Lab values is correct", () => {
    var _a;
    const color = new color_1.Color("hunter_lab", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hunter_lab);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
test("Checking if a color created from a LMS values is correct", () => {
    var _a;
    const color = new color_1.Color("lms", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.lms);
    expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
    expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
    expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});
