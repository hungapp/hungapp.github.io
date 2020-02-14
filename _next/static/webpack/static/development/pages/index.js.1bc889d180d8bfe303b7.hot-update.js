webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contact/contact.component.js":
/*!*************************************************!*\
  !*** ./components/contact/contact.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _contexts_collapse_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/collapse.context */ "./contexts/collapse.context.js");
/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../firebase/firebase.utils */ "./firebase/firebase.utils.js");


var _jsxFileName = "/Users/hungnguyen/Documents/portfolio/next-ssr/components/contact/contact.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: '',
    email: '',
    message: ''
  }),
      formData = _useState[0],
      setFormData = _useState[1];

  var name = formData.name,
      email = formData.email,
      message = formData.message;

  var _onChange = function onChange(e) {
    return setFormData(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_5__["submitForm"])(formData);
    console.log(formData);
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_collapse_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      collapses = _useContext.collapses;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    isOpen: !collapses.contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "card card-body bg-danger text-white py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Contact")), __jsx("div", {
    className: "card card-body py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Get In Touch With Me"), __jsx("div", {
    className: "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Your message has been sent"), __jsx("form", {
    id: "contactForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    className: "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), __jsx("input", {
    type: "text",
    name: "name",
    placeholder: "Name",
    value: name,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    className: "form-control bg-dark text-white",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("span", {
    className: "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))), __jsx("input", {
    type: "email",
    name: "email",
    placeholder: "Email",
    value: email,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    className: "form-control bg-dark text-white",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("span", {
    className: "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-pencil-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }))), __jsx("textarea", {
    type: "text",
    placeholder: "Message",
    name: "message",
    value: message,
    onChange: function onChange(e) {
      return _onChange(e);
    },
    className: "form-control bg-dark text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), __jsx("div", {
    className: "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("input", {
    type: "submit",
    value: "Submit",
    className: "btn btn-danger btn-lg ml-auto" // onClick={submitForm}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))))), __jsx("styled", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "\n        .alert{\n          text-align: center;\n          padding:10px;\n          background:#79c879;\n          color:#fff;\n          margin-bottom:10px;\n          display:none;\n        }"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false

})
//# sourceMappingURL=index.js.1bc889d180d8bfe303b7.hot-update.js.map