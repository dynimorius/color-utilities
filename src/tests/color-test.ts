import { HCY } from './../interfaces/color-spaces.interface';
import { Color } from "../color/color";
import {
  CMY,
  CMYK,
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
} from "../interfaces/color-spaces.interface";
let pass = 0;
let fail = 0;

const testColor = { red: 238, green: 200, blue: 27 };

const checkColor = new Color("rgb", testColor);
console.log(checkColor.data, `\n\n\n`);

const checkRgb = (rgb: RGB): boolean => {
  return (
    !diff(rgb.red, testColor.red) &&
    !diff(rgb.green, testColor.green) &&
    !diff(rgb.blue, testColor.blue)
  );
};

const diff = (n1: number, n2: number): boolean => {
  return n1 - n2 < -0.5 || n1 - n2 > 0.5;
};

const color1 = new Color("rgb", testColor);

const color2 = new Color("hex", `#${checkColor.data?.hex as string}`);

const color3 = new Color("hsl", checkColor.data?.hsl as HSL);

const color4 = new Color("hsv", checkColor.data?.hsv as HSV);

const color5 = new Color("hwb", checkColor.data?.hwb as HWB);

const color6 = new Color("luv", checkColor.data?.luv as LUV);

const color7 = new Color("lab", checkColor.data?.lab as LAB);

const color8 = new Color("lch_ab", checkColor.data?.lch_ab as LCH);

const color9 = new Color("lch_uv", checkColor.data?.lch_uv as LCH);

const color10 = new Color("ryb", checkColor.data?.ryb as RYB);

const color11 = new Color("xyz", checkColor.data?.xyz as XYZ);

const color12 = new Color("xyy", checkColor.data?.xyy as XYY);

const color13 = new Color("cmy", checkColor.data?.cmy as CMY);

const color14 = new Color("cmyk", checkColor.data?.cmyk as CMYK);

const color15 = new Color("hcy", checkColor.data?.hcy as HCY);

const color16 = new Color("adobe_98_rgb", checkColor.data?.adobe_98_rgb as RGB);

const color17 = new Color("apple_rgb", checkColor.data?.apple_rgb as RGB);

const color18 = new Color("best_rgb", checkColor.data?.best_rgb as RGB);

const color19 = new Color("beta_rgb", checkColor.data?.beta_rgb as RGB);

const color20 = new Color("bruce_rgb", checkColor.data?.bruce_rgb as RGB);

const color21 = new Color("cie_rgb", checkColor.data?.cie_rgb as RGB);

const color22 = new Color(
  "color_match_rgb",
  checkColor.data?.color_match_rgb as RGB
);

const color23 = new Color("don_rgb_4", checkColor.data?.don_rgb_4 as RGB);

const color24 = new Color("eci_rgb_v2", checkColor.data?.eci_rgb_v2 as RGB);

const color25 = new Color(
  "etka_space_ps5",
  checkColor.data?.etka_space_ps5 as RGB
);

const color26 = new Color("ntsc_rgb", checkColor.data?.ntsc_rgb as RGB);

const color27 = new Color(
  "pal_secam_rgb",
  checkColor.data?.pal_secam_rgb as RGB
);

const color28 = new Color(
  "pro_photo_rgb",
  checkColor.data?.pro_photo_rgb as RGB
);

const color29 = new Color("smpte_c_rgb", checkColor.data?.smpte_c_rgb as RGB);

const color30 = new Color(
  "wide_gamut_rgb",
  checkColor.data?.wide_gamut_rgb as RGB
);

const color31 = new Color("ycbcr", checkColor.data?.ycbcr as YCbCr);
const color32 = new Color("yccbccrc", checkColor.data?.yccbccrc as YcCbcCrc);
const color33 = new Color("ycocg", checkColor.data?.ycocg as YCoCg);
const color34 = new Color("ydbdr", checkColor.data?.ydbdr as YDbDr);
const color35 = new Color("yiq", checkColor.data?.yiq as YIQ);
const color36 = new Color("ypbpr", checkColor.data?.ypbpr as YPbPr);
const color37 = new Color("tsl", checkColor.data?.tsl as TSL);
const color38 = new Color("uvw", checkColor.data?.uvw as UVW);
const color39 = new Color("hunter_lab", checkColor.data?.hunter_lab as LAB);
const color40 = new Color("lms", checkColor.data?.lms as LMS);

const printData = (colors: Color[]) => {
  colors.forEach((color) => {
    const name = Object.keys(color.data)[0].replace(/_/g, " ").toUpperCase();
    if (!checkRgb(color.data.rgb as RGB)) {
      fail += 1;
      console.log(
        `\n${name}\n`,
        `----------------------------------------------\n`,
        color.data.rgb,
        `\n`,
        color.data.xyz,
        `\n`,
        color.data.hex,
        `\n`,
        `\n----------------------------------------------\n`,
        `Diff\n`,
        `{ red: ${(color.data.rgb as RGB).red - testColor.red}, green: ${
          (color.data.rgb as RGB).green - testColor.green
        }, blue: ${(color.data.rgb as RGB).blue - testColor.blue}} \n`,
        `{ x: ${
          (color.data.xyz as XYZ).x - (checkColor.data.xyz as XYZ).x
        }, y: ${
          (color.data.xyz as XYZ).y - (checkColor.data.xyz as XYZ).y
        }, z: ${
          (color.data.xyz as XYZ).z - (checkColor.data.xyz as XYZ).z
        }} \n ${checkColor.data.hex} - ${color.data.hex} 
        `,
        `\n----------------------------------------------\n`
      );
    } else {
      pass += 1;
      console.log(
        `\n${name}\n`,
        `----------------------------------------------\n`,
        "Conversion passed."
      );
    }
  });
  console.log(`\n Passed: ${pass} \n Failed: ${fail}\n`);
};

printData([
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  color8,
  color9,
  color10,
  color11,
  color12,
  color13,
  color14,
  color15,
  color16,
  color17,
  color18,
  color19,
  color20,
  color21,
  color22,
  color23,
  color24,
  color25,
  color26,
  color27,
  color28,
  color29,
  color30,
  color31,
  color32,
  color33,
  color34,
  color35,
  color36,
  color37,
  color38,
  color39,
  color40,
]);
