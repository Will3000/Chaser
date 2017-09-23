webpackHotUpdate(0,{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react2 = __webpack_require__(13);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(171);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(169);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Nav = __webpack_require__(325);\n\nvar _Nav2 = _interopRequireDefault(_Nav);\n\nvar _NavItem = __webpack_require__(431);\n\nvar _NavItem2 = _interopRequireDefault(_NavItem);\n\nvar _Navbar = __webpack_require__(434);\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nvar _Button = __webpack_require__(457);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _FormGroup = __webpack_require__(461);\n\nvar _FormGroup2 = _interopRequireDefault(_FormGroup);\n\nvar _InputGroup = __webpack_require__(462);\n\nvar _InputGroup2 = _interopRequireDefault(_InputGroup);\n\nvar _FormControl = __webpack_require__(465);\n\nvar _FormControl2 = _interopRequireDefault(_FormControl);\n\nvar _Glyphicon = __webpack_require__(467);\n\nvar _Glyphicon2 = _interopRequireDefault(_Glyphicon);\n\nvar _container = __webpack_require__(469);\n\nvar _container2 = _interopRequireDefault(_container);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  MyNavBar: {\n    displayName: 'MyNavBar'\n  },\n  SearchBar: {\n    displayName: 'SearchBar'\n  },\n  App: {\n    displayName: 'App'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/jenniferleung/Workspace/Chaser/src/components/app.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(Component, id);\n  };\n} /*\n      ./client/components/App.jsx\n  */\n\n\n// import fetch from 'node-fetch';\n// import keys from '../../keys.js';\n\nvar navList = [{ name: 'Bookmarks', url: '#' }, { name: 'Contact', url: 'huiquanlu@gmail.com' }];\n\nvar MyNavBar = _wrapComponent('MyNavBar')(function (_React$Component) {\n  _inherits(MyNavBar, _React$Component);\n\n  function MyNavBar() {\n    _classCallCheck(this, MyNavBar);\n\n    return _possibleConstructorReturn(this, (MyNavBar.__proto__ || Object.getPrototypeOf(MyNavBar)).apply(this, arguments));\n  }\n\n  _createClass(MyNavBar, [{\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        _Navbar2.default,\n        { style: { marginBottom: '0px' } },\n        _react3.default.createElement(\n          _Navbar2.default.Header,\n          null,\n          _react3.default.createElement(\n            _Navbar2.default.Brand,\n            null,\n            _react3.default.createElement(\n              'a',\n              { href: '#' },\n              'Chaser'\n            )\n          )\n        ),\n        _react3.default.createElement(\n          _Nav2.default,\n          { bsStyle: 'tabs', activeKey: '1' },\n          this.props.list.map(function (e, i) {\n            return _react3.default.createElement(\n              _NavItem2.default,\n              { key: i, href: e.url },\n              e.name\n            );\n          })\n        )\n      );\n    }\n  }]);\n\n  return MyNavBar;\n}(_react3.default.Component));\n\nvar SearchBar = _wrapComponent('SearchBar')(function (_React$Component2) {\n  _inherits(SearchBar, _React$Component2);\n\n  function SearchBar(props) {\n    _classCallCheck(this, SearchBar);\n\n    var _this2 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));\n\n    _this2.handleChange = _this2.handleChange.bind(_this2);\n    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);\n    _this2.state = {\n      inputValue: '',\n      busJson: ''\n    };\n    return _this2;\n  }\n\n  _createClass(SearchBar, [{\n    key: 'handleChange',\n    value: function handleChange(event) {\n      this.setState({\n        inputValue: event.target.value\n      });\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(event) {\n      var that = this;\n      event.preventDefault();\n      var reg = /^\\d{1,5}$/g;\n      // if(reg.test(this.state.inputValue)){\n      //   fetch(`http://localhost:8080/api/businfo?stopNo=${this.state.inputValue}`).then((response)=>{\n      //     return response.json();\n      //   }).then(function(json){\n      //     console.log(json);\n      //     if (json.error) {\n      //       alert(json.error);\n      //     } else {\n      //       that.setState({\n      //         busJson: json\n      //       })\n      //       that.props.update(json)\n      //     }\n      //   })\n      // } else {\n      //   alert('Invalid Input');\n      // }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var style = {\n        position: 'absolute',\n        top: '60px',\n        left: '20%',\n        width: '60%',\n        zIndex: '99'\n      };\n      return _react3.default.createElement(\n        'form',\n        { onSubmit: this.handleSubmit },\n        _react3.default.createElement(\n          _InputGroup2.default,\n          { style: style },\n          _react3.default.createElement(_FormControl2.default, { type: 'text', placeholder: 'Enter bus # or code', onChange: this.handleChange }),\n          _react3.default.createElement(\n            _InputGroup2.default.Addon,\n            null,\n            _react3.default.createElement(_Glyphicon2.default, { glyph: 'search' })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SearchBar;\n}(_react3.default.Component));\n\nvar testArr = [{\n  \"VehicleNo\": \"12013\",\n  \"TripId\": 8879472,\n  \"RouteNo\": \"049\",\n  \"Direction\": \"WEST\",\n  \"Destination\": \"UBC\",\n  \"Pattern\": \"WB1DT\",\n  \"Latitude\": 49.2265,\n  \"Longitude\": -123.127233,\n  \"RecordedTime\": \"10:02:25 pm\",\n  \"RouteMap\": {\n    \"Href\": \"http://nb.translink.ca/geodata/049.kmz\"\n  }\n}, {\n  \"VehicleNo\": \"12016\",\n  \"TripId\": 8879473,\n  \"RouteNo\": \"049\",\n  \"Direction\": \"WEST\",\n  \"Destination\": \"UBC\",\n  \"Pattern\": \"WB1DT\",\n  \"Latitude\": 49.2259,\n  \"Longitude\": -123.002833,\n  \"RecordedTime\": \"09:56:43 pm\",\n  \"RouteMap\": {\n    \"Href\": \"http://nb.translink.ca/geodata/049.kmz\"\n  }\n}];\n\nvar App = _wrapComponent('App')(function (_React$Component3) {\n  _inherits(App, _React$Component3);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this3.onBusChange = _this3.onBusChange.bind(_this3);\n    _this3.state = {\n      busJson: []\n    };\n    return _this3;\n  }\n\n  _createClass(App, [{\n    key: 'onBusChange',\n    value: function onBusChange(data) {\n      this.setState({\n        busJson: data\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'h1',\n          null,\n          'testing'\n        ),\n        _react3.default.createElement(MyNavBar, { list: navList }),\n        _react3.default.createElement(\n          'div',\n          { style: { textAlign: 'center', width: '100%' } },\n          _react3.default.createElement(SearchBar, { update: this.onBusChange }),\n          _react3.default.createElement(_container2.default, { busJson: this.state.busJson })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react3.default.Component));\n\nexports.default = App;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/app.js\n// module id = 170\n// module chunks = 0\n//# sourceURL=webpack:///./src/components/app.js?");

/***/ })

})