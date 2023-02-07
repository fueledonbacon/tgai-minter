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

/***/ "./src/components/MintButton.js":
/*!**************************************!*\
  !*** ./src/components/MintButton.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MintButton; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abi_TGAI_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abi/TGAI.json */ \"./src/abi/TGAI.json\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading */ \"./node_modules/react-loading/dist/react-loading.js\");\n/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MintButton() {\n    var _this = this;\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useSigner)(), signer = ref.data;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(true), 2), loadingContract = ref1[0], setLoadingContract = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/contract\", /*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n        var rpc, provider, contract, price, supply, saleActive, maxSupply;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    setLoadingContract(true);\n                    rpc = _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].chainId == 1 ? \"https://rpc.ankr.com/eth\" : \"https://rpc.ankr.com/polygon_mumbai\";\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.providers.JsonRpcProvider(rpc);\n                    contract = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].contract, _abi_TGAI_json__WEBPACK_IMPORTED_MODULE_2__, provider);\n                    return [\n                        4,\n                        contract.price()\n                    ];\n                case 1:\n                    price = _state.sent();\n                    return [\n                        4,\n                        contract.totalSupply()\n                    ];\n                case 2:\n                    supply = _state.sent().toNumber();\n                    return [\n                        4,\n                        contract.saleActive()\n                    ];\n                case 3:\n                    saleActive = _state.sent();\n                    return [\n                        4,\n                        contract.COLLECTION_SIZE()\n                    ];\n                case 4:\n                    maxSupply = _state.sent().toNumber();\n                    setLoadingContract(false);\n                    return [\n                        2,\n                        {\n                            price: price,\n                            priceDisplay: ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.utils.formatEther(price),\n                            saleActive: saleActive,\n                            supply: supply,\n                            maxSupply: maxSupply\n                        }\n                    ];\n            }\n        });\n    })), contractData = ref2.data;\n    var handleMint = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n            var contract, price, tx, e, message;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        if (!signer) throw new Error(\"No signer found\");\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_11__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].contract, _abi_TGAI_json__WEBPACK_IMPORTED_MODULE_2__, signer);\n                        return [\n                            4,\n                            contract.price()\n                        ];\n                    case 1:\n                        price = _state.sent();\n                        return [\n                            4,\n                            contract.mint({\n                                value: price\n                            })\n                        ];\n                    case 2:\n                        tx = _state.sent();\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.promise(tx.wait, {\n                            pending: \"Adopting your alien\",\n                            success: \"Alien Minted Successfully\",\n                            error: \"Couldn't complete the negotiation with the aliens\"\n                        });\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        e = _state.sent();\n                        message = e.message;\n                        console.error(e);\n                        if (message.includes(\"PUBLIC_SALE_INACTIVE\")) {\n                            message = \"Sale is not active\";\n                        } else if (message.includes(\"EXCEEDS_COLLECTION_SIZE\")) {\n                            message = \"Sold Out\";\n                        } else if (message.includes(\"VALUE_TOO_LOW\")) {\n                            message = \"Insufficient funds\";\n                        }\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(message);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleMint() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ref3 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"Adopt Alien\"), 2), mintButtonContent = ref3[0], setMintButtonContent = ref3[1];\n    var setButtonContentRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(setMintButtonContent);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        if (loadingContract) setButtonContentRef.current(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loading__WEBPACK_IMPORTED_MODULE_6___default()), {\n            type: \"spin\",\n            height: 32,\n            width: 32\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Github/tgai/meta-portal/src/components/MintButton.js\",\n            lineNumber: 66,\n            columnNumber: 41\n        }, _this));\n        else if (!(contractData === null || contractData === void 0 ? void 0 : contractData.saleActive)) {\n            setButtonContentRef.current(\"Sale not active\");\n        } else if ((contractData === null || contractData === void 0 ? void 0 : contractData.supply) >= (contractData === null || contractData === void 0 ? void 0 : contractData.maxSupply)) {\n            setButtonContentRef.current(\"Sold Out\");\n        } else if (contractData.saleActive && !signer) {\n            setButtonContentRef.current(\"Connect Wallet\");\n        } else if (contractData.saleActive && signer) {\n            setButtonContentRef.current(\"Adopt Alien\");\n        }\n    }, [\n        contractData,\n        loadingContract\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"metaportal_fn_button wallet_opener\",\n                style: {\n                    minWidth: \"300px\",\n                    textAlign: \"center\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                disabled: !signer || !(contractData === null || contractData === void 0 ? void 0 : contractData.saleActive),\n                onClick: function(e) {\n                    console.log(\"Minting\");\n                    e.preventDefault();\n                    handleMint();\n                },\n                children: mintButtonContent\n            }, void 0, false, {\n                fileName: \"/Users/ryan/Github/tgai/meta-portal/src/components/MintButton.js\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"(\",\n                    (contractData === null || contractData === void 0 ? void 0 : contractData.priceDisplay) || \"??\",\n                    \" ETH / adoption)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Github/tgai/meta-portal/src/components/MintButton.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryan/Github/tgai/meta-portal/src/components/MintButton.js\",\n        lineNumber: 79,\n        columnNumber: 9\n    }, this);\n}\n_s(MintButton, \"LI3r29um57cZCP0iWmru2ocOrL4=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useSigner,\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = MintButton;\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjs7Ozs7b0JBQ2I7MEJBQ1QsOERBQUNzQixHQUFDOztvQkFBQyxHQUFDO29CQUFDckMsQ0FBQUEsWUFBWSxhQUFaQSxZQUFZLFdBQWMsR0FBMUJBLEtBQUFBLENBQTBCLEdBQTFCQSxZQUFZLENBQUVILFlBQVksS0FBSSxJQUFJO29CQUFDLGtCQUFnQjs7Ozs7O29CQUFJOzs7Ozs7WUFDMUQsQ0FDUjtBQUNOLENBQUM7R0F6RnVCcEIsVUFBVTs7UUFDTEosNENBQVM7UUFHSEUsMkNBQU07OztBQUpqQkUsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NaW50QnV0dG9uLmpzPzhiZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgbmZ0QUJJIGZyb20gXCIuLi9hYmkvVEdBSS5qc29uXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWdcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IHVzZVNpZ25lciB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tIFwicmVhY3QtbG9hZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaW50QnV0dG9uKCkge1xuICAgIGNvbnN0IHsgZGF0YTogc2lnbmVyIH0gPSB1c2VTaWduZXIoKTtcbiAgICBjb25zdCBbbG9hZGluZ0NvbnRyYWN0LCBzZXRMb2FkaW5nQ29udHJhY3RdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCB7IGRhdGE6IGNvbnRyYWN0RGF0YSB9ID0gdXNlU1dSKFwiL2NvbnRyYWN0XCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZ0NvbnRyYWN0KHRydWUpO1xuICAgICAgICBjb25zdCBycGMgPSBjb25maWcuY2hhaW5JZCA9PSAxID9cbiAgICAgICAgICAgIFwiaHR0cHM6Ly9ycGMuYW5rci5jb20vZXRoXCIgOlxuICAgICAgICAgICAgXCJodHRwczovL3JwYy5hbmtyLmNvbS9wb2x5Z29uX211bWJhaVwiO1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcihycGMpO1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29uZmlnLmNvbnRyYWN0LCBuZnRBQkksIHByb3ZpZGVyKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBhd2FpdCBjb250cmFjdC5wcmljZSgpO1xuICAgICAgICBjb25zdCBzdXBwbHkgPSAoYXdhaXQgY29udHJhY3QudG90YWxTdXBwbHkoKSkudG9OdW1iZXIoKTtcbiAgICAgICAgY29uc3Qgc2FsZUFjdGl2ZSA9IGF3YWl0IGNvbnRyYWN0LnNhbGVBY3RpdmUoKTtcbiAgICAgICAgY29uc3QgbWF4U3VwcGx5ID0gKGF3YWl0IGNvbnRyYWN0LkNPTExFQ1RJT05fU0laRSgpKS50b051bWJlcigpO1xuICAgICAgICBzZXRMb2FkaW5nQ29udHJhY3QoZmFsc2UpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICAgICAgcHJpY2VEaXNwbGF5OiBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocHJpY2UpLFxuICAgICAgICAgICAgc2FsZUFjdGl2ZTogc2FsZUFjdGl2ZSxcbiAgICAgICAgICAgIHN1cHBseSxcbiAgICAgICAgICAgIG1heFN1cHBseVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVNaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFzaWduZXIpIHRocm93IG5ldyBFcnJvcihcIk5vIHNpZ25lciBmb3VuZFwiKVxuICAgICAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbmZpZy5jb250cmFjdCwgbmZ0QUJJLCBzaWduZXIpO1xuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBhd2FpdCBjb250cmFjdC5wcmljZSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0eCA9IGF3YWl0IGNvbnRyYWN0Lm1pbnQoeyB2YWx1ZTogcHJpY2UgfSlcbiAgICAgICAgICAgIHRvYXN0LnByb21pc2UodHgud2FpdCwge1xuICAgICAgICAgICAgICAgIHBlbmRpbmc6IFwiQWRvcHRpbmcgeW91ciBhbGllblwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IFwiQWxpZW4gTWludGVkIFN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkNvdWxkbid0IGNvbXBsZXRlIHRoZSBuZWdvdGlhdGlvbiB3aXRoIHRoZSBhbGllbnNcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICAgICBpZiAobWVzc2FnZS5pbmNsdWRlcyhcIlBVQkxJQ19TQUxFX0lOQUNUSVZFXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiU2FsZSBpcyBub3QgYWN0aXZlXCJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5pbmNsdWRlcyhcIkVYQ0VFRFNfQ09MTEVDVElPTl9TSVpFXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiU29sZCBPdXRcIlxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmluY2x1ZGVzKFwiVkFMVUVfVE9PX0xPV1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkluc3VmZmljaWVudCBmdW5kc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihtZXNzYWdlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW21pbnRCdXR0b25Db250ZW50LCBzZXRNaW50QnV0dG9uQ29udGVudF0gPSBSZWFjdC51c2VTdGF0ZShcIkFkb3B0IEFsaWVuXCIpXG4gICAgY29uc3Qgc2V0QnV0dG9uQ29udGVudFJlZiA9IFJlYWN0LnVzZVJlZihzZXRNaW50QnV0dG9uQ29udGVudCk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmdDb250cmFjdClcbiAgICAgICAgICAgIHNldEJ1dHRvbkNvbnRlbnRSZWYuY3VycmVudCg8UmVhY3RMb2FkaW5nIHR5cGU9XCJzcGluXCIgaGVpZ2h0PXszMn0gd2lkdGg9ezMyfSAvPilcbiAgICAgICAgZWxzZSBpZiAoIWNvbnRyYWN0RGF0YT8uc2FsZUFjdGl2ZSkge1xuICAgICAgICAgICAgc2V0QnV0dG9uQ29udGVudFJlZi5jdXJyZW50KFwiU2FsZSBub3QgYWN0aXZlXCIpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udHJhY3REYXRhPy5zdXBwbHkgPj0gY29udHJhY3REYXRhPy5tYXhTdXBwbHkpIHtcbiAgICAgICAgICAgIHNldEJ1dHRvbkNvbnRlbnRSZWYuY3VycmVudChcIlNvbGQgT3V0XCIpXG4gICAgICAgIH0gZWxzZSBpZiAoY29udHJhY3REYXRhLnNhbGVBY3RpdmUgJiYgIXNpZ25lcikge1xuICAgICAgICAgICAgc2V0QnV0dG9uQ29udGVudFJlZi5jdXJyZW50KFwiQ29ubmVjdCBXYWxsZXRcIilcbiAgICAgICAgfSBlbHNlIGlmIChjb250cmFjdERhdGEuc2FsZUFjdGl2ZSAmJiBzaWduZXIpIHtcbiAgICAgICAgICAgIHNldEJ1dHRvbkNvbnRlbnRSZWYuY3VycmVudChcIkFkb3B0IEFsaWVuXCIpXG4gICAgICAgIH1cbiAgICB9LCBbY29udHJhY3REYXRhLCBsb2FkaW5nQ29udHJhY3RdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZXRhcG9ydGFsX2ZuX2J1dHRvbiB3YWxsZXRfb3BlbmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2lnbmVyIHx8ICFjb250cmFjdERhdGE/LnNhbGVBY3RpdmV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNaW50aW5nXCIpXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTWludCgpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAge21pbnRCdXR0b25Db250ZW50fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8cD4oe2NvbnRyYWN0RGF0YT8ucHJpY2VEaXNwbGF5IHx8ICc/Pyd9IEVUSCAvIGFkb3B0aW9uKTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibmZ0QUJJIiwiY29uZmlnIiwiZXRoZXJzIiwidXNlU2lnbmVyIiwidG9hc3QiLCJ1c2VTV1IiLCJSZWFjdExvYWRpbmciLCJNaW50QnV0dG9uIiwiZGF0YSIsInNpZ25lciIsInVzZVN0YXRlIiwibG9hZGluZ0NvbnRyYWN0Iiwic2V0TG9hZGluZ0NvbnRyYWN0IiwicnBjIiwicHJvdmlkZXIiLCJjb250cmFjdCIsInByaWNlIiwic3VwcGx5Iiwic2FsZUFjdGl2ZSIsIm1heFN1cHBseSIsImNoYWluSWQiLCJwcm92aWRlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJDb250cmFjdCIsInRvdGFsU3VwcGx5IiwidG9OdW1iZXIiLCJDT0xMRUNUSU9OX1NJWkUiLCJwcmljZURpc3BsYXkiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwiY29udHJhY3REYXRhIiwiaGFuZGxlTWludCIsInR4IiwiZSIsIm1lc3NhZ2UiLCJFcnJvciIsIm1pbnQiLCJ2YWx1ZSIsInByb21pc2UiLCJ3YWl0IiwicGVuZGluZyIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJpbmNsdWRlcyIsIm1pbnRCdXR0b25Db250ZW50Iiwic2V0TWludEJ1dHRvbkNvbnRlbnQiLCJzZXRCdXR0b25Db250ZW50UmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInR5cGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpdiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluV2lkdGgiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MintButton.js\n"));

/***/ })

});