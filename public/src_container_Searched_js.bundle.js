(self["webpackChunkreact_app_redux"] = self["webpackChunkreact_app_redux"] || []).push([["src_container_Searched_js"],{

/***/ "./src/components/Book.js":
/*!********************************!*\
  !*** ./src/components/Book.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Book = function Book(props) {
  var data = props.data,
      favoriteBooks = props.favoriteBooks;
  var id = data.id;
  var _data$volumeInfo = data.volumeInfo,
      title = _data$volumeInfo.title,
      imageLinks = _data$volumeInfo.imageLinks;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      favorite = _useState2[0],
      setFavorite = _useState2[1];

  var handleDeleteFavorite = function handleDeleteFavorite(id) {
    props.deleteFavorite(id);
    setFavorite(false);
  };

  var handleSetFavorite = function handleSetFavorite() {
    props.setFavorite({
      data: data
    });
    setFavorite(true);
  };

  var isFavorite = function isFavorite() {
    var result = favoriteBooks.filter(function (favoriteBooks) {
      return favoriteBooks.data.id === id;
    });
    if (result.length) setFavorite(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFavorite();
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: favorite ? 'book__card borderFavorite' : 'book__card'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imageLinks === undefined ? '' : "".concat(imageLinks.thumbnail)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, title.length > 15 ? title.substr(0, 15) + '...' : title), favorite ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "book__button btn-favorite",
    type: "submit",
    onClick: function onClick() {
      return handleDeleteFavorite(id);
    }
  }, "FAVORITE") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "book__button",
    type: "submit",
    onClick: handleSetFavorite
  }, "FAVORITE")));
};

Book.propTypes = {
  favorite: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  imageLinks: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
Book.displayName = 'Book';

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteBooks: state.favoriteBooks
  };
};

var mapDispatchToProps = {
  setFavorite: _redux_actions__WEBPACK_IMPORTED_MODULE_2__.setFavorite,
  deleteFavorite: _redux_actions__WEBPACK_IMPORTED_MODULE_2__.deleteFavorite
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Book));

/***/ }),

/***/ "./src/components/BookList.js":
/*!************************************!*\
  !*** ./src/components/BookList.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "./src/constants/index.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book */ "./src/components/Book.js");
/* harmony import */ var _custom_hooks_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../custom-hooks/useForm */ "./src/custom-hooks/useForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var BookList = function BookList() {
  var _useForm = (0,_custom_hooks_useForm__WEBPACK_IMPORTED_MODULE_3__.default)(),
      handleChange = _useForm.handleChange,
      handleSubmit = _useForm.handleSubmit,
      result = _useForm.result,
      doneFetch = _useForm.doneFetch;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "booklist__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "booklist__box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "booklist_title"
  }, "Search some books"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit,
    className: "booklist__form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    autoComplete: "none",
    className: "booklist_input",
    type: "text",
    placeholder: "Search a book",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "booklist__button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    class: "fas fa-search"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "booklist__searched-container"
  }, !doneFetch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "booklist__gif",
    src: _constants_index__WEBPACK_IMPORTED_MODULE_1__.searchGif,
    alt: "Not results"
  }) : result.map(function (book) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Book__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: book,
      data: book
    });
  })));
};

BookList.propTypes = {
  doneFetch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  result: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (BookList);

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "booksSearch": function() { return /* binding */ booksSearch; },
/* harmony export */   "booksSearchPredefined": function() { return /* binding */ booksSearchPredefined; },
/* harmony export */   "searchGif": function() { return /* binding */ searchGif; }
/* harmony export */ });
var base_url = 'https://www.googleapis.com/books/v1/volumes?q=';
var api_key = '&key=AIzaSyDXrl1PB2RFqlCofGfp2kPur3zV88E-8gY';
var booksSearch = function booksSearch(query) {
  return "".concat(base_url).concat(query).concat(api_key, "&maxResults=15");
};
var booksSearchPredefined = function booksSearchPredefined(query) {
  return "".concat(base_url).concat(query).concat(api_key, "&maxResults=9");
};
var searchGif = 'https://media.tenor.com/images/e791327361a8ed1c377aacfce9f52251/tenor.gif';

/***/ }),

/***/ "./src/container/Searched.js":
/*!***********************************!*\
  !*** ./src/container/Searched.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_BookList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BookList */ "./src/components/BookList.js");



var Searched = function Searched() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_BookList__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Searched);

/***/ }),

/***/ "./src/custom-hooks/useForm.js":
/*!*************************************!*\
  !*** ./src/custom-hooks/useForm.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useForm = function useForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      book = _useState2[0],
      setBook = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      result = _useState4[0],
      setResult = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      doneFetch = _useState6[0],
      setDoneFetch = _useState6[1];

  var handleChange = function handleChange(e) {
    e.preventDefault();
    var book = e.target.value;
    setBook(book);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var query = book;
    axios__WEBPACK_IMPORTED_MODULE_2___default().get((0,_constants__WEBPACK_IMPORTED_MODULE_1__.booksSearch)(query)).then(function (data) {
      setResult(data.data.items);
      setDoneFetch(true);
    });
  };

  return {
    handleChange: handleChange,
    handleSubmit: handleSubmit,
    result: result,
    doneFetch: doneFetch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ })

}]);
//# sourceMappingURL=src_container_Searched_js.bundle.js.map