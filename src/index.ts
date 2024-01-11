import { cmykToRgb } from "./converters/cmyk-converter";
import { CMYK } from "./interfaces/color-spaces.interface";
import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 65, green: 251, blue: 3 });
console.log(color.data());
console.log(cmykToRgb(color.cmyk as CMYK))

