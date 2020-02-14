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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _contexts_collapse_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/collapse.context */ "./contexts/collapse.context.js");
/* harmony import */ var _firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../firebase/firebase.utils */ "./firebase/firebase.utils.js");


var _jsxFileName = "/Users/hungnguyen/Documents/portfolio/next-ssr/components/contact/contact.component.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Contact = function Contact() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
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
    Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_6__["submitForm"])(formData);
    console.log(formData);
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_collapse_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      collapses = _useContext.collapses;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: !collapses.contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    id: "contact",
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body bg-danger text-white py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Contact")), __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2588358144" + " " + "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Get In Touch With Me"), __jsx("div", {
    className: "jsx-2588358144" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Your message has been sent"), __jsx("form", {
    id: "contactForm",
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-user",
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
    required: true,
    className: "jsx-2588358144" + " " + "form-control bg-dark text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-envelope",
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
    required: true,
    className: "jsx-2588358144" + " " + "form-control bg-dark text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-pencil-alt",
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
    className: "jsx-2588358144" + " " + "form-control bg-dark text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("input", {
    type: "submit",
    value: "Submit" // onClick={submitForm}
    ,
    className: "jsx-2588358144" + " " + "btn btn-danger btn-lg ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2588358144",
    __self: this
  }, ".alert.jsx-2588358144{text-align:center;padding:10px;background:#79c879;color:#fff;margin-bottom:10px;display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odW5nbmd1eWVuL0RvY3VtZW50cy9wb3J0Zm9saW8vbmV4dC1zc3IvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFHUyxBQUcrQixrQkFDTCxhQUNNLG1CQUNSLFdBQ1EsbUJBQ04sYUFDZiIsImZpbGUiOiIvVXNlcnMvaHVuZ25ndXllbi9Eb2N1bWVudHMvcG9ydGZvbGlvL25leHQtc3NyL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBDb2xsYXBzZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvY29sbGFwc2UuY29udGV4dCc7XG5pbXBvcnQgeyBzdWJtaXRGb3JtIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMnO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgbWVzc2FnZTogJydcbiAgfSk7XG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IGZvcm1EYXRhO1xuICBjb25zdCBvbkNoYW5nZSA9IGUgPT5cbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gIH07XG4gIGNvbnN0IHsgY29sbGFwc2VzIH0gPSB1c2VDb250ZXh0KENvbGxhcHNlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2UgaXNPcGVuPXshY29sbGFwc2VzLmNvbnRhY3R9PlxuICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1kYW5nZXIgdGV4dC13aGl0ZSBweS00IHB4LTVcIj5cbiAgICAgICAgICA8aDI+Q29udGFjdDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgcHktNCBweC01XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTRcIj5HZXQgSW4gVG91Y2ggV2l0aCBNZTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFwiPllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50PC9kaXY+XG5cbiAgICAgICAgICA8Zm9ybSBpZD1cImNvbnRhY3RGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tbGcgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17c3VibWl0Rm9ybX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmFsZXJ0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzljODc5O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29sbGFwc2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl19 */\n/*@ sourceURL=/Users/hungnguyen/Documents/portfolio/next-ssr/components/contact/contact.component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.e6fbf3f080a14e6a1580.hot-update.js.map