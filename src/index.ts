import { ColorResolver } from "./resolvers/color-resolver";
import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 65, green: 251, blue: 3 });
console.log(color.data())

const color2 = new ColorResolver('rgb', { red: 65, green: 251, blue: 3 }, ['hex', 'rgb', 'hsl', 'hsv', 'lab', 'cmyk', 'xyz']);
console.log(color2.data())