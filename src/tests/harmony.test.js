import { squareHarmony } from "../public_api";
test("Getting a square harmony", () => {
    expect(squareHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)).toStrictEqual(["#EEC71B", "#1BEE5E", "#1B42EE", "#EE1BAB"]);
});
