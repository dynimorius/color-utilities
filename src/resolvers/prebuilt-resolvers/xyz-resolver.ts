import { XYZ } from "../../interfaces/color-spaces.interface";
import { Spaces } from "../../types";
import { ColorResolver } from "../color-resolver/color-resolver";

export class XYZResolver extends ColorResolver {
  constructor(color: XYZ, resolv?: Spaces[]) {
    super("xyz", color, resolv);
  }
}
