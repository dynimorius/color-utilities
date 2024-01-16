<<<<<<< Updated upstream
import { xyzToRgb } from "./converters/xyz-converter";
import { XYZ } from "./interfaces/color-spaces.interface";
=======
import { labToXyz } from "./converters/lab-converter";
import { LAB } from "./interfaces/color-spaces.interface";
>>>>>>> Stashed changes
import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 102, green: 51, blue: 153 });
console.log(color.data());
console.log(xyzToRgb(color.xyz as XYZ));


