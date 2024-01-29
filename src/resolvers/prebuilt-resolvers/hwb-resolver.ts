import { HWB } from "../../interfaces/color-spaces.interface";
import { Spaces } from "../../types/colors";
import { ColorResolver } from "../color-resolver/color-resolver";

export class HWBResolver extends ColorResolver {
  constructor(color: HWB, resolv?: Spaces[]) {
    super("hwb", color, resolv);
  }
}
