/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const fetchDataGithub = async () => {\n  // Panggil API untuk mendapatkan data\n  const payload = document.getElementById(\"username\");\n  const username = payload.value !== \"\" ? payload.value : \"Lelianto\";\n\n  await axios\n    .get(`https://api.github.com/users/${username}`, {\n      headers: {\n        Accept: \"application/json\",\n        Authorization: \"token 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\",\n      },\n    })\n    .then((res) => {\n      if (res.status === 200) {\n        const element = document.getElementById(\"user-image\");\n        element.setAttribute(\"src\", res.data.avatar_url);\n      }\n    })\n    .catch((error) => console.log(error));\n};\ndocument.getElementById(\"getUser\").addEventListener(\"click\", fetchDataGithub);\n\nfetchDataGithub();\n\n\n//# sourceURL=webpack://myproject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;