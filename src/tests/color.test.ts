import { Color } from "../color/color";
import {
  CMY,
  CMYK,
  HCY,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LMS,
  LUV,
  RGB,
  RYB,
  TSL,
  UVW,
  XYY,
  XYZ,
  YCbCr,
  YCoCg,
  YDbDr,
  YIQ,
  YPbPr,
  YcCbcCrc,
} from "../public_api";

const color = { red: 238, green: 200, blue: 27 };
const testColor = new Color("rgb", color);
test("Checking RGB values of a color", () => {
  expect(testColor.data.rgb).toStrictEqual({
    red: 238,
    green: 200,
    blue: 27,
    inGamut: true,
  });
});

test("Checking if a color created from a HEX value is correct", () => {
  const color = new Color("hex", `#${testColor.data?.hex as string}`);
  expect(color.data.rgb).toStrictEqual({
    red: 238,
    green: 200,
    blue: 27,
  });
});

test("Checking if a color created from a HSL values is correct", () => {
  const color = new Color("hsl", testColor.data?.hsl as HSL);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a HSV values is correct", () => {
  const color = new Color("hsv", testColor.data?.hsv as HSV);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a HWB values is correct", () => {
  const color = new Color("hwb", testColor.data?.hwb as HWB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a LUV values is correct", () => {
  const color = new Color("luv", testColor.data?.luv as LUV);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a LAB values is correct", () => {
  const color = new Color("lab", testColor.data?.lab as LAB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a LCH(ab) values is correct", () => {
  const color = new Color("lch_ab", testColor.data?.lch_ab as LCH);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a LCH(uv) values is correct", () => {
  const color = new Color("lch_uv", testColor.data?.lch_uv as LCH);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a RYB values is correct", () => {
  const color = new Color("ryb", testColor.data?.ryb as RYB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a XYZ values is correct", () => {
  const color = new Color("xyz", testColor.data?.xyz as XYZ);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a XYY values is correct", () => {
  const color = new Color("xyy", testColor.data?.xyy as XYY);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a CMY values is correct", () => {
  const color = new Color("cmy", testColor.data?.cmy as CMY);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a CMYK values is correct", () => {
  const color = new Color("cmyk", testColor.data?.cmyk as CMYK);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a HCY values is correct", () => {
  const color = new Color("hcy", testColor.data?.hcy as HCY);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Adobe 98 RGB values is correct", () => {
  const color = new Color("adobe_98_rgb", testColor.data?.adobe_98_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Apple RGB values is correct", () => {
  const color = new Color("apple_rgb", testColor.data?.apple_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Best RGB values is correct", () => {
  const color = new Color("best_rgb", testColor.data?.best_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Beta RGB values is correct", () => {
  const color = new Color("beta_rgb", testColor.data?.beta_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Bruce RGB values is correct", () => {
  const color = new Color("bruce_rgb", testColor.data?.bruce_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a CIE RGB values is correct", () => {
  const color = new Color("cie_rgb", testColor.data?.cie_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Color Match RGB values is correct", () => {
  const color = new Color("color_match_rgb",testColor.data?.color_match_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Don RGB 4 values is correct", () => {
  const color = new Color("don_rgb_4", testColor.data?.don_rgb_4 as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a ECI RGB v2 values is correct", () => {
  const color = new Color("eci_rgb_v2", testColor.data?.eci_rgb_v2 as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Etka Space ps5 values is correct", () => {
  const color = new Color("etka_space_ps5", testColor.data?.etka_space_ps5 as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a NTSC RGB values is correct", () => {
  const color = new Color("ntsc_rgb", testColor.data?.ntsc_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a PAL/SECAM RGB values is correct", () => {
  const color = new Color("pal_secam_rgb",testColor.data?.pal_secam_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Pro Photo RGB values is correct", () => {
  const color = new Color("pro_photo_rgb",testColor.data?.pro_photo_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a SMPTE/C RGB values is correct", () => {
  const color = new Color("smpte_c_rgb", testColor.data?.smpte_c_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Wide Gamut RGB values is correct", () => {
  const color = new Color("wide_gamut_rgb",testColor.data?.wide_gamut_rgb as RGB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a YCbCr values is correct", () => {
  const color = new Color("ycbcr", testColor.data?.ycbcr as YCbCr);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a YcCbcCrc values is correct", () => {
  const color = new Color("yccbccrc", testColor.data?.yccbccrc as YcCbcCrc);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a YCoCg values is correct", () => {
  const color = new Color("ycocg", testColor.data?.ycocg as YCoCg);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a YDbDr values is correct", () => {
  const color = new Color("ydbdr", testColor.data?.ydbdr as YDbDr);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a YIQ values is correct", () => {
  const color = new Color("yiq", testColor.data?.yiq as YIQ);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a YPbPr values is correct", () => {
  const color = new Color("ypbpr", testColor.data?.ypbpr as YPbPr);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a TSL values is correct", () => {
  const color = new Color("tsl", testColor.data?.tsl as TSL);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a UVW values is correct", () => {
  const color = new Color("uvw", testColor.data?.uvw as UVW);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a Hunter's Lab values is correct", () => {
  const color = new Color("hunter_lab", testColor.data?.hunter_lab as LAB);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});

test("Checking if a color created from a LMS values is correct", () => {
  const color = new Color("lms", testColor.data?.lms as LMS);
  expect(color.rgb.red).toBeCloseTo(testColor.rgb.red, 0);
  expect(color.rgb.green).toBeCloseTo(testColor.rgb.green, 0);
  expect(color.rgb.blue).toBeCloseTo(testColor.rgb.blue, 0);
});