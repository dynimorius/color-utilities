import { RgbConverter } from "../public_api";

const testColor = { red: 217, green: 122, blue: 37 };

const rgb = new RgbConverter(testColor);
console.log(rgb.get('uvw'))