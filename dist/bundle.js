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


__webpack_require__(1);

var users = [{ name: 'Maria', pass: '1234' }, { name: 'John', pass: '5678' }];

var validateForm = function validateForm() {
    var form = document.forms.login;
    var credentials = {
        user: form.username.value,
        pass: form.password.value
    };
    var authorizationStatus = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].name === credentials.user && users[i].pass === credentials.pass) {
            authorizationStatus = true;
            break;
        }
    }
    displayAuthorizationStatus(authorizationStatus);
};

var submitButton = document.querySelector('#button-submit');
submitButton.addEventListener('click', validateForm);

var displayAuthorizationStatus = function displayAuthorizationStatus(authorizationStatus) {
    var authorizedUser = document.querySelector('.authorized-user');
    var unauthorizedUser = document.querySelector('.unauthorized-user');
    authorizedUser.style.display = authorizationStatus ? 'inline' : 'none';
    unauthorizedUser.style.display = authorizationStatus ? 'none' : 'inline';
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2QyOWJlZDY3ZWVhYTAwOTQzMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9sb2dpbi5zY3NzIl0sIm5hbWVzIjpbInVzZXJzIiwibmFtZSIsInBhc3MiLCJ2YWxpZGF0ZUZvcm0iLCJmb3JtIiwiZG9jdW1lbnQiLCJmb3JtcyIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJ1c2VyIiwidXNlcm5hbWUiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYXV0aG9yaXphdGlvblN0YXR1cyIsImkiLCJsZW5ndGgiLCJkaXNwbGF5QXV0aG9yaXphdGlvblN0YXR1cyIsInN1Ym1pdEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiYXV0aG9yaXplZFVzZXIiLCJ1bmF1dGhvcml6ZWRVc2VyIiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOztBQUVBOztBQUVBLElBQUlBLFFBQVEsQ0FDUixFQUFDQyxNQUFNLE9BQVAsRUFBZ0JDLE1BQU0sTUFBdEIsRUFEUSxFQUVSLEVBQUNELE1BQU0sTUFBUCxFQUFlQyxNQUFNLE1BQXJCLEVBRlEsQ0FBWjs7QUFLQSxJQUFJQyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUNyQixRQUFJQyxPQUFPQyxTQUFTQyxLQUFULENBQWVDLEtBQTFCO0FBQ0EsUUFBSUMsY0FBYztBQUNkQyxjQUFNTCxLQUFLTSxRQUFMLENBQWNDLEtBRE47QUFFZFQsY0FBTUUsS0FBS1EsUUFBTCxDQUFjRDtBQUZOLEtBQWxCO0FBSUEsUUFBSUUsc0JBQXNCLEtBQTFCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlkLE1BQU1lLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNuQyxZQUFJZCxNQUFNYyxDQUFOLEVBQVNiLElBQVQsS0FBa0JPLFlBQVlDLElBQTlCLElBQXNDVCxNQUFNYyxDQUFOLEVBQVNaLElBQVQsS0FBa0JNLFlBQVlOLElBQXhFLEVBQThFO0FBQzFFVyxrQ0FBc0IsSUFBdEI7QUFDQTtBQUNIO0FBQ0o7QUFDREcsK0JBQTJCSCxtQkFBM0I7QUFDSCxDQWREOztBQWdCQSxJQUFJSSxlQUFlWixTQUFTYSxhQUFULENBQXVCLGdCQUF2QixDQUFuQjtBQUNBRCxhQUFhRSxnQkFBYixDQUE4QixPQUE5QixFQUF1Q2hCLFlBQXZDOztBQUVBLElBQUlhLDZCQUE2QixTQUE3QkEsMEJBQTZCLENBQUNILG1CQUFELEVBQXlCO0FBQ3RELFFBQUlPLGlCQUFpQmYsU0FBU2EsYUFBVCxDQUF1QixrQkFBdkIsQ0FBckI7QUFDQSxRQUFJRyxtQkFBbUJoQixTQUFTYSxhQUFULENBQXVCLG9CQUF2QixDQUF2QjtBQUNBRSxtQkFBZUUsS0FBZixDQUFxQkMsT0FBckIsR0FBK0JWLHNCQUFzQixRQUF0QixHQUFpQyxNQUFoRTtBQUNBUSxxQkFBaUJDLEtBQWpCLENBQXVCQyxPQUF2QixHQUFpQ1Ysc0JBQXNCLE1BQXRCLEdBQStCLFFBQWhFO0FBQ0gsQ0FMRCxDOzs7Ozs7QUM1QkEseUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2QyOWJlZDY3ZWVhYTAwOTQzMjAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBcIi4vbG9naW4uc2Nzc1wiO1xuXG5sZXQgdXNlcnMgPSBbXG4gICAge25hbWU6ICdNYXJpYScsIHBhc3M6ICcxMjM0J30sXG4gICAge25hbWU6ICdKb2huJywgcGFzczogJzU2NzgnfVxuXTtcblxubGV0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmZvcm1zLmxvZ2luO1xuICAgIGxldCBjcmVkZW50aWFscyA9IHtcbiAgICAgICAgdXNlcjogZm9ybS51c2VybmFtZS52YWx1ZSxcbiAgICAgICAgcGFzczogZm9ybS5wYXNzd29yZC52YWx1ZVxuICAgIH07XG4gICAgbGV0IGF1dGhvcml6YXRpb25TdGF0dXMgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh1c2Vyc1tpXS5uYW1lID09PSBjcmVkZW50aWFscy51c2VyICYmIHVzZXJzW2ldLnBhc3MgPT09IGNyZWRlbnRpYWxzLnBhc3MpIHtcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb25TdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzcGxheUF1dGhvcml6YXRpb25TdGF0dXMoYXV0aG9yaXphdGlvblN0YXR1cyk7XG59O1xuXG5sZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1zdWJtaXQnKTtcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZhbGlkYXRlRm9ybSk7XG5cbmxldCBkaXNwbGF5QXV0aG9yaXphdGlvblN0YXR1cyA9IChhdXRob3JpemF0aW9uU3RhdHVzKSA9PiB7XG4gICAgbGV0IGF1dGhvcml6ZWRVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGhvcml6ZWQtdXNlcicpO1xuICAgIGxldCB1bmF1dGhvcml6ZWRVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVuYXV0aG9yaXplZC11c2VyJyk7XG4gICAgYXV0aG9yaXplZFVzZXIuc3R5bGUuZGlzcGxheSA9IGF1dGhvcml6YXRpb25TdGF0dXMgPyAnaW5saW5lJyA6ICdub25lJztcbiAgICB1bmF1dGhvcml6ZWRVc2VyLnN0eWxlLmRpc3BsYXkgPSBhdXRob3JpemF0aW9uU3RhdHVzID8gJ25vbmUnIDogJ2lubGluZSc7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbG9naW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9