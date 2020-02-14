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

  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_6__["submitForm"])(formData); // Hide alert after 3 seconds

    setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
    }, 3000); // Clear form

    document.getElementById('contactForm').reset();
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_collapse_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      collapses = _useContext.collapses;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: !collapses.contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    id: "contact",
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body bg-danger text-white py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Contact")), __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2588358144" + " " + "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Get In Touch With Me"), __jsx("div", {
    className: "jsx-2588358144" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Your message has been sent"), __jsx("form", {
    id: "contactForm",
    onSubmit: function onSubmit(e) {
      return _onSubmit(e);
    },
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 47
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
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
      lineNumber: 66
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-pencil-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
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
      lineNumber: 85
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("input", {
    type: "submit",
    value: "Submit",
    className: "jsx-2588358144" + " " + "btn btn-danger btn-lg ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2588358144",
    __self: this
  }, ".alert.jsx-2588358144{text-align:center;padding:10px;background:#79c879;color:#fff;margin-bottom:10px;display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odW5nbmd1eWVuL0RvY3VtZW50cy9wb3J0Zm9saW8vbmV4dC1zc3IvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBHUyxBQUcrQixrQkFDTCxhQUNNLG1CQUNSLFdBQ1EsbUJBQ04sYUFDZiIsImZpbGUiOiIvVXNlcnMvaHVuZ25ndXllbi9Eb2N1bWVudHMvcG9ydGZvbGlvL25leHQtc3NyL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBDb2xsYXBzZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvY29sbGFwc2UuY29udGV4dCc7XG5pbXBvcnQgeyBsb2FkREIsIHN1Ym1pdEZvcm0gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS51dGlscyc7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9KTtcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gZm9ybURhdGE7XG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PlxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN1Ym1pdEZvcm0oZm9ybURhdGEpO1xuICAgIC8vIEhpZGUgYWxlcnQgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMzAwMCk7XG5cbiAgICAvLyBDbGVhciBmb3JtXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJykucmVzZXQoKTtcbiAgfTtcbiAgY29uc3QgeyBjb2xsYXBzZXMgfSA9IHVzZUNvbnRleHQoQ29sbGFwc2VDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzZSBpc09wZW49eyFjb2xsYXBzZXMuY29udGFjdH0+XG4gICAgICA8ZGl2IGlkPVwiY29udGFjdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJnLWRhbmdlciB0ZXh0LXdoaXRlIHB5LTQgcHgtNVwiPlxuICAgICAgICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBweS00IHB4LTVcIj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNFwiPkdldCBJbiBUb3VjaCBXaXRoIE1lPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0XCI+WW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQ8L2Rpdj5cblxuICAgICAgICAgIDxmb3JtIGlkPVwiY29udGFjdEZvcm1cIiBvblN1Ym1pdD17ZSA9PiBvblN1Ym1pdChlKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4tbGcgbWwtYXV0b1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5hbGVydCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzc5Yzg3OTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0NvbGxhcHNlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdfQ== */\n/*@ sourceURL=/Users/hungnguyen/Documents/portfolio/next-ssr/components/contact/contact.component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.1968894f785811c29b5b.hot-update.js.map