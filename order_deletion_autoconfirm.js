// ==UserScript==
// @name         Eventbrite autoconfirm order deletion
// @description  Organizer's tool; Autoconfirm Evenbrite event's (free) order deletion
// @namespace    https://github.com/nataliastanko/
// @author       nataliastanko
// @version      0.4
// @license      MIT
// @copyright    2018, nataliastanko (https://openuserjs.org/users/nataliastanko)
// @match        https://*eventbrite.*order-delete*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/nataliastanko/EventbriteOrganizersTools/master/order_deletion_autoconfirm.js
// @updateURL    https://raw.githubusercontent.com/nataliastanko/EventbriteOrganizersTools/master/order_deletion_autoconfirm.js
// ==/UserScript==
    
(function () {
  'use strict';
  document.refundForm.submit();
})();
