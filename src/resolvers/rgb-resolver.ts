import { RGB } from "../interfaces/color-spaces.interface";
import { Spaces } from "../types";
import { ColorResolver } from "./color-resolver";

export class RGBResolver extends ColorResolver {
  constructor(color: RGB, resolv?: Spaces[]) {
    super("rgb", color, resolv);
  }
}
