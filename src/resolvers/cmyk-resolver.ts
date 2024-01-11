import { CMYK } from "../interfaces/color-spaces.interface";
import { Spaces } from "../types";
import { ColorResolver } from "./color-resolver"

export class CMYKResolver extends ColorResolver {
  constructor(color: CMYK, resolv?: Spaces[]) {
    super('cmyk', color, resolv);
  }
}