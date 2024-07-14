"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _productsRoutes = _interopRequireDefault(require("./routes/products.routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use("/products", _productsRoutes["default"]);
var _default = exports["default"] = app;