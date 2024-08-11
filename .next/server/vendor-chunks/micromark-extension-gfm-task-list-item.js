"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-task-list-item";
exports.ids = ["vendor-chunks/micromark-extension-gfm-task-list-item"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemHtml: () => (/* binding */ gfmTaskListItemHtml)\n/* harmony export */ });\n/**\n * @import {HtmlExtension} from 'micromark-util-types'\n */\n\n/**\n * Create an HTML extension for `micromark` to support GFM task list items when\n * serializing to HTML.\n *\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions` to\n *   support GFM task list items when serializing to HTML.\n */\nfunction gfmTaskListItemHtml() {\n  return {\n    enter: {\n      taskListCheck() {\n        this.tag('<input type=\"checkbox\" disabled=\"\" ')\n      }\n    },\n    exit: {\n      taskListCheck() {\n        this.tag('/>')\n      },\n      taskListCheckValueChecked() {\n        this.tag('checked=\"\" ')\n      }\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9odG1sLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLFlBQVksZUFBZTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9odG1sLmpzPzFiNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaW1wb3J0IHtIdG1sRXh0ZW5zaW9ufSBmcm9tICdtaWNyb21hcmstdXRpbC10eXBlcydcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBhbiBIVE1MIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gc3VwcG9ydCBHRk0gdGFzayBsaXN0IGl0ZW1zIHdoZW5cbiAqIHNlcmlhbGl6aW5nIHRvIEhUTUwuXG4gKlxuICogQHJldHVybnMge0h0bWxFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBodG1sRXh0ZW5zaW9uc2AgdG9cbiAqICAgc3VwcG9ydCBHRk0gdGFzayBsaXN0IGl0ZW1zIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVRhc2tMaXN0SXRlbUh0bWwoKSB7XG4gIHJldHVybiB7XG4gICAgZW50ZXI6IHtcbiAgICAgIHRhc2tMaXN0Q2hlY2soKSB7XG4gICAgICAgIHRoaXMudGFnKCc8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGlzYWJsZWQ9XCJcIiAnKVxuICAgICAgfVxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgdGFza0xpc3RDaGVjaygpIHtcbiAgICAgICAgdGhpcy50YWcoJy8+JylcbiAgICAgIH0sXG4gICAgICB0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkKCkge1xuICAgICAgICB0aGlzLnRhZygnY2hlY2tlZD1cIlwiICcpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItem: () => (/* binding */ gfmTaskListItem)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(rsc)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/**\n * @import {Extension, State, TokenizeContext, Tokenizer} from 'micromark-util-types'\n */\n\n\n\n\n\n\nconst tasklistCheck = {name: 'tasklistCheck', tokenize: tokenizeTasklistCheck}\n\n/**\n * Create an HTML extension for `micromark` to support GFM task list items\n * syntax.\n *\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `htmlExtensions` to\n *   support GFM task list items when serializing to HTML.\n */\nfunction gfmTaskListItem() {\n  return {\n    text: {[micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftSquareBracket]: tasklistCheck}\n  }\n}\n\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */\nfunction tokenizeTasklistCheck(effects, ok, nok) {\n  const self = this\n\n  return open\n\n  /**\n   * At start of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */\n  function open(code) {\n    ;(0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftSquareBracket, 'expected `[`')\n\n    if (\n      // Exit if there’s stuff before.\n      self.previous !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ||\n      // Exit if not in the first content that is the first child of a list\n      // item.\n      !self._gfmTasklistFirstContentOfListItem\n    ) {\n      return nok(code)\n    }\n\n    effects.enter('taskListCheck')\n    effects.enter('taskListCheckMarker')\n    effects.consume(code)\n    effects.exit('taskListCheckMarker')\n    return inside\n  }\n\n  /**\n   * In task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */\n  function inside(code) {\n    // Currently we match how GH works in files.\n    // To match how GH works in comments, use `markdownSpace` (`[\\t ]`) instead\n    // of `markdownLineEndingOrSpace` (`[\\t\\n\\r ]`).\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEndingOrSpace)(code)) {\n      effects.enter('taskListCheckValueUnchecked')\n      effects.consume(code)\n      effects.exit('taskListCheckValueUnchecked')\n      return close\n    }\n\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX) {\n      effects.enter('taskListCheckValueChecked')\n      effects.consume(code)\n      effects.exit('taskListCheckValueChecked')\n      return close\n    }\n\n    return nok(code)\n  }\n\n  /**\n   * At close of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *         ^\n   * ```\n   *\n   * @type {State}\n   */\n  function close(code) {\n    if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightSquareBracket) {\n      effects.enter('taskListCheckMarker')\n      effects.consume(code)\n      effects.exit('taskListCheckMarker')\n      effects.exit('taskListCheck')\n      return after\n    }\n\n    return nok(code)\n  }\n\n  /**\n   * @type {State}\n   */\n  function after(code) {\n    // EOL in paragraph means there must be something else after it.\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code)) {\n      return ok(code)\n    }\n\n    // Space or tab?\n    // Check what comes after.\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownSpace)(code)) {\n      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)(code)\n    }\n\n    // EOF, or non-whitespace, both wrong.\n    return nok(code)\n  }\n}\n\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */\nfunction spaceThenNonSpace(effects, ok, nok) {\n  return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, after, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.whitespace)\n\n  /**\n   * After whitespace, after task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *           ^\n   * ```\n   *\n   * @type {State}\n   */\n  function after(code) {\n    // EOF means there was nothing, so bad.\n    // EOL means there’s content after it, so good.\n    // Impossible to have more spaces.\n    // Anything else is good.\n    return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ? nok(code) : ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9zeW50YXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLDhDQUE4QztBQUMxRDs7QUFFbUM7QUFDaUI7QUFLbkI7QUFDaUI7O0FBRWxELHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFdBQVcsQ0FBQyx3REFBSztBQUNqQjtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsSUFBSSwyQ0FBTSxVQUFVLHdEQUFLOztBQUV6QjtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRkFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsd0RBQUssd0JBQXdCLHdEQUFLO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBa0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1RUFBYTtBQUNyQiw0QkFBNEIsNEJBQTRCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBO0FBQ0EsU0FBUyxxRUFBWSxpQkFBaUIsd0RBQUs7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFLO0FBQ3pCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtL2Rldi9saWIvc3ludGF4LmpzP2JlMjQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaW1wb3J0IHtFeHRlbnNpb24sIFN0YXRlLCBUb2tlbml6ZUNvbnRleHQsIFRva2VuaXplcn0gZnJvbSAnbWljcm9tYXJrLXV0aWwtdHlwZXMnXG4gKi9cblxuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcbmltcG9ydCB7ZmFjdG9yeVNwYWNlfSBmcm9tICdtaWNyb21hcmstZmFjdG9yeS1zcGFjZSdcbmltcG9ydCB7XG4gIG1hcmtkb3duTGluZUVuZGluZyxcbiAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSxcbiAgbWFya2Rvd25TcGFjZVxufSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5pbXBvcnQge2NvZGVzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG5jb25zdCB0YXNrbGlzdENoZWNrID0ge25hbWU6ICd0YXNrbGlzdENoZWNrJywgdG9rZW5pemU6IHRva2VuaXplVGFza2xpc3RDaGVja31cblxuLyoqXG4gKiBDcmVhdGUgYW4gSFRNTCBleHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRvIHN1cHBvcnQgR0ZNIHRhc2sgbGlzdCBpdGVtc1xuICogc3ludGF4LlxuICpcbiAqIEByZXR1cm5zIHtFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBodG1sRXh0ZW5zaW9uc2AgdG9cbiAqICAgc3VwcG9ydCBHRk0gdGFzayBsaXN0IGl0ZW1zIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVRhc2tMaXN0SXRlbSgpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiB7W2NvZGVzLmxlZnRTcXVhcmVCcmFja2V0XTogdGFza2xpc3RDaGVja31cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZVRhc2tsaXN0Q2hlY2soZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBvcGVuXG5cbiAgLyoqXG4gICAqIEF0IHN0YXJ0IG9mIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0LCAnZXhwZWN0ZWQgYFtgJylcblxuICAgIGlmIChcbiAgICAgIC8vIEV4aXQgaWYgdGhlcmXigJlzIHN0dWZmIGJlZm9yZS5cbiAgICAgIHNlbGYucHJldmlvdXMgIT09IGNvZGVzLmVvZiB8fFxuICAgICAgLy8gRXhpdCBpZiBub3QgaW4gdGhlIGZpcnN0IGNvbnRlbnQgdGhhdCBpcyB0aGUgZmlyc3QgY2hpbGQgb2YgYSBsaXN0XG4gICAgICAvLyBpdGVtLlxuICAgICAgIXNlbGYuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgcmV0dXJuIGluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgLy8gQ3VycmVudGx5IHdlIG1hdGNoIGhvdyBHSCB3b3JrcyBpbiBmaWxlcy5cbiAgICAvLyBUbyBtYXRjaCBob3cgR0ggd29ya3MgaW4gY29tbWVudHMsIHVzZSBgbWFya2Rvd25TcGFjZWAgKGBbXFx0IF1gKSBpbnN0ZWFkXG4gICAgLy8gb2YgYG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2VgIChgW1xcdFxcblxcciBdYCkuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZVVuY2hlY2tlZCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkJylcbiAgICAgIHJldHVybiBjbG9zZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBjb2Rlcy51cHBlcmNhc2VYIHx8IGNvZGUgPT09IGNvZGVzLmxvd2VyY2FzZVgpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnKVxuICAgICAgcmV0dXJuIGNsb3NlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IGNsb3NlIG9mIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBFT0wgaW4gcGFyYWdyYXBoIG1lYW5zIHRoZXJlIG11c3QgYmUgc29tZXRoaW5nIGVsc2UgYWZ0ZXIgaXQuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gU3BhY2Ugb3IgdGFiP1xuICAgIC8vIENoZWNrIHdoYXQgY29tZXMgYWZ0ZXIuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHt0b2tlbml6ZTogc3BhY2VUaGVuTm9uU3BhY2V9LCBvaywgbm9rKShjb2RlKVxuICAgIH1cblxuICAgIC8vIEVPRiwgb3Igbm9uLXdoaXRlc3BhY2UsIGJvdGggd3JvbmcuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHNwYWNlVGhlbk5vblNwYWNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlciwgdHlwZXMud2hpdGVzcGFjZSlcblxuICAvKipcbiAgICogQWZ0ZXIgd2hpdGVzcGFjZSwgYWZ0ZXIgdGFzayBsaXN0IGl0ZW0gY2hlY2suXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqIFt4XSB5LlxuICAgKiAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8vIEVPRiBtZWFucyB0aGVyZSB3YXMgbm90aGluZywgc28gYmFkLlxuICAgIC8vIEVPTCBtZWFucyB0aGVyZeKAmXMgY29udGVudCBhZnRlciBpdCwgc28gZ29vZC5cbiAgICAvLyBJbXBvc3NpYmxlIHRvIGhhdmUgbW9yZSBzcGFjZXMuXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpcyBnb29kLlxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5lb2YgPyBub2soY29kZSkgOiBvayhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js\n");

/***/ })

};
;