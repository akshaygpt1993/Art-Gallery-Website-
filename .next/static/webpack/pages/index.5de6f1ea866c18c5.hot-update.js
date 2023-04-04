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

/***/ "./modules/gallery/index.tsx":
/*!***********************************!*\
  !*** ./modules/gallery/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/Tab/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _modules_gallery_list_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/gallery/list/all */ \"./modules/gallery/list/all/index.tsx\");\n/* harmony import */ var _components_tab_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/tab-panel */ \"./components/tab-panel/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/reducer */ \"./modules/gallery/redux/reducer.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst ArtGallery = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    const artGalleries = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.gallery.values);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const markGalleryLiked = (likedGalleryId)=>{\n        dispatch((0,_redux_reducer__WEBPACK_IMPORTED_MODULE_5__.toggleLike)(likedGalleryId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        sx: {\n            width: \"100%\",\n            minHeight: \"100vh\",\n            backgroundColor: \"black\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    borderBottom: 1,\n                    borderColor: \"divider\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    value: value,\n                    onChange: handleChange,\n                    \"aria-label\": \"basic tabs example\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            co: true,\n                            label: \"Home\",\n                            ...(0,_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__.a11yProps)(0)\n                        }, void 0, false, {\n                            fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Wishlist\",\n                            ...(0,_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__.a11yProps)(1)\n                        }, void 0, false, {\n                            fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                value: value,\n                index: 0,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_gallery_list_all__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    list: artGalleries,\n                    markGalleryLiked: markGalleryLiked\n                }, void 0, false, {\n                    fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                value: value,\n                index: 1,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_gallery_list_all__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    markGalleryLiked: markGalleryLiked,\n                    list: artGalleries.filter((param)=>{\n                        let { isLiked  } = param;\n                        return isLiked;\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/akshaygupta/Documents/Art-Gallery-Website-/modules/gallery/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ArtGallery, \"l8IcE5MRb4/0q3dMb/JdsjWGxEk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = ArtGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArtGallery);\nvar _c;\n$RefreshReg$(_c, \"ArtGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGVzL2dhbGxlcnkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1E7QUFDVjtBQUNBO0FBQ21CO0FBQ007QUFFTjtBQUNWO0FBRzdDLE1BQU1XLGFBQWEsSUFBTTs7SUFDdkIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1hLGVBQWUsQ0FBQ0MsT0FBNkJDLFdBQXFCO1FBQ3RFSCxTQUFTRztJQUNYO0lBRUEsTUFBTUMsZUFBZVIsd0RBQVdBLENBQU0sQ0FBQ1MsUUFBVUEsTUFBTUMsT0FBTyxDQUFDQyxNQUFNO0lBQ3JFLE1BQU1DLFdBQVdiLHdEQUFXQTtJQUU1QixNQUFNYyxtQkFBbUIsQ0FBQ0MsaUJBQTJCO1FBQ25ERixTQUFTWCwwREFBVUEsQ0FBQ2E7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ25CLHlEQUFHQTtRQUFDb0IsSUFBSTtZQUFFQyxPQUFPO1lBQVFDLFdBQVc7WUFBU0MsaUJBQWlCO1FBQVE7OzBCQUNyRSw4REFBQ3ZCLHlEQUFHQTtnQkFBQ29CLElBQUk7b0JBQUVJLGNBQWM7b0JBQUdDLGFBQWE7Z0JBQVU7MEJBQ2pELDRFQUFDM0IsMERBQVlBO29CQUFDVSxPQUFPQTtvQkFBT2tCLFVBQVVoQjtvQkFBY2lCLGNBQVc7O3NDQUM3RCw4REFBQzVCLHlEQUFHQTs0QkFBQzZCLEVBQUU7NEJBQUNDLE9BQU07NEJBQVEsR0FBRzFCLGdFQUFTQSxDQUFDLEVBQUU7Ozs7OztzQ0FDckMsOERBQUNKLHlEQUFHQTs0QkFBQzhCLE9BQU07NEJBQVksR0FBRzFCLGdFQUFTQSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcxQyw4REFBQ0QsNkRBQVFBO2dCQUFDTSxPQUFPQTtnQkFBT3NCLE9BQU87MEJBQzdCLDRFQUFDN0IsaUVBQWFBO29CQUFDOEIsTUFBTWxCO29CQUFjSyxrQkFBa0JBOzs7Ozs7Ozs7OzswQkFFdkQsOERBQUNoQiw2REFBUUE7Z0JBQUNNLE9BQU9BO2dCQUFPc0IsT0FBTzswQkFDN0IsNEVBQUM3QixpRUFBYUE7b0JBQUVpQixrQkFBa0JBO29CQUFrQmEsTUFBTWxCLGFBQWFtQixNQUFNLENBQUMsU0FBZUM7NEJBQWQsRUFBQ0EsUUFBTyxFQUFDOytCQUFLQTtvQkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0c7R0E5Qk0xQjs7UUFPaUJGLG9EQUFXQTtRQUNmRCxvREFBV0E7OztLQVJ4Qkc7QUFnQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9nYWxsZXJ5L2luZGV4LnRzeD9lY2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWF0ZXJpYWxUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEFsbEFydEdhbGxlcnkgZnJvbSAnQC9tb2R1bGVzL2dhbGxlcnkvbGlzdC9hbGwnO1xuaW1wb3J0IFRhYlBhbmVsLCB7IGExMXlQcm9wcyB9IGZyb20gJ0AvY29tcG9uZW50cy90YWItcGFuZWwnO1xuaW1wb3J0IG1vY2tEYXRhIGZyb20gXCIuL21vY2stZGF0YS5qc29uXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHRvZ2dsZUxpa2UgfSBmcm9tICcuL3JlZHV4L3JlZHVjZXInO1xuaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJ0AvdHlwaW5ncy9nYWxsZXJ5LnR5cGluZ3MnO1xuXG5jb25zdCBBcnRHYWxsZXJ5ID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQsIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgYXJ0R2FsbGVyaWVzID0gdXNlU2VsZWN0b3I8YW55Pigoc3RhdGUpID0+IHN0YXRlLmdhbGxlcnkudmFsdWVzKSBhcyBHYWxsZXJ5W107XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IG1hcmtHYWxsZXJ5TGlrZWQgPSAobGlrZWRHYWxsZXJ5SWQ6IG51bWJlcikgPT4ge1xuICAgIGRpc3BhdGNoKHRvZ2dsZUxpa2UobGlrZWRHYWxsZXJ5SWQpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDogXCIxMDB2aFwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxuICAgICAgICA8TWF0ZXJpYWxUYWJzIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gYXJpYS1sYWJlbD1cImJhc2ljIHRhYnMgZXhhbXBsZVwiPlxuICAgICAgICAgIDxUYWIgY28gbGFiZWw9XCJIb21lXCIgey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICA8VGFiIGxhYmVsPVwiV2lzaGxpc3RcIiB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICA8L01hdGVyaWFsVGFicz5cbiAgICAgIDwvQm94PlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxuICAgICAgICA8QWxsQXJ0R2FsbGVyeSBsaXN0PXthcnRHYWxsZXJpZXN9IG1hcmtHYWxsZXJ5TGlrZWQ9e21hcmtHYWxsZXJ5TGlrZWR9IC8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9PlxuICAgICAgICA8QWxsQXJ0R2FsbGVyeSAgbWFya0dhbGxlcnlMaWtlZD17bWFya0dhbGxlcnlMaWtlZH0gbGlzdD17YXJ0R2FsbGVyaWVzLmZpbHRlcigoe2lzTGlrZWR9KSA9PiBpc0xpa2VkKX0gIC8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRHYWxsZXJ5OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWF0ZXJpYWxUYWJzIiwiVGFiIiwiQm94IiwiQWxsQXJ0R2FsbGVyeSIsIlRhYlBhbmVsIiwiYTExeVByb3BzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInRvZ2dsZUxpa2UiLCJBcnRHYWxsZXJ5IiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJhcnRHYWxsZXJpZXMiLCJzdGF0ZSIsImdhbGxlcnkiLCJ2YWx1ZXMiLCJkaXNwYXRjaCIsIm1hcmtHYWxsZXJ5TGlrZWQiLCJsaWtlZEdhbGxlcnlJZCIsInN4Iiwid2lkdGgiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsIm9uQ2hhbmdlIiwiYXJpYS1sYWJlbCIsImNvIiwibGFiZWwiLCJpbmRleCIsImxpc3QiLCJmaWx0ZXIiLCJpc0xpa2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./modules/gallery/index.tsx\n"));

/***/ })

});