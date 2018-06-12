// ==UserScript==
// @name         Evenbrite autodelete orders
// @namespace    https://openuserjs.org/meta/nataliastanko/
// @description  Organizer's tool; Autodelete all Evenbrite event's (free) orders
// @author       nataliastanko
// @version      0.2
// @license      MIT
// @copyright    2018, nataliastanko (https://openuserjs.org/users/nataliastanko)
// @match        https://*eventbrite.*reports*
// @downloadURL  https://openuserjs.org/install/nataliastanko/Evenbrite_autodelete_orders.user.js
// @updateURL    https://openuserjs.org/meta/nataliastanko/Evenbrite_autodelete_orders.meta.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  if (document.getElementsByClassName('js-d-select-box').length === 0) {
     throw new Error("No more orders! App stoped arbitrarily.");
  }
  Array.from(document.getElementsByClassName('js-d-select-box')).forEach(
    function(currentSelect, index, arr) {
      if (currentSelect.getAttribute('data-automation') == 'order-actions-select') {
        Array.from(currentSelect.children).forEach(
          function(currentOption, index, arr) {
            if (currentOption.getAttribute('data-automation') == 'order-delete') {
              currentSelect.selectedIndex = index;
              currentOption.selected = true;
              currentSelect.onchange();
            }
          }
        );
      }
    }
  );
})();
