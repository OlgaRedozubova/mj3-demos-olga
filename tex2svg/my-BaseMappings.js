"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sm = require("mathjax3/mathjax3/input/tex/SymbolMap.js");
var ParseMethods_js_1 = require("mathjax3/mathjax3/input/tex/ParseMethods.js");
var BaseMethods_js_1 = require("mathjax3/mathjax3/input/tex/base/BaseMethods.js");

new sm.CharacterMap('wasysym-mathchar0mo', ParseMethods_js_1.default.mathchar0mo, {
  varangle: '\u2222',
  Perp: '\u2AEB',
});

new sm.CommandMap('wasysym-macros', {
  Vmathcal: ['Macro', '{\\cal #1}', 1],
  Varangle: ['Macro', '{\\unicode{x003C}\\!\\!\\!\\small\\unicode{x0029}}']
}, BaseMethods_js_1.default);

//# sourceMappingURL=BaseMappings.js.map