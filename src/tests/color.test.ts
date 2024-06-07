import { Color } from '../color/color';
import { PERCEPTIBLE_THROUGH_CLOSE_OBSERVATION } from '../constants/conditionals';
import {
  CMY,
  CMYK,
  HCY,
  HSL,
  HSV,
  HWB,
  LAB,
  LCH,
  LMS,
  LUV,
  RGB,
  RYB,
  TSL,
  UVW,
  XYY,
  XYZ,
  YCbCr,
  YCoCg,
  YDbDr,
  YIQ,
  YPbPr,
  YcCbcCrc,
  deltaECIE00Rgb
} from '../public_api';

const checkIfInExceptibleRange = (color: Color, testColor: Color) => {
  expect(deltaECIE00Rgb(color.rgb, testColor.rgb)).toBeLessThanOrEqual(
    PERCEPTIBLE_THROUGH_CLOSE_OBSERVATION
  );
};

const Test = (
  rgb: { red: number; green: number; blue: number },
  colorName: string
) => {
  const testColor = new Color('rgb', rgb, 'all');

  test(`Checking ${colorName} from a HEX value is correct"`, () => {
    const color = new Color('hex', `#${testColor.data?.hex as string}`);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a HLS value is correct"`, () => {
    const color = new Color('hsl', testColor.data?.hsl as HSL);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a HSV value is correct"`, () => {
    const color = new Color('hsv', testColor.data?.hsv as HSV);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a HWB value is correct"`, () => {
    const color = new Color('hwb', testColor.data?.hwb as HWB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a LUV value is correct"`, () => {
    const color = new Color('luv', testColor.data?.luv as LUV);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a LAB value is correct"`, () => {
    const color = new Color('lab', testColor.data?.lab as LAB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a LCH(ab) value is correct"`, () => {
    const color = new Color('lch_ab', testColor.data?.lch_ab as LCH);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a LCH(uv) value is correct"`, () => {
    const color = new Color('lch_uv', testColor.data?.lch_uv as LCH);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a RYB value is correct"`, () => {
    const color = new Color('ryb', testColor.data?.ryb as RYB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a XYZ value is correct"`, () => {
    const color = new Color('xyz', testColor.data?.xyz as XYZ);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a XYY value is correct"`, () => {
    const color = new Color('xyy', testColor.data?.xyy as XYY);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a CMY value is correct"`, () => {
    const color = new Color('cmy', testColor.data?.cmy as CMY);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a CMYK value is correct"`, () => {
    const color = new Color('cmyk', testColor.data?.cmyk as CMYK);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a HCY value is correct"`, () => {
    const color = new Color('hcy', testColor.data?.hcy as HCY);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Adobe 98 RGB value is correct"`, () => {
    const color = new Color(
      'adobe_98_rgb',
      testColor.data?.adobe_98_rgb as RGB
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Apple RGB value is correct"`, () => {
    const color = new Color('apple_rgb', testColor.data?.apple_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Best RGB value is correct"`, () => {
    const color = new Color('best_rgb', testColor.data?.best_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Beta RGB value is correct"`, () => {
    const color = new Color('beta_rgb', testColor.data?.beta_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Bruce RGB value is correct"`, () => {
    const color = new Color('bruce_rgb', testColor.data?.bruce_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a CIE RGB value is correct"`, () => {
    const color = new Color('cie_rgb', testColor.data?.cie_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Color Match RGB value is correct"`, () => {
    const color = new Color(
      'color_match_rgb',
      testColor.data?.color_match_rgb as RGB
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Done RGB 4 value is correct"`, () => {
    const color = new Color('don_rgb_4', testColor.data?.don_rgb_4 as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a ECI RGB v2 value is correct"`, () => {
    const color = new Color('eci_rgb_v2', testColor.data?.eci_rgb_v2 as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Etka Space ps5 value is correct"`, () => {
    const color = new Color(
      'etka_space_ps5',
      testColor.data?.etka_space_ps5 as RGB
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a NTSC RGB value is correct"`, () => {
    const color = new Color('ntsc_rgb', testColor.data?.ntsc_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Pal/Secam RGB value is correct"`, () => {
    const color = new Color(
      'pal_secam_rgb',
      testColor.data?.pal_secam_rgb as RGB
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Pro Photo RGB value is correct"`, () => {
    const color = new Color(
      'pro_photo_rgb',
      testColor.data?.pro_photo_rgb as RGB
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a SMPTE/C RGB value is correct"`, () => {
    const color = new Color('smpte_c_rgb', testColor.data?.smpte_c_rgb as RGB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Wide Gamut RGB value is correct"`, () => {
    const color = new Color(
      'wide_gamut_rgb',
      testColor.data?.wide_gamut_rgb as RGB
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a YCbCr BT601 value is correct"`, () => {
    const color = new Color(
      'ycbcr_BT601',
      testColor.data?.ycbcr_BT601 as YCbCr
    );
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a YcCbcCrc value is correct"`, () => {
    const color = new Color('yccbccrc', testColor.data?.yccbccrc as YcCbcCrc);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a YCgCo value is correct"`, () => {
    const color = new Color('ycocg', testColor.data?.ycocg as YCoCg);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a YCDbDr value is correct"`, () => {
    const color = new Color('ydbdr', testColor.data?.ydbdr as YDbDr);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a YIQ value is correct"`, () => {
    const color = new Color('yiq', testColor.data?.yiq as YIQ);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a YPbPr value is correct"`, () => {
    const color = new Color('ypbpr', testColor.data?.ypbpr as YPbPr);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a TSL value is correct"`, () => {
    const color = new Color('tsl', testColor.data?.tsl as TSL);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a UVW value is correct"`, () => {
    const color = new Color('uvw', testColor.data?.uvw as UVW);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a Hunter's Lab value is correct"`, () => {
    const color = new Color('hunter_lab', testColor.data?.hunter_lab as LAB);
    checkIfInExceptibleRange(color, testColor);
  });

  test(`Checking ${colorName} from a LMS value is correct"`, () => {
    const color = new Color('lms', testColor.data?.lms as LMS);
    checkIfInExceptibleRange(color, testColor);
  });
};

const ErrorTest = (
  rgb: { red: number; green: number; blue: number },
  colorName: string
) => {
  test(`Checking ${colorName} from a CMYK value is throwing an error"`, () => {
    expect((): Color => {
      return new Color('rgb', rgb);
    }).toThrow('Provided rgb values must be within range of 0 to 255!');
  });
};

Test({ red: 238, green: 200, blue: 27 }, 'Yellow');
Test({ red: 217, green: 122, blue: 37 }, 'Orange');
Test({ red: 72, green: 91, blue: 165 }, 'Purplish Blue');
Test({ red: 194, green: 84, blue: 98 }, 'Moderate Red');
Test({ red: 91, green: 59, blue: 107 }, 'Purple');
Test({ red: 160, green: 188, blue: 60 }, 'Yellow Green');
Test({ red: 230, green: 163, blue: 42 }, 'Orange Yellow');
Test({ red: 46, green: 60, blue: 153 }, 'Blue');
Test({ red: 94, green: 123, blue: 156 }, 'Blue Sky');
Test({ red: 130, green: 129, blue: 177 }, 'Blue Flower');
Test({ red: 100, green: 190, blue: 171 }, 'Bluish Green');
Test({ red: 71, green: 150, blue: 69 }, 'Green');
Test({ red: 177, green: 44, blue: 56 }, 'Red');
Test({ red: 187, green: 82, blue: 148 }, 'Magenta');
Test({ red: 243, green: 242, blue: 237 }, 'White');
Test({ red: 50, green: 49, blue: 50 }, 'Printer Black');
ErrorTest({ red: -49, green: 135, blue: 166 }, 'Cyan');
