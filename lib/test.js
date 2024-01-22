"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
Object.defineProperty(exports, "__esModule", { value: true });
const color_resolver_1 = require("./resolvers/color-resolver/color-resolver");
const rgb_resolver_1 = require("./resolvers/prebuilt-resolvers/rgb-resolver");
const testColor = { red: 238, green: 200, blue: 27 };
// const testColor = { red: 217, green: 122, blue: 37 };
const checkColor = new color_resolver_1.ColorResolver("rgb", testColor);
console.log(checkColor.data, `\n\n\n`);
const checkRgb = (rgb) => {
    return (!diff(rgb.red, testColor.red) &&
        !diff(rgb.green, testColor.green) &&
        !diff(rgb.blue, testColor.blue));
};
const diff = (n1, n2) => {
    return n1 - n2 < -0.7 || n1 - n2 > 0.7;
};
const color = new rgb_resolver_1.RGBResolver(testColor);
const color2 = new color_resolver_1.ColorResolver("rgb", testColor);
const color3 = new color_resolver_1.ColorResolver("hex", `#${(_a = checkColor.data) === null || _a === void 0 ? void 0 : _a.hex}`);
const color4 = new color_resolver_1.ColorResolver("hsl", (_b = checkColor.data) === null || _b === void 0 ? void 0 : _b.hsl);
const color5 = new color_resolver_1.ColorResolver("hsv", (_c = checkColor.data) === null || _c === void 0 ? void 0 : _c.hsv);
const color6 = new color_resolver_1.ColorResolver("luv", (_d = checkColor.data) === null || _d === void 0 ? void 0 : _d.luv);
const color7 = new color_resolver_1.ColorResolver("lab", (_e = checkColor.data) === null || _e === void 0 ? void 0 : _e.lab);
const color8 = new color_resolver_1.ColorResolver("hwb", (_f = checkColor.data) === null || _f === void 0 ? void 0 : _f.hwb);
const color9 = new color_resolver_1.ColorResolver("don_rgb_4", (_g = checkColor.data) === null || _g === void 0 ? void 0 : _g.don_rgb_4);
const color10 = new color_resolver_1.ColorResolver("adobe_98_rgb", (_h = checkColor.data) === null || _h === void 0 ? void 0 : _h.adobe_98_rgb);
const color11 = new color_resolver_1.ColorResolver("best_rgb", (_j = checkColor.data) === null || _j === void 0 ? void 0 : _j.best_rgb);
const color12 = new color_resolver_1.ColorResolver("beta_rgb", (_k = checkColor.data) === null || _k === void 0 ? void 0 : _k.beta_rgb);
const color13 = new color_resolver_1.ColorResolver("bruce_rgb", (_l = checkColor.data) === null || _l === void 0 ? void 0 : _l.bruce_rgb);
const color14 = new color_resolver_1.ColorResolver("cie_rgb", (_m = checkColor.data) === null || _m === void 0 ? void 0 : _m.cie_rgb);
const color15 = new color_resolver_1.ColorResolver("color_match_rgb", (_o = checkColor.data) === null || _o === void 0 ? void 0 : _o.color_match_rgb);
const color16 = new color_resolver_1.ColorResolver("eci_rgb_v2", (_p = checkColor.data) === null || _p === void 0 ? void 0 : _p.eci_rgb_v2);
const color17 = new color_resolver_1.ColorResolver("etka_space_ps5", (_q = checkColor.data) === null || _q === void 0 ? void 0 : _q.etka_space_ps5);
const color18 = new color_resolver_1.ColorResolver("ntsc_rgb", (_r = checkColor.data) === null || _r === void 0 ? void 0 : _r.ntsc_rgb);
const color19 = new color_resolver_1.ColorResolver("pal_secam_rgb", (_s = checkColor.data) === null || _s === void 0 ? void 0 : _s.pal_secam_rgb);
const color20 = new color_resolver_1.ColorResolver("pro_photo_rgb", (_t = checkColor.data) === null || _t === void 0 ? void 0 : _t.pro_photo_rgb);
const color21 = new color_resolver_1.ColorResolver("wide_gamut_rgb", (_u = checkColor.data) === null || _u === void 0 ? void 0 : _u.wide_gamut_rgb);
const color22 = new color_resolver_1.ColorResolver("xyz", (_v = checkColor.data) === null || _v === void 0 ? void 0 : _v.xyz);
const color23 = new color_resolver_1.ColorResolver("smpte_c_rgb", (_w = checkColor.data) === null || _w === void 0 ? void 0 : _w.smpte_c_rgb);
const color24 = new color_resolver_1.ColorResolver("apple_rgb", (_x = checkColor.data) === null || _x === void 0 ? void 0 : _x.apple_rgb);
const color25 = new color_resolver_1.ColorResolver("lch_ab", (_y = checkColor.data) === null || _y === void 0 ? void 0 : _y.lch_ab);
const color26 = new color_resolver_1.ColorResolver("lch_uv", (_z = checkColor.data) === null || _z === void 0 ? void 0 : _z.lch_uv);
const color27 = new color_resolver_1.ColorResolver("cmyk", (_0 = checkColor.data) === null || _0 === void 0 ? void 0 : _0.cmyk);
const printData = (colors) => {
    colors.forEach((color) => {
        const name = Object.keys(color.data)[0].replace(/_/g, " ").toUpperCase();
        if (!checkRgb(color.data.rgb)) {
            console.log(`\n${name}\n`, `----------------------------------------------\n`, color.data.rgb, `\n`, color.data.xyz, `\n`, color.data.hex, `\n`, `\n----------------------------------------------\n`, `Diff\n`, `{ red: ${color.data.rgb.red - testColor.red}, green: ${color.data.rgb.green - testColor.green}, blue: ${color.data.rgb.blue - testColor.blue}} \n`, `{ x: ${color.data.xyz.x - checkColor.data.xyz.x}, y: ${color.data.xyz.y - checkColor.data.xyz.y}, z: ${color.data.xyz.z - checkColor.data.xyz.z}} \n ${checkColor.data.hex} - ${color.data.hex} 
        `, `\n----------------------------------------------\n`);
        }
        else {
            console.log(`\n${name}\n`, `----------------------------------------------\n`, "Conversion passed.");
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
