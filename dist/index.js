'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var SimpleButton = function (_Component) {
  inherits(SimpleButton, _Component);

  function SimpleButton() {
    classCallCheck(this, SimpleButton);
    return possibleConstructorReturn(this, (SimpleButton.__proto__ || Object.getPrototypeOf(SimpleButton)).apply(this, arguments));
  }

  createClass(SimpleButton, [{
    key: "handleClick",
    value: function handleClick() {
      console.log('clicked');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        "button",
        { type: "button", onClick: function onClick() {
            return _this2.handleClick;
          } },
        "SimpleButton Text"
      );
    }
  }]);
  return SimpleButton;
}(React.Component);

exports.SimpleButton = SimpleButton;
//# sourceMappingURL=index.js.map
