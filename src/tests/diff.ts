import { RGB, deltaECIE76, sRgbToLab } from "../public_api";



//https://zschuessler.github.io/DeltaE/learn/#:~:text=dE94%2C%20and%20dE00.-,Defining%20Delta%20E,in%20a%20variable%20or%20function.
export const checkDiff = (rgb1: RGB, rgb2: RGB): number => {
  const lab1 = sRgbToLab(rgb1);
  const lab2 = sRgbToLab(rgb2);
  return deltaECIE76(lab1, lab2);
};
