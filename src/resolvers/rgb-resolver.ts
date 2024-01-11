import { RGB } from "../interfaces/color-spaces.interface";
import { ColorResolver } from "./color-resolver";
import { Spaces } from "../types/space-union";

export class RGBResolver extends ColorResolver {
  constructor(color: RGB, resolv?: Spaces[]) {
    super("rgb", color, resolv);
  }
}
