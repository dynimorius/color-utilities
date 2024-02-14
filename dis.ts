import { Color, HSV, RGB, comparativeDistance } from "./src/public_api";
const testColor = new Color("rgb", { red: 238, green: 200, blue: 27 });
const color = new Color("hsv", testColor.data?.hsv as HSV);
console.log(
  comparativeDistance({ red: 238, green: 200, blue: 27 }, color.data.rgb as RGB)
);
