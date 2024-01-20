import { HSL, HSV, HWB, LAB, LUV, RGB, XYZ } from "./interfaces/color-spaces.interface";
import { ColorResolver } from "./resolvers/color-resolver";
import { RGBResolver } from "./resolvers/rgb-resolver";

const yellow = { red: 238, green: 200, blue: 27 }
const checkColor = new ColorResolver("rgb", yellow);
console.log(checkColor.data(), `\n\n\n`)

const checkRgb = (rgb: RGB): boolean => {
  return !diff(rgb.red, yellow.red) && !diff(rgb.green, yellow.green) && !diff(rgb.blue,yellow.blue);
};

const diff = (n1: number, n2: number): boolean => {
  return n1 - n2 < -0.5 || n1 - n2 > 0.5;
}

const color = new RGBResolver(yellow);

const color2 = new ColorResolver("rgb", yellow);

const color3 = new ColorResolver("hex", `#${checkColor.data()?.hex as string}`);

const color4 = new ColorResolver("hsl", checkColor.data()?.hsl as HSL);

const color5 = new ColorResolver("hsv", checkColor.data()?.hsv as HSV);

const color6 = new ColorResolver("luv", checkColor.data()?.luv as LUV);

const color7 = new ColorResolver("lab", checkColor.data()?.lab as LAB);

const color8 = new ColorResolver("hwb", checkColor.data()?.hwb as HWB);

const color9 = new ColorResolver("don_rgb_4", { red: 222, green: 199, blue: 80 });

const color10 = new ColorResolver("adobe_98_rgb", { red: 227, green: 199, blue: 55 });

const color11 = new ColorResolver("best_rgb", { red: 222, green: 200, blue: 84 });

const color12 = new ColorResolver("beta_rgb", { red: 221, green: 198, blue: 75 });

const color13 = new ColorResolver("bruce_rgb", { red: 233, green: 199, blue: 56 });

const color14 = new ColorResolver("cie_rgb", { red: 237, green: 195, blue: 82 });

const color15 = new ColorResolver("color_match_rgb", { red: 226, green: 189, blue: 0 });

const color16 = new ColorResolver("eci_rgb_v2", { red: 227, green: 209, blue: 65 });

const color17 = new ColorResolver("etka_space_ps5", { red: 222, green: 196, blue: 74 });

const color18 = new ColorResolver("ntsc_rgb", { red: 223, green: 205, blue: 68 });

const color19 = new ColorResolver("pal_secam_rgb", { red: 236, green: 199, blue: 21 });

const color20 = new ColorResolver("pro_photo_rgb", { red: 200, green: 190, blue: 68 });

const color21 = new ColorResolver("wide_gamut_rgb", { red: 223, green: 197, blue: 71 });

const color22 = new ColorResolver("xyz", checkColor.data()?.xyz as XYZ);

const color23 = new ColorResolver("smpte_c_rgb", { red: 240, green: 199, blue: 38 });

const color24 = new ColorResolver("apple_rgb", { red: 232, green: 189, blue: -18 });

const color25 = new ColorResolver("lch_ab", {
  lightness: 81.60296053275202,
  chroma: 79.34034464184217,
  hue: 90.90147969465428
});

const color26 = new ColorResolver("lch_uv", {
  lightness: 81.60296053275202,
  chroma: 90.87348384955331,
  hue: 68.36516088770993
});

const color27 = new ColorResolver("cmyk", { cyan: 0, magenta: 16, yellow: 89, key: 6.666666666666665 });

const printData = (colors: ColorResolver[]) => {
  colors.forEach((color) => {
    if (!checkRgb(color.rgb)) {
      const name = Object.keys(color)[0].replace("_", " ").toUpperCase();
      console.log(
        `\n${name}\n`,
        `----------------------------------------------\n`,
        color.data().rgb,
        `\n`,
        color.data().xyz,
        `\n`,
        color.data().hex,
        `\n`,
        `\n----------------------------------------------\n`,
        `Diff\n`,
        `{ red: ${color.rgb.red - yellow.red}, green: ${color.rgb.green - yellow.green}, blue: ${
          color.rgb.blue - yellow.blue
        }} \n`,
        `{ x: ${color.xyz.x - 56.11537464609447}, y: ${
          color.xyz.y - 59.56827248834963
        }, z: ${color.xyz.z - 9.578873171265526}} \n`,
        `\n----------------------------------------------\n`
      );
    } else {
      const name = Object.keys(color)[0].replace("_", " ").toUpperCase();
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
  color27
]);


