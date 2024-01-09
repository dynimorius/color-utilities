import { RGB } from "../interfaces/color-spaces.interface";

export const hexToRgb = (hex: string): RGB => {
  const hexRegExp = new RegExp(/[a-f0-9]{6}|[a-f0-9]{3}/i).exec(hex);
  if (!hexRegExp) {
    return { red: 0, green: 0, blue: 0 };
  }

  let colorString = hexRegExp[0];

  if (hexRegExp[0].length === 3) {
    colorString = colorString
      .split('')
      .map((char) => {
        return char + char;
      })
      .join('');
  }

  const integer = parseInt(colorString, 16);
  const red = (integer >> 16) & 0xff;
  const green = (integer >> 8) & 0xff;
  const blue = integer & 0xff;

  return { red, green, blue };
};


export const hexToInt = (val: string): number => {
  return parseInt(val, 16);
};

export const hexToDecimal = (h: string): number => {
  return hexToInt(h) / 255;
};