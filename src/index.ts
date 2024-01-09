import { RGBResolver } from "./resolvers/rgb-resolver";

const color = new RGBResolver({ red: 65, green: 251, blue: 3 });
console.log(color.data())