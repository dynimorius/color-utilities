import { labToXyz } from "./converters/lab-converter";
import { LAB } from "./interfaces/color-spaces.interface";
import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 102, green: 51, blue: 153 });
console.log(color.data());
console.log(labToXyz(color.lab as LAB));


