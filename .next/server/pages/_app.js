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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    contract: \"0x1Ee2De593E1868A8cF8F7375D1B7f21e33aC8BC3\",\n    chainId: 80001\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBRztJQUNYQyxRQUFRLEVBQUUsNENBQTRDO0lBQ3REQyxPQUFPLEVBQUUsS0FBSztDQUNqQjtBQUNELGlFQUFlRixNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhLXBvcnRhbC1yZWFjdC8uL2NvbmZpZy5qcz9jMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcbiAgICBjb250cmFjdDogJzB4MUVlMkRlNTkzRTE4NjhBOGNGOEY3Mzc1RDFCN2YyMWUzM2FDOEJDMycsXG4gICAgY2hhaW5JZDogODAwMDEsXG59XG5leHBvcnQgZGVmYXVsdCBjb25maWc7Il0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRyYWN0IiwiY2hhaW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__, wagmi__WEBPACK_IMPORTED_MODULE_7__, wagmi_chains__WEBPACK_IMPORTED_MODULE_8__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__, wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_12__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__, wagmi__WEBPACK_IMPORTED_MODULE_7__, wagmi_chains__WEBPACK_IMPORTED_MODULE_8__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__, wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__, react_toastify__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.configureChains)([\n    _config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].chainId == 1 ? wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.mainnet : wagmi_chains__WEBPACK_IMPORTED_MODULE_8__.polygonMumbai\n], [\n    _config__WEBPACK_IMPORTED_MODULE_11__[\"default\"].chainId == 1 ? (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__.jsonRpcProvider)({\n        rpc: ()=>{\n            return {\n                http: \"https://rpc.ankr.com/eth\"\n            };\n        }\n    }) : (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__.jsonRpcProvider)({\n        rpc: ()=>{\n            return {\n                http: \"https://rpc.ankr.com/polygon_mumbai\"\n            };\n        }\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_9__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.getDefaultWallets)({\n    appName: \"TGAI Portal\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n\nfunction TGAI({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_7__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.RainbowKitProvider, {\n            chains: chains,\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_6__.darkTheme)(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                store: _src_redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {\n                        theme: \"dark\",\n                        position: \"bottom-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ryan/Github/tgai/meta-portal/pages/_app.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TGAI);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNVO0FBQ0E7QUFDUjtBQUNnQjtBQUNKO0FBTVg7QUFDbUM7QUFDYjtBQUNFO0FBQ0U7QUFHM0I7QUFDL0IsTUFBTSxFQUFFYyxNQUFNLEdBQUVDLFFBQVEsR0FBRSxHQUFHVCxzREFBZSxDQUMxQztJQUFDTyx3REFBYyxJQUFJLENBQUMsR0FBR0osaURBQU8sR0FBR0MsdURBQWE7Q0FBQyxFQUMvQztJQUNFRyx3REFBYyxJQUFJLENBQUMsR0FBR0QseUVBQWUsQ0FBQztRQUNwQ0ssR0FBRyxFQUFFLElBQU07WUFDVCxPQUFPO2dCQUNMQyxJQUFJLEVBQUUsMEJBQTBCO2FBQ2pDLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQyxHQUFHTix5RUFBZSxDQUFDO1FBQ25CSyxHQUFHLEVBQUUsSUFBTTtZQUNULE9BQU87Z0JBQ0xDLElBQUksRUFBRSxxQ0FBcUM7YUFDNUMsQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDO0lBQ0ZQLHNFQUFjLEVBQUU7Q0FDakIsQ0FDRjtBQUVELE1BQU0sRUFBRVEsVUFBVSxHQUFFLEdBQUdoQix5RUFBaUIsQ0FBQztJQUN2Q2lCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCTixNQUFNO0NBQ1AsQ0FBQztBQUVGLE1BQU1PLFdBQVcsR0FBR2QsbURBQVksQ0FBQztJQUMvQmUsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkosUUFBUTtDQUNULENBQUM7QUFDOEM7QUFFaEQsU0FBU1MsSUFBSSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdEMscUJBQ0UsOERBQUNsQiw4Q0FBVztRQUFDbUIsTUFBTSxFQUFFTixXQUFXO2tCQUM5Qiw0RUFBQ2pCLHNFQUFrQjtZQUFDVSxNQUFNLEVBQUVBLE1BQU07WUFBRWMsS0FBSyxFQUFFdkIsaUVBQVMsRUFBRTtzQkFDcEQsNEVBQUNKLGlEQUFRO2dCQUFDQyxLQUFLLEVBQUVBLHdEQUFLOztrQ0FFcEIsOERBQUN1QixTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJO2tDQUM1Qiw4REFBQ0gsMkRBQWM7d0JBQUNLLEtBQUssRUFBQyxNQUFNO3dCQUFDQyxRQUFRLEVBQUMsZUFBZTs7Ozs7NEJBQUU7Ozs7OztvQkFDOUM7Ozs7O2dCQUNROzs7OztZQUNULENBRWQ7QUFDSixDQUFDO0FBRUQsaUVBQWVMLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGEtcG9ydGFsLXJlYWN0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3NyYy9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQge1xuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBkYXJrVGhlbWVcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyBtYWlubmV0LCBwb2x5Z29uTXVtYmFpIH0gZnJvbSAnd2FnbWkvY2hhaW5zJztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XG5pbXBvcnQgeyBqc29uUnBjUHJvdmlkZXIgfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL2pzb25ScGNcIjtcblxuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhcbiAgW2NvbmZpZy5jaGFpbklkID09IDEgPyBtYWlubmV0IDogcG9seWdvbk11bWJhaV0sXG4gIFtcbiAgICBjb25maWcuY2hhaW5JZCA9PSAxID8ganNvblJwY1Byb3ZpZGVyKHtcbiAgICAgIHJwYzogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGh0dHA6IFwiaHR0cHM6Ly9ycGMuYW5rci5jb20vZXRoXCIsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pIDoganNvblJwY1Byb3ZpZGVyKHtcbiAgICAgIHJwYzogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGh0dHA6IFwiaHR0cHM6Ly9ycGMuYW5rci5jb20vcG9seWdvbl9tdW1iYWlcIixcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgcHVibGljUHJvdmlkZXIoKVxuICBdXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ1RHQUkgUG9ydGFsJyxcbiAgY2hhaW5zXG59KTtcblxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXJcbn0pXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuZnVuY3Rpb24gVEdBSSh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17ZGFya1RoZW1lKCl9PlxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lciB0aGVtZT1cImRhcmtcIiBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIi8+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICA8L1dhZ21pQ29uZmlnPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRHQUk7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlByb3ZpZGVyIiwic3RvcmUiLCJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImRhcmtUaGVtZSIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwibWFpbm5ldCIsInBvbHlnb25NdW1iYWkiLCJwdWJsaWNQcm92aWRlciIsImpzb25ScGNQcm92aWRlciIsImNvbmZpZyIsImNoYWlucyIsInByb3ZpZGVyIiwiY2hhaW5JZCIsInJwYyIsImh0dHAiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJUb2FzdENvbnRhaW5lciIsIlRHQUkiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ0aGVtZSIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/redux/actions/type.js":
/*!***********************************!*\
  !*** ./src/redux/actions/type.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_DATA\": () => (/* binding */ GET_DATA),\n/* harmony export */   \"GET_SINGLE_NFT\": () => (/* binding */ GET_SINGLE_NFT),\n/* harmony export */   \"NAVIGATION\": () => (/* binding */ NAVIGATION),\n/* harmony export */   \"SEARCH\": () => (/* binding */ SEARCH),\n/* harmony export */   \"WALLET\": () => (/* binding */ WALLET)\n/* harmony export */ });\nconst GET_DATA = \"GET_DATA\";\nconst GET_SINGLE_NFT = \"GET_SINGLE_NFT\";\n// set settings\nconst NAVIGATION = \"NAVIGATION\";\nconst WALLET = \"WALLET\";\nconst SEARCH = \"SEARCH\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUM1QixNQUFNQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFFL0MsZUFBZTtBQUNSLE1BQU1DLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFDaEMsTUFBTUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUN4QixNQUFNQyxNQUFNLEdBQUcsUUFBUSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YS1wb3J0YWwtcmVhY3QvLi9zcmMvcmVkdXgvYWN0aW9ucy90eXBlLmpzPzY1MTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEdFVF9EQVRBID0gXCJHRVRfREFUQVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NJTkdMRV9ORlQgPSBcIkdFVF9TSU5HTEVfTkZUXCI7XHJcblxyXG4vLyBzZXQgc2V0dGluZ3NcclxuZXhwb3J0IGNvbnN0IE5BVklHQVRJT04gPSBcIk5BVklHQVRJT05cIjtcclxuZXhwb3J0IGNvbnN0IFdBTExFVCA9IFwiV0FMTEVUXCI7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSBcIlNFQVJDSFwiO1xyXG4iXSwibmFtZXMiOlsiR0VUX0RBVEEiLCJHRVRfU0lOR0xFX05GVCIsIk5BVklHQVRJT04iLCJXQUxMRVQiLCJTRUFSQ0giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions/type.js\n");

/***/ }),

/***/ "./src/redux/reducer/index.js":
/*!************************************!*\
  !*** ./src/redux/reducer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nfts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nfts */ \"./src/redux/reducer/nfts.js\");\n/* harmony import */ var _siteSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteSettings */ \"./src/redux/reducer/siteSettings.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    nfts: _nfts__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    site: _siteSettings__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNkO0FBQ1E7QUFFbEMsaUVBQWVBLHNEQUFlLENBQUM7SUFBRUMsSUFBSTtJQUFFQyxJQUFJO0NBQUUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YS1wb3J0YWwtcmVhY3QvLi9zcmMvcmVkdXgvcmVkdWNlci9pbmRleC5qcz83MmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgbmZ0cyBmcm9tIFwiLi9uZnRzXCI7XHJcbmltcG9ydCBzaXRlIGZyb20gXCIuL3NpdGVTZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHsgbmZ0cywgc2l0ZSB9KTtcclxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsIm5mdHMiLCJzaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducer/index.js\n");

/***/ }),

/***/ "./src/redux/reducer/nfts.js":
/*!***********************************!*\
  !*** ./src/redux/reducer/nfts.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ \"./src/redux/actions/type.js\");\n\nconst nfts = (state = [], action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case _actions_type__WEBPACK_IMPORTED_MODULE_0__.GET_DATA:\n            return {\n                ...state,\n                data: payload\n            };\n        case _actions_type__WEBPACK_IMPORTED_MODULE_0__.GET_SINGLE_NFT:\n            return {\n                ...state,\n                nft: payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nfts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9uZnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJEO0FBRTNELE1BQU1FLElBQUksR0FBRyxDQUFDQyxLQUFLLEdBQUcsRUFBRSxFQUFFQyxNQUFNLEdBQUs7SUFDbkMsTUFBTSxFQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRSxHQUFHRixNQUFNO0lBQ2hDLE9BQVFDLElBQUk7UUFDVixLQUFLTCxtREFBUTtZQUNYLE9BQU87Z0JBQ0wsR0FBR0csS0FBSztnQkFDUkksSUFBSSxFQUFFRCxPQUFPO2FBQ2QsQ0FBQztRQUNKLEtBQUtMLHlEQUFjO1lBQ2pCLE9BQU87Z0JBQ0wsR0FBR0UsS0FBSztnQkFDUkssR0FBRyxFQUFFRixPQUFPO2FBQ2IsQ0FBQztRQUVKO1lBQ0UsT0FBT0gsS0FBSyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUNELGlFQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRhLXBvcnRhbC1yZWFjdC8uL3NyYy9yZWR1eC9yZWR1Y2VyL25mdHMuanM/YWI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHRVRfREFUQSwgR0VUX1NJTkdMRV9ORlQgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlXCI7XHJcblxyXG5jb25zdCBuZnRzID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBHRVRfREFUQTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBwYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBHRVRfU0lOR0xFX05GVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBuZnQ6IHBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbmZ0cztcclxuIl0sIm5hbWVzIjpbIkdFVF9EQVRBIiwiR0VUX1NJTkdMRV9ORlQiLCJuZnRzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiLCJuZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/reducer/nfts.js\n");

/***/ }),

/***/ "./src/redux/reducer/siteSettings.js":
/*!*******************************************!*\
  !*** ./src/redux/reducer/siteSettings.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/type */ \"./src/redux/actions/type.js\");\n\nconst initialState = {\n    navigation: false,\n    wallet: false,\n    search: false\n};\nconst nfts = (state = initialState, action)=>{\n    const { type , payload  } = action;\n    switch(type){\n        case _actions_type__WEBPACK_IMPORTED_MODULE_0__.NAVIGATION:\n            return {\n                ...state,\n                navigation: payload\n            };\n        case _actions_type__WEBPACK_IMPORTED_MODULE_0__.WALLET:\n            return {\n                ...state,\n                wallet: payload\n            };\n        case _actions_type__WEBPACK_IMPORTED_MODULE_0__.SEARCH:\n            return {\n                ...state,\n                search: payload\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nfts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvcmVkdWNlci9zaXRlU2V0dGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkQ7QUFFN0QsTUFBTUcsWUFBWSxHQUFHO0lBQ25CQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsTUFBTSxFQUFFLEtBQUs7Q0FDZDtBQUVELE1BQU1DLElBQUksR0FBRyxDQUFDQyxLQUFLLEdBQUdMLFlBQVksRUFBRU0sTUFBTSxHQUFLO0lBQzdDLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUUsR0FBR0YsTUFBTTtJQUNoQyxPQUFRQyxJQUFJO1FBQ1YsS0FBS1YscURBQVU7WUFDYixPQUFPO2dCQUNMLEdBQUdRLEtBQUs7Z0JBQ1JKLFVBQVUsRUFBRU8sT0FBTzthQUNwQixDQUFDO1FBQ0osS0FBS1QsaURBQU07WUFDVCxPQUFPO2dCQUNMLEdBQUdNLEtBQUs7Z0JBQ1JILE1BQU0sRUFBRU0sT0FBTzthQUNoQixDQUFDO1FBQ0osS0FBS1YsaURBQU07WUFDVCxPQUFPO2dCQUNMLEdBQUdPLEtBQUs7Z0JBQ1JGLE1BQU0sRUFBRUssT0FBTzthQUNoQixDQUFDO1FBQ0o7WUFDRSxPQUFPSCxLQUFLLENBQUM7S0FDaEI7QUFDSCxDQUFDO0FBQ0QsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGEtcG9ydGFsLXJlYWN0Ly4vc3JjL3JlZHV4L3JlZHVjZXIvc2l0ZVNldHRpbmdzLmpzPzc2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTkFWSUdBVElPTiwgU0VBUkNILCBXQUxMRVQgfSBmcm9tIFwiLi4vYWN0aW9ucy90eXBlXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbmF2aWdhdGlvbjogZmFsc2UsXHJcbiAgd2FsbGV0OiBmYWxzZSxcclxuICBzZWFyY2g6IGZhbHNlLFxyXG59O1xyXG5cclxuY29uc3QgbmZ0cyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlLCBwYXlsb2FkIH0gPSBhY3Rpb247XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIE5BVklHQVRJT046XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbmF2aWdhdGlvbjogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgV0FMTEVUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHdhbGxldDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0VBUkNIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNlYXJjaDogcGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IG5mdHM7XHJcbiJdLCJuYW1lcyI6WyJOQVZJR0FUSU9OIiwiU0VBUkNIIiwiV0FMTEVUIiwiaW5pdGlhbFN0YXRlIiwibmF2aWdhdGlvbiIsIndhbGxldCIsInNlYXJjaCIsIm5mdHMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducer/siteSettings.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./src/redux/reducer/index.js\");\n\n\n\n\nconst initialState = {};\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())\n];\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUMvQjtBQUNJO0FBRXBDLE1BQU1LLFlBQVksR0FBRyxFQUFFO0FBRXZCLE1BQU1DLFVBQVUsR0FBRztJQUFDSCxvREFBSztDQUFDO0FBRTFCLE1BQU1JLEtBQUssR0FBR04sa0RBQVcsQ0FDdkJHLGdEQUFXLEVBQ1hDLFlBQVksRUFDWkgsNkVBQW1CLENBQUNGLHNEQUFlLElBQUlNLFVBQVUsQ0FBQyxDQUFDLENBQ3BEO0FBRUQsaUVBQWVDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21ldGEtcG9ydGFsLXJlYWN0Ly4vc3JjL3JlZHV4L3N0b3JlLmpzP2RkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sIm5hbWVzIjpbImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rIiwicm9vdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJtaWRkbGV3YXJlIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/jsonRpc");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();