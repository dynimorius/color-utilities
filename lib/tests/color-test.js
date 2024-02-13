"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
Object.defineProperty(exports, "__esModule", { value: true });
const color_1 = require("../color/color");
let pass = 0;
let fail = 0;
const testColor = { red: 238, green: 200, blue: 27 };
const checkColor = new color_1.Color("rgb", testColor);
console.log(checkColor.data, `\n\n\n`);
const checkRgb = (rgb) => {
    return (!diff(rgb.red, testColor.red) &&
        !diff(rgb.green, testColor.green) &&
        !diff(rgb.blue, testColor.blue));
};
const diff = (n1, n2) => {
    return n1 - n2 < -0.5 || n1 - n2 > 0.5;
};
const color1 = new color_1.Color("rgb", testColor);
const color2 = new color_1.Color("hex", `#${(_a = checkColor.data) === null || _a === void 0 ? void 0 : _a.hex}`);
const color3 = new color_1.Color("hsl", (_b = checkColor.data) === null || _b === void 0 ? void 0 : _b.hsl);
const color4 = new color_1.Color("hsv", (_c = checkColor.data) === null || _c === void 0 ? void 0 : _c.hsv);
const color5 = new color_1.Color("hwb", (_d = checkColor.data) === null || _d === void 0 ? void 0 : _d.hwb);
const color6 = new color_1.Color("luv", (_e = checkColor.data) === null || _e === void 0 ? void 0 : _e.luv);
const color7 = new color_1.Color("lab", (_f = checkColor.data) === null || _f === void 0 ? void 0 : _f.lab);
const color8 = new color_1.Color("lch_ab", (_g = checkColor.data) === null || _g === void 0 ? void 0 : _g.lch_ab);
const color9 = new color_1.Color("lch_uv", (_h = checkColor.data) === null || _h === void 0 ? void 0 : _h.lch_uv);
const color10 = new color_1.Color("ryb", (_j = checkColor.data) === null || _j === void 0 ? void 0 : _j.ryb);
const color11 = new color_1.Color("xyz", (_k = checkColor.data) === null || _k === void 0 ? void 0 : _k.xyz);
const color12 = new color_1.Color("xyy", (_l = checkColor.data) === null || _l === void 0 ? void 0 : _l.xyy);
const color13 = new color_1.Color("cmy", (_m = checkColor.data) === null || _m === void 0 ? void 0 : _m.cmy);
const color14 = new color_1.Color("cmyk", (_o = checkColor.data) === null || _o === void 0 ? void 0 : _o.cmyk);
const color15 = new color_1.Color("hcy", (_p = checkColor.data) === null || _p === void 0 ? void 0 : _p.hcy);
const color16 = new color_1.Color("adobe_98_rgb", (_q = checkColor.data) === null || _q === void 0 ? void 0 : _q.adobe_98_rgb);
const color17 = new color_1.Color("apple_rgb", (_r = checkColor.data) === null || _r === void 0 ? void 0 : _r.apple_rgb);
const color18 = new color_1.Color("best_rgb", (_s = checkColor.data) === null || _s === void 0 ? void 0 : _s.best_rgb);
const color19 = new color_1.Color("beta_rgb", (_t = checkColor.data) === null || _t === void 0 ? void 0 : _t.beta_rgb);
const color20 = new color_1.Color("bruce_rgb", (_u = checkColor.data) === null || _u === void 0 ? void 0 : _u.bruce_rgb);
const color21 = new color_1.Color("cie_rgb", (_v = checkColor.data) === null || _v === void 0 ? void 0 : _v.cie_rgb);
const color22 = new color_1.Color("color_match_rgb", (_w = checkColor.data) === null || _w === void 0 ? void 0 : _w.color_match_rgb);
const color23 = new color_1.Color("don_rgb_4", (_x = checkColor.data) === null || _x === void 0 ? void 0 : _x.don_rgb_4);
const color24 = new color_1.Color("eci_rgb_v2", (_y = checkColor.data) === null || _y === void 0 ? void 0 : _y.eci_rgb_v2);
const color25 = new color_1.Color("etka_space_ps5", (_z = checkColor.data) === null || _z === void 0 ? void 0 : _z.etka_space_ps5);
const color26 = new color_1.Color("ntsc_rgb", (_0 = checkColor.data) === null || _0 === void 0 ? void 0 : _0.ntsc_rgb);
const color27 = new color_1.Color("pal_secam_rgb", (_1 = checkColor.data) === null || _1 === void 0 ? void 0 : _1.pal_secam_rgb);
const color28 = new color_1.Color("pro_photo_rgb", (_2 = checkColor.data) === null || _2 === void 0 ? void 0 : _2.pro_photo_rgb);
const color29 = new color_1.Color("smpte_c_rgb", (_3 = checkColor.data) === null || _3 === void 0 ? void 0 : _3.smpte_c_rgb);
const color30 = new color_1.Color("wide_gamut_rgb", (_4 = checkColor.data) === null || _4 === void 0 ? void 0 : _4.wide_gamut_rgb);
const color31 = new color_1.Color("ycbcr", (_5 = checkColor.data) === null || _5 === void 0 ? void 0 : _5.ycbcr);
const color32 = new color_1.Color("yccbccrc", (_6 = checkColor.data) === null || _6 === void 0 ? void 0 : _6.yccbccrc);
const color33 = new color_1.Color("ycocg", (_7 = checkColor.data) === null || _7 === void 0 ? void 0 : _7.ycocg);
const color34 = new color_1.Color("ydbdr", (_8 = checkColor.data) === null || _8 === void 0 ? void 0 : _8.ydbdr);
const color35 = new color_1.Color("yiq", (_9 = checkColor.data) === null || _9 === void 0 ? void 0 : _9.yiq);
const color36 = new color_1.Color("ypbpr", (_10 = checkColor.data) === null || _10 === void 0 ? void 0 : _10.ypbpr);
const color37 = new color_1.Color("tsl", (_11 = checkColor.data) === null || _11 === void 0 ? void 0 : _11.tsl);
const color38 = new color_1.Color("uvw", (_12 = checkColor.data) === null || _12 === void 0 ? void 0 : _12.uvw);
const color39 = new color_1.Color("hunter_lab", (_13 = checkColor.data) === null || _13 === void 0 ? void 0 : _13.hunter_lab);
const color40 = new color_1.Color("lms", (_14 = checkColor.data) === null || _14 === void 0 ? void 0 : _14.lms);
console.log(color13.data.rgb);
const printData = (colors) => {
    colors.forEach((color) => {
        const name = Object.keys(color.data)[0].replace(/_/g, " ").toUpperCase();
        if (!checkRgb(color.data.rgb)) {
            fail += 1;
            console.log(`\n${name}\n`, `----------------------------------------------\n`, color.data.rgb, `\n`, color.data.xyz, `\n`, color.data.hex, `\n`, `\n----------------------------------------------\n`, `Diff\n`, `{ red: ${color.data.rgb.red - testColor.red}, green: ${color.data.rgb.green - testColor.green}, blue: ${color.data.rgb.blue - testColor.blue}} \n`, `{ x: ${color.data.xyz.x - checkColor.data.xyz.x}, y: ${color.data.xyz.y - checkColor.data.xyz.y}, z: ${color.data.xyz.z - checkColor.data.xyz.z}} \n ${checkColor.data.hex} - ${color.data.hex} 
        `, `\n----------------------------------------------\n`);
        }
        else {
            pass += 1;
            console.log(`\n${name}\n`, `----------------------------------------------\n`, "Conversion passed.");
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
