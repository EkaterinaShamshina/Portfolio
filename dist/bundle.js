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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_tooltip_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/tooltip.scss */ \"./src/styles/tooltip.scss\");\n/* harmony import */ var _styles_customselect_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/customselect.scss */ \"./src/styles/customselect.scss\");\n/* harmony import */ var custom_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! custom-select */ \"./node_modules/custom-select/build/index.js\");\n\n\n\n\n\n(0,custom_select__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.mySelect');\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./node_modules/custom-event-polyfill/custom-event-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/custom-event-polyfill/custom-event-polyfill.js ***!
  \*********************************************************************/
/***/ (() => {

eval("// Polyfill for creating CustomEvents on IE9/10/11\n\n// code pulled from:\n// https://github.com/d4tocchini/customevent-polyfill\n// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill\n\ntry {\n    var ce = new window.CustomEvent('test');\n    ce.preventDefault();\n    if (ce.defaultPrevented !== true) {\n        // IE has problems with .preventDefault() on custom events\n        // http://stackoverflow.com/questions/23349191\n        throw new Error('Could not prevent default');\n    }\n} catch(e) {\n  var CustomEvent = function(event, params) {\n    var evt, origPrevent;\n    params = params || {\n      bubbles: false,\n      cancelable: false,\n      detail: undefined\n    };\n\n    evt = document.createEvent(\"CustomEvent\");\n    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n    origPrevent = evt.preventDefault;\n    evt.preventDefault = function () {\n      origPrevent.call(this);\n      try {\n        Object.defineProperty(this, 'defaultPrevented', {\n          get: function () {\n            return true;\n          }\n        });\n      } catch(e) {\n        this.defaultPrevented = true;\n      }\n    };\n    return evt;\n  };\n\n  CustomEvent.prototype = window.Event.prototype;\n  window.CustomEvent = CustomEvent; // expose definition to window\n}\n\n\n//# sourceURL=webpack://portfolio/./node_modules/custom-event-polyfill/custom-event-polyfill.js?");

/***/ }),

/***/ "./node_modules/custom-select/build/index.js":
/*!***************************************************!*\
  !*** ./node_modules/custom-select/build/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }(); /**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * custom-select\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * A lightweight JS script for custom select creation.\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Needs no dependencies.\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * v0.0.1\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * (https://github.com/custom-select/custom-select)\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Copyright (c) 2016 Gionatan Lombardi & Marco Nucara\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * MIT License\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */\n\nexports[\"default\"] = customSelect;\n\n__webpack_require__(/*! custom-event-polyfill */ \"./node_modules/custom-event-polyfill/custom-event-polyfill.js\");\n\nvar defaultParams = {\n  containerClass: 'custom-select-container',\n  openerClass: 'custom-select-opener',\n  panelClass: 'custom-select-panel',\n  optionClass: 'custom-select-option',\n  optgroupClass: 'custom-select-optgroup',\n  isSelectedClass: 'is-selected',\n  hasFocusClass: 'has-focus',\n  isDisabledClass: 'is-disabled',\n  isOpenClass: 'is-open'\n};\n\nfunction builder(el, builderParams) {\n  var containerClass = 'customSelect';\n  var isOpen = false;\n  var uId = '';\n  var select = el;\n  var container = void 0;\n  var opener = void 0;\n  var focusedElement = void 0;\n  var selectedElement = void 0;\n  var panel = void 0;\n  var currLabel = void 0;\n\n  var resetSearchTimeout = void 0;\n  var searchKey = '';\n\n  //\n  // Inner Functions\n  //\n\n  // Sets the focused element with the neccessary classes substitutions\n  function setFocusedElement(cstOption) {\n    if (focusedElement) {\n      focusedElement.classList.remove(builderParams.hasFocusClass);\n    }\n    if (typeof cstOption !== 'undefined') {\n      focusedElement = cstOption;\n      focusedElement.classList.add(builderParams.hasFocusClass);\n      // Offset update: checks if the focused element is in the visible part of the panelClass\n      // if not dispatches a custom event\n      if (isOpen) {\n        if (cstOption.offsetTop < cstOption.offsetParent.scrollTop || cstOption.offsetTop > cstOption.offsetParent.scrollTop + cstOption.offsetParent.clientHeight - cstOption.clientHeight) {\n          cstOption.dispatchEvent(new CustomEvent('custom-select:focus-outside-panel', { bubbles: true }));\n        }\n      }\n    } else {\n      focusedElement = undefined;\n    }\n  }\n\n  // Reassigns the focused and selected custom option\n  // Updates the opener text\n  // IMPORTANT: the setSelectedElement function doesn't change the select value!\n  function setSelectedElement(cstOption) {\n    if (selectedElement) {\n      selectedElement.classList.remove(builderParams.isSelectedClass);\n      selectedElement.removeAttribute('id');\n      opener.removeAttribute('aria-activedescendant');\n    }\n    if (typeof cstOption !== 'undefined') {\n      cstOption.classList.add(builderParams.isSelectedClass);\n      cstOption.setAttribute('id', containerClass + '-' + uId + '-selectedOption');\n      opener.setAttribute('aria-activedescendant', containerClass + '-' + uId + '-selectedOption');\n      selectedElement = cstOption;\n      opener.children[0].textContent = selectedElement.customSelectOriginalOption.text;\n    } else {\n      selectedElement = undefined;\n      opener.children[0].textContent = '';\n    }\n    setFocusedElement(cstOption);\n  }\n\n  function setValue(value) {\n    // Gets the option with the provided value\n    var toSelect = select.querySelector('option[value=\\'' + value + '\\']');\n    // If no option has the provided value get the first\n    if (!toSelect) {\n      var _select$options = _slicedToArray(select.options, 1);\n\n      toSelect = _select$options[0];\n    }\n    // The option with the provided value becomes the selected one\n    // And changes the select current value\n    toSelect.selected = true;\n\n    setSelectedElement(select.options[select.selectedIndex].customSelectCstOption);\n  }\n\n  function moveFocuesedElement(direction) {\n    // Get all the .custom-select-options\n    // Get the index of the current focused one\n    var currentFocusedIndex = [].indexOf.call(select.options, focusedElement.customSelectOriginalOption);\n    // If the next or prev custom option exist\n    // Sets it as the new focused one\n    if (select.options[currentFocusedIndex + direction]) {\n      setFocusedElement(select.options[currentFocusedIndex + direction].customSelectCstOption);\n    }\n  }\n\n  // Open/Close function (toggle)\n  function open(bool) {\n    // Open\n    if (bool || typeof bool === 'undefined') {\n      // If present closes an opened instance of the plugin\n      // Only one at time can be open\n      var openedCustomSelect = document.querySelector('.' + containerClass + '.' + builderParams.isOpenClass);\n      if (openedCustomSelect) {\n        openedCustomSelect.customSelect.open = false;\n      }\n\n      // Opens only the clicked one\n      container.classList.add(builderParams.isOpenClass);\n\n      // aria-expanded update\n      container.classList.add(builderParams.isOpenClass);\n      opener.setAttribute('aria-expanded', 'true');\n\n      // Updates the scrollTop position of the panel in relation with the focused option\n      if (selectedElement) {\n        panel.scrollTop = selectedElement.offsetTop;\n      }\n\n      // Dispatches the custom event open\n      container.dispatchEvent(new CustomEvent('custom-select:open'));\n\n      // Sets the global state\n      isOpen = true;\n\n      // Close\n    } else {\n      // Removes the css classes\n      container.classList.remove(builderParams.isOpenClass);\n\n      // aria-expanded update\n      opener.setAttribute('aria-expanded', 'false');\n\n      // Sets the global state\n      isOpen = false;\n\n      // When closing the panel the focused custom option must be the selected one\n      setFocusedElement(selectedElement);\n\n      // Dispatches the custom event close\n      container.dispatchEvent(new CustomEvent('custom-select:close'));\n    }\n    return isOpen;\n  }\n\n  function clickEvent(e) {\n    // Opener click\n    if (e.target === opener || opener.contains(e.target)) {\n      if (isOpen) {\n        open(false);\n      } else {\n        open();\n      }\n      // Custom Option click\n    } else if (e.target.classList && e.target.classList.contains(builderParams.optionClass) && panel.contains(e.target)) {\n      setSelectedElement(e.target);\n      // Sets the corrisponding select's option to selected updating the select's value too\n      selectedElement.customSelectOriginalOption.selected = true;\n      open(false);\n      // Triggers the native change event of the select\n      select.dispatchEvent(new CustomEvent('change'));\n      // click on label or select (click on label corrispond to select click)\n    } else if (e.target === select) {\n      // if the original select is focusable (for any external reason) let the focus\n      // else trigger the focus on opener\n      if (opener !== document.activeElement && select !== document.activeElement) {\n        opener.focus();\n      }\n      // Click outside the container closes the panel\n    } else if (isOpen && !container.contains(e.target)) {\n      open(false);\n    }\n  }\n\n  function mouseoverEvent(e) {\n    // On mouse move over and options it bacames the focused one\n    if (e.target.classList && e.target.classList.contains(builderParams.optionClass)) {\n      setFocusedElement(e.target);\n    }\n  }\n\n  function keydownEvent(e) {\n    if (!isOpen) {\n      // On \"Arrow down\", \"Arrow up\" and \"Space\" keys opens the panel\n      if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 32) {\n        open();\n      }\n    } else {\n      switch (e.keyCode) {\n        case 13:\n        case 32:\n          // On \"Enter\" or \"Space\" selects the focused element as the selected one\n          setSelectedElement(focusedElement);\n          // Sets the corrisponding select's option to selected updating the select's value too\n          selectedElement.customSelectOriginalOption.selected = true;\n          // Triggers the native change event of the select\n          select.dispatchEvent(new CustomEvent('change'));\n          open(false);\n          break;\n        case 27:\n          // On \"Escape\" closes the panel\n          open(false);\n          break;\n\n        case 38:\n          // On \"Arrow up\" set focus to the prev option if present\n          moveFocuesedElement(-1);\n          break;\n        case 40:\n          // On \"Arrow down\" set focus to the next option if present\n          moveFocuesedElement(+1);\n          break;\n        default:\n          // search in panel (autocomplete)\n          if (e.keyCode >= 48 && e.keyCode <= 90) {\n            // clear existing reset timeout\n            if (resetSearchTimeout) {\n              clearTimeout(resetSearchTimeout);\n            }\n\n            // reset timeout for empty search key\n            resetSearchTimeout = setTimeout(function () {\n              searchKey = '';\n            }, 1500);\n\n            // update search keyword appending the current key\n            searchKey += String.fromCharCode(e.keyCode);\n\n            // search the element\n            for (var i = 0, l = select.options.length; i < l; i++) {\n              // removed cause not supported by IE:\n              // if (options[i].text.startsWith(searchKey))\n              if (select.options[i].text.toUpperCase().substr(0, searchKey.length) === searchKey) {\n                setFocusedElement(select.options[i].customSelectCstOption);\n                break;\n              }\n            }\n          }\n          break;\n      }\n    }\n  }\n\n  function changeEvent() {\n    var index = select.selectedIndex;\n    var element = index === -1 ? undefined : select.options[index].customSelectCstOption;\n\n    setSelectedElement(element);\n  }\n\n  // When the option is outside the visible part of the opened panel, updates the scrollTop position\n  // This is the default behaviour\n  // To block it the plugin user must\n  // add a \"custom-select:focus-outside-panel\" eventListener on the panel\n  // with useCapture set to true\n  // and stopPropagation\n  function scrollToFocused(e) {\n    var currPanel = e.currentTarget;\n    var currOption = e.target;\n    // Up\n    if (currOption.offsetTop < currPanel.scrollTop) {\n      currPanel.scrollTop = currOption.offsetTop;\n      // Down\n    } else {\n      currPanel.scrollTop = currOption.offsetTop + currOption.clientHeight - currPanel.clientHeight;\n    }\n  }\n\n  function addEvents() {\n    document.addEventListener('click', clickEvent);\n    panel.addEventListener('mouseover', mouseoverEvent);\n    panel.addEventListener('custom-select:focus-outside-panel', scrollToFocused);\n    select.addEventListener('change', changeEvent);\n    container.addEventListener('keydown', keydownEvent);\n  }\n\n  function removeEvents() {\n    document.removeEventListener('click', clickEvent);\n    panel.removeEventListener('mouseover', mouseoverEvent);\n    panel.removeEventListener('custom-select:focus-outside-panel', scrollToFocused);\n    select.removeEventListener('change', changeEvent);\n    container.removeEventListener('keydown', keydownEvent);\n  }\n\n  function disabled(bool) {\n    if (bool && !select.disabled) {\n      container.classList.add(builderParams.isDisabledClass);\n      select.disabled = true;\n      opener.removeAttribute('tabindex');\n      container.dispatchEvent(new CustomEvent('custom-select:disabled'));\n      removeEvents();\n    } else if (!bool && select.disabled) {\n      container.classList.remove(builderParams.isDisabledClass);\n      select.disabled = false;\n      opener.setAttribute('tabindex', '0');\n      container.dispatchEvent(new CustomEvent('custom-select:enabled'));\n      addEvents();\n    }\n  }\n\n  // Form a given select children DOM tree (options and optgroup),\n  // Creates the corresponding custom HTMLElements list (divs with different classes and attributes)\n  function parseMarkup(children) {\n    var nodeList = children;\n    var cstList = [];\n\n    if (typeof nodeList.length === 'undefined') {\n      throw new TypeError('Invalid Argument');\n    }\n\n    for (var i = 0, li = nodeList.length; i < li; i++) {\n      if (nodeList[i] instanceof HTMLElement && nodeList[i].tagName.toUpperCase() === 'OPTGROUP') {\n        var cstOptgroup = document.createElement('div');\n        cstOptgroup.classList.add(builderParams.optgroupClass);\n        cstOptgroup.setAttribute('data-label', nodeList[i].label);\n\n        // IMPORTANT: Stores in a property of the created custom option group\n        // a hook to the the corrisponding select's option group\n        cstOptgroup.customSelectOriginalOptgroup = nodeList[i];\n\n        // IMPORTANT: Stores in a property of select's option group\n        // a hook to the created custom option group\n        nodeList[i].customSelectCstOptgroup = cstOptgroup;\n\n        var subNodes = parseMarkup(nodeList[i].children);\n        for (var j = 0, lj = subNodes.length; j < lj; j++) {\n          cstOptgroup.appendChild(subNodes[j]);\n        }\n\n        cstList.push(cstOptgroup);\n      } else if (nodeList[i] instanceof HTMLElement && nodeList[i].tagName.toUpperCase() === 'OPTION') {\n        var cstOption = document.createElement('div');\n        cstOption.classList.add(builderParams.optionClass);\n        cstOption.textContent = nodeList[i].text;\n        cstOption.setAttribute('data-value', nodeList[i].value);\n        cstOption.setAttribute('role', 'option');\n\n        // IMPORTANT: Stores in a property of the created custom option\n        // a hook to the the corrisponding select's option\n        cstOption.customSelectOriginalOption = nodeList[i];\n\n        // IMPORTANT: Stores in a property of select's option\n        // a hook to the created custom option\n        nodeList[i].customSelectCstOption = cstOption;\n\n        // If the select's option is selected\n        if (nodeList[i].selected) {\n          setSelectedElement(cstOption);\n        }\n        cstList.push(cstOption);\n      } else {\n        throw new TypeError('Invalid Argument');\n      }\n    }\n    return cstList;\n  }\n\n  function _append(nodePar, appendIntoOriginal, targetPar) {\n    var target = void 0;\n    if (typeof targetPar === 'undefined' || targetPar === select) {\n      target = panel;\n    } else if (targetPar instanceof HTMLElement && targetPar.tagName.toUpperCase() === 'OPTGROUP' && select.contains(targetPar)) {\n      target = targetPar.customSelectCstOptgroup;\n    } else {\n      throw new TypeError('Invalid Argument');\n    }\n\n    // If the node provided is a single HTMLElement it is stored in an array\n    var node = nodePar instanceof HTMLElement ? [nodePar] : nodePar;\n\n    // Injects the options|optgroup in the select\n    if (appendIntoOriginal) {\n      for (var i = 0, l = node.length; i < l; i++) {\n        if (target === panel) {\n          select.appendChild(node[i]);\n        } else {\n          target.customSelectOriginalOptgroup.appendChild(node[i]);\n        }\n      }\n    }\n\n    // The custom markup to append\n    var markupToInsert = parseMarkup(node);\n\n    // Injects the created DOM content in the panel\n    for (var _i = 0, _l = markupToInsert.length; _i < _l; _i++) {\n      target.appendChild(markupToInsert[_i]);\n    }\n\n    return node;\n  }\n\n  function _insertBefore(node, targetPar) {\n    var target = void 0;\n    if (targetPar instanceof HTMLElement && targetPar.tagName.toUpperCase() === 'OPTION' && select.contains(targetPar)) {\n      target = targetPar.customSelectCstOption;\n    } else if (targetPar instanceof HTMLElement && targetPar.tagName.toUpperCase() === 'OPTGROUP' && select.contains(targetPar)) {\n      target = targetPar.customSelectCstOptgroup;\n    } else {\n      throw new TypeError('Invalid Argument');\n    }\n\n    // The custom markup to append\n    var markupToInsert = parseMarkup(node.length ? node : [node]);\n\n    target.parentNode.insertBefore(markupToInsert[0], target);\n\n    // Injects the option or optgroup node in the original select and returns the injected node\n    return targetPar.parentNode.insertBefore(node.length ? node[0] : node, targetPar);\n  }\n\n  function remove(node) {\n    var cstNode = void 0;\n    if (node instanceof HTMLElement && node.tagName.toUpperCase() === 'OPTION' && select.contains(node)) {\n      cstNode = node.customSelectCstOption;\n    } else if (node instanceof HTMLElement && node.tagName.toUpperCase() === 'OPTGROUP' && select.contains(node)) {\n      cstNode = node.customSelectCstOptgroup;\n    } else {\n      throw new TypeError('Invalid Argument');\n    }\n    cstNode.parentNode.removeChild(cstNode);\n    var removedNode = node.parentNode.removeChild(node);\n    changeEvent();\n    return removedNode;\n  }\n\n  function empty() {\n    var removed = [];\n    while (select.children.length) {\n      panel.removeChild(panel.children[0]);\n      removed.push(select.removeChild(select.children[0]));\n    }\n    setSelectedElement();\n    return removed;\n  }\n\n  function destroy() {\n    for (var i = 0, l = select.options.length; i < l; i++) {\n      delete select.options[i].customSelectCstOption;\n    }\n    var optGroup = select.getElementsByTagName('optgroup');\n    for (var _i2 = 0, _l2 = optGroup.length; _i2 < _l2; _i2++) {\n      delete optGroup.customSelectCstOptgroup;\n    }\n\n    removeEvents();\n\n    return container.parentNode.replaceChild(select, container);\n  }\n  //\n  // Custom Select DOM tree creation\n  //\n\n  // Creates the container/wrapper\n  container = document.createElement('div');\n  container.classList.add(builderParams.containerClass, containerClass);\n\n  // Creates the opener\n  opener = document.createElement('span');\n  opener.className = builderParams.openerClass;\n  opener.setAttribute('role', 'combobox');\n  opener.setAttribute('aria-autocomplete', 'list');\n  opener.setAttribute('aria-expanded', 'false');\n  opener.innerHTML = '<span>\\n   ' + (select.selectedIndex !== -1 ? select.options[select.selectedIndex].text : '') + '\\n   </span>';\n\n  // Creates the panel\n  // and injects the markup of the select inside\n  // with some tag and attributes replacement\n  panel = document.createElement('div');\n  // Create random id\n  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  for (var i = 0; i < 5; i++) {\n    uId += possible.charAt(Math.floor(Math.random() * possible.length));\n  }\n  panel.id = containerClass + '-' + uId + '-panel';\n  panel.className = builderParams.panelClass;\n  panel.setAttribute('role', 'listbox');\n  opener.setAttribute('aria-owns', panel.id);\n\n  _append(select.children, false);\n\n  // Injects the container in the original DOM position of the select\n  container.appendChild(opener);\n  select.parentNode.replaceChild(container, select);\n  container.appendChild(select);\n  container.appendChild(panel);\n\n  // ARIA labelledby - label\n  if (document.querySelector('label[for=\"' + select.id + '\"]')) {\n    currLabel = document.querySelector('label[for=\"' + select.id + '\"]');\n  } else if (container.parentNode.tagName.toUpperCase() === 'LABEL') {\n    currLabel = container.parentNode;\n  }\n  if (typeof currLabel !== 'undefined') {\n    currLabel.setAttribute('id', containerClass + '-' + uId + '-label');\n    opener.setAttribute('aria-labelledby', containerClass + '-' + uId + '-label');\n  }\n\n  // Event Init\n  if (select.disabled) {\n    container.classList.add(builderParams.isDisabledClass);\n  } else {\n    opener.setAttribute('tabindex', '0');\n    select.setAttribute('tabindex', '-1');\n    addEvents();\n  }\n\n  // Stores the plugin public exposed methods and properties, directly in the container HTMLElement\n  container.customSelect = {\n    get pluginOptions() {\n      return builderParams;\n    },\n    get open() {\n      return isOpen;\n    },\n    set open(bool) {\n      open(bool);\n    },\n    get disabled() {\n      return select.disabled;\n    },\n    set disabled(bool) {\n      disabled(bool);\n    },\n    get value() {\n      return select.value;\n    },\n    set value(val) {\n      setValue(val);\n    },\n    append: function append(node, target) {\n      return _append(node, true, target);\n    },\n    insertBefore: function insertBefore(node, target) {\n      return _insertBefore(node, target);\n    },\n    remove: remove,\n    empty: empty,\n    destroy: destroy,\n    opener: opener,\n    select: select,\n    panel: panel,\n    container: container\n  };\n\n  // Stores the plugin directly in the original select\n  select.customSelect = container.customSelect;\n\n  // Returns the plugin instance, with the public exposed methods and properties\n  return container.customSelect;\n}\n\nfunction customSelect(element, customParams) {\n  // Overrides the default options with the ones provided by the user\n  var nodeList = [];\n  var selects = [];\n\n  return function init() {\n    // The plugin is called on a single HTMLElement\n    if (element && element instanceof HTMLElement && element.tagName.toUpperCase() === 'SELECT') {\n      nodeList.push(element);\n      // The plugin is called on a selector\n    } else if (element && typeof element === 'string') {\n      var elementsList = document.querySelectorAll(element);\n      for (var i = 0, l = elementsList.length; i < l; ++i) {\n        if (elementsList[i] instanceof HTMLElement && elementsList[i].tagName.toUpperCase() === 'SELECT') {\n          nodeList.push(elementsList[i]);\n        }\n      }\n      // The plugin is called on any HTMLElements list (NodeList, HTMLCollection, Array, etc.)\n    } else if (element && element.length) {\n      for (var _i3 = 0, _l3 = element.length; _i3 < _l3; ++_i3) {\n        if (element[_i3] instanceof HTMLElement && element[_i3].tagName.toUpperCase() === 'SELECT') {\n          nodeList.push(element[_i3]);\n        }\n      }\n    }\n\n    // Launches the plugin over every HTMLElement\n    // And stores every plugin instance\n    for (var _i4 = 0, _l4 = nodeList.length; _i4 < _l4; ++_i4) {\n      selects.push(builder(nodeList[_i4], _extends({}, defaultParams, customParams)));\n    }\n\n    // Returns all plugin instances\n    return selects;\n  }();\n}\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://portfolio/./node_modules/custom-select/build/index.js?");

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/styles/customselect.scss":
/*!**************************************!*\
  !*** ./src/styles/customselect.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/customselect.scss?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/main.scss?");

/***/ }),

/***/ "./src/styles/tooltip.scss":
/*!*********************************!*\
  !*** ./src/styles/tooltip.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/tooltip.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;