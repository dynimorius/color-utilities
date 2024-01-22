import {
  CMYK,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LUV,
  RGB,
  XYZ,
} from "./interfaces/color-spaces.interface";
import { ColorResolver } from "./resolvers/color-resolver";
import { RGBResolver } from "./resolvers/rgb-resolver";

const testColor = { red: 238, green: 200, blue: 27 };
// const testColor = { red: 217, green: 122, blue: 37 };
const checkColor = new ColorResolver("rgb", testColor);
console.log(checkColor.data, `\n\n\n`);

const checkRgb = (rgb: RGB): boolean => {
  return (
    !diff(rgb.red, testColor.red) &&
    !diff(rgb.green, testColor.green) &&
    !diff(rgb.blue, testColor.blue)
  );
};

const diff = (n1: number, n2: number): boolean => {
  return n1 - n2 < -0.7 || n1 - n2 > 0.7;
};

const color = new RGBResolver(testColor);

const color2 = new ColorResolver("rgb", testColor);

const color3 = new ColorResolver("hex", `#${checkColor.data?.hex as string}`);

const color4 = new ColorResolver("hsl", checkColor.data?.hsl as HSL);

const color5 = new ColorResolver("hsv", checkColor.data?.hsv as HSV);

const color6 = new ColorResolver("luv", checkColor.data?.luv as LUV);

const color7 = new ColorResolver("lab", checkColor.data?.lab as LAB);

const color8 = new ColorResolver("hwb", checkColor.data?.hwb as HWB);

const color9 = new ColorResolver(
  "don_rgb_4",
  checkColor.data?.don_rgb_4 as RGB
);

const color10 = new ColorResolver(
  "adobe_98_rgb",
  checkColor.data?.adobe_98_rgb as RGB
);

const color11 = new ColorResolver(
  "best_rgb",
  checkColor.data?.best_rgb as RGB
);

const color12 = new ColorResolver(
  "beta_rgb",
  checkColor.data?.beta_rgb as RGB
);

const color13 = new ColorResolver(
  "bruce_rgb",
  checkColor.data?.bruce_rgb as RGB
);

const color14 = new ColorResolver("cie_rgb", checkColor.data?.cie_rgb as RGB);

const color15 = new ColorResolver(
  "color_match_rgb",
  checkColor.data?.color_match_rgb as RGB
);

const color16 = new ColorResolver(
  "eci_rgb_v2",
  checkColor.data?.eci_rgb_v2 as RGB
);

const color17 = new ColorResolver(
  "etka_space_ps5",
  checkColor.data?.etka_space_ps5 as RGB
);

const color18 = new ColorResolver(
  "ntsc_rgb",
  checkColor.data?.ntsc_rgb as RGB
);

const color19 = new ColorResolver(
  "pal_secam_rgb",
  checkColor.data?.pal_secam_rgb as RGB
);

const color20 = new ColorResolver(
  "pro_photo_rgb",
  checkColor.data?.pro_photo_rgb as RGB
);

const color21 = new ColorResolver(
  "wide_gamut_rgb",
  checkColor.data?.wide_gamut_rgb as RGB
);

const color22 = new ColorResolver("xyz", checkColor.data?.xyz as XYZ);

const color23 = new ColorResolver(
  "smpte_c_rgb",
  checkColor.data?.smpte_c_rgb as RGB
);

const color24 = new ColorResolver(
  "apple_rgb",
  checkColor.data?.apple_rgb as RGB
);

const color25 = new ColorResolver("lch_ab", checkColor.data?.lch_ab as LCH);

const color26 = new ColorResolver("lch_uv", checkColor.data?.lch_uv as LCH);

const color27 = new ColorResolver("cmyk", checkColor.data?.cmyk as CMYK);

const printData = (colors: ColorResolver[]) => {
  colors.forEach((color) => {
    const name = Object.keys(color.data)[0].replace(/_/g, " ").toUpperCase();
    if (!checkRgb(color.data.rgb as RGB)) {
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
        `{ x: ${(color.data.xyz as XYZ).x - (checkColor.data.xyz as XYZ).x}, y: ${
          (color.data.xyz as XYZ).y - (checkColor.data.xyz as XYZ).y
        }, z: ${(color.data.xyz as XYZ).z - (checkColor.data.xyz as XYZ).z}} \n ${
          checkColor.data.hex
        } - ${color.data.hex} 
        `,
        `\n----------------------------------------------\n`
      );
    } else {
      console.log(
        `\n${name}\n`,
        `----------------------------------------------\n`,
        "Conversion passed."
      );
    }
  });
};

printData([
  color,
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
]);
