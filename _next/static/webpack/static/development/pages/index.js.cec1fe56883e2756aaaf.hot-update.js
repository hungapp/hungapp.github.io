webpackHotUpdate("static/development/pages/index.js",{

/***/ "./firebase/firebase.utils.js":
/*!************************************!*\
  !*** ./firebase/firebase.utils.js ***!
  \************************************/
/*! exports provided: loadDB, submitForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDB", function() { return loadDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitForm", function() { return submitForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");




var loadDB =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var config, db;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = {
              apiKey: 'AIzaSyB6zRaC0Cph9N1_UW8naFRIZH3gOttxWlo',
              authDomain: 'portfolio-mailer-42e21.firebaseapp.com',
              databaseURL: 'https://portfolio-mailer-42e21.firebaseio.com',
              projectId: 'portfolio-mailer-42e21',
              storageBucket: '',
              messagingSenderId: '359937240150',
              appId: '1:359937240150:web:85658fe8b4420b1adcdff7'
            };
            _context.prev = 1;
            _context.next = 4;
            return firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp(config);

          case 4:
            db = firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.firestore();
            console.log('DB loads successfully');
            return _context.abrupt("return", db);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log('Error loading DB');

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function loadDB() {
    return _ref.apply(this, arguments);
  };
}(); // Submit form

var submitForm =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(db, formData) {
    var name, email, message, createdAt, messagesRef;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = formData.name, email = formData.email, message = formData.message;
            createdAt = new Date();
            _context2.prev = 2;
            _context2.next = 5;
            return db.collection('messages').add({
              name: name,
              email: email,
              message: message,
              createdAt: createdAt
            });

          case 5:
            messagesRef = _context2.sent;
            console.log('Message written with ID: ', messagesRef.id);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log('Error saving message', _context2.t0.message);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));

  return function submitForm(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.cec1fe56883e2756aaaf.hot-update.js.map