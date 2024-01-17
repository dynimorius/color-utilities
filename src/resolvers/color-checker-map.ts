import { cmykColorCheck, hcgColorCheck, hclColorCheck, hexColorCheck, hslColorCheck, hsvColorCheck, hwbColorCheck, labColorCheck, lchColorCheck, luvColorCheck, rgbColorCheck, xyzColorCheck } from "../helpers/color-checks";
import { ColorCheckers } from "../interfaces/converters.interface";

export const colorCheckerMap: ColorCheckers = {
  hex: hexColorCheck,
  rgb: rgbColorCheck,
  hsl: hslColorCheck,
  hsv: hsvColorCheck,
  hwb: hwbColorCheck,
  hcg: hcgColorCheck,
  hcl: hclColorCheck,
  lab: labColorCheck,
  lch: lchColorCheck,
  luv: luvColorCheck,
  cmyk: cmykColorCheck,
  xyz: xyzColorCheck
}