(self["webpackChunkreact_app_redux"] = self["webpackChunkreact_app_redux"] || []).push([["src_container_Favorites_js"],{

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

/***/ "./src/components/FavoritesList.js":
/*!*****************************************!*\
  !*** ./src/components/FavoritesList.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Book */ "./src/components/Book.js");




var FavoriteList = function FavoriteList(props) {
  var favoriteBooks = props.favoriteBooks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "favoriteList_title"
  }, "Your favorite books!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "booklist__searched-container"
  }, !favoriteBooks.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Empty") : favoriteBooks.map(function (bookSearch) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Book__WEBPACK_IMPORTED_MODULE_2__.default, {
      key: bookSearch.id,
      data: bookSearch.data
    }));
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favoriteBooks: state.favoriteBooks,
    changeName: state.changeName
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(FavoriteList));

/***/ }),

/***/ "./src/container/Favorites.js":
/*!************************************!*\
  !*** ./src/container/Favorites.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_FavoritesList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FavoritesList */ "./src/components/FavoritesList.js");



var Favorites = function Favorites() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_FavoritesList__WEBPACK_IMPORTED_MODULE_1__.default, null);
};

/* harmony default export */ __webpack_exports__["default"] = (Favorites);

/***/ })

}]);
//# sourceMappingURL=src_container_Favorites_js.bundle.js.map