import { CIE_κ, CIE_ϵ, L_INVERSE_NORMALIZED_BELOW, SRGB_INVERSE_NORMALIZED_BELOW, SRGB_NORMALIZED_BELOW } from "../constants";

/*************************************************************
 *                        COMPANDING
 ************************************************************/
export const sRgbCompanding = (value: number): number => {
  return (
    (value <= SRGB_NORMALIZED_BELOW
      ? 12.92 * value
      : 1.055 * Math.pow(value, 0.416666) - 0.055) * 255
  );
};

export const gammaCompanding = (value: number, gamma: number): number => {
  if(value < 0) console.log(value, value ** (1 / gamma))
  return (value ** (1 / gamma)) * 255;
};

export const LCompanding = (value: number): number => { 
  return (value <= CIE_ϵ ?
    (value * CIE_κ) / 100 : 1.16 * Math.cbrt(value) - 0.16) * 255;
}

/*************************************************************
 *                    INVERSE COMPANDING
 ************************************************************/
export const inverseSrbgCompanding = (value: number): number => {
  value = value / 255;
  return value <= SRGB_INVERSE_NORMALIZED_BELOW
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
};

export const inverseGammaCompanding = (value: number, gamma: number): number => {
  value = value / 255;
  return Math.pow(value, gamma);
};

export const inverseLCompanding = (value: number): number => { 
  value = value / 255;
  return value <= L_INVERSE_NORMALIZED_BELOW ?
    (100 * value) / CIE_κ : Math.pow(((value + 0.16) / 1.16), 3);
}
