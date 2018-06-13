// ==UserScript==
// @name         Evenbrite autodelete orders
// @description  Organizer's tool; Autodelete all Evenbrite event's (free) orders
// @icon         https://cdn.evbstatic.com/s3-build/perm_001/609192/django/images/favicons/favicon.ico
// @namespace    https://github.com/nataliastanko/
// @contactURL   https://nataliastanko.com
// @author       nataliastanko
// @version      0.6
// @license      MIT
// @copyright    2018, nataliastanko (https://github.com/nataliastanko/)
// @match        https://*eventbrite.*order-delete*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/nataliastanko/EventbriteOrganizersTools/master/orders_autodeletion.user.js
// @downloadURL  https://raw.githubusercontent.com/nataliastanko/EventbriteOrganizersTools/master/orders_autodeletion.user.js
// @homepage     https://github.com/nataliastanko/EventbriteOrganizersTools/
// @supportURL   https://github.com/nataliastanko/EventbriteOrganizersTools/issues
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
