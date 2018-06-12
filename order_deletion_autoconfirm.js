// ==UserScript==
// @name         Eventbrite autoconfirm order deletion
// @description  Organizer's tool; Autoconfirm Evenbrite event's (free) order deletion
// @icon         https://cdn.evbstatic.com/s3-build/perm_001/609192/django/images/favicons/favicon.ico
// @namespace    https://github.com/nataliastanko/
// @author       nataliastanko
// @version      0.4
// @license      MIT
// @copyright    2018, nataliastanko (https://github.com/nataliastanko/)
// @match        https://*eventbrite.*order-delete*
// @grant        none
// @downloadURL  https://rawgit.com/nataliastanko/EventbriteOrganizersTools/master/order_deletion_autoconfirm.js
// @updateURL    https://rawgit.com/nataliastanko/EventbriteOrganizersTools/master/order_deletion_autoconfirm.js
// @noframes
// ==/UserScript==
    
(function () {
  'use strict';
  document.refundForm.submit();
})();
