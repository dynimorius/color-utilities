import { HSL } from "../interfaces/color-spaces.interface";
import { Spaces } from "../types/space-union";
import { ColorResolver } from "./color-resolver";

export class HSLResolver extends ColorResolver {
  constructor(color: HSL, resolv?: Spaces[]) {
    super("hsl", color, resolv);
  }
}