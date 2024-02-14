import { comparativeDistance, sRgbToYCbCrBT2020, sRgbToYCbCrBT601, sRgbToYCbCrBT709, yCbCrBT2020ToSrgb, yCbCrBT601ToSrgb, yCbCrBT709ToSrgb } from "../public_api";

const TestBT601 = (
  rgb: { red: number; green: number; blue: number },
  colorName: string
) => {
  test(`Checking RGB <-> YCbCr BT601 conversions of for ${colorName}`, () => {
    expect(
      comparativeDistance(yCbCrBT601ToSrgb(sRgbToYCbCrBT601(rgb)), rgb)
    ).toBeLessThanOrEqual(4);
  });
};

TestBT601({ red: 238, green: 200, blue: 27 }, "Yellow");
TestBT601({ red: 217, green: 122, blue: 37 }, "Orange");
TestBT601({ red: 72, green: 91, blue: 165 }, "Purplish Blue");
TestBT601({ red: 194, green: 84, blue: 98 }, "Moderate Red");
TestBT601({ red: 91, green: 59, blue: 107 }, "Purple");
TestBT601({ red: 160, green: 188, blue: 60 }, "Yellow Green");
TestBT601({ red: 230, green: 163, blue: 42 }, "Orange Yellow");
TestBT601({ red: 46, green: 60, blue: 153 }, "Blue");
TestBT601({ red: 94, green: 123, blue: 156 }, "Blue Sky");
TestBT601({ red: 130, green: 129, blue: 177 }, "Blue Flower");
TestBT601({ red: 100, green: 190, blue: 171 }, "Bluish Green");
TestBT601({ red: 71, green: 150, blue: 69 }, "Green");
TestBT601({ red: 177, green: 44, blue: 56 }, "Red");
TestBT601({ red: 187, green: 82, blue: 148 }, "Magenta");
TestBT601({ red: -49, green: 135, blue: 166 }, "Cyan");
TestBT601({ red: 243, green: 242, blue: 237 }, "White");
TestBT601({ red: 50, green: 49, blue: 50 }, "Black");  // Black


const TestBT709 = (
  rgb: { red: number; green: number; blue: number },
  colorName: string
) => {
  test(`Checking RGB <-> YCbCr BT709 conversions for ${colorName}`, () => {
    expect(
      comparativeDistance(yCbCrBT709ToSrgb(sRgbToYCbCrBT709(rgb)), rgb)
    ).toBeLessThanOrEqual(4);
  });
};

TestBT709({ red: 238, green: 200, blue: 27 }, "Yellow");
TestBT709({ red: 217, green: 122, blue: 37 }, "Orange");
TestBT709({ red: 72, green: 91, blue: 165 }, "Purplish Blue");
TestBT709({ red: 194, green: 84, blue: 98 }, "Moderate Red");
TestBT709({ red: 91, green: 59, blue: 107 }, "Purple");
TestBT709({ red: 160, green: 188, blue: 60 }, "Yellow Green");
TestBT709({ red: 230, green: 163, blue: 42 }, "Orange Yellow");
TestBT709({ red: 46, green: 60, blue: 153 }, "Blue");
TestBT709({ red: 94, green: 123, blue: 156 }, "Blue Sky");
TestBT709({ red: 130, green: 129, blue: 177 }, "Blue Flower");
TestBT709({ red: 100, green: 190, blue: 171 }, "Bluish Green");
TestBT709({ red: 71, green: 150, blue: 69 }, "Green");
TestBT709({ red: 177, green: 44, blue: 56 }, "Red");
TestBT709({ red: 187, green: 82, blue: 148 }, "Magenta");
TestBT709({ red: -49, green: 135, blue: 166 }, "Cyan");
TestBT709({ red: 243, green: 242, blue: 237 }, "White");
TestBT709({ red: 50, green: 49, blue: 50 }, "Black");

//TODO
// const TestBT2020 = (
//   rgb: { red: number; green: number; blue: number },
//   colorName: string
// ) => {
//   test(`Checking RGB <-> YCbCr BT2020 conversions for ${colorName}`, () => {
//     expect(
//       comparativeDistance(yCbCrBT2020ToSrgb(sRgbToYCbCrBT2020(rgb)), rgb)
//     ).toBeLessThanOrEqual(4);
//   });
// };

// TestBT2020({ red: 238, green: 200, blue: 27 }, "Yellow");
// TestBT2020({ red: 217, green: 122, blue: 37 }, "Orange");
// TestBT2020({ red: 72, green: 91, blue: 165 }, "Purplish Blue");
// TestBT2020({ red: 194, green: 84, blue: 98 }, "Moderate Red");
// TestBT2020({ red: 91, green: 59, blue: 107 }, "Purple");
// TestBT2020({ red: 160, green: 188, blue: 60 }, "Yellow Green");
// TestBT2020({ red: 230, green: 163, blue: 42 }, "Orange Yellow");
// TestBT2020({ red: 46, green: 60, blue: 153 }, "Blue");
// TestBT2020({ red: 94, green: 123, blue: 156 }, "Blue Sky");
// TestBT2020({ red: 130, green: 129, blue: 177 }, "Blue Flower");
// TestBT2020({ red: 100, green: 190, blue: 171 }, "Bluish Green");
// TestBT2020({ red: 71, green: 150, blue: 69 }, "Green");
// TestBT2020({ red: 177, green: 44, blue: 56 }, "Red");
// TestBT2020({ red: 187, green: 82, blue: 148 }, "Magenta");
// TestBT2020({ red: -49, green: 135, blue: 166 }, "Cyan");
// TestBT2020({ red: 243, green: 242, blue: 237 }, "White");
// TestBT2020({ red: 50, green: 49, blue: 50 }, "Black");