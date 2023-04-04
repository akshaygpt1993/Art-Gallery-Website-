"use strict";
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
exports.id = "pages/art-gallery/[art-gallery]";
exports.ids = ["pages/art-gallery/[art-gallery]"];
exports.modules = {

/***/ "./modules/gallery/detail/index.jsx":
/*!******************************************!*\
  !*** ./modules/gallery/detail/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ \"google-maps-react\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mock_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-data.json */ \"./modules/gallery/mock-data.json\");\n\n\n\n\nconst ArtGalleryDetails = ({ google  })=>{\n    const { query , query: { [\"art-gallery\"]: artGallerySlug  } , router  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { lat , long  } = _mock_data_json__WEBPACK_IMPORTED_MODULE_3__.find((item)=>item.slug === artGallerySlug);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(google_maps_react__WEBPACK_IMPORTED_MODULE_1__.Map, {\n        initialCenter: {\n            lat: lat,\n            lng: long\n        },\n        google: google,\n        zoom: 14,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(google_maps_react__WEBPACK_IMPORTED_MODULE_1__.Marker, {\n            name: \"Current location\",\n            position: {\n                lat: lat,\n                lng: long\n            }\n        }, void 0, false, {\n            fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/detail/index.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/detail/index.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,google_maps_react__WEBPACK_IMPORTED_MODULE_1__.GoogleApiWrapper)({\n    apiKey: \"AIzaSyAZiNn58q1I433czw_eTrvB-pg-ZXcGOkc\"\n})(ArtGalleryDetails));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2dhbGxlcnkvZGV0YWlsL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDeEI7QUFDQTtBQUV4QyxNQUFNSyxvQkFBbUIsQ0FBQyxFQUFDQyxPQUFNLEVBQUMsR0FBSTtJQUNsQyxNQUFNLEVBQUNDLE1BQUssRUFBRUEsT0FBTyxFQUFDLENBQUMsY0FBYyxFQUFFQyxlQUFjLEVBQUMsR0FBRUMsT0FBTSxFQUFDLEdBQUdOLHNEQUFTQTtJQUMzRSxNQUFNLEVBQUNPLElBQUcsRUFBRUMsS0FBSSxFQUFDLEdBQUdQLGlEQUFhLENBQUMsQ0FBQ1MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLTjtJQUUxRCxxQkFDSSw4REFBQ1Isa0RBQUdBO1FBQ0FlLGVBQWU7WUFDZkwsS0FBS0E7WUFDTE0sS0FBS0w7UUFDUDtRQUNBTCxRQUFRQTtRQUFRVyxNQUFNO2tCQUVwQiw0RUFBQ2hCLHFEQUFNQTtZQUNIaUIsTUFBTTtZQUNOQyxVQUFVO2dCQUFDVCxLQUFLQTtnQkFBS00sS0FBS0w7WUFBSTs7Ozs7Ozs7Ozs7QUFJOUM7QUFFQSxpRUFBZVQsbUVBQWdCQSxDQUFDO0lBQzlCa0IsUUFBUztBQUNYLEdBQUdmLGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FydC1nYWxsZXJ5LXdlYnNpdGUvLi9tb2R1bGVzL2dhbGxlcnkvZGV0YWlsL2luZGV4LmpzeD9lMGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWFwLCBNYXJrZXIsIEdvb2dsZUFwaVdyYXBwZXJ9IGZyb20gJ2dvb2dsZS1tYXBzLXJlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBtb2NrRGF0YSBmcm9tIFwiLi4vbW9jay1kYXRhLmpzb25cIlxuIFxuY29uc3QgQXJ0R2FsbGVyeURldGFpbHMgPSh7Z29vZ2xlfSkgPT57XG4gICAgY29uc3Qge3F1ZXJ5LCBxdWVyeToge1tcImFydC1nYWxsZXJ5XCJdOiBhcnRHYWxsZXJ5U2x1Z30sIHJvdXRlcn0gPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7bGF0LCBsb25nfSA9IG1vY2tEYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gYXJ0R2FsbGVyeVNsdWcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1hcFxuICAgICAgICAgICAgaW5pdGlhbENlbnRlcj17e1xuICAgICAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgICAgICBsbmc6IGxvbmdcbiAgICAgICAgICB9fVxuICAgICAgICAgIGdvb2dsZT17Z29vZ2xlfSB6b29tPXsxNH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPE1hcmtlclxuICAgICAgICAgICAgICAgIG5hbWU9eydDdXJyZW50IGxvY2F0aW9uJ31cbiAgICAgICAgICAgICAgICBwb3NpdGlvbj17e2xhdDogbGF0LCBsbmc6IGxvbmd9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9NYXA+XG4gICAgICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogKFwiQUl6YVN5QVppTm41OHExSTQzM2N6d19lVHJ2Qi1wZy1aWGNHT2tjXCIpXG59KShBcnRHYWxsZXJ5RGV0YWlscykiXSwibmFtZXMiOlsiTWFwIiwiTWFya2VyIiwiR29vZ2xlQXBpV3JhcHBlciIsInVzZVJvdXRlciIsIm1vY2tEYXRhIiwiQXJ0R2FsbGVyeURldGFpbHMiLCJnb29nbGUiLCJxdWVyeSIsImFydEdhbGxlcnlTbHVnIiwicm91dGVyIiwibGF0IiwibG9uZyIsImZpbmQiLCJpdGVtIiwic2x1ZyIsImluaXRpYWxDZW50ZXIiLCJsbmciLCJ6b29tIiwibmFtZSIsInBvc2l0aW9uIiwiYXBpS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/gallery/detail/index.jsx\n");

/***/ }),

/***/ "./pages/art-gallery/[art-gallery].tsx":
/*!*********************************************!*\
  !*** ./pages/art-gallery/[art-gallery].tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_gallery_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/gallery/detail */ \"./modules/gallery/detail/index.jsx\");\n\nconst Main = _modules_gallery_detail__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnQtZ2FsbGVyeS9bYXJ0LWdhbGxlcnldLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRTtBQUVuRSxNQUFNQyxPQUFPRCwrREFBd0JBO0FBRXJDLGlFQUFlQyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0LWdhbGxlcnktd2Vic2l0ZS8uL3BhZ2VzL2FydC1nYWxsZXJ5L1thcnQtZ2FsbGVyeV0udHN4PzJjMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFydEdhbGxlcnlEZXRhaWxzV3JhcHBlciBmcm9tIFwiLi4vLi4vbW9kdWxlcy9nYWxsZXJ5L2RldGFpbFwiXG4gXG5jb25zdCBNYWluID0gQXJ0R2FsbGVyeURldGFpbHNXcmFwcGVyXG4gXG5leHBvcnQgZGVmYXVsdCBNYWluIl0sIm5hbWVzIjpbIkFydEdhbGxlcnlEZXRhaWxzV3JhcHBlciIsIk1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/art-gallery/[art-gallery].tsx\n");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("google-maps-react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./modules/gallery/mock-data.json":
/*!****************************************!*\
  !*** ./modules/gallery/mock-data.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/horses-2904536_1280+(1).jpg","name":"Horses","location":"Delhi, India","artist_name":"PICASSO","lat":28.6679577,"long":77.2135249,"slug":"horses","isLiked":false},{"id":2,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/circle-with-arrows.jpeg","name":"Circle with Arrow","location":"Noida, India","artist_name":"GIOTTO","lat":28.5221769,"long":77.3194247,"slug":"circle-with-arrow","isLiked":false},{"id":3,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/flower.jpg","name":"Flower","location":"Moradabad, India","artist_name":"LEONARDO","lat":28.8431472,"long":78.7263528,"slug":"flower","isLiked":false},{"id":4,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/monalisa.jpg","name":"Monalisa","location":"Lovure museum, Paris","artist_name":"CÉZANNE","lat":48.8669741,"long":2.3271663,"slug":"monalisa","isLiked":false},{"id":5,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/girly-eye.jpg","name":"Girl Eye","location":"India Gate, India","artist_name":"REMBRANDT","lat":28.612912,"long":77.2269348,"slug":"girl-eye","isLiked":false},{"id":6,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/lion-king-with-full-armor-weapon-generative-ai.jpg","name":"Lion Creator","location":"Gurgaon, India","artist_name":"VELÁZQUEZ","lat":28.4229327,"long":76.9073483,"slug":"lion","isLiked":false},{"id":7,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/shoe.jpg","name":"Shoe","location":"Gateway of India, Mumbai","artist_name":"KANDINSKY","lat":18.9219841,"long":72.8320794,"slug":"shoe","isLiked":false},{"id":8,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/thankyou.jpg","name":"Thankyou","location":"baner, Pune","artist_name":"MONET","lat":18.5599713,"long":73.7735012,"slug":"thankyou","isLiked":false},{"id":9,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/trimurti.jpg","name":"TriMurti","location":"Jim Corbet, India","artist_name":"CARAVAGGIO","lat":29.5300138,"long":78.7720854,"slug":"tri-murti","isLiked":false},{"id":10,"image":"https://akshay-art-gallery.s3.ap-south-1.amazonaws.com/try-speaking.jpg","name":"Try Speaking","location":"Mahabaleshwar, Maharashtra, India","artist_name":"VAN EYCK","lat":17.925821,"long":73.6281821,"slug":"try-speaking","isLiked":false}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/art-gallery/[art-gallery].tsx"));
module.exports = __webpack_exports__;

})();