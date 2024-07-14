"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PORT = 3000;
_app["default"].listen(PORT, function () {
  console.log("Server listen on port ".concat(PORT));
});