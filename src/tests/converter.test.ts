import { RgbConverter } from "../public_api";

test("Using a RGB Converter", () => {
  const rgb = new RgbConverter({ red: 217, green: 122, blue: 37 });
  expect(rgb.get("uvw")).toStrictEqual({
    u: 76.5782128636881,
    v: 34.64544011791569,
    w: 59.63842313404014,
  });
});
