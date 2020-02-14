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

  var _onChange = function onChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setFormData(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, formData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  };

  var _onSubmit = function onSubmit(event) {
    event.preventDefault();
    Object(_firebase_firebase_utils__WEBPACK_IMPORTED_MODULE_6__["submitForm"])(formData); // Show alert

    document.querySelector('.alert').style.display = 'block'; // Hide alert after 3 seconds

    setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
    }, 5000); // Clear form

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_collapse_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      collapses = _useContext.collapses;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: !collapses.contact,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    id: "contact",
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body bg-danger text-white py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Contact")), __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2588358144" + " " + "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Get In Touch With Me"), __jsx("div", {
    className: "jsx-2588358144" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
      lineNumber: 57
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
      lineNumber: 76
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-pencil-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
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
      lineNumber: 95
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("input", {
    type: "submit",
    value: "Submit",
    className: "jsx-2588358144" + " " + "btn btn-danger btn-lg ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2588358144",
    __self: this
  }, ".alert.jsx-2588358144{text-align:center;padding:10px;background:#79c879;color:#fff;margin-bottom:10px;display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odW5nbmd1eWVuL0RvY3VtZW50cy9wb3J0Zm9saW8vbmV4dC1zc3IvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9IUyxBQUcrQixrQkFDTCxhQUNNLG1CQUNSLFdBQ1EsbUJBQ04sYUFDZiIsImZpbGUiOiIvVXNlcnMvaHVuZ25ndXllbi9Eb2N1bWVudHMvcG9ydGZvbGlvL25leHQtc3NyL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBDb2xsYXBzZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvY29sbGFwc2UuY29udGV4dCc7XG5pbXBvcnQgeyBsb2FkREIsIHN1Ym1pdEZvcm0gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS51dGlscyc7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9KTtcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9ID0gZm9ybURhdGE7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhKTtcbiAgICAvLyBTaG93IGFsZXJ0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgLy8gSGlkZSBhbGVydCBhZnRlciAzIHNlY29uZHNcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCA1MDAwKTtcbiAgICAvLyBDbGVhciBmb3JtXG4gICAgc2V0Rm9ybURhdGEoe1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHsgY29sbGFwc2VzIH0gPSB1c2VDb250ZXh0KENvbGxhcHNlQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2UgaXNPcGVuPXshY29sbGFwc2VzLmNvbnRhY3R9PlxuICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1kYW5nZXIgdGV4dC13aGl0ZSBweS00IHB4LTVcIj5cbiAgICAgICAgICA8aDI+Q29udGFjdDwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgcHktNCBweC01XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTRcIj5HZXQgSW4gVG91Y2ggV2l0aCBNZTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFwiPllvdXIgbWVzc2FnZSBoYXMgYmVlbiBzZW50PC9kaXY+XG5cbiAgICAgICAgICA8Zm9ybSBpZD1cImNvbnRhY3RGb3JtXCIgb25TdWJtaXQ9e2UgPT4gb25TdWJtaXQoZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctZGFuZ2VyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1sZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBiZy1kYW5nZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctZGFuZ2VyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBlbmNpbC1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBiZy1kYXJrIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIlN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWxnIG1sLWF1dG9cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuYWxlcnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3OWM4Nzk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9Db2xsYXBzZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXX0= */\n/*@ sourceURL=/Users/hungnguyen/Documents/portfolio/next-ssr/components/contact/contact.component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.be0bb385cdf93d8eb331.hot-update.js.map