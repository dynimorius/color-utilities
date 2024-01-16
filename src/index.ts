import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 102, green: 51, blue: 153 });
console.log(color.data());


