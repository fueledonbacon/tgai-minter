"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"./node_modules/wagmi/dist/providers/alchemy.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.configureChains)([\n    _config__WEBPACK_IMPORTED_MODULE_7__[\"default\"].chainId == 1 ? wagmi_chains__WEBPACK_IMPORTED_MODULE_9__.mainnet : wagmi_chains__WEBPACK_IMPORTED_MODULE_9__.polygonMumbai\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_10__.alchemyProvider)({\n        apiKey: process.env.ALCHEMY_ID\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_11__.publicProvider)()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_12__.getDefaultWallets)({\n    appName: \"TGAI Portal\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\n\nfunction TGAI(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_12__.RainbowKitProvider, {\n            chains: chains,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_12__.darkTheme)(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                store: _src_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"preconnect\",\n                                href: \"https://fonts.googleapis.com\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"preconnect\",\n                                href: \"https://fonts.gstatic.com\",\n                                crossOrigin: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                href: \"https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n                                rel: \"stylesheet\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                type: \"text/css\",\n                                rel: \"stylesheet\",\n                                href: \"/css/plugins.css?ver=4.1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                type: \"text/css\",\n                                rel: \"stylesheet\",\n                                href: \"/css/style.css?ver=4.1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])({}, pageProps), void 0, false, {\n                        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastifyContainer, {\n                        theme: \"dark\",\n                        position: \"bottom-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = TGAI;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TGAI);\nvar _c;\n$RefreshReg$(_c, \"TGAI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDVTtBQUNBO0FBQ1I7QUFDZ0I7QUFFSjtBQU1YO0FBQ21DO0FBQ2I7QUFDSTtBQUNGO0FBRXpCO0FBQy9CLElBQTZCTSxHQU01QixHQU40QkEsc0RBQWUsQ0FDMUM7SUFBQ08sdURBQWMsSUFBSSxDQUFDLEdBQUdKLGlEQUFPLEdBQUdDLHVEQUFhO0NBQUMsRUFDL0M7SUFDRUMseUVBQWUsQ0FBQztRQUFFSSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0tBQUUsQ0FBQztJQUNuRE4sdUVBQWMsRUFBRTtDQUNqQixDQUNGLEVBTk9PLE1BQU0sR0FBZWIsR0FNNUIsQ0FOT2EsTUFBTSxFQUFFQyxRQUFRLEdBQUtkLEdBTTVCLENBTmVjLFFBQVE7QUFReEIsSUFBTSxVQUFZLEdBQUtqQiwwRUFBaUIsQ0FBQztJQUN2Q21CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCSCxNQUFNLEVBQU5BLE1BQU07Q0FDUCxDQUFDLENBSE1FLFVBQVU7QUFLbEIsSUFBTUUsV0FBVyxHQUFHaEIsbURBQVksQ0FBQztJQUMvQmlCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCSCxVQUFVLEVBQVZBLFVBQVU7SUFDVkQsUUFBUSxFQUFSQSxRQUFRO0NBQ1QsQ0FBQztBQUM4QztBQUVoRCxTQUFTTSxJQUFJLENBQUMsS0FBd0IsRUFBRTtRQUF4QkMsU0FBUyxHQUFYLEtBQXdCLENBQXRCQSxTQUFTLEVBQUVDLFNBQVMsR0FBdEIsS0FBd0IsQ0FBWEEsU0FBUztJQUNsQyxxQkFDRSw4REFBQ3BCLDhDQUFXO1FBQUNxQixNQUFNLEVBQUVOLFdBQVc7a0JBQzlCLDRFQUFDbkIsdUVBQWtCO1lBQUNlLE1BQU0sRUFBRUEsTUFBTTtZQUFFVyxLQUFLLEVBQUV6QixrRUFBUyxFQUFFO3NCQUNwRCw0RUFBQ0osaURBQVE7Z0JBQUNDLEtBQUssRUFBRUEsd0RBQUs7O2tDQUNwQiw4REFBQ0Ysa0RBQUk7OzBDQUNILDhEQUFDK0IsTUFBSTtnQ0FBQ0MsR0FBRyxFQUFDLFlBQVk7Z0NBQUNDLElBQUksRUFBQyw4QkFBOEI7Ozs7O29DQUFHOzBDQUM3RCw4REFBQ0YsTUFBSTtnQ0FDSEMsR0FBRyxFQUFDLFlBQVk7Z0NBQ2hCQyxJQUFJLEVBQUMsMkJBQTJCO2dDQUNoQ0MsV0FBVyxFQUFDLEVBQUU7Ozs7O29DQUNkOzBDQUNGLDhEQUFDSCxNQUFJO2dDQUNIRSxJQUFJLEVBQUMsOE5BQThOO2dDQUNuT0QsR0FBRyxFQUFDLFlBQVk7Ozs7O29DQUNoQjswQ0FHRiw4REFBQ0QsTUFBSTtnQ0FDSEksSUFBSSxFQUFDLFVBQVU7Z0NBQ2ZILEdBQUcsRUFBQyxZQUFZO2dDQUNoQkMsSUFBSSxFQUFDLDBCQUEwQjs7Ozs7b0NBQy9COzBDQUNGLDhEQUFDRixNQUFJO2dDQUFDSSxJQUFJLEVBQUMsVUFBVTtnQ0FBQ0gsR0FBRyxFQUFDLFlBQVk7Z0NBQUNDLElBQUksRUFBQyx3QkFBd0I7Ozs7O29DQUFHOzs7Ozs7NEJBQ2xFO2tDQUNQLDhEQUFDTixTQUFTLHNGQUFLQyxTQUFTOzs7OzRCQUFJO2tDQUM1Qiw4REFBQ1EsaUJBQWlCO3dCQUFDTixLQUFLLEVBQUMsTUFBTTt3QkFBQ08sUUFBUSxFQUFDLGVBQWU7Ozs7OzRCQUFFOzs7Ozs7b0JBQ2pEOzs7OztnQkFDUTs7Ozs7WUFDVCxDQUVkO0FBQ0osQ0FBQztBQWhDUVgsS0FBQUEsSUFBSTtBQWtDYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zcmMvcmVkdXgvc3RvcmVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcblxuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWVcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBtYWlubmV0LCBwb2x5Z29uTXVtYmFpIH0gZnJvbSAnd2FnbWkvY2hhaW5zJztcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gJ3dhZ21pL3Byb3ZpZGVycy9hbGNoZW15JztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbY29uZmlnLmNoYWluSWQgPT0gMSA/IG1haW5uZXQgOiBwb2x5Z29uTXVtYmFpXSxcbiAgW1xuICAgIGFsY2hlbXlQcm92aWRlcih7IGFwaUtleTogcHJvY2Vzcy5lbnYuQUxDSEVNWV9JRCB9KSxcbiAgICBwdWJsaWNQcm92aWRlcigpXG4gIF1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnVEdBSSBQb3J0YWwnLFxuICBjaGFpbnNcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlclxufSlcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG5mdW5jdGlvbiBUR0FJKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtkYXJrVGhlbWUoKX0+XG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IZWVibzp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiAhR29vZ2xlIEZvbnRzICovfVxuICAgICAgICAgICAgey8qIFN0eWxlcyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICBocmVmPVwiL2Nzcy9wbHVnaW5zLmNzcz92ZXI9NC4xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGluayB0eXBlPVwidGV4dC9jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzP3Zlcj00LjFcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPFRvYXN0aWZ5Q29udGFpbmVyIHRoZW1lPVwiZGFya1wiIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVEdBSTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUHJvdmlkZXIiLCJzdG9yZSIsImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJtYWlubmV0IiwicG9seWdvbk11bWJhaSIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiY29uZmlnIiwiY2hhaW5JZCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJBTENIRU1ZX0lEIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJUb2FzdENvbnRhaW5lciIsIlRHQUkiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NPcmlnaW4iLCJ0eXBlIiwiVG9hc3RpZnlDb250YWluZXIiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});