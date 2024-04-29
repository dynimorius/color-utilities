import { deltaECIE00Lab } from "../color-difference/cie-delta-e-00";
import { deltaECIE94Lab } from "../color-difference/cie-delta-e-94";
import { deltaECIE76Lab } from "../color-difference/cie-delta-e-76";
import { LAB } from '../../lib/types/interfaces/color-spaces.interface';


const color1: LAB = {
  luminance: 36,
  a: 60,
  b: 41
};

const color2 = {
  luminance: 55,
  a: 66,
  b: 77
};

const floatingPointColor1 = {
  luminance: 53.23288178584245,
  a: 80.10930952982204,
  b: 67.22006831026425
};

const floatingPointColor2 = {
  luminance: 50.9588099835815,
  a: 77.47798295202801,
  b: 65.01211079141827
};

function round(n: number) {
  return Math.round(n * 10000) / 10000;
}

// function format(c) {
//   return {
//     L: c[0],
//     A: c[1],
//     B: c[2]
//   };
// }

const deltaE76Test = () => {
    test('Check Delta E 76', () => {
        expect(
          deltaECIE76Lab(color1, color2)
          ).toEqual(41.14608122288197);
    })
}

deltaE76Test();

const deltaE94Test = () => {
  test('Check Delta E 94', () => {
      expect(
        deltaECIE94Lab(color1, color2)
        ).toEqual(22.849281934529994);
  })
}

deltaE94Test();

const deltaE00Test = () => {
  test('Check Delta E 00', () => {
      expect(
        deltaECIE00Lab(color1, color2)
        ).toEqual(22.3945069524179);
  })
}

deltaE00Test();

