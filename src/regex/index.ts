export const HSL_HUE = /^(-?(?:\d*\.)?\d+)((?:deg|grad|rad|turn)?)$/;
// END REGEXPS

export const PCENT = /^(-?\d+(?:\.\d+)?|-?\.\d+)%$/;
export const HEX = /^0x([a-f\d]{1,2})$/i;
export const FULL_HEX = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/gi;
export const TEMPLATE_VAR = /\{(\d+)\}/g;
export const COMMAS_AND_NEXT_CHARS = /,( +|\d+)/g;
export const SPACES = / +/;
