// ==UserScript==
// @name         Eventbrite autoconfirm order deletion
// @description  Organizer's tool; Autoconfirm Evenbrite event's (free) order deletion
// @namespace    https://openuserjs.org/meta/nataliastanko/
// @author       nataliastanko
// @version      0.4
// @license      MIT
// @copyright    2018, nataliastanko (https://openuserjs.org/users/nataliastanko)
// @match        https://*eventbrite.*order-delete*
// @grant        none
// @downloadURL  https://openuserjs.org/install/nataliastanko/Eventbrite_autoconfirm_order_deletion.user.js
// @updateURL    https://openuserjs.org/meta/nataliastanko/Eventbrite_autoconfirm_order_deletion.meta.js
// ==/UserScript==
    
(function () {
  'use strict';
  document.refundForm.submit();
})();
