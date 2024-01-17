import { ColorResolver } from "./resolvers/color-resolver";
import { RGBResolver } from "./resolvers/rgb-resolver";

// const color = new RGBResolver({ red: 102, green: 51, blue: 153 });
// console.log(color.data());

// const color2 = new ColorResolver('rgb',{ r: 102, g: 51, b: 153 });
// console.log(color2.data());

// const color3 = new ColorResolver('hex','#663399');
// console.log(color3.data());

// const color4 = new ColorResolver('hsl',{h: 270, s: 50, l: 40});
// console.log(color4.data());

const color5 = new ColorResolver('hsv',{hue: 270, saturation: 67, value: 60});
console.log(color5.data());


