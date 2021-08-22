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
exports.id = "pages/api/sightings";
exports.ids = ["pages/api/sightings"];
exports.modules = {

/***/ "./src/pages/api/sightings/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/api/sightings/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  try {\n    const sightings = await prisma.sighting.findMany();\n    res.status(200);\n    res.json({\n      sightings\n    });\n  } catch (error) {\n    res.status(500);\n    res.json({\n      error: \"Não foi possivel recuperar os dados\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3NpZ2h0aW5ncy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQSw2QkFBZSwwQ0FBZUMsR0FBZixFQUFvQ0MsR0FBcEMsRUFBMEQ7QUFFdkUsUUFBTUMsTUFBTSxHQUFHLElBQUlILHdEQUFKLENBQWlCO0FBQUNJLElBQUFBLEdBQUcsRUFBQyxDQUFDLE9BQUQ7QUFBTCxHQUFqQixDQUFmOztBQUVBLE1BQUk7QUFDRixVQUFNQyxTQUFTLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxRQUFQLENBQWdCQyxRQUFoQixFQUF4QjtBQUNBTCxJQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBVyxHQUFYO0FBQ0FOLElBQUFBLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUNKLE1BQUFBO0FBQUQsS0FBVDtBQUVELEdBTEQsQ0FLRSxPQUFPSyxLQUFQLEVBQWM7QUFDZFIsSUFBQUEsR0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWDtBQUNBTixJQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBUztBQUFDQyxNQUFBQSxLQUFLLEVBQUM7QUFBUCxLQUFUO0FBRUQsR0FURCxTQVVRO0FBQ04sVUFBTVAsTUFBTSxDQUFDUSxXQUFQLEVBQU47QUFDRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9kZWxvLWluaWNpYWwtbmV4dC8uL3NyYy9wYWdlcy9hcGkvc2lnaHRpbmdzL2luZGV4LnRzeD84NTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG5cbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7bG9nOlsncXVlcnknXX0pXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzaWdodGluZ3MgPSBhd2FpdCBwcmlzbWEuc2lnaHRpbmcuZmluZE1hbnkoKVxuICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgIHJlcy5qc29uKHtzaWdodGluZ3N9KVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApXG4gICAgcmVzLmpzb24oe2Vycm9yOlwiTsOjbyBmb2kgcG9zc2l2ZWwgcmVjdXBlcmFyIG9zIGRhZG9zXCJ9KVxuXG4gIH1cbiAgZmluYWxseSB7XG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsInNpZ2h0aW5ncyIsInNpZ2h0aW5nIiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/sightings/index.tsx\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/sightings/index.tsx"));
module.exports = __webpack_exports__;

})();