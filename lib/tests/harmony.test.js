"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const public_api_1 = require("../public_api");
test("Checking RGB values of a color", () => {
    expect((0, public_api_1.squareHarmony)({ hue: 49, saturation: 86, lightness: 52 }, true)).toStrictEqual(["#EEC71B", "#1BEE5E", "#1B42EE", "#EE1BAB"]);
});
