import { HSL } from "../../interfaces/color-spaces.interface";
import { Spaces } from "../../types";
import { ColorResolver } from "../color-resolver/color-resolver";

export class HSLResolver extends ColorResolver {
  constructor(color: HSL, resolv?: Spaces[]) {
    super("hsl", color, resolv);
  }
}
