import { BlenderColor } from "../types";
import { RGB } from "./color-spaces.interface";

export interface BlenderOptions {
  weight: number;
  returnType?: "rgb" | "cmyk" | "hsl" | "hsv" | "hwb" | "hex" | "ryb" | "xyz";
}

export interface BlendData {
  color1: BlendColorData,
  color2: BlendColorData;
  resultColor: BlenderColor;
}

export interface BlendColorData {
  data: BlenderColor;
  rgb: RGB;
  amount: number;
}

