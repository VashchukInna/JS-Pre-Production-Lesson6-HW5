/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _menu = __webpack_require__(1);

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_menu2.default.createMenu();
_menu2.default.drawActiveMenuItems();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var createMenu = function createMenu() {

    createDiv();
    var rootElement = createUl();
    createLinkInMarkedList(rootElement, 'Login');
    createLinkInMarkedList(rootElement, 'Home');
    createLinkInMarkedList(rootElement, 'Contacts');
    createLinkInMarkedList(rootElement, 'About');
    createLinkInMarkedList(rootElement, 'Admin');
};

var createDiv = function createDiv() {

    var wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    var parentElement = document.body;
    parentElement.appendChild(wrapper);
};

var createUl = function createUl() {

    var rootElement = document.createElement('ul');
    rootElement.className = 'menu';

    document.getElementById('wrapper').appendChild(rootElement);
    return rootElement;
};

/*
 This function creates marked down list in rootElement with reference to hrefText
 */

var createLinkInMarkedList = function createLinkInMarkedList(rootElement, hrefText) {

    var a = document.createElement('a');
    a.text = hrefText;
    a.setAttribute('href', '#' + hrefText.toLowerCase());

    var li = document.createElement('li');
    li.appendChild(a);

    rootElement.appendChild(li);
};

var drawActiveMenuItems = function drawActiveMenuItems() {

    var activeMenuItems = document.getElementsByTagName('a');
    for (var i = 0; i < activeMenuItems.length; i++) {

        var href = activeMenuItems[i].href;

        if (href.indexOf(location.hash) + 1) {
            activeMenuItems[i].style.color = 'red';
            return true;
        }
    }
    return false;
};

exports.default = {
    createMenu: createMenu,
    drawActiveMenuItems: drawActiveMenuItems
};

/*
<div class="wrapper">
<ul class="menu">
 <li><a href="#home">Home</a><li>
 <li><a href="#contacts">Contacts</a><li>
 <li><a href="#about">About</a><li>
 <li><a href="#admin">Admin</a></li>
</ul>
</div>
* */

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzRiNDcyYmEwMjNlMjdkOGY1MjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tZW51LnNjc3MiXSwibmFtZXMiOlsiY3JlYXRlTWVudSIsImRyYXdBY3RpdmVNZW51SXRlbXMiLCJjcmVhdGVEaXYiLCJyb290RWxlbWVudCIsImNyZWF0ZVVsIiwiY3JlYXRlTGlua0luTWFya2VkTGlzdCIsIndyYXBwZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImhyZWZUZXh0IiwiYSIsInRleHQiLCJzZXRBdHRyaWJ1dGUiLCJ0b0xvd2VyQ2FzZSIsImxpIiwiYWN0aXZlTWVudUl0ZW1zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwibGVuZ3RoIiwiaHJlZiIsImluZGV4T2YiLCJsb2NhdGlvbiIsImhhc2giLCJzdHlsZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOztBQUVBOzs7O0FBQ0E7Ozs7QUFFQSxlQUFLQSxVQUFMO0FBQ0EsZUFBS0MsbUJBQUwsRzs7Ozs7OztBQ05BOzs7OztBQUVBLElBQUlELGFBQWEsU0FBYkEsVUFBYSxHQUFNOztBQUVuQkU7QUFDQSxRQUFJQyxjQUFjQyxVQUFsQjtBQUNBQywyQkFBdUJGLFdBQXZCLEVBQW9DLE9BQXBDO0FBQ0FFLDJCQUF1QkYsV0FBdkIsRUFBb0MsTUFBcEM7QUFDQUUsMkJBQXVCRixXQUF2QixFQUFvQyxVQUFwQztBQUNBRSwyQkFBdUJGLFdBQXZCLEVBQW9DLE9BQXBDO0FBQ0FFLDJCQUF1QkYsV0FBdkIsRUFBb0MsT0FBcEM7QUFDSCxDQVREOztBQVdBLElBQUlELFlBQVksU0FBWkEsU0FBWSxHQUFNOztBQUVsQixRQUFJSSxVQUFVQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQUYsWUFBUUcsRUFBUixHQUFhLFNBQWI7O0FBRUEsUUFBSUMsZ0JBQWdCSCxTQUFTSSxJQUE3QjtBQUNBRCxrQkFBY0UsV0FBZCxDQUEwQk4sT0FBMUI7QUFDSCxDQVBEOztBQVNBLElBQUlGLFdBQVcsU0FBWEEsUUFBVyxHQUFNOztBQUVqQixRQUFJRCxjQUFjSSxTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0FMLGdCQUFZVSxTQUFaLEdBQXdCLE1BQXhCOztBQUVBTixhQUFTTyxjQUFULENBQXdCLFNBQXhCLEVBQW1DRixXQUFuQyxDQUErQ1QsV0FBL0M7QUFDQSxXQUFPQSxXQUFQO0FBQ0gsQ0FQRDs7QUFTQTs7OztBQUlBLElBQUlFLHlCQUF5QixTQUF6QkEsc0JBQXlCLENBQUNGLFdBQUQsRUFBY1ksUUFBZCxFQUEyQjs7QUFFcEQsUUFBSUMsSUFBSVQsU0FBU0MsYUFBVCxDQUF1QixHQUF2QixDQUFSO0FBQ0FRLE1BQUVDLElBQUYsR0FBU0YsUUFBVDtBQUNBQyxNQUFFRSxZQUFGLENBQWUsTUFBZixFQUF1QixNQUFNSCxTQUFTSSxXQUFULEVBQTdCOztBQUVBLFFBQUlDLEtBQUtiLFNBQVNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtBQUNBWSxPQUFHUixXQUFILENBQWVJLENBQWY7O0FBRUFiLGdCQUFZUyxXQUFaLENBQXdCUSxFQUF4QjtBQUNILENBVkQ7O0FBWUEsSUFBSW5CLHNCQUFzQixTQUF0QkEsbUJBQXNCLEdBQU07O0FBRTVCLFFBQUlvQixrQkFBa0JkLFNBQVNlLG9CQUFULENBQThCLEdBQTlCLENBQXRCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLGdCQUFnQkcsTUFBcEMsRUFBNENELEdBQTVDLEVBQWlEOztBQUU3QyxZQUFJRSxPQUFPSixnQkFBZ0JFLENBQWhCLEVBQW1CRSxJQUE5Qjs7QUFFQSxZQUFJQSxLQUFLQyxPQUFMLENBQWFDLFNBQVNDLElBQXRCLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CUCw0QkFBZ0JFLENBQWhCLEVBQW1CTSxLQUFuQixDQUF5QkMsS0FBekIsR0FBaUMsS0FBakM7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNELFdBQU8sS0FBUDtBQUNILENBYkQ7O2tCQWVlO0FBQ1g5QiwwQkFEVztBQUVYQztBQUZXLEM7O0FBS2Y7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNGI0NzJiYTAyM2UyN2Q4ZjUyMyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCAnLi9tZW51LnNjc3MnO1xuXG5tZW51LmNyZWF0ZU1lbnUoKTtcbm1lbnUuZHJhd0FjdGl2ZU1lbnVJdGVtcygpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBjcmVhdGVNZW51ID0gKCkgPT4ge1xyXG5cclxuICAgIGNyZWF0ZURpdigpO1xyXG4gICAgbGV0IHJvb3RFbGVtZW50ID0gY3JlYXRlVWwoKTtcclxuICAgIGNyZWF0ZUxpbmtJbk1hcmtlZExpc3Qocm9vdEVsZW1lbnQsICdMb2dpbicpO1xyXG4gICAgY3JlYXRlTGlua0luTWFya2VkTGlzdChyb290RWxlbWVudCwgJ0hvbWUnKTtcclxuICAgIGNyZWF0ZUxpbmtJbk1hcmtlZExpc3Qocm9vdEVsZW1lbnQsICdDb250YWN0cycpO1xyXG4gICAgY3JlYXRlTGlua0luTWFya2VkTGlzdChyb290RWxlbWVudCwgJ0Fib3V0Jyk7XHJcbiAgICBjcmVhdGVMaW5rSW5NYXJrZWRMaXN0KHJvb3RFbGVtZW50LCAnQWRtaW4nKTtcclxufTtcclxuXHJcbmxldCBjcmVhdGVEaXYgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHdyYXBwZXIuaWQgPSAnd3JhcHBlcic7XHJcblxyXG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxufTtcclxuXHJcbmxldCBjcmVhdGVVbCA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgcm9vdEVsZW1lbnQuY2xhc3NOYW1lID0gJ21lbnUnO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJykuYXBwZW5kQ2hpbGQocm9vdEVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIHJvb3RFbGVtZW50O1xyXG59O1xyXG5cclxuLypcclxuIFRoaXMgZnVuY3Rpb24gY3JlYXRlcyBtYXJrZWQgZG93biBsaXN0IGluIHJvb3RFbGVtZW50IHdpdGggcmVmZXJlbmNlIHRvIGhyZWZUZXh0XHJcbiAqL1xyXG5cclxubGV0IGNyZWF0ZUxpbmtJbk1hcmtlZExpc3QgPSAocm9vdEVsZW1lbnQsIGhyZWZUZXh0KSA9PiB7XHJcblxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLnRleHQgPSBocmVmVGV4dDtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaHJlZlRleHQudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKGxpKTtcclxufTtcclxuXHJcbmxldCBkcmF3QWN0aXZlTWVudUl0ZW1zID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBhY3RpdmVNZW51SXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVNZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgbGV0IGhyZWYgPSBhY3RpdmVNZW51SXRlbXNbaV0uaHJlZjtcclxuXHJcbiAgICAgICAgaWYgKGhyZWYuaW5kZXhPZihsb2NhdGlvbi5oYXNoKSsxKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZU1lbnVJdGVtc1tpXS5zdHlsZS5jb2xvciA9ICdyZWQnO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjcmVhdGVNZW51LFxyXG4gICAgZHJhd0FjdGl2ZU1lbnVJdGVtc1xyXG59O1xyXG5cclxuLypcclxuPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuPHVsIGNsYXNzPVwibWVudVwiPlxyXG4gPGxpPjxhIGhyZWY9XCIjaG9tZVwiPkhvbWU8L2E+PGxpPlxyXG4gPGxpPjxhIGhyZWY9XCIjY29udGFjdHNcIj5Db250YWN0czwvYT48bGk+XHJcbiA8bGk+PGEgaHJlZj1cIiNhYm91dFwiPkFib3V0PC9hPjxsaT5cclxuIDxsaT48YSBocmVmPVwiI2FkbWluXCI+QWRtaW48L2E+PC9saT5cclxuPC91bD5cclxuPC9kaXY+XHJcbiogKi9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWVudS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWVudS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=