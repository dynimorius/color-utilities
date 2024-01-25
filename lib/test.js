"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
Object.defineProperty(exports, "__esModule", { value: true });
const color_resolver_1 = require("./resolvers/color-resolver/color-resolver");
const rgb_resolver_1 = require("./resolvers/prebuilt-resolvers/rgb-resolver");
const blender_1 = require("./utilities/blender");
const harmony_1 = require("./utilities/harmony");
let pass = 0;
let fail = 0;
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
const color5 = new color_resolver_1.ColorResolver("hsl", (_b = checkColor.data) === null || _b === void 0 ? void 0 : _b.hsl);
const color6 = new color_resolver_1.ColorResolver("hsv", (_c = checkColor.data) === null || _c === void 0 ? void 0 : _c.hsv);
const color7 = new color_resolver_1.ColorResolver("hwb", (_d = checkColor.data) === null || _d === void 0 ? void 0 : _d.hwb);
const color8 = new color_resolver_1.ColorResolver("luv", (_e = checkColor.data) === null || _e === void 0 ? void 0 : _e.luv);
const color9 = new color_resolver_1.ColorResolver("lab", (_f = checkColor.data) === null || _f === void 0 ? void 0 : _f.lab);
const color10 = new color_resolver_1.ColorResolver("lch_ab", (_g = checkColor.data) === null || _g === void 0 ? void 0 : _g.lch_ab);
const color11 = new color_resolver_1.ColorResolver("lch_uv", (_h = checkColor.data) === null || _h === void 0 ? void 0 : _h.lch_uv);
const color12 = new color_resolver_1.ColorResolver("ryb", (_j = checkColor.data) === null || _j === void 0 ? void 0 : _j.ryb);
const color13 = new color_resolver_1.ColorResolver("xyz", (_k = checkColor.data) === null || _k === void 0 ? void 0 : _k.xyz);
const color14 = new color_resolver_1.ColorResolver("xyy", (_l = checkColor.data) === null || _l === void 0 ? void 0 : _l.xyy);
const color15 = new color_resolver_1.ColorResolver("cmyk", (_m = checkColor.data) === null || _m === void 0 ? void 0 : _m.cmyk);
const color16 = new color_resolver_1.ColorResolver("adobe_98_rgb", (_o = checkColor.data) === null || _o === void 0 ? void 0 : _o.adobe_98_rgb);
const color17 = new color_resolver_1.ColorResolver("apple_rgb", (_p = checkColor.data) === null || _p === void 0 ? void 0 : _p.apple_rgb);
const color18 = new color_resolver_1.ColorResolver("best_rgb", (_q = checkColor.data) === null || _q === void 0 ? void 0 : _q.best_rgb);
const color19 = new color_resolver_1.ColorResolver("beta_rgb", (_r = checkColor.data) === null || _r === void 0 ? void 0 : _r.beta_rgb);
const color20 = new color_resolver_1.ColorResolver("bruce_rgb", (_s = checkColor.data) === null || _s === void 0 ? void 0 : _s.bruce_rgb);
const color21 = new color_resolver_1.ColorResolver("cie_rgb", (_t = checkColor.data) === null || _t === void 0 ? void 0 : _t.cie_rgb);
const color22 = new color_resolver_1.ColorResolver("color_match_rgb", (_u = checkColor.data) === null || _u === void 0 ? void 0 : _u.color_match_rgb);
const color23 = new color_resolver_1.ColorResolver("don_rgb_4", (_v = checkColor.data) === null || _v === void 0 ? void 0 : _v.don_rgb_4);
const color24 = new color_resolver_1.ColorResolver("eci_rgb_v2", (_w = checkColor.data) === null || _w === void 0 ? void 0 : _w.eci_rgb_v2);
const color25 = new color_resolver_1.ColorResolver("etka_space_ps5", (_x = checkColor.data) === null || _x === void 0 ? void 0 : _x.etka_space_ps5);
const color26 = new color_resolver_1.ColorResolver("ntsc_rgb", (_y = checkColor.data) === null || _y === void 0 ? void 0 : _y.ntsc_rgb);
const color27 = new color_resolver_1.ColorResolver("pal_secam_rgb", (_z = checkColor.data) === null || _z === void 0 ? void 0 : _z.pal_secam_rgb);
const color28 = new color_resolver_1.ColorResolver("pro_photo_rgb", (_0 = checkColor.data) === null || _0 === void 0 ? void 0 : _0.pro_photo_rgb);
const color29 = new color_resolver_1.ColorResolver("smpte_c_rgb", (_1 = checkColor.data) === null || _1 === void 0 ? void 0 : _1.smpte_c_rgb);
const color30 = new color_resolver_1.ColorResolver("wide_gamut_rgb", (_2 = checkColor.data) === null || _2 === void 0 ? void 0 : _2.wide_gamut_rgb);
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
    color,
    color2,
    color3,
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
]);
console.log((0, harmony_1.squareHarmony)(checkColor.data.hsl, true));
console.log((0, blender_1.blend)({ red: 255, green: 237, blue: 0 }, { red: 255, green: 0, blue: 0 }, 0.67));
const newColor = new blender_1.Blender({ red: 255, green: 237, blue: 0 }, { red: 255, green: 0, blue: 0 }, { weight: 0.67 });
console.log(newColor.color);
const newColor2 = new blender_1.Blender("#FFED00", "#FF0000", { weight: 0.67 });
console.log(newColor2.color);
const newColor3 = new blender_1.Blender({ c: 0, m: 7, y: 100, k: 0 }, { c: 0, m: 100, y: 100, k: 0 }, { weight: 0.67 });
console.log(newColor3.color);
const newColor4 = new blender_1.Blender({ h: 56, s: 100, l: 50 }, { h: 0, s: 100, l: 50 }, { weight: 0.67 });
console.log(newColor4.blendData);
const newColor5 = new blender_1.Blender({ h: 56, s: 100, v: 100 }, { h: 0, s: 100, v: 100 }, { weight: 0.67, returnType: 'hsl' });
console.log(newColor5.blendData);
