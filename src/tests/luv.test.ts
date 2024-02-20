import { luvToXyz } from './../conversions/luv-conversions';
import { PRECEPTABLE_THROUGH_CLOSE_OBESERVATION } from "../constants/conditionals";
import { XYZ, cie76ColorDiff, xyzToLuv, xyzToSrgb } from "../public_api";

const Test = (xyz: XYZ, colorName: string) => {
  test(`Checking XYZ <-> LUV conversions for ${colorName}`, () => {
    expect(
      cie76ColorDiff(xyzToSrgb(luvToXyz(xyzToLuv(xyz))), xyzToSrgb(xyz))
    ).toBeLessThanOrEqual(PRECEPTABLE_THROUGH_CLOSE_OBESERVATION);
  });
};

Test(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 },
  "Yellow"
);
Test(
  { x: 35.9120666993328, y: 28.808434268936097, z: 5.419297073053726 },
  "Orange"
);
Test(
  { x: 13.202867328257659, y: 11.575532613794051, z: 37.12857860026635 },
  "Purplish Blue"
);
Test(
  { x: 27.62513014132322, y: 18.69502708789548, z: 13.706625515194181 },
  "Moderate Red"
);
Test(
  { x: 8.531757200262838, y: 6.413798640911185, z: 14.695612441342334 },
  "Purple"
);
Test(
  { x: 33.2965334632533, y: 43.766312849403235, z: 10.967717412244491 },
  "Yellow Green"
);
Test(
  { x: 46.15168100558844, y: 43.1885071436693, z: 8.095599343107358 },
  "Orange Yellow"
);
Test(
  { x: 8.490396762622195, y: 6.111654044271183, z: 30.863036275406326 },
  "Blue"
);
Test(
  { x: 17.697882513623384, y: 18.94493933037014, z: 34.17024267446187 },
  "Blue Sky"
);
Test(
  { x: 24.989976330617843, y: 23.62014382596365, z: 44.82896486975364 },
  "Blue Flower"
);
Test(
  { x: 31.01661432382987, y: 42.473960457441336, z: 45.08399767964223 },
  "Bluish Green"
);
Test(
  { x: 14.578311839577996, y: 23.580809542693366, z: 9.412405094127996 },
  "Green"
);
Test(
  { x: 19.748125802114448, y: 11.43698537712494, z: 4.908330952907127 },
  "Red"
);
Test(
  { x: 28.85685600779282, y: 18.739979417361326, z: 30.108603514613236 },
  "Magenta"
);
Test(
  { x: 14.93050603627794, y: 19.762703639769423, z: 39.09660939928801 },
  "Cyan"
);
Test(
  { x: 83.99798052257115, y: 88.67354492316015, z: 92.79488184018574 },
  "White"
);
Test(
  { x: 2.98933568708001, y: 3.1050304894404497, z: 3.4588402502271727 },
  "Black"
);
