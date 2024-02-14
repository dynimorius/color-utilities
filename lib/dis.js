"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const public_api_1 = require("./src/public_api");
const testColor = new public_api_1.Color("rgb", { red: 238, green: 200, blue: 27 });
const color = new public_api_1.Color("hsv", (_a = testColor.data) === null || _a === void 0 ? void 0 : _a.hsv);
console.log((0, public_api_1.comparativeDistance)({ red: 238, green: 200, blue: 27 }, color.data.rgb));
