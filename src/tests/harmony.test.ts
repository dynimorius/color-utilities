import {
  analogousHarmony,
  complementaryHarmony,
  splitComplementaryHarmony,
  splitComplementaryCWHarmony,
  splitComplementaryCCWHarmony,
  squareHarmony,
  triadicHarmony,
  tetradicHarmony,
  fourToneCWHarmony,
  fourToneCCWHarmony,
  fiveToneAHarmony,
  fiveToneBHarmony,
  fiveToneCHarmony,
  fiveToneDHarmony,
  fiveToneEHarmony,
  sixToneCWHarmony,
  sixToneCCWHarmony,
  neutralHarmony,
} from "../public_api";

test("Getting a analogous harmony", () => {
  expect(
    analogousHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual([
    "#EEC71B",
    "#ABEE1B",
    "#42EE1B",
    "#1BEE5E",
    "#1BEEC7",
    "#1BABEE",
  ]);
});

test("Getting a complementary harmony", () => {
  expect(
    complementaryHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1B42EE"]);
});

test("Getting a split complementary harmony", () => {
  expect(
    splitComplementaryHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BABEE", "#EE3B1B"]);
});

test("Getting a split complementary harmony", () => {
  expect(
    splitComplementaryHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BABEE", "#EE3B1B"]);
});

test("Getting a split complementary CW harmony", () => {
  expect(
    splitComplementaryCWHarmony(
      { hue: 49, saturation: 86, lightness: 52 },
      true
    )
  ).toStrictEqual(["#EEC71B", "#1BABEE", "#EE1B42"]);
});

test("Getting a split complementary CCW harmony", () => {
  expect(
    splitComplementaryCCWHarmony(
      { hue: 49, saturation: 86, lightness: 52 },
      true
    )
  ).toStrictEqual(["#EEC71B", "#42EE1B", "#5E1BEE"]);
});

test("Getting a square harmony", () => {
  expect(
    squareHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BEE5E", "#1B42EE", "#EE1BAB"]);
});

test("Getting a triadic harmony", () => {
  expect(
    triadicHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BEEC7", "#C71BEE"]);
});

test("Getting a tetradic harmony", () => {
  expect(
    tetradicHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BEE5E", "#1B42EE", "#EE1BAB"]);
});

test("Getting a four tone CW harmony", () => {
  expect(
    fourToneCWHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#42EE1B", "#1B42EE", "#C71BEE"]);
});

test("Getting a four tone CCW harmony", () => {
  expect(
    fourToneCCWHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BEEC7", "#1B42EE", "#EE1B42"]);
});

test("Getting a five tone A harmony", () => {
  expect(
    fiveToneAHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BEEB6", "#1B9AEE", "#4C1BEE", "#D91BEE"]);
});

test("Getting a five tone B harmony", () => {
  expect(
    fiveToneBHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#88EE1B", "#1BEE5E", "#1BEEEA", "#D91BEE"]);
});

test("Getting a five tone C harmony", () => {
  expect(
    fiveToneCHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#65EE1B", "#1BEE5E", "#4C1BEE", "#EE3B1B"]);
});

test("Getting a five tone D harmony", () => {
  expect(
    fiveToneDHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#88EE1B", "#1B9AEE", "#EE1BAB", "#EE1B1F"]);
});

test("Getting a five tone E harmony", () => {
  expect(
    fiveToneEHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual(["#EEC71B", "#1BEEB6", "#A41BEE", "#EE1BAB", "#EE3B1B"]);
});

test("Getting a six tone CW harmony", () => {
  expect(
    sixToneCWHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual([
    "#EEC71B",
    "#ABEE1B",
    "#1BEEC7",
    "#1BABEE",
    "#C71BEE",
    "#EE1BAB",
  ]);
});

test("Getting a six tone CCW harmony", () => {
  expect(
    sixToneCCWHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual([
    "#EEC71B",
    "#1BEE5E",
    "#1BEEC7",
    "#5E1BEE",
    "#C71BEE",
    "#EE5E1B",
  ]);
});

test("Getting a neutral harmony ", () => {
  expect(
    neutralHarmony({ hue: 49, saturation: 86, lightness: 52 }, true)
  ).toStrictEqual([
    "#EEC71B",
    "#E0EE1B",
    "#ABEE1B",
    "#77EE1B",
    "#42EE1B",
    "#1BEE29"
  ]);
});