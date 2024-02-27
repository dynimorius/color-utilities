import {
  RgbConverter,
  sRgbToAdobeRgb,
  sRgbToAnsi16,
  sRgbToAnsi256,
  sRgbToAppleRgb,
  sRgbToBestRgb,
  sRgbToBetaRgb,
  sRgbToBruceRgb,
  sRgbToCieRgb,
  sRgbToCmy,
  sRgbToCmyk,
  sRgbToColorMatchRgb,
  sRgbToDonRgb4,
  sRgbToEciRgbV2,
  sRgbToEtkaSpacePs5,
  sRgbToHcy,
  sRgbToHex,
  sRgbToHsi,
  sRgbToHsl,
  sRgbToHsv,
  sRgbToHwb,
  sRgbToLab,
  sRgbToLch_ab,
  sRgbToLch_uv,
  sRgbToLuv,
  sRgbToNtscRgb,
  sRgbToPalSecamRgb,
  sRgbToProPhotoRgb,
  sRgbToRyb,
  sRgbToSmpteCRgb,
  sRgbToTsl,
  sRgbToUvw,
  sRgbToWideGamutRgb,
  sRgbToXvYcc,
  sRgbToXyz,
  sRgbToYCbCrBT601,
  sRgbToYCbCrBT709,
  sRgbToYCgCo,
  sRgbToYDbDr,
  sRgbToYPbPr,
  sRgbToYcCbcCrc,
  sRgbToYiq,
} from "../public_api";

const RGBTest = (
  rgb: { red: number; green: number; blue: number },
  colorName: string
) => {
  const tAdobe = sRgbToAdobeRgb(rgb);
  const tApple = sRgbToAppleRgb(rgb);
  const tAnsi16 = sRgbToAnsi16(rgb);
  const tAnsi256 = sRgbToAnsi256(rgb);
  const tBest = sRgbToBestRgb(rgb);
  const tBeta = sRgbToBetaRgb(rgb);
  const tBruce = sRgbToBruceRgb(rgb);
  const tCie = sRgbToCieRgb(rgb);
  const tColorM = sRgbToColorMatchRgb(rgb);
  const tCmy = sRgbToCmy(rgb);
  const tCmyk = sRgbToCmyk(rgb);
  const tDon = sRgbToDonRgb4(rgb);
  const tEtka = sRgbToEtkaSpacePs5(rgb);
  const tEci = sRgbToEciRgbV2(rgb);
  const tHcy = sRgbToHcy(rgb);
  const tHex = sRgbToHex(rgb);
  const tHsi = sRgbToHsi(rgb);
  const tHsl = sRgbToHsl(rgb);
  const tHsv = sRgbToHsv(rgb);
  const tHwb = sRgbToHwb(rgb);
  const tLab = sRgbToLab(rgb);
  const tLch_ab = sRgbToLch_ab(rgb);
  const tLch_uv = sRgbToLch_uv(rgb);
  const tLuv = sRgbToLuv(rgb);
  const tNtsc = sRgbToNtscRgb(rgb);
  const tPalS = sRgbToPalSecamRgb(rgb);
  const tProP = sRgbToProPhotoRgb(rgb);
  const tRyb = sRgbToRyb(rgb);
  const tSmpte = sRgbToSmpteCRgb(rgb);
  const tTsl = sRgbToTsl(rgb);
  const tUvw = sRgbToUvw(rgb);
  const tWideG = sRgbToWideGamutRgb(rgb);
  const tYcbCr601 = sRgbToYCbCrBT601(rgb);
  const tYCbCr709 = sRgbToYCbCrBT709(rgb);
  const tYdbDr = sRgbToYDbDr(rgb);
  const tYPbBr = sRgbToYPbPr(rgb);
  const tYcCbcCrc = sRgbToYcCbcCrc(rgb);
  const tYCoCg = sRgbToYCgCo(rgb);
  const tYiq = sRgbToYiq(rgb);
  const tXvyYcc = sRgbToXvYcc(rgb);
  const tXyz = sRgbToXyz(rgb);
  const rgbCon = new RgbConverter(rgb);
  Compare(
    rgbCon.get("adobe_98_rgb"),
    tAdobe as unknown as Record<string, number>,
    `Testing Rgb Convertor Adobe conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("apple_rgb"),
    tApple as unknown as Record<string, number>,
    `Testing Rgb Convertor Apple conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("best_rgb"),
    tBest as unknown as Record<string, number>,
    `Testing Rgb Convertor Best Rgb conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("beta_rgb"),
    tBeta as unknown as Record<string, number>,
    `Testing Rgb Convertor Beta Rgb conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("bruce_rgb"),
    tBruce as unknown as Record<string, number>,
    `Testing Rgb Convertor Bruce Rgb conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("cie_rgb"),
    tCie as unknown as Record<string, number>,
    `Testing Rgb Convertor Cie Rgb conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("color_match_rgb"),
    tColorM as unknown as Record<string, number>,
    `Testing Rgb Convertor Color Match Rgb conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("cmy"),
    tCmy as unknown as Record<string, number>,
    `Testing Rgb Convertor CMY conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("cmyk"),
    tCmyk as unknown as Record<string, number>,
    `Testing Rgb Convertor CMYK conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("don_rgb_4"),
    tDon as unknown as Record<string, number>,
    `Testing Rgb Convertor Don RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("eci_rgb_v2"),
    tEci as unknown as Record<string, number>,
    `Testing Rgb Convertor ECI RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("etka_space_ps5"),
    tEtka as unknown as Record<string, number>,
    `Testing Rgb Convertor Etka Space RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("hcy"),
    tHcy as unknown as Record<string, number>,
    `Testing Rgb Convertor HCY conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("hsi"),
    tHsi as unknown as Record<string, number>,
    `Testing Rgb Convertor HSI conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("hsl"),
    tHsl as unknown as Record<string, number>,
    `Testing Rgb Convertor HSL conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("hsv"),
    tHsv as unknown as Record<string, number>,
    `Testing Rgb Convertor HSV conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("hwb"),
    tHwb as unknown as Record<string, number>,
    `Testing Rgb Convertor HWB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("lab"),
    tLab as unknown as Record<string, number>,
    `Testing Rgb Convertor LAB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("lch_ab"),
    tLch_ab as unknown as Record<string, number>,
    `Testing Rgb Convertor LCH(ab) conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("lch_uv"),
    tLch_uv as unknown as Record<string, number>,
    `Testing Rgb Convertor LCH(uv) conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("luv"),
    tLuv as unknown as Record<string, number>,
    `Testing Rgb Convertor LUV conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ntsc_rgb"),
    tNtsc as unknown as Record<string, number>,
    `Testing Rgb Convertor NTSC RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("pal_secam_rgb"),
    tPalS as unknown as Record<string, number>,
    `Testing Rgb Convertor Pal Secam RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("pro_photo_rgb"),
    tProP as unknown as Record<string, number>,
    `Testing Rgb Convertor Pro Photo RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ryb"),
    tRyb as unknown as Record<string, number>,
    `Testing Rgb Convertor Ryb conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("smpte_c_rgb"),
    tSmpte as unknown as Record<string, number>,
    `Testing Rgb Convertor SMPTE C RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("tsl"),
    tTsl as unknown as Record<string, number>,
    `Testing Rgb Convertor TSL conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("uvw"),
    tUvw as unknown as Record<string, number>,
    `Testing Rgb Convertor UVW conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("wide_gamut_rgb"),
    tWideG as unknown as Record<string, number>,
    `Testing Rgb Convertor Wide Gamut RGB conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ycbcr_BT601"),
    tYcbCr601 as unknown as Record<string, number>,
    `Testing Rgb Convertor YCbCr BT601 conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ycbcr_BT709"),
    tYCbCr709 as unknown as Record<string, number>,
    `Testing Rgb Convertor YCbCr BT709 conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("yccbccrc"),
    tYcCbcCrc as unknown as Record<string, number>,
    `Testing Rgb Convertor YcCbcCrc conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ydbdr"),
    tYdbDr as unknown as Record<string, number>,
    `Testing Rgb Convertor YDbDr conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ypbpr"),
    tYPbBr as unknown as Record<string, number>,
    `Testing Rgb Convertor YPbPr conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("ycocg"),
    tYCoCg as unknown as Record<string, number>,
    `Testing Rgb Convertor YCoCg conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("yiq"),
    tYiq as unknown as Record<string, number>,
    `Testing Rgb Convertor YIQ conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("xvycc"),
    tXvyYcc as unknown as Record<string, number>,
    `Testing Rgb Convertor xvYcc conversion for ${colorName}`
  );
  Compare(
    rgbCon.get("xyz"),
    tXyz as unknown as Record<string, number>,
    `Testing Rgb Convertor XYZ conversion for ${colorName}`
  );

  test(`Testing Rgb Convertor Ansi16 converson for ${colorName}`, () => {
    expect(rgbCon.get("ansi16")).toBeCloseTo(tAnsi16);
  });

  test(`Testing Rgb Convertor Ansi256 converson for ${colorName}`, () => {
    expect(rgbCon.get("ansi256")).toBeCloseTo(tAnsi256);
  });

  test(`Testing Rgb Convertor hex converson for ${colorName}`, () => {
    expect(rgbCon.get("hex")).toMatch(tHex);
  });
};

const Compare = (
  val1: Record<string, number>,
  val2: Record<string, number>,
  testMessage: string
) => {
  const values1 = Object.values(val1);
  const values2 = Object.values(val2);
  values1.forEach((val: number, i: number) => {
    if (typeof val === "number") {
      test(testMessage, () => {
        expect(val).toBeCloseTo(values2[i]);
      });
    }
  });
};

RGBTest({ red: 238, green: 200, blue: 27 }, "Yellow");
RGBTest({ red: 217, green: 122, blue: 37 }, "Orange");
RGBTest({ red: 72, green: 91, blue: 165 }, "Purplish Blue");
RGBTest({ red: 194, green: 84, blue: 98 }, "Moderate Red");
RGBTest({ red: 91, green: 59, blue: 107 }, "Purple");
RGBTest({ red: 160, green: 188, blue: 60 }, "Yellow Green");
RGBTest({ red: 230, green: 163, blue: 42 }, "Orange Yellow");
RGBTest({ red: 46, green: 60, blue: 153 }, "Blue");
RGBTest({ red: 94, green: 123, blue: 156 }, "Blue Sky");
RGBTest({ red: 130, green: 129, blue: 177 }, "Blue Flower");
RGBTest({ red: 100, green: 190, blue: 171 }, "Bluish Green");
RGBTest({ red: 71, green: 150, blue: 69 }, "Green");
RGBTest({ red: 177, green: 44, blue: 56 }, "Red");
RGBTest({ red: 187, green: 82, blue: 148 }, "Magenta");
RGBTest({ red: 243, green: 242, blue: 237 }, "White");
RGBTest({ red: 50, green: 49, blue: 50 }, "Printer Black");
