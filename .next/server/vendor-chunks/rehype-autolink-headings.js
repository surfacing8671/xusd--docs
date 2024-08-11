"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rehype-autolink-headings";
exports.ids = ["vendor-chunks/rehype-autolink-headings"];
exports.modules = {

/***/ "(rsc)/./node_modules/rehype-autolink-headings/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/rehype-autolink-headings/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rehypeAutolinkHeadings)\n/* harmony export */ });\n/* harmony import */ var _ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/structured-clone */ \"(rsc)/./node_modules/@ungap/structured-clone/esm/index.js\");\n/* harmony import */ var hast_util_heading_rank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hast-util-heading-rank */ \"(rsc)/./node_modules/hast-util-heading-rank/lib/index.js\");\n/* harmony import */ var hast_util_is_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-is-element */ \"(rsc)/./node_modules/hast-util-is-element/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit/lib/index.js\");\n/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unist-util-visit */ \"(rsc)/./node_modules/unist-util-visit-parents/lib/index.js\");\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').ElementContent} ElementContent\n * @typedef {import('hast').Properties} Properties\n * @typedef {import('hast').Root} Root\n *\n * @typedef {import('hast-util-is-element').Test} Test\n */\n\n/**\n * @typedef {'after' | 'append' | 'before' | 'prepend' | 'wrap'} Behavior\n *   Behavior.\n *\n * @callback Build\n *   Generate content.\n * @param {Readonly<Element>} element\n *   Current heading.\n * @returns {Array<ElementContent> | ElementContent}\n *   Content.\n *\n * @callback BuildProperties\n *   Generate properties.\n * @param {Readonly<Element>} element\n *   Current heading.\n * @returns {Properties}\n *   Properties.\n *\n * @typedef Options\n *   Configuration.\n * @property {Behavior | null | undefined} [behavior='prepend']\n *   How to create links (default: `'prepend'`).\n * @property {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build | null | undefined} [content]\n *   Content to insert in the link (default: if `'wrap'` then `undefined`,\n *   otherwise `<span class=\"icon icon-link\"></span>`);\n *   if `behavior` is `'wrap'` and `Build` is passed, its result replaces the\n *   existing content, otherwise the content is added after existing content.\n * @property {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build | null | undefined} [group]\n *   Content to wrap the heading and link with, if `behavior` is `'after'` or\n *   `'before'` (optional).\n * @property {Readonly<Properties> | BuildProperties | null | undefined} [headingProperties]\n *   Extra properties to set on the heading (optional).\n * @property {Readonly<Properties> | BuildProperties | null | undefined} [properties]\n *   Extra properties to set on the link when injecting (default:\n *   `{ariaHidden: true, tabIndex: -1}` if `'append'` or `'prepend'`, otherwise\n *   `undefined`).\n * @property {Test | null | undefined} [test]\n *   Extra test for which headings are linked (optional).\n */\n\n/**\n * @template T\n *   Kind.\n * @typedef {(\n *   T extends Record<any, any>\n *     ? {-readonly [k in keyof T]: Cloneable<T[k]>}\n *     : T\n * )} Cloneable\n *   Deep clone.\n *\n *   See: <https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1237#issuecomment-1345515448>\n */\n\n\n\n\n\n\n/** @type {Element} */\nconst contentDefaults = {\n  type: 'element',\n  tagName: 'span',\n  properties: {className: ['icon', 'icon-link']},\n  children: []\n}\n\n/** @type {Options} */\nconst emptyOptions = {}\n\n/**\n * Add links from headings back to themselves.\n *\n * ###### Notes\n *\n * This plugin only applies to headings with `id`s.\n * Use `rehype-slug` to generate `id`s for headings that don’t have them.\n *\n * Several behaviors are supported:\n *\n * *   `'prepend'` (default) — inject link before the heading text\n * *   `'append'` — inject link after the heading text\n * *   `'wrap'` — wrap the whole heading text with the link\n * *   `'before'` — insert link before the heading\n * *   `'after'` — insert link after the heading\n *\n * @param {Readonly<Options> | null | undefined} [options]\n *   Configuration (optional).\n * @returns\n *   Transform.\n */\nfunction rehypeAutolinkHeadings(options) {\n  const settings = options || emptyOptions\n  let properties = settings.properties\n  const headingOroperties = settings.headingProperties\n  const behavior = settings.behavior || 'prepend'\n  const content = settings.content\n  const group = settings.group\n  const is = (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_1__.convertElement)(settings.test)\n\n  /** @type {import('unist-util-visit').Visitor<Element>} */\n  let method\n\n  if (behavior === 'after' || behavior === 'before') {\n    method = around\n  } else if (behavior === 'wrap') {\n    method = wrap\n  } else {\n    method = inject\n\n    if (!properties) {\n      properties = {ariaHidden: 'true', tabIndex: -1}\n    }\n  }\n\n  /**\n   * Transform.\n   *\n   * @param {Root} tree\n   *   Tree.\n   * @returns {undefined}\n   *   Nothing.\n   */\n  return function (tree) {\n    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_2__.visit)(tree, 'element', function (node, index, parent) {\n      if ((0,hast_util_heading_rank__WEBPACK_IMPORTED_MODULE_3__.headingRank)(node) && node.properties.id && is(node, index, parent)) {\n        Object.assign(node.properties, toProperties(headingOroperties, node))\n        return method(node, index, parent)\n      }\n    })\n  }\n\n  /** @type {import('unist-util-visit').Visitor<Element>} */\n  function inject(node) {\n    const children = toChildren(content || contentDefaults, node)\n    node.children[behavior === 'prepend' ? 'unshift' : 'push'](\n      create(node, toProperties(properties, node), children)\n    )\n\n    return [unist_util_visit__WEBPACK_IMPORTED_MODULE_4__.SKIP]\n  }\n\n  /** @type {import('unist-util-visit').Visitor<Element>} */\n  function around(node, index, parent) {\n    /* c8 ignore next -- uncommon */\n    if (typeof index !== 'number' || !parent) return\n\n    const children = toChildren(content || contentDefaults, node)\n    const link = create(node, toProperties(properties, node), children)\n    let nodes = behavior === 'before' ? [link, node] : [node, link]\n\n    if (group) {\n      const grouping = toNode(group, node)\n\n      if (grouping && !Array.isArray(grouping) && grouping.type === 'element') {\n        grouping.children = nodes\n        nodes = [grouping]\n      }\n    }\n\n    parent.children.splice(index, 1, ...nodes)\n\n    return [unist_util_visit__WEBPACK_IMPORTED_MODULE_4__.SKIP, index + nodes.length]\n  }\n\n  /** @type {import('unist-util-visit').Visitor<Element>} */\n  function wrap(node) {\n    /** @type {Array<ElementContent>} */\n    let before = node.children\n    /** @type {Array<ElementContent> | ElementContent} */\n    let after = []\n\n    if (typeof content === 'function') {\n      before = []\n      after = content(node)\n    } else if (content) {\n      after = clone(content)\n    }\n\n    node.children = [\n      create(\n        node,\n        toProperties(properties, node),\n        Array.isArray(after) ? [...before, ...after] : [...before, after]\n      )\n    ]\n\n    return [unist_util_visit__WEBPACK_IMPORTED_MODULE_4__.SKIP]\n  }\n}\n\n/**\n * Deep clone.\n *\n * @template T\n *   Kind.\n * @param {T} thing\n *   Thing to clone.\n * @returns {Cloneable<T>}\n *   Cloned thing.\n */\nfunction clone(thing) {\n  // Cast because it’s mutable now.\n  return /** @type {Cloneable<T>} */ ((0,_ungap_structured_clone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(thing))\n}\n\n/**\n * Create an `a`.\n *\n * @param {Readonly<Element>} node\n *   Related heading.\n * @param {Properties | undefined} properties\n *   Properties to set on the link.\n * @param {Array<ElementContent>} children\n *   Content.\n * @returns {Element}\n *   Link.\n */\nfunction create(node, properties, children) {\n  return {\n    type: 'element',\n    tagName: 'a',\n    properties: {...properties, href: '#' + node.properties.id},\n    children\n  }\n}\n\n/**\n * Turn into children.\n *\n * @param {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build} value\n *   Content.\n * @param {Readonly<Element>} node\n *   Related heading.\n * @returns {Array<ElementContent>}\n *   Children.\n */\nfunction toChildren(value, node) {\n  const result = toNode(value, node)\n  return Array.isArray(result) ? result : [result]\n}\n\n/**\n * Turn into a node.\n *\n * @param {Readonly<ElementContent> | ReadonlyArray<ElementContent> | Build} value\n *   Content.\n * @param {Readonly<Element>} node\n *   Related heading.\n * @returns {Array<ElementContent> | ElementContent}\n *   Node.\n */\nfunction toNode(value, node) {\n  if (typeof value === 'function') return value(node)\n  return clone(value)\n}\n\n/**\n * Turn into properties.\n *\n * @param {Readonly<Properties> | BuildProperties | null | undefined} value\n *   Properties.\n * @param {Readonly<Element>} node\n *   Related heading.\n * @returns {Properties}\n *   Properties.\n */\nfunction toProperties(value, node) {\n  if (typeof value === 'function') return value(node)\n  return value ? clone(value) : {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVoeXBlLWF1dG9saW5rLWhlYWRpbmdzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsK0JBQStCO0FBQzVDLGFBQWEsMkJBQTJCO0FBQ3hDLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQ7O0FBRUE7QUFDQSxhQUFhLG9EQUFvRDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZCQUE2QjtBQUMzQztBQUNBLGNBQWMscUZBQXFGO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxRkFBcUY7QUFDbkc7QUFDQTtBQUNBLGNBQWMsMkRBQTJEO0FBQ3pFO0FBQ0EsY0FBYywyREFBMkQ7QUFDekU7QUFDQSxPQUFPLCtCQUErQjtBQUN0QztBQUNBLGNBQWMseUJBQXlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDtBQUNIO0FBQ0M7QUFDUDs7QUFFNUMsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUNBQWlDO0FBQ2hEO0FBQ0E7O0FBRUEsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBc0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWM7O0FBRTNCLGFBQWEsNkNBQTZDO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBSztBQUNULFVBQVUsbUVBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGFBQWEsNkNBQTZDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrREFBSTtBQUNoQjs7QUFFQSxhQUFhLDZDQUE2QztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZLGtEQUFJO0FBQ2hCOztBQUVBLGFBQWEsNkNBQTZDO0FBQzFEO0FBQ0EsZUFBZSx1QkFBdUI7QUFDdEM7QUFDQSxlQUFlLHdDQUF3QztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtEQUFJO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWMsSUFBSSxtRUFBZTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLFdBQVcsd0JBQXdCO0FBQ25DO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUE4QztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrRUFBa0U7QUFDN0U7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrRUFBa0U7QUFDN0U7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywyREFBMkQ7QUFDdEU7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlaHlwZS1hdXRvbGluay1oZWFkaW5ncy9saWIvaW5kZXguanM/MzI3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudENvbnRlbnR9IEVsZW1lbnRDb250ZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUHJvcGVydGllc30gUHJvcGVydGllc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0LXV0aWwtaXMtZWxlbWVudCcpLlRlc3R9IFRlc3RcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsnYWZ0ZXInIHwgJ2FwcGVuZCcgfCAnYmVmb3JlJyB8ICdwcmVwZW5kJyB8ICd3cmFwJ30gQmVoYXZpb3JcbiAqICAgQmVoYXZpb3IuXG4gKlxuICogQGNhbGxiYWNrIEJ1aWxkXG4gKiAgIEdlbmVyYXRlIGNvbnRlbnQuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PEVsZW1lbnQ+fSBlbGVtZW50XG4gKiAgIEN1cnJlbnQgaGVhZGluZy5cbiAqIEByZXR1cm5zIHtBcnJheTxFbGVtZW50Q29udGVudD4gfCBFbGVtZW50Q29udGVudH1cbiAqICAgQ29udGVudC5cbiAqXG4gKiBAY2FsbGJhY2sgQnVpbGRQcm9wZXJ0aWVzXG4gKiAgIEdlbmVyYXRlIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge1JlYWRvbmx5PEVsZW1lbnQ+fSBlbGVtZW50XG4gKiAgIEN1cnJlbnQgaGVhZGluZy5cbiAqIEByZXR1cm5zIHtQcm9wZXJ0aWVzfVxuICogICBQcm9wZXJ0aWVzLlxuICpcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7QmVoYXZpb3IgfCBudWxsIHwgdW5kZWZpbmVkfSBbYmVoYXZpb3I9J3ByZXBlbmQnXVxuICogICBIb3cgdG8gY3JlYXRlIGxpbmtzIChkZWZhdWx0OiBgJ3ByZXBlbmQnYCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PEVsZW1lbnRDb250ZW50PiB8IFJlYWRvbmx5QXJyYXk8RWxlbWVudENvbnRlbnQ+IHwgQnVpbGQgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29udGVudF1cbiAqICAgQ29udGVudCB0byBpbnNlcnQgaW4gdGhlIGxpbmsgKGRlZmF1bHQ6IGlmIGAnd3JhcCdgIHRoZW4gYHVuZGVmaW5lZGAsXG4gKiAgIG90aGVyd2lzZSBgPHNwYW4gY2xhc3M9XCJpY29uIGljb24tbGlua1wiPjwvc3Bhbj5gKTtcbiAqICAgaWYgYGJlaGF2aW9yYCBpcyBgJ3dyYXAnYCBhbmQgYEJ1aWxkYCBpcyBwYXNzZWQsIGl0cyByZXN1bHQgcmVwbGFjZXMgdGhlXG4gKiAgIGV4aXN0aW5nIGNvbnRlbnQsIG90aGVyd2lzZSB0aGUgY29udGVudCBpcyBhZGRlZCBhZnRlciBleGlzdGluZyBjb250ZW50LlxuICogQHByb3BlcnR5IHtSZWFkb25seTxFbGVtZW50Q29udGVudD4gfCBSZWFkb25seUFycmF5PEVsZW1lbnRDb250ZW50PiB8IEJ1aWxkIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2dyb3VwXVxuICogICBDb250ZW50IHRvIHdyYXAgdGhlIGhlYWRpbmcgYW5kIGxpbmsgd2l0aCwgaWYgYGJlaGF2aW9yYCBpcyBgJ2FmdGVyJ2Agb3JcbiAqICAgYCdiZWZvcmUnYCAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxQcm9wZXJ0aWVzPiB8IEJ1aWxkUHJvcGVydGllcyB8IG51bGwgfCB1bmRlZmluZWR9IFtoZWFkaW5nUHJvcGVydGllc11cbiAqICAgRXh0cmEgcHJvcGVydGllcyB0byBzZXQgb24gdGhlIGhlYWRpbmcgKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8UHJvcGVydGllcz4gfCBCdWlsZFByb3BlcnRpZXMgfCBudWxsIHwgdW5kZWZpbmVkfSBbcHJvcGVydGllc11cbiAqICAgRXh0cmEgcHJvcGVydGllcyB0byBzZXQgb24gdGhlIGxpbmsgd2hlbiBpbmplY3RpbmcgKGRlZmF1bHQ6XG4gKiAgIGB7YXJpYUhpZGRlbjogdHJ1ZSwgdGFiSW5kZXg6IC0xfWAgaWYgYCdhcHBlbmQnYCBvciBgJ3ByZXBlbmQnYCwgb3RoZXJ3aXNlXG4gKiAgIGB1bmRlZmluZWRgKS5cbiAqIEBwcm9wZXJ0eSB7VGVzdCB8IG51bGwgfCB1bmRlZmluZWR9IFt0ZXN0XVxuICogICBFeHRyYSB0ZXN0IGZvciB3aGljaCBoZWFkaW5ncyBhcmUgbGlua2VkIChvcHRpb25hbCkuXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICogICBLaW5kLlxuICogQHR5cGVkZWYgeyhcbiAqICAgVCBleHRlbmRzIFJlY29yZDxhbnksIGFueT5cbiAqICAgICA/IHstcmVhZG9ubHkgW2sgaW4ga2V5b2YgVF06IENsb25lYWJsZTxUW2tdPn1cbiAqICAgICA6IFRcbiAqICl9IENsb25lYWJsZVxuICogICBEZWVwIGNsb25lLlxuICpcbiAqICAgU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0LURPTS1saWItZ2VuZXJhdG9yL2lzc3Vlcy8xMjM3I2lzc3VlY29tbWVudC0xMzQ1NTE1NDQ4PlxuICovXG5cbmltcG9ydCBzdHJ1Y3R1cmVkQ2xvbmUgZnJvbSAnQHVuZ2FwL3N0cnVjdHVyZWQtY2xvbmUnXG5pbXBvcnQge2hlYWRpbmdSYW5rfSBmcm9tICdoYXN0LXV0aWwtaGVhZGluZy1yYW5rJ1xuaW1wb3J0IHtjb252ZXJ0RWxlbWVudH0gZnJvbSAnaGFzdC11dGlsLWlzLWVsZW1lbnQnXG5pbXBvcnQge1NLSVAsIHZpc2l0fSBmcm9tICd1bmlzdC11dGlsLXZpc2l0J1xuXG4vKiogQHR5cGUge0VsZW1lbnR9ICovXG5jb25zdCBjb250ZW50RGVmYXVsdHMgPSB7XG4gIHR5cGU6ICdlbGVtZW50JyxcbiAgdGFnTmFtZTogJ3NwYW4nLFxuICBwcm9wZXJ0aWVzOiB7Y2xhc3NOYW1lOiBbJ2ljb24nLCAnaWNvbi1saW5rJ119LFxuICBjaGlsZHJlbjogW11cbn1cblxuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuY29uc3QgZW1wdHlPcHRpb25zID0ge31cblxuLyoqXG4gKiBBZGQgbGlua3MgZnJvbSBoZWFkaW5ncyBiYWNrIHRvIHRoZW1zZWx2ZXMuXG4gKlxuICogIyMjIyMjIE5vdGVzXG4gKlxuICogVGhpcyBwbHVnaW4gb25seSBhcHBsaWVzIHRvIGhlYWRpbmdzIHdpdGggYGlkYHMuXG4gKiBVc2UgYHJlaHlwZS1zbHVnYCB0byBnZW5lcmF0ZSBgaWRgcyBmb3IgaGVhZGluZ3MgdGhhdCBkb27igJl0IGhhdmUgdGhlbS5cbiAqXG4gKiBTZXZlcmFsIGJlaGF2aW9ycyBhcmUgc3VwcG9ydGVkOlxuICpcbiAqICogICBgJ3ByZXBlbmQnYCAoZGVmYXVsdCkg4oCUIGluamVjdCBsaW5rIGJlZm9yZSB0aGUgaGVhZGluZyB0ZXh0XG4gKiAqICAgYCdhcHBlbmQnYCDigJQgaW5qZWN0IGxpbmsgYWZ0ZXIgdGhlIGhlYWRpbmcgdGV4dFxuICogKiAgIGAnd3JhcCdgIOKAlCB3cmFwIHRoZSB3aG9sZSBoZWFkaW5nIHRleHQgd2l0aCB0aGUgbGlua1xuICogKiAgIGAnYmVmb3JlJ2Ag4oCUIGluc2VydCBsaW5rIGJlZm9yZSB0aGUgaGVhZGluZ1xuICogKiAgIGAnYWZ0ZXInYCDigJQgaW5zZXJ0IGxpbmsgYWZ0ZXIgdGhlIGhlYWRpbmdcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zXG4gKiAgIFRyYW5zZm9ybS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVoeXBlQXV0b2xpbmtIZWFkaW5ncyhvcHRpb25zKSB7XG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCBlbXB0eU9wdGlvbnNcbiAgbGV0IHByb3BlcnRpZXMgPSBzZXR0aW5ncy5wcm9wZXJ0aWVzXG4gIGNvbnN0IGhlYWRpbmdPcm9wZXJ0aWVzID0gc2V0dGluZ3MuaGVhZGluZ1Byb3BlcnRpZXNcbiAgY29uc3QgYmVoYXZpb3IgPSBzZXR0aW5ncy5iZWhhdmlvciB8fCAncHJlcGVuZCdcbiAgY29uc3QgY29udGVudCA9IHNldHRpbmdzLmNvbnRlbnRcbiAgY29uc3QgZ3JvdXAgPSBzZXR0aW5ncy5ncm91cFxuICBjb25zdCBpcyA9IGNvbnZlcnRFbGVtZW50KHNldHRpbmdzLnRlc3QpXG5cbiAgLyoqIEB0eXBlIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQnKS5WaXNpdG9yPEVsZW1lbnQ+fSAqL1xuICBsZXQgbWV0aG9kXG5cbiAgaWYgKGJlaGF2aW9yID09PSAnYWZ0ZXInIHx8IGJlaGF2aW9yID09PSAnYmVmb3JlJykge1xuICAgIG1ldGhvZCA9IGFyb3VuZFxuICB9IGVsc2UgaWYgKGJlaGF2aW9yID09PSAnd3JhcCcpIHtcbiAgICBtZXRob2QgPSB3cmFwXG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kID0gaW5qZWN0XG5cbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHByb3BlcnRpZXMgPSB7YXJpYUhpZGRlbjogJ3RydWUnLCB0YWJJbmRleDogLTF9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHtSb290fSB0cmVlXG4gICAqICAgVHJlZS5cbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICogICBOb3RoaW5nLlxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmVlKSB7XG4gICAgdmlzaXQodHJlZSwgJ2VsZW1lbnQnLCBmdW5jdGlvbiAobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgICAgaWYgKGhlYWRpbmdSYW5rKG5vZGUpICYmIG5vZGUucHJvcGVydGllcy5pZCAmJiBpcyhub2RlLCBpbmRleCwgcGFyZW50KSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKG5vZGUucHJvcGVydGllcywgdG9Qcm9wZXJ0aWVzKGhlYWRpbmdPcm9wZXJ0aWVzLCBub2RlKSlcbiAgICAgICAgcmV0dXJuIG1ldGhvZChub2RlLCBpbmRleCwgcGFyZW50KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdCcpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGZ1bmN0aW9uIGluamVjdChub2RlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0b0NoaWxkcmVuKGNvbnRlbnQgfHwgY29udGVudERlZmF1bHRzLCBub2RlKVxuICAgIG5vZGUuY2hpbGRyZW5bYmVoYXZpb3IgPT09ICdwcmVwZW5kJyA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oXG4gICAgICBjcmVhdGUobm9kZSwgdG9Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIG5vZGUpLCBjaGlsZHJlbilcbiAgICApXG5cbiAgICByZXR1cm4gW1NLSVBdXG4gIH1cblxuICAvKiogQHR5cGUge2ltcG9ydCgndW5pc3QtdXRpbC12aXNpdCcpLlZpc2l0b3I8RWxlbWVudD59ICovXG4gIGZ1bmN0aW9uIGFyb3VuZChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgLyogYzggaWdub3JlIG5leHQgLS0gdW5jb21tb24gKi9cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyB8fCAhcGFyZW50KSByZXR1cm5cblxuICAgIGNvbnN0IGNoaWxkcmVuID0gdG9DaGlsZHJlbihjb250ZW50IHx8IGNvbnRlbnREZWZhdWx0cywgbm9kZSlcbiAgICBjb25zdCBsaW5rID0gY3JlYXRlKG5vZGUsIHRvUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBub2RlKSwgY2hpbGRyZW4pXG4gICAgbGV0IG5vZGVzID0gYmVoYXZpb3IgPT09ICdiZWZvcmUnID8gW2xpbmssIG5vZGVdIDogW25vZGUsIGxpbmtdXG5cbiAgICBpZiAoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGdyb3VwaW5nID0gdG9Ob2RlKGdyb3VwLCBub2RlKVxuXG4gICAgICBpZiAoZ3JvdXBpbmcgJiYgIUFycmF5LmlzQXJyYXkoZ3JvdXBpbmcpICYmIGdyb3VwaW5nLnR5cGUgPT09ICdlbGVtZW50Jykge1xuICAgICAgICBncm91cGluZy5jaGlsZHJlbiA9IG5vZGVzXG4gICAgICAgIG5vZGVzID0gW2dyb3VwaW5nXVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIC4uLm5vZGVzKVxuXG4gICAgcmV0dXJuIFtTS0lQLCBpbmRleCArIG5vZGVzLmxlbmd0aF1cbiAgfVxuXG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlzdC11dGlsLXZpc2l0JykuVmlzaXRvcjxFbGVtZW50Pn0gKi9cbiAgZnVuY3Rpb24gd3JhcChub2RlKSB7XG4gICAgLyoqIEB0eXBlIHtBcnJheTxFbGVtZW50Q29udGVudD59ICovXG4gICAgbGV0IGJlZm9yZSA9IG5vZGUuY2hpbGRyZW5cbiAgICAvKiogQHR5cGUge0FycmF5PEVsZW1lbnRDb250ZW50PiB8IEVsZW1lbnRDb250ZW50fSAqL1xuICAgIGxldCBhZnRlciA9IFtdXG5cbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJlZm9yZSA9IFtdXG4gICAgICBhZnRlciA9IGNvbnRlbnQobm9kZSlcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGFmdGVyID0gY2xvbmUoY29udGVudClcbiAgICB9XG5cbiAgICBub2RlLmNoaWxkcmVuID0gW1xuICAgICAgY3JlYXRlKFxuICAgICAgICBub2RlLFxuICAgICAgICB0b1Byb3BlcnRpZXMocHJvcGVydGllcywgbm9kZSksXG4gICAgICAgIEFycmF5LmlzQXJyYXkoYWZ0ZXIpID8gWy4uLmJlZm9yZSwgLi4uYWZ0ZXJdIDogWy4uLmJlZm9yZSwgYWZ0ZXJdXG4gICAgICApXG4gICAgXVxuXG4gICAgcmV0dXJuIFtTS0lQXVxuICB9XG59XG5cbi8qKlxuICogRGVlcCBjbG9uZS5cbiAqXG4gKiBAdGVtcGxhdGUgVFxuICogICBLaW5kLlxuICogQHBhcmFtIHtUfSB0aGluZ1xuICogICBUaGluZyB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtDbG9uZWFibGU8VD59XG4gKiAgIENsb25lZCB0aGluZy5cbiAqL1xuZnVuY3Rpb24gY2xvbmUodGhpbmcpIHtcbiAgLy8gQ2FzdCBiZWNhdXNlIGl04oCZcyBtdXRhYmxlIG5vdy5cbiAgcmV0dXJuIC8qKiBAdHlwZSB7Q2xvbmVhYmxlPFQ+fSAqLyAoc3RydWN0dXJlZENsb25lKHRoaW5nKSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gYGFgLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudD59IG5vZGVcbiAqICAgUmVsYXRlZCBoZWFkaW5nLlxuICogQHBhcmFtIHtQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkfSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMgdG8gc2V0IG9uIHRoZSBsaW5rLlxuICogQHBhcmFtIHtBcnJheTxFbGVtZW50Q29udGVudD59IGNoaWxkcmVuXG4gKiAgIENvbnRlbnQuXG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqICAgTGluay5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlKG5vZGUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgIHRhZ05hbWU6ICdhJyxcbiAgICBwcm9wZXJ0aWVzOiB7Li4ucHJvcGVydGllcywgaHJlZjogJyMnICsgbm9kZS5wcm9wZXJ0aWVzLmlkfSxcbiAgICBjaGlsZHJlblxuICB9XG59XG5cbi8qKlxuICogVHVybiBpbnRvIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudENvbnRlbnQ+IHwgUmVhZG9ubHlBcnJheTxFbGVtZW50Q29udGVudD4gfCBCdWlsZH0gdmFsdWVcbiAqICAgQ29udGVudC5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudD59IG5vZGVcbiAqICAgUmVsYXRlZCBoZWFkaW5nLlxuICogQHJldHVybnMge0FycmF5PEVsZW1lbnRDb250ZW50Pn1cbiAqICAgQ2hpbGRyZW4uXG4gKi9cbmZ1bmN0aW9uIHRvQ2hpbGRyZW4odmFsdWUsIG5vZGUpIHtcbiAgY29uc3QgcmVzdWx0ID0gdG9Ob2RlKHZhbHVlLCBub2RlKVxuICByZXR1cm4gQXJyYXkuaXNBcnJheShyZXN1bHQpID8gcmVzdWx0IDogW3Jlc3VsdF1cbn1cblxuLyoqXG4gKiBUdXJuIGludG8gYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudENvbnRlbnQ+IHwgUmVhZG9ubHlBcnJheTxFbGVtZW50Q29udGVudD4gfCBCdWlsZH0gdmFsdWVcbiAqICAgQ29udGVudC5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudD59IG5vZGVcbiAqICAgUmVsYXRlZCBoZWFkaW5nLlxuICogQHJldHVybnMge0FycmF5PEVsZW1lbnRDb250ZW50PiB8IEVsZW1lbnRDb250ZW50fVxuICogICBOb2RlLlxuICovXG5mdW5jdGlvbiB0b05vZGUodmFsdWUsIG5vZGUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlKG5vZGUpXG4gIHJldHVybiBjbG9uZSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBUdXJuIGludG8gcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BlcnRpZXM+IHwgQnVpbGRQcm9wZXJ0aWVzIHwgbnVsbCB8IHVuZGVmaW5lZH0gdmFsdWVcbiAqICAgUHJvcGVydGllcy5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8RWxlbWVudD59IG5vZGVcbiAqICAgUmVsYXRlZCBoZWFkaW5nLlxuICogQHJldHVybnMge1Byb3BlcnRpZXN9XG4gKiAgIFByb3BlcnRpZXMuXG4gKi9cbmZ1bmN0aW9uIHRvUHJvcGVydGllcyh2YWx1ZSwgbm9kZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWUobm9kZSlcbiAgcmV0dXJuIHZhbHVlID8gY2xvbmUodmFsdWUpIDoge31cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/rehype-autolink-headings/lib/index.js\n");

/***/ })

};
;