import { Blender, blend } from "../public_api";
test("Using blend method", () => {
    expect(blend({ red: 255, green: 237, blue: 0 }, { red: 255, green: 0, blue: 0 }, 0.67)).toStrictEqual({ red: 255, green: 159, blue: 0 });
});
test("Using a blender to blend RGB and RGB_M and return blend data", () => {
    const color = new Blender({ red: 255, green: 237, blue: 0 }, { r: 255, g: 0, b: 0 }, { weight: 0.67 });
    expect(color.blendData).toStrictEqual({
        color1: {
            data: { red: 255, green: 237, blue: 0, inGamut: true },
            rgb: { red: 255, green: 237, blue: 0, inGamut: true },
            amount: 0.67,
        },
        color2: {
            data: { red: 255, green: 0, blue: 0, inGamut: true },
            rgb: { red: 255, green: 0, blue: 0, inGamut: true },
            amount: 0.32999999999999996,
        },
        resultColor: { red: 255, green: 159, blue: 0 },
    });
});
test("Using a blender to blend two HEX colors and return a color", () => {
    const color = new Blender("#FFED00", "#FF0000", { weight: 0.67 });
    expect(color.color).toStrictEqual({ red: 255, green: 159, blue: 0 });
});
test("Using a blender to blend two CMYK colors and return a color", () => {
    const color = new Blender({ c: 0, m: 7, y: 100, k: 0 }, { c: 0, m: 100, y: 100, k: 0 }, { weight: 0.67 });
    expect(color.color).toStrictEqual({ red: 255, green: 159, blue: 0 });
});
test("Using a blender to blend two HSL colors and return blend data", () => {
    const color = new Blender({ h: 56, s: 100, l: 50 }, { h: 0, s: 100, l: 50 }, { weight: 0.67 });
    expect(color.blendData).toStrictEqual({
        color1: {
            data: { hue: 56, saturation: 100, lightness: 50 },
            rgb: { red: 255, green: 238.00000000000006, blue: 0, inGamut: true },
            amount: 0.67,
        },
        color2: {
            data: { hue: 0, saturation: 100, lightness: 50 },
            rgb: { red: 255, green: 0, blue: 0, inGamut: true },
            amount: 0.32999999999999996,
        },
        resultColor: { red: 255, green: 159, blue: 0 },
    });
});
test("Using a blender to blend CMYK and HSV and return blend data", () => {
    const color = new Blender({ c: 0, m: 7, y: 100, k: 0 }, { h: 0, s: 100, v: 100 }, { weight: 0.67, returnType: "hex" });
    expect(color.blendData).toStrictEqual({
        color1: {
            data: { cyan: 0, magenta: 7, yellow: 100, key: 0 },
            rgb: { red: 255, green: 237.14999999999998, blue: 0, inGamut: true },
            amount: 0.67,
        },
        color2: {
            data: { hue: 0, saturation: 100, value: 100 },
            rgb: { red: 255, green: 0, blue: 0, inGamut: true },
            amount: 0.32999999999999996,
        },
        resultColor: "FF9F00",
    });
});
