import { sRgbToAnsi16, sRgbToAnsi256 } from "../public_api";

const Test16 = (
  rgb: { red: number; green: number; blue: number },
  ansi: number,
  colorName: string
): void => {
  test(`Checking RGB -> Ansi16 conversions for ${colorName}`, () => {
    expect(sRgbToAnsi16(rgb)).toBeLessThanOrEqual(ansi);
  });
};

Test16({ red: 238, green: 200, blue: 27 }, 33, "Yellow");
Test16({ red: 217, green: 122, blue: 37 }, 31, "Orange");
Test16({ red: 72, green: 91, blue: 165 }, 34, "Purplish Blue");
Test16({ red: 194, green: 84, blue: 98 }, 31, "Moderate Red");
Test16({ red: 91, green: 59, blue: 107 }, 30, "Purple");
Test16({ red: 160, green: 188, blue: 60 }, 33, "Yellow Green");
Test16({ red: 230, green: 163, blue: 42 }, 33, "Orange Yellow");
Test16({ red: 46, green: 60, blue: 153 }, 34, "Blue");
Test16({ red: 94, green: 123, blue: 156 }, 34, "Blue Sky");
Test16({ red: 130, green: 129, blue: 177 }, 37, "Blue Flower");
Test16({ red: 100, green: 190, blue: 171 }, 36, "Bluish Green");
Test16({ red: 71, green: 150, blue: 69 }, 32, "Green");
Test16({ red: 177, green: 44, blue: 56 }, 31, "Red");
Test16({ red: 187, green: 82, blue: 148 }, 35, "Magenta");
Test16({ red: 243, green: 242, blue: 237 }, 37, "White");
Test16({ red: 50, green: 49, blue: 50 }, 30, "Printer Black");
Test16({ red: -49, green: 135, blue: 166 }, 36, "Cyan");

const Test256 = (
  rgb: { red: number; green: number; blue: number },
  ansi: number,
  colorName: string
) => {
  test(`Checking RGB -> Ansi256 conversions for ${colorName}`, () => {
    expect(sRgbToAnsi256(rgb)).toBeLessThanOrEqual(ansi);
  });
};

Test256({ red: 238, green: 200, blue: 27 }, 221, "Yellow");
Test256({ red: 217, green: 122, blue: 37 }, 173, "Orange");
Test256({ red: 72, green: 91, blue: 165 }, 67, "Purplish Blue");
Test256({ red: 194, green: 84, blue: 98 }, 174, "Moderate Red");
Test256({ red: 91, green: 59, blue: 107 }, 96, "Purple");
Test256({ red: 160, green: 188, blue: 60 }, 149, "Yellow Green");
Test256({ red: 230, green: 163, blue: 42 }, 215, "Orange Yellow");
Test256({ red: 46, green: 60, blue: 153 }, 61, "Blue");
Test256({ red: 94, green: 123, blue: 156 }, 103, "Blue Sky");
Test256({ red: 130, green: 129, blue: 177 }, 145, "Blue Flower");
Test256({ red: 100, green: 190, blue: 171 }, 115, "Bluish Green");
Test256({ red: 71, green: 150, blue: 69 }, 115, "Green");
Test256({ red: 177, green: 44, blue: 56 }, 131, "Red");
Test256({ red: 187, green: 82, blue: 148 }, 175, "Magenta");
Test256({ red: 243, green: 242, blue: 237 }, 231, "White");
Test256({ red: 50, green: 49, blue: 50 }, 236, "Printer Black"); // Fix latter
Test256({ red: -49, green: 135, blue: 166 }, 37, "Cyan");
