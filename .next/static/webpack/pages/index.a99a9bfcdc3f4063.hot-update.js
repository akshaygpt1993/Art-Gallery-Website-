"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/gallery/list/components/art-card/index.tsx":
/*!************************************************************!*\
  !*** ./modules/gallery/list/components/art-card/index.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ArtCard = (param)=>{\n    let { name , image: imageUrl , isLiked , id , artist_name , location , slug , markGalleryLiked  } = param;\n    _s();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const navigateToDetail = ()=>{\n        push({\n            pathname: \"/art-gallery/\".concat(slug)\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            maxWidth: 345\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: imageUrl,\n                width: 345,\n                height: 140,\n                alt: \"Lion Pic\"\n            }, void 0, false, {\n                fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        gutterBottom: true,\n                        variant: \"h6\",\n                        component: \"div\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        variant: \"body2\",\n                        color: \"text.secondary\",\n                        children: [\n                            artist_name,\n                            \" painting is kept at \",\n                            location\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        onClick: navigateToDetail,\n                        size: \"small\",\n                        children: \"Origin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    markGalleryLiked && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        color: isLiked ? \"success\" : \"primary\",\n                        onClick: ()=>markGalleryLiked(id),\n                        size: \"small\",\n                        children: \"Like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 31\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/list/components/art-card/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ArtCard, \"XcbUrA/aL/MBnMFoyOqNl+FGIz4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ArtCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtCard);\nvar _c;\n$RefreshReg$(_c, \"ArtCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2dhbGxlcnkvbGlzdC9jb21wb25lbnRzL2FydC1jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ087QUFDYztBQUNBO0FBQ1Y7QUFDUTtBQUNuQjtBQUNTO0FBR3hDLE1BQU1RLFVBQVUsU0FHWDtRQUZELEVBQUNDLEtBQUksRUFBRUMsT0FBT0MsU0FBUSxFQUFFQyxRQUFPLEVBQUVDLEdBQUUsRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRUMsaUJBQWdCLEVBQzNFOztJQUVQLE1BQU0sRUFBQ0MsS0FBSSxFQUFDLEdBQUdYLHNEQUFTQTtJQUN4QixNQUFNWSxtQkFBbUIsSUFBTTtRQUMzQkQsS0FBSztZQUNERSxVQUFVLGdCQUFxQixPQUFMSjtRQUM5QjtJQUNKO0lBRUYscUJBQ0UsOERBQUNmLDBEQUFJQTtRQUFDb0IsSUFBSTtZQUFFQyxVQUFVO1FBQUk7OzBCQUN0Qiw4REFBQ2hCLG1EQUFLQTtnQkFBQ2lCLEtBQUtaO2dCQUFVYSxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxLQUFJOzs7Ozs7MEJBQ3JELDhEQUFDdkIsaUVBQVdBOztrQ0FDViw4REFBQ0UsZ0VBQVVBO3dCQUFDc0IsWUFBWTt3QkFBQ0MsU0FBUTt3QkFBS0MsV0FBVTtrQ0FDN0NwQjs7Ozs7O2tDQUVILDhEQUFDSixnRUFBVUE7d0JBQUN1QixTQUFRO3dCQUFRRSxPQUFNOzs0QkFDL0JoQjs0QkFBWTs0QkFBc0JDOzs7Ozs7Ozs7Ozs7OzBCQUd2Qyw4REFBQ2IsaUVBQVdBOztrQ0FDViw4REFBQ0UsNERBQU1BO3dCQUFDMkIsU0FBU1o7d0JBQWtCYSxNQUFLO2tDQUFROzs7Ozs7b0JBQy9DZixrQ0FBcUIsOERBQUNiLDREQUFNQTt3QkFBQzBCLE9BQU9sQixVQUFTLFlBQVcsU0FBUzt3QkFBRW1CLFNBQVMsSUFBTWQsaUJBQWlCSjt3QkFBS21CLE1BQUs7a0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05SDtHQTlCTXhCOztRQUlhRCxrREFBU0E7OztLQUp0QkM7QUFnQ04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9nYWxsZXJ5L2xpc3QvY29tcG9uZW50cy9hcnQtY2FyZC9pbmRleC50c3g/NDIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbXVpL21hdGVyaWFsL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJ0AvdHlwaW5ncy9nYWxsZXJ5LnR5cGluZ3MnO1xuXG5jb25zdCBBcnRDYXJkID0gKFxuICAgIHtuYW1lLCBpbWFnZTogaW1hZ2VVcmwsIGlzTGlrZWQsIGlkLCBhcnRpc3RfbmFtZSwgbG9jYXRpb24sIHNsdWcsIG1hcmtHYWxsZXJ5TGlrZWR9OlxuICAgIEdhbGxlcnlcbikgPT4ge1xuICAgIGNvbnN0IHtwdXNofSA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9EZXRhaWwgPSAoKSA9PiB7XG4gICAgICAgIHB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGAvYXJ0LWdhbGxlcnkvJHtzbHVnfWAsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgc3g9e3sgbWF4V2lkdGg6IDM0NSB9fT5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VVcmx9IHdpZHRoPXszNDV9IGhlaWdodD17MTQwfSBhbHQ9XCJMaW9uIFBpY1wiIC8+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XG4gICAgICAgICAge2FydGlzdF9uYW1lfSBwYWludGluZyBpcyBrZXB0IGF0IHtsb2NhdGlvbn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtuYXZpZ2F0ZVRvRGV0YWlsfSBzaXplPVwic21hbGxcIj5PcmlnaW48L0J1dHRvbj5cbiAgICAgICAge21hcmtHYWxsZXJ5TGlrZWQgJiYgKDxCdXR0b24gY29sb3I9e2lzTGlrZWQ/IFwic3VjY2Vzc1wiOiBcInByaW1hcnlcIn0gb25DbGljaz17KCkgPT4gbWFya0dhbGxlcnlMaWtlZChpZCl9IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgTGlrZVxuICAgICAgICA8L0J1dHRvbj4pfVxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydENhcmQiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJJbWFnZSIsInVzZVJvdXRlciIsIkFydENhcmQiLCJuYW1lIiwiaW1hZ2UiLCJpbWFnZVVybCIsImlzTGlrZWQiLCJpZCIsImFydGlzdF9uYW1lIiwibG9jYXRpb24iLCJzbHVnIiwibWFya0dhbGxlcnlMaWtlZCIsInB1c2giLCJuYXZpZ2F0ZVRvRGV0YWlsIiwicGF0aG5hbWUiLCJzeCIsIm1heFdpZHRoIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJndXR0ZXJCb3R0b20iLCJ2YXJpYW50IiwiY29tcG9uZW50IiwiY29sb3IiLCJvbkNsaWNrIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/gallery/list/components/art-card/index.tsx\n"));

/***/ })

});