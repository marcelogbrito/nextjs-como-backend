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
exports.id = "pages/api/sightings/create";
exports.ids = ["pages/api/sightings/create"];
exports.modules = {

/***/ "./src/pages/api/sightings/create.tsx":
/*!********************************************!*\
  !*** ./src/pages/api/sightings/create.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: ['query']\n  });\n\n  try {\n    const {\n      sighting: sightingData\n    } = req.body;\n    const sighting = await prisma.sighting.create({\n      data: {\n        latitude: sightingData.latitude,\n        longitude: sightingData.longitude\n      }\n    });\n    res.status(201);\n    res.json(sighting);\n  } catch (error) {\n    res.status(500);\n    res.json({\n      error: \"acesso ao banco de dados indisponível \" + error\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n\n  res.status(201);\n  res.json({\n    sighting: \"saved\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3NpZ2h0aW5ncy9jcmVhdGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBR0EsNkJBQWUsMENBQWVDLEdBQWYsRUFBb0NDLEdBQXBDLEVBQTBEO0FBQ3pFLFFBQU1DLE1BQU0sR0FBRyxJQUFJSCx3REFBSixDQUFpQjtBQUFDSSxJQUFBQSxHQUFHLEVBQUUsQ0FBQyxPQUFEO0FBQU4sR0FBakIsQ0FBZjs7QUFDQSxNQUFJO0FBQ0YsVUFBTTtBQUFDQyxNQUFBQSxRQUFRLEVBQUVDO0FBQVgsUUFBMkJMLEdBQUcsQ0FBQ00sSUFBckM7QUFDQSxVQUFNRixRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRSxRQUFQLENBQWdCRyxNQUFoQixDQUF1QjtBQUM1Q0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFFBQVEsRUFBRUosWUFBWSxDQUFDSSxRQURuQjtBQUVKQyxRQUFBQSxTQUFTLEVBQUVMLFlBQVksQ0FBQ0s7QUFGcEI7QUFEc0MsS0FBdkIsQ0FBdkI7QUFNQVQsSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWDtBQUNBVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBU1IsUUFBVDtBQUNELEdBVkQsQ0FVRSxPQUFPUyxLQUFQLEVBQWM7QUFDZFosSUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWDtBQUNBVixJQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBUztBQUFDQyxNQUFBQSxLQUFLLEVBQUUsMkNBQXlDQTtBQUFqRCxLQUFUO0FBQ0QsR0FiRCxTQWFVO0FBQ1IsVUFBTVgsTUFBTSxDQUFDWSxXQUFQLEVBQU47QUFDRDs7QUFDRGIsRUFBQUEsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWDtBQUNBVixFQUFBQSxHQUFHLENBQUNXLElBQUosQ0FBUztBQUFDUixJQUFBQSxRQUFRLEVBQUU7QUFBWCxHQUFUO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2RlbG8taW5pY2lhbC1uZXh0Ly4vc3JjL3BhZ2VzL2FwaS9zaWdodGluZ3MvY3JlYXRlLnRzeD9jMTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHtsb2c6IFsncXVlcnknXX0pO1xudHJ5IHtcbiAgY29uc3Qge3NpZ2h0aW5nOiBzaWdodGluZ0RhdGF9ID0gcmVxLmJvZHlcbiAgY29uc3Qgc2lnaHRpbmcgPSBhd2FpdCBwcmlzbWEuc2lnaHRpbmcuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBsYXRpdHVkZTogc2lnaHRpbmdEYXRhLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiBzaWdodGluZ0RhdGEubG9uZ2l0dWRlXG4gICAgfVxuICB9KVxuICByZXMuc3RhdHVzKDIwMSlcbiAgcmVzLmpzb24oc2lnaHRpbmcpXG59IGNhdGNoIChlcnJvcikge1xuICByZXMuc3RhdHVzKDUwMClcbiAgcmVzLmpzb24oe2Vycm9yOiBcImFjZXNzbyBhbyBiYW5jbyBkZSBkYWRvcyBpbmRpc3BvbsOtdmVsIFwiK2Vycm9yfSlcbn0gZmluYWxseSB7XG4gIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpXG59XG5yZXMuc3RhdHVzKDIwMSlcbnJlcy5qc29uKHtzaWdodGluZzogXCJzYXZlZFwifSlcbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJsb2ciLCJzaWdodGluZyIsInNpZ2h0aW5nRGF0YSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/sightings/create.tsx\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/sightings/create.tsx"));
module.exports = __webpack_exports__;

})();