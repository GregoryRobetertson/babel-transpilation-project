'use strict';

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = void 0;
var greet = exports.greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "User";
  return "Hello, ".concat(name, "!");
};