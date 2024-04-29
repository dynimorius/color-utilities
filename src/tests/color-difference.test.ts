import { deltaECIE00Lab } from '../color-difference/cie-delta-e-00';
import { deltaECIE94Lab } from '../color-difference/cie-delta-e-94';
import { deltaECIE76Lab } from '../color-difference/cie-delta-e-76';
import { LAB } from '../public_api';

const testColor: LAB = {
  luminance: 36,
  a: 60,
  b: 41
};

const comparisons: {[key: string]: {[key: string]: number}} = {
  Yellow: {
    '76': 85.44126650773197,
    '94': 56.22175522866099,
    '00': 58.97243953956924
  },
  Orange: {
    '76': 41.709609071416565,
    '94': 29.716875812479035,
    '00': 31.314698885973918
  },
  Purplish_Blue: {
    '76': 94.61909538739566,
    '94': 54.9352542623695,
    '00': 40.750802526465826
  },
  Moderate_Red: {
    '76': 33.81748473606023,
    '94': 19.31823990712412,
    '00': 17.781389528201
  },
  Purple: {
    '76': 73.36821428122916,
    '94': 44.519086887982006,
    '00': 31.882425779306974
  },
  Yellow_Green: {
    '76': 95.98327714498723,
    '94': 57.662366281469346,
    '00': 65.43271052137966
  },
  Orange_Yellow: {
    '76': 63.03697883647576,
    '94': 43.87451092446528,
    '00': 46.3707019190416
  },
  Blue: {
    '76': 99.59174381412458,
    '94': 52.76633314196534,
    '00': 41.020756006178914
  },
  Blue_Sky: {
    '76': 88.6808203767388,
    '94': 61.58391749653068,
    '00': 42.95174181108813
  },
  Blue_Flower: {
    '76': 84.5125452392764,
    '94': 56.181147754565394,
    '00': 40.41793261042966
  },
  Bluish_Green: {
    '76': 105.87674465335061,
    '94': 73.05407225313535,
    '00': 66.38673925003047
  },
  Green: {
    '76': 103.3171710812217,
    '94': 58.66992647058343,
    '00': 66.41869776623838
  },
  Red: {
    '76': 17.016465202593842,
    '94': 7.620675718915682,
    '00': 7.351081858877833
  },
  Magenta: {
    '76': 59.497918503293626,
    '94': 34.05217229327375,
    '00': 29.440390386730602
  },
  Cyan: {
    '76': 106.39910810507646,
    '94': 68.68679153664895,
    '00': 62.39421138640671
  },
  White: {
    '76': 93.16092245656074,
    '94': 87.70771796952388,
    '00': 56.24813480122247
  },
  Printer_Black: {
    '76': 74.0386257711638,
    '94': 71.52738804350284,
    '00': 30.0599018089136
  }
}

const deltaE76Test = ( color: LAB, colorName: string ): void => {
  test(`Check Delta E 76 for ${colorName}`, () => {
    expect(deltaECIE76Lab(color, testColor)).toEqual(comparisons[colorName.split(' ').join('_')]['76']);
  });
};

deltaE76Test(
  {
    luminance: 81.60296053275202,
    a: -1.2482727232548951,
    b: 79.33052440955292
  },
  'Yellow'
);
deltaE76Test(
  {
    luminance: 60.61218950864361,
    a: 31.243719367882505,
    b: 58.52164206596838
  },
  'Orange'
);
deltaE76Test(
  {
    luminance: 40.5333841441269,
    a: 15.270052424125296,
    b: -42.255350758917345
  },
  'Purplish Blue'
);
deltaE76Test(
  {
    luminance: 50.32847650770714,
    a: 45.30265209302547,
    b: 14.124267464065232
  },
  'Moderate Red'
);
deltaE76Test(
  {
    luminance: 30.433322778608805,
    a: 23.73021443154741,
    b: -22.532744520819104
  },
  'Purple'
);
deltaE76Test(
  {
    luminance: 72.07202379302419,
    a: -27.14967090986714,
    b: 58.79138699676844
  },
  'Yellow Green'
);
deltaE76Test(
  {
    luminance: 71.68272803748255,
    a: 15.051618140064505,
    b: 67.07770290510211
  },
  'Orange Yellow'
);
deltaE76Test(
  {
    luminance: 29.692428764679264,
    a: 26.561370108157206,
    b: -52.598012863553556
  },
  'Blue'
);
deltaE76Test(
  {
    luminance: 50.62272550418432,
    a: -1.6505794732681878,
    b: -21.045707765573376
  },
  'Blue Sky'
);
deltaE76Test(
  {
    luminance: 55.705450468916496,
    a: 11.241162703462148,
    b: -25.156188751526255
  },
  'Blue Flower'
);
deltaE76Test(
  {
    luminance: 71.1964710183248,
    a: -31.611616300534884,
    b: 1.270851443170784
  },
  'Bluish Green'
);
deltaE76Test(
  {
    luminance: 55.665625004574906,
    a: -41.25826197008947,
    b: 35.12927464425365
  },
  'Green'
);
deltaE76Test(
  {
    luminance: 40.30692940127597,
    a: 53.43914287759468,
    b: 25.901470239030054
  },
  'Red'
);
deltaE76Test(
  {
    luminance: 50.38159639045904,
    a: 49.924728153088736,
    b: -15.847699062471676
  },
  'Magenta'
);
deltaE76Test(
  {
    luminance: 51.567851341360765,
    a: -21.457244152567554,
    b: -25.656804493150133
  },
  'Cyan'
);
deltaE76Test(
  {
    luminance: 95.44382581359505,
    a: -0.5393276075922881,
    b: 2.5243082138747486
  },
  'White'
);
deltaE76Test(
  {
    luminance: 20.459715787899498,
    a: 0.6733411641739739,
    b: -0.47969652814597863
  },
  'Printer Black'
);


const deltaE94Test = ( color: LAB, colorName: string ): void => {
  test(`Check Delta E 94 for ${colorName}`, () => {
    expect(deltaECIE94Lab(color, testColor)).toEqual(comparisons[colorName.split(' ').join('_')]['94']);
  });
};

deltaE94Test(
  {
    luminance: 81.60296053275202,
    a: -1.2482727232548951,
    b: 79.33052440955292
  },
  'Yellow'
);
deltaE94Test(
  {
    luminance: 60.61218950864361,
    a: 31.243719367882505,
    b: 58.52164206596838
  },
  'Orange'
);
deltaE94Test(
  {
    luminance: 40.5333841441269,
    a: 15.270052424125296,
    b: -42.255350758917345
  },
  'Purplish Blue'
);
deltaE94Test(
  {
    luminance: 50.32847650770714,
    a: 45.30265209302547,
    b: 14.124267464065232
  },
  'Moderate Red'
);
deltaE94Test(
  {
    luminance: 30.433322778608805,
    a: 23.73021443154741,
    b: -22.532744520819104
  },
  'Purple'
);
deltaE94Test(
  {
    luminance: 72.07202379302419,
    a: -27.14967090986714,
    b: 58.79138699676844
  },
  'Yellow Green'
);
deltaE94Test(
  {
    luminance: 71.68272803748255,
    a: 15.051618140064505,
    b: 67.07770290510211
  },
  'Orange Yellow'
);
deltaE94Test(
  {
    luminance: 29.692428764679264,
    a: 26.561370108157206,
    b: -52.598012863553556
  },
  'Blue'
);
deltaE94Test(
  {
    luminance: 50.62272550418432,
    a: -1.6505794732681878,
    b: -21.045707765573376
  },
  'Blue Sky'
);
deltaE94Test(
  {
    luminance: 55.705450468916496,
    a: 11.241162703462148,
    b: -25.156188751526255
  },
  'Blue Flower'
);
deltaE94Test(
  {
    luminance: 71.1964710183248,
    a: -31.611616300534884,
    b: 1.270851443170784
  },
  'Bluish Green'
);
deltaE94Test(
  {
    luminance: 55.665625004574906,
    a: -41.25826197008947,
    b: 35.12927464425365
  },
  'Green'
);
deltaE94Test(
  {
    luminance: 40.30692940127597,
    a: 53.43914287759468,
    b: 25.901470239030054
  },
  'Red'
);
deltaE94Test(
  {
    luminance: 50.38159639045904,
    a: 49.924728153088736,
    b: -15.847699062471676
  },
  'Magenta'
);
deltaE94Test(
  {
    luminance: 51.567851341360765,
    a: -21.457244152567554,
    b: -25.656804493150133
  },
  'Cyan'
);
deltaE94Test(
  {
    luminance: 95.44382581359505,
    a: -0.5393276075922881,
    b: 2.5243082138747486
  },
  'White'
);
deltaE94Test(
  {
    luminance: 20.459715787899498,
    a: 0.6733411641739739,
    b: -0.47969652814597863
  },
  'Printer Black'
);

const deltaE00Test = ( color: LAB, colorName: string ): void => {
  test(`Check Delta E 00 for ${colorName}`, () => {
    expect(deltaECIE00Lab(color, testColor)).toEqual(comparisons[colorName.split(' ').join('_')]['00']);
  });
};

deltaE00Test(
  {
    luminance: 81.60296053275202,
    a: -1.2482727232548951,
    b: 79.33052440955292
  },
  'Yellow'
);
deltaE00Test(
  {
    luminance: 60.61218950864361,
    a: 31.243719367882505,
    b: 58.52164206596838
  },
  'Orange'
);
deltaE00Test(
  {
    luminance: 40.5333841441269,
    a: 15.270052424125296,
    b: -42.255350758917345
  },
  'Purplish Blue'
);
deltaE00Test(
  {
    luminance: 50.32847650770714,
    a: 45.30265209302547,
    b: 14.124267464065232
  },
  'Moderate Red'
);
deltaE00Test(
  {
    luminance: 30.433322778608805,
    a: 23.73021443154741,
    b: -22.532744520819104
  },
  'Purple'
);
deltaE00Test(
  {
    luminance: 72.07202379302419,
    a: -27.14967090986714,
    b: 58.79138699676844
  },
  'Yellow Green'
);
deltaE00Test(
  {
    luminance: 71.68272803748255,
    a: 15.051618140064505,
    b: 67.07770290510211
  },
  'Orange Yellow'
);
deltaE00Test(
  {
    luminance: 29.692428764679264,
    a: 26.561370108157206,
    b: -52.598012863553556
  },
  'Blue'
);
deltaE00Test(
  {
    luminance: 50.62272550418432,
    a: -1.6505794732681878,
    b: -21.045707765573376
  },
  'Blue Sky'
);
deltaE00Test(
  {
    luminance: 55.705450468916496,
    a: 11.241162703462148,
    b: -25.156188751526255
  },
  'Blue Flower'
);
deltaE00Test(
  {
    luminance: 71.1964710183248,
    a: -31.611616300534884,
    b: 1.270851443170784
  },
  'Bluish Green'
);
deltaE00Test(
  {
    luminance: 55.665625004574906,
    a: -41.25826197008947,
    b: 35.12927464425365
  },
  'Green'
);
deltaE00Test(
  {
    luminance: 40.30692940127597,
    a: 53.43914287759468,
    b: 25.901470239030054
  },
  'Red'
);
deltaE00Test(
  {
    luminance: 50.38159639045904,
    a: 49.924728153088736,
    b: -15.847699062471676
  },
  'Magenta'
);
deltaE00Test(
  {
    luminance: 51.567851341360765,
    a: -21.457244152567554,
    b: -25.656804493150133
  },
  'Cyan'
);
deltaE00Test(
  {
    luminance: 95.44382581359505,
    a: -0.5393276075922881,
    b: 2.5243082138747486
  },
  'White'
);
deltaE00Test(
  {
    luminance: 20.459715787899498,
    a: 0.6733411641739739,
    b: -0.47969652814597863
  },
  'Printer Black'
);
