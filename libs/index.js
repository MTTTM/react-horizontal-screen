"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = exports.SwipeWrap = exports.HorizontalScreen = void 0;

var _horizontalScreen = _interopRequireDefault(require("./horizontalScreen.js"));

var _swipeWrap = _interopRequireDefault(require("./swipeWrap.js"));

var _funcs = require("./funcs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// +----------------------------------------------------------------------
// | react-horizontal-screen
// +----------------------------------------------------------------------
// | Copyright (c) 2021 MTTTM  https://github.com/MTTTM/react-horizontal-screen All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( https://github.com/MTTTM/react-horizontal-screen/blob/main/LICENSE)
// +----------------------------------------------------------------------
// | Author: MTTTM 
// +----------------------------------------------------------------------
var HorizontalScreen = _horizontalScreen.default;
exports.HorizontalScreen = HorizontalScreen;
var SwipeWrap = _swipeWrap.default;
exports.SwipeWrap = SwipeWrap;
var event = _funcs.event;
exports.event = event;