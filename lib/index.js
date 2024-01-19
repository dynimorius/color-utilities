"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const color_resolver_1 = require("./resolvers/color-resolver");
const rgb_resolver_1 = require("./resolvers/rgb-resolver");
const checkRgb = (rgb) => {
    return rgb.red === 102 && rgb.green === 51 && rgb.blue === 153;
};
const color = new rgb_resolver_1.RGBResolver({ red: 102, green: 51, blue: 153 });
const color2 = new color_resolver_1.ColorResolver('rgb', { red: 102, green: 51, blue: 153 });
const color3 = new color_resolver_1.ColorResolver('hex', '#663399');
const color4 = new color_resolver_1.ColorResolver('hsl', { h: 270, s: 50, l: 40 });
const color5 = new color_resolver_1.ColorResolver('hsv', { hue: 270, saturation: 67, value: 60 });
const color6 = new color_resolver_1.ColorResolver('luv', { L: 32.9024676673756, u: 12.982891995207853, v: -67.75379621014277 });
const color7 = new color_resolver_1.ColorResolver('lab', { luminance: 32.9024676673756, a: 42.883074460311335, b: -47.148633770801084 });
const color8 = new color_resolver_1.ColorResolver('hwb', { h: 270, w: 20, b: 40 });
const color9 = new color_resolver_1.ColorResolver('don_rgb_4', { r: 94, g: 63, b: 145 });
const color10 = new color_resolver_1.ColorResolver("adobe_98_rgb", {
    red: 91,
    green: 54,
    blue: 149,
});
const color11 = new color_resolver_1.ColorResolver("best_rgb", {
    red: 93,
    green: 66,
    blue: 144,
});
const color12 = new color_resolver_1.ColorResolver("beta_rgb", {
    red: 93,
    green: 62,
    blue: 146,
});
const color13 = new color_resolver_1.ColorResolver("bruce_rgb", {
    red: 98,
    green: 54,
    blue: 149,
});
const color14 = new color_resolver_1.ColorResolver("cie_rgb", { red: 88, green: 75, blue: 144 });
const color15 = new color_resolver_1.ColorResolver("color_match_rgb", {
    red: 81,
    green: 32,
    blue: 137,
});
const color16 = new color_resolver_1.ColorResolver("eci_rgb_v2", {
    red: 100,
    green: 44,
    blue: 158,
});
const color17 = new color_resolver_1.ColorResolver("etka_space_ps5", {
    red: 98,
    green: 67,
    blue: 146,
});
const color18 = new color_resolver_1.ColorResolver("ntsc_rgb", {
    red: 94,
    green: 38,
    blue: 148,
});
const color19 = new color_resolver_1.ColorResolver("pal_secam_rgb", {
    red: 100,
    green: 54,
    blue: 152,
});
const color20 = new color_resolver_1.ColorResolver("pro_photo_rgb", {
    red: 81,
    green: 49,
    blue: 126,
});
const color21 = new color_resolver_1.ColorResolver("wide_gamut_rgb", {
    red: 87,
    green: 71,
    blue: 147,
});
const printData = (colors) => {
    console.log(`Looking for:
    { red: 102, green: 51, blue: 153 }
    { x: 12.411764718190387, y: 7.492355161781639, z: 30.923099547327144 }
    663399 \n
    `);
    colors.forEach((color) => {
        if (!checkRgb(color.rgb)) {
            const name = Object.keys(color)[0].replace("_", " ").toUpperCase();
            console.log(`\n${name}\n`, `----------------------------------------------\n`, color.data().rgb, `\n`, color.data().xyz, `\n`, color.data().hex, `\n`, `\n----------------------------------------------\n`, `Diff\n`, `{ red: ${color.rgb.red - 102}, green: ${color.rgb.green - 51}, blue: ${color.rgb.blue - 153}} \n`, `{ x: ${color.xyz.x - 12.411764718190387}, y: ${color.xyz.y - 7.492355161781639}, z: ${color.xyz.z - 30.923099547327144}} \n`, `\n----------------------------------------------\n`);
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
    color21
]);
