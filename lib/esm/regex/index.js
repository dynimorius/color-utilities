"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPACES = exports.COMMAS_AND_NEXT_CHARS = exports.TEMPLATE_VAR = exports.FULL_HEX = exports.HEX = exports.PCENT = exports.HSL_HUE = void 0;
exports.HSL_HUE = /^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/;
// END REGEXPS
exports.PCENT = /^(-?\d+(?:\.\d+)?|-?\.\d+)%$/;
exports.HEX = /^0x([a-f\d]{1,2})$/i;
exports.FULL_HEX = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/gi;
exports.TEMPLATE_VAR = /\{(\d+)\}/g;
exports.COMMAS_AND_NEXT_CHARS = /,( +|\d+)/g;
exports.SPACES = / +/;
