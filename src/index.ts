import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 251, green: 189, blue: 3 });
console.log(color.data())