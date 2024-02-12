import { Blender, blend } from "../public_api";

console.log(
  blend(
    { red: 255, green: 237, blue: 0 },
    { red: 255, green: 0, blue: 0 },
    0.67
  )
);

const newColor = new Blender(
  { red: 255, green: 237, blue: 0 },
  { r: 255, g: 0, b: 0 },
  { weight: 0.67 }
);

console.log(newColor.blendData);

const newColor2 = new Blender("#FFED00", "#FF0000", { weight: 0.67 });

console.log(newColor2.color);

const newColor3 = new Blender(
  { c: 0, m: 7, y: 100, k: 0 },
  { c: 0, m: 100, y: 100, k: 0 },
  { weight: 0.67 }
);

console.log(newColor3.color);

const newColor4 = new Blender(
  { h: 56, s: 100, l: 50 },
  { h: 0, s: 100, l: 50 },
  { weight: 0.67 }
);

console.log(newColor4.blendData);

const newColor5 = new Blender(
  { c: 0, m: 7, y: 100, k: 0 },
  { h: 0, s: 100, v: 100 },
  { weight: 0.67, returnType: 'hex' }
);

console.log(newColor5.blendData);