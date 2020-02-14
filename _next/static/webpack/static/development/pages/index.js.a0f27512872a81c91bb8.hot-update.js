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
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    id: "contact",
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body bg-danger text-white py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-2588358144",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Contact")), __jsx("div", {
    className: "jsx-2588358144" + " " + "card card-body py-4 px-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2588358144" + " " + "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Get In Touch With Me"), __jsx("div", {
    className: "jsx-2588358144" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
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
      lineNumber: 46
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 65
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group input-group-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2588358144" + " " + "input-group-prepend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2588358144" + " " + "input-group-text bg-danger text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-2588358144" + " " + "fas fa-pencil-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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
      lineNumber: 84
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2588358144" + " " + "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("input", {
    type: "submit",
    value: "Submit",
    className: "jsx-2588358144" + " " + "btn btn-danger btn-lg ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2588358144",
    __self: this
  }, ".alert.jsx-2588358144{text-align:center;padding:10px;background:#79c879;color:#fff;margin-bottom:10px;display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odW5nbmd1eWVuL0RvY3VtZW50cy9wb3J0Zm9saW8vbmV4dC1zc3IvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlHUyxBQUcrQixrQkFDTCxhQUNNLG1CQUNSLFdBQ1EsbUJBQ04sYUFDZiIsImZpbGUiOiIvVXNlcnMvaHVuZ25ndXllbi9Eb2N1bWVudHMvcG9ydGZvbGlvL25leHQtc3NyL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBDb2xsYXBzZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvY29sbGFwc2UuY29udGV4dCc7XG5pbXBvcnQgeyBzdWJtaXRGb3JtIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHMnO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgbWVzc2FnZTogJydcbiAgfSk7XG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IGZvcm1EYXRhO1xuICBjb25zdCBvbkNoYW5nZSA9IGUgPT5cbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICBjb25zdCBvblN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzdWJtaXRGb3JtKGZvcm1EYXRhKTtcbiAgICAvLyBIaWRlIGFsZXJ0IGFmdGVyIDMgc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDMwMDApO1xuICAgIC8vIENsZWFyIGZvcm1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvcm0nKS5yZXNldCgpO1xuICB9O1xuICBjb25zdCB7IGNvbGxhcHNlcyB9ID0gdXNlQ29udGV4dChDb2xsYXBzZUNvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNlIGlzT3Blbj17IWNvbGxhcHNlcy5jb250YWN0fT5cbiAgICAgIDxkaXYgaWQ9XCJjb250YWN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJvZHkgYmctZGFuZ2VyIHRleHQtd2hpdGUgcHktNCBweC01XCI+XG4gICAgICAgICAgPGgyPkNvbnRhY3Q8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IHB5LTQgcHgtNVwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00XCI+R2V0IEluIFRvdWNoIFdpdGggTWU8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj5Zb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudDwvZGl2PlxuXG4gICAgICAgICAgPGZvcm0gaWQ9XCJjb250YWN0Rm9ybVwiIG9uU3VibWl0PXtlID0+IG9uU3VibWl0KGUpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtbGdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYmctZGFuZ2VyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGJnLWRhcmsgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLWxnXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJnLWRhbmdlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgYmctZGFyayB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJTdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1sZyBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmFsZXJ0IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzljODc5O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvQ29sbGFwc2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl19 */\n/*@ sourceURL=/Users/hungnguyen/Documents/portfolio/next-ssr/components/contact/contact.component.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.a0f27512872a81c91bb8.hot-update.js.map