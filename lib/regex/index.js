"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPACES = exports.COMMAS_AND_NEXT_CHARS = exports.TEMPLATE_VAR = exports.HEX = exports.PCENT = exports.HSL_HUE = exports.COLOR_REGEX = void 0;
exports.COLOR_REGEX = {
    ["hex"]: /^#(?:([a-f\d])([a-f\d])([a-f\d])([a-f\d])?|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?)$/i,
    ["rgb"]: /^rgba?\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,
    ["hsl"]: /^hsla?\s*\(\s*(?:(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*,\s*((?:\d*\.)?\d+)%\s*,\s*((?:\d*\.)?\d+)%(?:\s*,\s*((?:\d*\.)?\d+))?|(-?(?:\d*\.)?\d+(?:deg|grad|rad|turn)?)\s*((?:\d*\.)?\d+)%\s*((?:\d*\.)?\d+)%(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,
    ["lab"]: /^lab\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*(-?(?:\d*\.)?\d+%?)\s*(-?(?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,
    ["cmyk"]: /^(?:device-cmyk|cmyk)\s*\(\s*(?:((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)\s*,\s*((?:\d*\.)?\d+%?)(?:\s*,\s*((?:\d*\.)?\d+))?|((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)\s*((?:\d*\.)?\d+%?)(?:\s*\/\s*((?:\d*\.)?\d+%?))?)\s*\)$/,
};
exports.HSL_HUE = /^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/;
// END REGEXPS
exports.PCENT = /^(-?\d+(?:\.\d+)?|-?\.\d+)%$/;
exports.HEX = /^0x([a-f\d]{1,2})$/i;
exports.TEMPLATE_VAR = /\{(\d+)\}/g;
exports.COMMAS_AND_NEXT_CHARS = /,( +|\d+)/g;
exports.SPACES = / +/;
