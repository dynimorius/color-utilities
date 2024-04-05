import { NOT_PERCEPTIBLE_BY_HUMAN_EYE } from "../constants/conditionals";
import {
  RGB,
  XYZ,
  cie76ColorDiff,
  deltaECIE76,
  hunterLabToXyz,
  labToXyz,
  lch_abToLab,
  sRgbToLab,
  xyzToLab,
} from "../public_api";
import { labToLch_ab, labToSrgb } from "./../conversions/lab-conversions";
import { xyzToHunterLab, xyzToSrgb } from "./../conversions/xyz-conversions";

const Test = (xyz: XYZ, colorName: string) => {
  test(`Checking XYZ <-> LAB conversions for ${colorName}`, () => {
    expect(
      cie76ColorDiff(xyzToSrgb(labToXyz(xyzToLab(xyz))), xyzToSrgb(xyz))
    ).toBeLessThanOrEqual(NOT_PERCEPTIBLE_BY_HUMAN_EYE);
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
  "Printer Black"
);

const Test2 = (xyz: XYZ, colorName: string) => {
  test(`Checking XYZ <-> Hunter's LAB conversions for ${colorName}`, () => {
    expect(
      cie76ColorDiff(
        xyzToSrgb(hunterLabToXyz(xyzToHunterLab(xyz))),
        xyzToSrgb(xyz)
      )
    ).toBeLessThanOrEqual(NOT_PERCEPTIBLE_BY_HUMAN_EYE);
  });
};

Test2(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 },
  "Yellow"
);
Test2(
  { x: 35.9120666993328, y: 28.808434268936097, z: 5.419297073053726 },
  "Orange"
);
Test2(
  { x: 13.202867328257659, y: 11.575532613794051, z: 37.12857860026635 },
  "Purplish Blue"
);
Test2(
  { x: 27.62513014132322, y: 18.69502708789548, z: 13.706625515194181 },
  "Moderate Red"
);
Test2(
  { x: 8.531757200262838, y: 6.413798640911185, z: 14.695612441342334 },
  "Purple"
);
Test2(
  { x: 33.2965334632533, y: 43.766312849403235, z: 10.967717412244491 },
  "Yellow Green"
);
Test2(
  { x: 46.15168100558844, y: 43.1885071436693, z: 8.095599343107358 },
  "Orange Yellow"
);
Test2(
  { x: 8.490396762622195, y: 6.111654044271183, z: 30.863036275406326 },
  "Blue"
);
Test2(
  { x: 17.697882513623384, y: 18.94493933037014, z: 34.17024267446187 },
  "Blue Sky"
);
Test2(
  { x: 24.989976330617843, y: 23.62014382596365, z: 44.82896486975364 },
  "Blue Flower"
);
Test2(
  { x: 31.01661432382987, y: 42.473960457441336, z: 45.08399767964223 },
  "Bluish Green"
);
Test2(
  { x: 14.578311839577996, y: 23.580809542693366, z: 9.412405094127996 },
  "Green"
);
Test2(
  { x: 19.748125802114448, y: 11.43698537712494, z: 4.908330952907127 },
  "Red"
);
Test2(
  { x: 28.85685600779282, y: 18.739979417361326, z: 30.108603514613236 },
  "Magenta"
);
Test2(
  { x: 14.93050603627794, y: 19.762703639769423, z: 39.09660939928801 },
  "Cyan"
);
Test2(
  { x: 83.99798052257115, y: 88.67354492316015, z: 92.79488184018574 },
  "White"
);
Test2(
  { x: 2.98933568708001, y: 3.1050304894404497, z: 3.4588402502271727 },
  "Printer Black"
);

const Test3 = (rgb: RGB, colorName: string) => {
  test(`Checking RGB <-> LAB conversions for ${colorName}`, () => {
    expect(cie76ColorDiff(labToSrgb(sRgbToLab(rgb)), rgb)).toBeLessThanOrEqual(
      NOT_PERCEPTIBLE_BY_HUMAN_EYE
    );
  });
};

Test3({ red: 238, green: 200, blue: 27 }, "Yellow");
Test3({ red: 217, green: 122, blue: 37 }, "Orange");
Test3({ red: 72, green: 91, blue: 165 }, "Purplish Blue");
Test3({ red: 194, green: 84, blue: 98 }, "Moderate Red");
Test3({ red: 91, green: 59, blue: 107 }, "Purple");
Test3({ red: 160, green: 188, blue: 60 }, "Yellow Green");
Test3({ red: 230, green: 163, blue: 42 }, "Orange Yellow");
Test3({ red: 46, green: 60, blue: 153 }, "Blue");
Test3({ red: 94, green: 123, blue: 156 }, "Blue Sky");
Test3({ red: 130, green: 129, blue: 177 }, "Blue Flower");
Test3({ red: 100, green: 190, blue: 171 }, "Bluish Green");
Test3({ red: 71, green: 150, blue: 69 }, "Green");
Test3({ red: 177, green: 44, blue: 56 }, "Red");
Test3({ red: 187, green: 82, blue: 148 }, "Magenta");
Test3({ red: -49, green: 135, blue: 166 }, "Cyan");
Test3({ red: 243, green: 242, blue: 237 }, "White");
Test3({ red: 50, green: 49, blue: 50 }, "Printer Black");


const Test4 = (xyz: XYZ, colorName: string) => {
  test(`Checking Lab <-> Lch_ab conversions for ${colorName}`, () => {
    const lab = xyzToLab(xyz);
    expect(
      deltaECIE76(lch_abToLab(labToLch_ab(lab)), lab)
    ).toBeLessThanOrEqual(NOT_PERCEPTIBLE_BY_HUMAN_EYE);
  });
};

Test4(
  { x: 56.11537464609447, y: 59.56827248834963, z: 9.578873171265526 },
  "Yellow"
);
Test4(
  { x: 35.9120666993328, y: 28.808434268936097, z: 5.419297073053726 },
  "Orange"
);
Test4(
  { x: 13.202867328257659, y: 11.575532613794051, z: 37.12857860026635 },
  "Purplish Blue"
);
Test4(
  { x: 27.62513014132322, y: 18.69502708789548, z: 13.706625515194181 },
  "Moderate Red"
);
Test4(
  { x: 8.531757200262838, y: 6.413798640911185, z: 14.695612441342334 },
  "Purple"
);
Test4(
  { x: 33.2965334632533, y: 43.766312849403235, z: 10.967717412244491 },
  "Yellow Green"
);
Test4(
  { x: 46.15168100558844, y: 43.1885071436693, z: 8.095599343107358 },
  "Orange Yellow"
);
Test4(
  { x: 8.490396762622195, y: 6.111654044271183, z: 30.863036275406326 },
  "Blue"
);
Test4(
  { x: 17.697882513623384, y: 18.94493933037014, z: 34.17024267446187 },
  "Blue Sky"
);
Test4(
  { x: 24.989976330617843, y: 23.62014382596365, z: 44.82896486975364 },
  "Blue Flower"
);
Test4(
  { x: 31.01661432382987, y: 42.473960457441336, z: 45.08399767964223 },
  "Bluish Green"
);
Test4(
  { x: 14.578311839577996, y: 23.580809542693366, z: 9.412405094127996 },
  "Green"
);
Test4(
  { x: 19.748125802114448, y: 11.43698537712494, z: 4.908330952907127 },
  "Red"
);
Test4(
  { x: 28.85685600779282, y: 18.739979417361326, z: 30.108603514613236 },
  "Magenta"
);
Test4(
  { x: 14.93050603627794, y: 19.762703639769423, z: 39.09660939928801 },
  "Cyan"
);
Test4(
  { x: 83.99798052257115, y: 88.67354492316015, z: 92.79488184018574 },
  "White"
);
Test4(
  { x: 2.98933568708001, y: 3.1050304894404497, z: 3.4588402502271727 },
  "Printer Black"
);