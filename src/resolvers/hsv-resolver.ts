import { HSV } from "../interfaces/color-spaces.interface";
import { Spaces } from "../types";
import { ColorResolver } from "./color-resolver";

export class HSVResolver extends ColorResolver {
  constructor(color: HSV, resolv?: Spaces[]) {
    super("hsv", color, resolv);
  }
}