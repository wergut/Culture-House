/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

const openButton = document.getElementById("btn-open-menu");
const closeButton = document.getElementById("btn-close-menu");
const popupMenu = document.getElementById("popup-menu");
const body = document.querySelector("body");
openButton.addEventListener("click", () => {
  popupMenu.classList.add("show");
  body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  popupMenu.classList.remove("show");
  body.style.overflow = "initial";
});
document.addEventListener('click', function (event) {
  var filter = event.target.closest('.filters-wrapper .filter');
  if (!filter) return; // Если клик не внутри .filter, выходим

  var dropdown = filter.querySelector('.filters-wrapper .filters-dropdown');
  var span = filter.querySelector('.filters-wrapper .filter span');
  if (event.target === span) {
    // Закрыть все остальные фильтры
    var allFilters = document.querySelectorAll('.filters-wrapper .filter');
    allFilters.forEach(function (otherFilter) {
      if (otherFilter !== filter) {
        otherFilter.querySelector('.filters-wrapper .filters-dropdown').classList.remove('open');
      }
    });
    dropdown.classList.toggle('open');
  } else if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('open');
  } else if (event.target.tagName === 'LI') {
    span.textContent = event.target.textContent;
    dropdown.classList.remove('open');
  }
});
const swiper = new Swiper('.home-banner-slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 10,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: '.home-banner-slider .swiper-pagination',
    clickable: true
  }
});
const swiper1 = new Swiper('.achievements-slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2,
  navigation: {
    nextEl: '.achievements-section .swiper-button-next',
    prevEl: '.achievements-section .swiper-button-prev'
  },
  pagination: {
    el: '.achievements-section .swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
    }
  }
});
const swiper2 = new Swiper('.events-slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2,
  navigation: {
    nextEl: '.events-section .swiper-button-next',
    prevEl: '.events-section .swiper-button-prev'
  },
  pagination: {
    el: '.events-section .swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
    }
  }
});
const swiper3 = new Swiper('.programs-slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: '.programs-section .swiper-button-next',
    prevEl: '.programs-section .swiper-button-prev'
  },
  pagination: {
    el: '.programs-section .swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
    }
  }
});
const swiper4 = new Swiper('.affairs-slider', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: '.slider-wrapper .swiper-button-next',
    prevEl: '.slider-wrapper .swiper-button-prev'
  }
});
const swiper5 = new Swiper('.events-slider-second', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  navigation: {
    nextEl: '.events-section-second .swiper-button-next',
    prevEl: '.events-section-second .swiper-button-prev'
  },
  pagination: {
    el: '.events-section-second .swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
    }
  }
});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRlLWh0bWwtYm9pbGVycGxhdGUvLi9zb3VyY2UvanMvc2NyaXB0LmpzIiwid2VicGFjazovL2NyZWF0ZS1odG1sLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NyZWF0ZS1odG1sLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NyZWF0ZS1odG1sLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jcmVhdGUtaHRtbC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NyZWF0ZS1odG1sLWJvaWxlcnBsYXRlLy4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9wZW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1vcGVuLW1lbnVcIik7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNsb3NlLW1lbnVcIik7XG5jb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVwLW1lbnVcIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbm9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbn0pO1xuXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwb3B1cE1lbnUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImluaXRpYWxcIjtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHZhciBmaWx0ZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmZpbHRlcnMtd3JhcHBlciAuZmlsdGVyJyk7XG4gIGlmICghZmlsdGVyKSByZXR1cm47IC8vINCV0YHQu9C4INC60LvQuNC6INC90LUg0LLQvdGD0YLRgNC4IC5maWx0ZXIsINCy0YvRhdC+0LTQuNC8XG5cbiAgdmFyIGRyb3Bkb3duID0gZmlsdGVyLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJzLXdyYXBwZXIgLmZpbHRlcnMtZHJvcGRvd24nKTtcbiAgdmFyIHNwYW4gPSBmaWx0ZXIucXVlcnlTZWxlY3RvcignLmZpbHRlcnMtd3JhcHBlciAuZmlsdGVyIHNwYW4nKTtcblxuICBpZiAoZXZlbnQudGFyZ2V0ID09PSBzcGFuKSB7XG4gICAgLy8g0JfQsNC60YDRi9GC0Ywg0LLRgdC1INC+0YHRgtCw0LvRjNC90YvQtSDRhNC40LvRjNGC0YDRi1xuICAgIHZhciBhbGxGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcnMtd3JhcHBlciAuZmlsdGVyJyk7XG4gICAgYWxsRmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uIChvdGhlckZpbHRlcikge1xuICAgICAgaWYgKG90aGVyRmlsdGVyICE9PSBmaWx0ZXIpIHtcbiAgICAgICAgb3RoZXJGaWx0ZXIucXVlcnlTZWxlY3RvcignLmZpbHRlcnMtd3JhcHBlciAuZmlsdGVycy1kcm9wZG93bicpLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfSBlbHNlIGlmICghZHJvcGRvd24uY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICB9XG5cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuaG9tZS1iYW5uZXItc2xpZGVyJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMTAsXG4gIGVmZmVjdDogXCJmYWRlXCIsXG5cbiAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ob21lLWJhbm5lci1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG59KTtcblxuY29uc3Qgc3dpcGVyMSA9IG5ldyBTd2lwZXIoJy5hY2hpZXZlbWVudHMtc2xpZGVyJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHNsaWRlc1BlclZpZXc6IDIsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmFjaGlldmVtZW50cy1zZWN0aW9uIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuYWNoaWV2ZW1lbnRzLXNlY3Rpb24gLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxuICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgcmV0dXJuICgnMCcgKyBudW1iZXIpLnNsaWNlKC0yKTtcbiAgICB9LFxuICAgIGZvcm1hdEZyYWN0aW9uVG90YWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgIHJldHVybiAoJzAnICsgbnVtYmVyKS5zbGljZSgtMik7XG4gICAgfSxcbiAgICByZW5kZXJGcmFjdGlvbjogZnVuY3Rpb24gKGN1cnJlbnRDbGFzcywgdG90YWxDbGFzcykge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjdXJyZW50Q2xhc3MgKyAnXCI+PC9zcGFuPicgK1xuICAgICAgICAnIC0gJyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0b3RhbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzd2lwZXIyID0gbmV3IFN3aXBlcignLmV2ZW50cy1zbGlkZXInLCB7XG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgbG9vcDogdHJ1ZSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgc2xpZGVzUGVyVmlldzogMixcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5ldmVudHMtc2VjdGlvbiAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuZXZlbnRzLXNlY3Rpb24gLnN3aXBlci1idXR0b24tcHJldicsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHMtc2VjdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdmcmFjdGlvbicsXG4gICAgZm9ybWF0RnJhY3Rpb25DdXJyZW50OiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICByZXR1cm4gKCcwJyArIG51bWJlcikuc2xpY2UoLTIpO1xuICAgIH0sXG4gICAgZm9ybWF0RnJhY3Rpb25Ub3RhbDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgcmV0dXJuICgnMCcgKyBudW1iZXIpLnNsaWNlKC0yKTtcbiAgICB9LFxuICAgIHJlbmRlckZyYWN0aW9uOiBmdW5jdGlvbiAoY3VycmVudENsYXNzLCB0b3RhbENsYXNzKSB7XG4gICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGN1cnJlbnRDbGFzcyArICdcIj48L3NwYW4+JyArXG4gICAgICAgICcgLSAnICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwiJyArIHRvdGFsQ2xhc3MgKyAnXCI+PC9zcGFuPic7XG4gICAgfVxuICB9LFxufSk7XG5cbmNvbnN0IHN3aXBlcjMgPSBuZXcgU3dpcGVyKCcucHJvZ3JhbXMtc2xpZGVyJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcucHJvZ3JhbXMtc2VjdGlvbiAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcucHJvZ3JhbXMtc2VjdGlvbiAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnByb2dyYW1zLXNlY3Rpb24gLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxuICAgIGZvcm1hdEZyYWN0aW9uQ3VycmVudDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgcmV0dXJuICgnMCcgKyBudW1iZXIpLnNsaWNlKC0yKTtcbiAgICB9LFxuICAgIGZvcm1hdEZyYWN0aW9uVG90YWw6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgIHJldHVybiAoJzAnICsgbnVtYmVyKS5zbGljZSgtMik7XG4gICAgfSxcbiAgICByZW5kZXJGcmFjdGlvbjogZnVuY3Rpb24gKGN1cnJlbnRDbGFzcywgdG90YWxDbGFzcykge1xuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjdXJyZW50Q2xhc3MgKyAnXCI+PC9zcGFuPicgK1xuICAgICAgICAnIC0gJyArXG4gICAgICAgICc8c3BhbiBjbGFzcz1cIicgKyB0b3RhbENsYXNzICsgJ1wiPjwvc3Bhbj4nO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5jb25zdCBzd2lwZXI0ID0gbmV3IFN3aXBlcignLmFmZmFpcnMtc2xpZGVyJywge1xuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gIGxvb3A6IHRydWUsXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc2xpZGVyLXdyYXBwZXIgLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLnNsaWRlci13cmFwcGVyIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9XG59KTtcblxuY29uc3Qgc3dpcGVyNSA9IG5ldyBTd2lwZXIoJy5ldmVudHMtc2xpZGVyLXNlY29uZCcsIHtcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICBsb29wOiB0cnVlLFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBzbGlkZXNQZXJWaWV3OiAzLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmV2ZW50cy1zZWN0aW9uLXNlY29uZCAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuZXZlbnRzLXNlY3Rpb24tc2Vjb25kIC5zd2lwZXItYnV0dG9uLXByZXYnLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZXZlbnRzLXNlY3Rpb24tc2Vjb25kIC5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgICBmb3JtYXRGcmFjdGlvbkN1cnJlbnQ6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgIHJldHVybiAoJzAnICsgbnVtYmVyKS5zbGljZSgtMik7XG4gICAgfSxcbiAgICBmb3JtYXRGcmFjdGlvblRvdGFsOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICByZXR1cm4gKCcwJyArIG51bWJlcikuc2xpY2UoLTIpO1xuICAgIH0sXG4gICAgcmVuZGVyRnJhY3Rpb246IGZ1bmN0aW9uIChjdXJyZW50Q2xhc3MsIHRvdGFsQ2xhc3MpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY3VycmVudENsYXNzICsgJ1wiPjwvc3Bhbj4nICtcbiAgICAgICAgJyAtICcgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCInICsgdG90YWxDbGFzcyArICdcIj48L3NwYW4+JztcbiAgICB9XG4gIH1cbn0pO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8g0K3RgtC+IC0g0LLQsNGI0LAg0YLQvtGH0LrQsCDQstGF0L7QtNCwINC00LvRjyDRgdC60YDQuNC/0YLQvtCyINGB0YLRgNCw0L3QuNGG0YsuINCY0LzQv9C+0YDRgtC40YDRg9C50YLQtSDRgdGO0LTQsCDQvdGD0LbQvdGL0LUg0LLQsNC8INGE0LDQudC70YsuXG5cbmltcG9ydCAnLi9zY3JpcHQnO1xuIl0sIm5hbWVzIjpbIm9wZW5CdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xvc2VCdXR0b24iLCJwb3B1cE1lbnUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiZXZlbnQiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZHJvcGRvd24iLCJzcGFuIiwiYWxsRmlsdGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwib3RoZXJGaWx0ZXIiLCJ0b2dnbGUiLCJjb250YWlucyIsInRhZ05hbWUiLCJ0ZXh0Q29udGVudCIsInN3aXBlciIsIlN3aXBlciIsImxvb3AiLCJzcGFjZUJldHdlZW4iLCJlZmZlY3QiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJzd2lwZXIxIiwic2xpZGVzUGVyVmlldyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJ0eXBlIiwiZm9ybWF0RnJhY3Rpb25DdXJyZW50IiwibnVtYmVyIiwic2xpY2UiLCJmb3JtYXRGcmFjdGlvblRvdGFsIiwicmVuZGVyRnJhY3Rpb24iLCJjdXJyZW50Q2xhc3MiLCJ0b3RhbENsYXNzIiwic3dpcGVyMiIsInN3aXBlcjMiLCJzd2lwZXI0Iiwic3dpcGVyNSJdLCJzb3VyY2VSb290IjoiIn0=