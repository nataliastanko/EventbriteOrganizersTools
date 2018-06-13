// ==UserScript==
// @name         Eventbrite autoconfirm order deletion
// @description  Organizer's tool; Autoconfirm Evenbrite event's (free) order deletion
// @icon         https://cdn.evbstatic.com/s3-build/perm_001/609192/django/images/favicons/favicon.ico
// @namespace    https://github.com/nataliastanko/
// @contactURL   https://nataliastanko.com
// @author       nataliastanko
// @version      0.5
// @license      MIT
// @copyright    2018, nataliastanko (https://github.com/nataliastanko/)
// @match        https://*eventbrite.*order-delete*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/nataliastanko/EventbriteOrganizersTools/master/order_deletion_autoconfirm.user.js
// @downloadURL  https://raw.githubusercontent.com/nataliastanko/EventbriteOrganizersTools/master/order_deletion_autoconfirm.user.js
// @homepage     https://github.com/nataliastanko/EventbriteOrganizersTools/
// @supportURL   https://github.com/nataliastanko/EventbriteOrganizersTools/issues
// ==/UserScript==
    
(function () {
  'use strict';
  document.refundForm.submit();
})();
