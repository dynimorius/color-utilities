import { comparativeDistance, tslToSrgb } from '../public_api';
import { sRgbToTsl } from './../conversions/rgb-conversions';
const tslConversionTest = (rgb: {
  red: number;
  green: number;
  blue: number;
}) => {
  test(`Checking rgb to TLS vonversion of r:${rgb.red} g:${rgb.green} b:${rgb.blue}`, () => {
     expect(comparativeDistance(tslToSrgb(sRgbToTsl(rgb)), rgb)).toBeLessThanOrEqual(4);
  });
};

tslConversionTest({ red: 238, green: 200, blue: 27 });
tslConversionTest({ red: 217, green: 122, blue: 37 });
tslConversionTest({ red: 72, green: 91, blue: 165 });

