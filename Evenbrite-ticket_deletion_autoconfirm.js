// ==UserScript==
// @name         Eventbrite ticket deletion autoconfirm
// @namespace    https://openuserjs.org/meta/nataliastanko/
// @author       nataliastanko
// @version      0.1
// @license      MIT
// @copyright    2018, nataliastanko (https://openuserjs.org/users/nataliastanko)
// @description  Autoconfirm Evenbrite event's single order deletion
// @match        https://www.eventbrite.co.uk/order-delete*
// @updateURL    https://openuserjs.org/meta/nataliastanko/Evenbrite-ticket_deletion_autoconfirm.meta.js
// @grant        none
// ==/UserScript==
    
(function () {
  'use strict';
  document.refundForm.submit();
})();
