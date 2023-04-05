/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./modules/gallery/redux/reducer.js":
/*!******************************************!*\
  !*** ./modules/gallery/redux/reducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"gallerySlice\": () => (/* binding */ gallerySlice),\n/* harmony export */   \"toggleLike\": () => (/* binding */ toggleLike)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mock_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-data.json */ \"./modules/gallery/mock-data.json\");\n\n\nconst gallerySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState: {\n        values: _mock_data_json__WEBPACK_IMPORTED_MODULE_1__\n    },\n    reducers: {\n        toggleLike: (state, action)=>{\n            state.values = state.values.map((item)=>{\n                if (item.id === action.payload) {\n                    return {\n                        ...item,\n                        isLiked: !item.isLiked\n                    };\n                } else {\n                    return item;\n                }\n            });\n        }\n    }\n});\nconst { toggleLike  } = gallerySlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gallerySlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2dhbGxlcnkvcmVkdXgvcmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDUDtBQUVqQyxNQUFNRSxlQUFlRiw2REFBV0EsQ0FBQztJQUN0Q0csTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFFBQVFKLDRDQUFRQTtJQUNsQjtJQUNBSyxVQUFVO1FBQ1JDLFlBQVksQ0FBQ0MsT0FBT0MsU0FBVztZQUMzQkQsTUFBTUgsTUFBTSxHQUFHRyxNQUFNSCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO2dCQUN0QyxJQUFJQSxLQUFLQyxFQUFFLEtBQUtILE9BQU9JLE9BQU8sRUFBRTtvQkFDNUIsT0FBTzt3QkFBQyxHQUFHRixJQUFJO3dCQUFFRyxTQUFTLENBQUNILEtBQUtHLE9BQU87b0JBQUE7Z0JBQzNDLE9BQU87b0JBQ0gsT0FBT0g7Z0JBQ1gsQ0FBQztZQUNMO1FBQ0o7SUFDRjtBQUNGLEdBQUU7QUFFSyxNQUFNLEVBQUVKLFdBQVUsRUFBRSxHQUFHTCxhQUFhYSxPQUFPO0FBRWxELGlFQUFlYixhQUFhYyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LWdhbGxlcnktd2Vic2l0ZS8uL21vZHVsZXMvZ2FsbGVyeS9yZWR1eC9yZWR1Y2VyLmpzP2Q5NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBtb2NrRGF0YSBmcm9tIFwiLi4vbW9jay1kYXRhLmpzb25cIlxuXG5leHBvcnQgY29uc3QgZ2FsbGVyeVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnY291bnRlcicsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHZhbHVlczogbW9ja0RhdGEsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgdG9nZ2xlTGlrZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUudmFsdWVzID0gc3RhdGUudmFsdWVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBpc0xpa2VkOiAhaXRlbS5pc0xpa2VkfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHsgdG9nZ2xlTGlrZSB9ID0gZ2FsbGVyeVNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgZ2FsbGVyeVNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJtb2NrRGF0YSIsImdhbGxlcnlTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZXMiLCJyZWR1Y2VycyIsInRvZ2dsZUxpa2UiLCJzdGF0ZSIsImFjdGlvbiIsIm1hcCIsIml0ZW0iLCJpZCIsInBheWxvYWQiLCJpc0xpa2VkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./modules/gallery/redux/reducer.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFFUztBQUNKO0FBRW5CLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFDRSw4REFBQ0osaURBQVFBO1FBQUNDLE9BQU9BLG9EQUFLQTtrQkFDbEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFFaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1nYWxsZXJ5LXdlYnNpdGUvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj4pXG59XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_gallery_redux_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/gallery/redux/reducer */ \"./modules/gallery/redux/reducer.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        gallery: _modules_gallery_redux_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ1c7QUFFN0QsaUVBQWVBLGdFQUFjQSxDQUFDO0lBQzVCRSxTQUFTO1FBQ1BDLFNBQVNGLHNFQUFjQTtJQUN6QjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnQtZ2FsbGVyeS13ZWJzaXRlLy4vcmVkdXgvc3RvcmUuanM/MzU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IGdhbGxlcnlSZWR1Y2VyIGZyb20gXCIuLi9tb2R1bGVzL2dhbGxlcnkvcmVkdXgvcmVkdWNlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGdhbGxlcnk6IGdhbGxlcnlSZWR1Y2VyXG4gIH0sXG59KSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImdhbGxlcnlSZWR1Y2VyIiwicmVkdWNlciIsImdhbGxlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./modules/gallery/mock-data.json":
/*!****************************************!*\
  !*** ./modules/gallery/mock-data.json ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":1,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/horses-2904536_1280+(1).jpg","name":"Horses","location":"Delhi, India","artist_name":"PICASSO","lat":28.6679577,"long":77.2135249,"slug":"horses","isLiked":false},{"id":2,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/circle-with-arrows.jpeg","name":"Circle with Arrow","location":"Noida, India","artist_name":"GIOTTO","lat":28.5221769,"long":77.3194247,"slug":"circle-with-arrow","isLiked":false},{"id":3,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/flower.jpg","name":"Flower","location":"Moradabad, India","artist_name":"LEONARDO","lat":28.8431472,"long":78.7263528,"slug":"flower","isLiked":false},{"id":4,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/monalisa.jpg","name":"Monalisa","location":"Lovure museum, Paris","artist_name":"CÉZANNE","lat":48.8669741,"long":2.3271663,"slug":"monalisa","isLiked":false},{"id":5,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/girly-eye.jpg","name":"Girl Eye","location":"India Gate, India","artist_name":"REMBRANDT","lat":28.612912,"long":77.2269348,"slug":"girl-eye","isLiked":false},{"id":6,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/lion-king-with-full-armor-weapon-generative-ai.jpg","name":"Lion Creator","location":"Gurgaon, India","artist_name":"VELÁZQUEZ","lat":28.4229327,"long":76.9073483,"slug":"lion","isLiked":false},{"id":7,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/shoe.jpg","name":"Shoe","location":"Gateway of India, Mumbai","artist_name":"KANDINSKY","lat":18.9219841,"long":72.8320794,"slug":"shoe","isLiked":false},{"id":8,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/thankyou.jpg","name":"Thankyou","location":"baner, Pune","artist_name":"MONET","lat":18.5599713,"long":73.7735012,"slug":"thankyou","isLiked":false},{"id":9,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/trimurti.jpg","name":"TriMurti","location":"Jim Corbet, India","artist_name":"CARAVAGGIO","lat":29.5300138,"long":78.7720854,"slug":"tri-murti","isLiked":false},{"id":10,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/try-speaking.jpg","name":"Try Speaking","location":"Mahabaleshwar, Maharashtra, India","artist_name":"VAN EYCK","lat":17.925821,"long":73.6281821,"slug":"try-speaking","isLiked":false}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();