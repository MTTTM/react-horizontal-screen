function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// +----------------------------------------------------------------------
// | react-horizontal-screen
// +----------------------------------------------------------------------
// | Copyright (c) 2021 MTTTM  https://github.com/MTTTM/react-horizontal-screen All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( https://github.com/MTTTM/react-horizontal-screen/blob/main/LICENSE)
// +----------------------------------------------------------------------
// | Author: MTTTM 
// +----------------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { directiveForDom } from "./funcs.js";

var SwipeWrap = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SwipeWrap, _React$Component);

  function SwipeWrap(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.myRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  var _proto = SwipeWrap.prototype;

  _proto.componentDidMount = function componentDidMount() {
    directiveForDom.bind(this.myRef.current, this.props);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        stop = _this$props.stop,
        prevent = _this$props.prevent,
        swipeCallBack = _this$props.swipeCallBack,
        params = _objectWithoutPropertiesLoose(_this$props, ["stop", "prevent", "swipeCallBack"]);

    return /*#__PURE__*/React.createElement("div", _extends({
      ref: this.myRef
    }, params), this.props.children);
  };

  return SwipeWrap;
}(React.Component);

export { SwipeWrap as default };
;
SwipeWrap.propTypes = {
  stop: PropTypes.bool,
  prevent: PropTypes.bool,
  swipeCallBack: PropTypes.func
};