import { XyzConverter } from "../color-converter/xyz-converter";
import {
  xyzToAdobeRgb,
  xyzToAppleRgb,
  xyzToBestRgb,
  xyzToBetaRgb,
  xyzToBruceRgb,
  xyzToCieRgb,
  xyzToColorMatchRgb,
  xyzToDonRgb4,
  xyzToEciRgbV2,
  xyzToEtkaSpacePs5,
  xyzToLab,
  xyzToLch_ab,
  xyzToLch_uv,
  xyzToLuv,
  xyzToNtscRgb,
  xyzToPalSecamRgb,
  xyzToProPhotoRgb,
  xyzToSmpteCRgb,
  xyzToUvw,
  xyzToWideGamutRgb,
  xyzToXyY,
} from "../public_api";

const XYZTest = (
  xyz: { x: number; y: number; z: number },
  colorName: string
) => {
  const tAdobe = xyzToAdobeRgb(xyz);
  const tApple = xyzToAppleRgb(xyz);
  const tBest = xyzToBestRgb(xyz);
  const tBeta = xyzToBetaRgb(xyz);
  const tBruce = xyzToBruceRgb(xyz);
  const tCie = xyzToCieRgb(xyz);
  const tColorM = xyzToColorMatchRgb(xyz);
  const tDon = xyzToDonRgb4(xyz);
  const tEtka = xyzToEtkaSpacePs5(xyz);
  const tEci = xyzToEciRgbV2(xyz);
  const tLab = xyzToLab(xyz);
  const tLch_ab = xyzToLch_ab(xyz);
  const tLch_uv = xyzToLch_uv(xyz);
  const tLuv = xyzToLuv(xyz);
  const tNtsc = xyzToNtscRgb(xyz);
  const tPalS = xyzToPalSecamRgb(xyz);
  const tProP = xyzToProPhotoRgb(xyz);
  const tSmpte = xyzToSmpteCRgb(xyz);
  const tUvw = xyzToUvw(xyz);
  const tWideG = xyzToWideGamutRgb(xyz);
  const tXyy = xyzToXyY(xyz);
  const xyzCon = new XyzConverter(xyz);
  Compare(
    xyzCon.get("adobe_98_rgb"),
    tAdobe as unknown as Record<string, number>,
    `Testing Rgb Convertor Adobe conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("apple_rgb"),
    tApple as unknown as Record<string, number>,
    `Testing Rgb Convertor Apple conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("best_rgb"),
    tBest as unknown as Record<string, number>,
    `Testing Rgb Convertor Best Rgb conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("beta_rgb"),
    tBeta as unknown as Record<string, number>,
    `Testing Rgb Convertor Beta Rgb conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("bruce_rgb"),
    tBruce as unknown as Record<string, number>,
    `Testing Rgb Convertor Bruce Rgb conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("cie_rgb"),
    tCie as unknown as Record<string, number>,
    `Testing Rgb Convertor Cie Rgb conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("color_match_rgb"),
    tColorM as unknown as Record<string, number>,
    `Testing Rgb Convertor Color Match Rgb conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("don_rgb_4"),
    tDon as unknown as Record<string, number>,
    `Testing Rgb Convertor Don RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("eci_rgb_v2"),
    tEci as unknown as Record<string, number>,
    `Testing Rgb Convertor ECI RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("etka_space_ps5"),
    tEtka as unknown as Record<string, number>,
    `Testing Rgb Convertor Etka Space RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("lab"),
    tLab as unknown as Record<string, number>,
    `Testing Rgb Convertor LAB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("lch_ab"),
    tLch_ab as unknown as Record<string, number>,
    `Testing Rgb Convertor LCH(ab) conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("lch_uv"),
    tLch_uv as unknown as Record<string, number>,
    `Testing Rgb Convertor LCH(uv) conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("luv"),
    tLuv as unknown as Record<string, number>,
    `Testing Rgb Convertor LUV conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("ntsc_rgb"),
    tNtsc as unknown as Record<string, number>,
    `Testing Rgb Convertor NTSC RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("pal_secam_rgb"),
    tPalS as unknown as Record<string, number>,
    `Testing Rgb Convertor Pal Secam RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("pro_photo_rgb"),
    tProP as unknown as Record<string, number>,
    `Testing Rgb Convertor Pro Photo RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("uvw"),
    tUvw as unknown as Record<string, number>,
    `Testing Rgb Convertor UVW conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("smpte_c_rgb"),
    tSmpte as unknown as Record<string, number>,
    `Testing Rgb Convertor SMPTE C RGB conversion for ${colorName}`
  );
  Compare(
    xyzCon.get("wide_gamut_rgb"),
    tWideG as unknown as Record<string, number>,
    `Testing Rgb Convertor Wide Gamut RGB conversion for ${colorName}`
  );
    Compare(
      xyzCon.get("xyy"),
      tXyy as unknown as Record<string, number>,
      `Testing Rgb Convertor XYY conversion for ${colorName}`
    );
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

XYZTest(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 },
  "Yellow"
);
XYZTest(
  { x: 35.9120666993328, y: 28.808434268936097, z: 5.419297073053726 },
  "Orange"
);
XYZTest(
  { x: 13.202867328257659, y: 11.575532613794051, z: 37.12857860026635 },
  "Purplish Blue"
);
XYZTest(
  { x: 27.62513014132322, y: 18.69502708789548, z: 13.706625515194181 },
  "Moderate Red"
);
XYZTest(
  { x: 8.531757200262838, y: 6.413798640911185, z: 14.695612441342334 },
  "Purple"
);
XYZTest(
  { x: 33.2965334632533, y: 43.766312849403235, z: 10.967717412244491 },
  "Yellow Green"
);
XYZTest(
  { x: 46.15168100558844, y: 43.1885071436693, z: 8.095599343107358 },
  "Orange Yellow"
);
XYZTest(
  { x: 8.490396762622195, y: 6.111654044271183, z: 30.863036275406326 },
  "Blue"
);
XYZTest(
  { x: 17.697882513623384, y: 18.94493933037014, z: 34.17024267446187 },
  "Blue Sky"
);
XYZTest(
  { x: 24.989976330617843, y: 23.62014382596365, z: 44.82896486975364 },
  "Blue Flower"
);
XYZTest(
  { x: 31.01661432382987, y: 42.473960457441336, z: 45.08399767964223 },
  "Bluish Green"
);
XYZTest(
  { x: 14.578311839577996, y: 23.580809542693366, z: 9.412405094127996 },
  "Green"
);
XYZTest(
  { x: 19.748125802114448, y: 11.43698537712494, z: 4.908330952907127 },
  "Red"
);
XYZTest(
  { x: 28.85685600779282, y: 18.739979417361326, z: 30.108603514613236 },
  "Magenta"
);
XYZTest(
  { x: 14.93050603627794, y: 19.762703639769423, z: 39.09660939928801 },
  "Cyan"
);
XYZTest(
  { x: 83.99798052257115, y: 88.67354492316015, z: 92.79488184018574 },
  "White"
);
XYZTest(
  { x: 2.98933568708001, y: 3.1050304894404497, z: 3.4588402502271727 },
  "Printer Black"
);
