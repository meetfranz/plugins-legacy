const path = require('path');

if ($('.log-main-table').length == 0 && location.pathname != '/online/') {
  location.pathname = '/online/';
}

module.exports = (Franz, options) => {

  function getMessages() {

    const directMessages = $(".bx-messenger-cl-item .bx-messenger-cl-count-digit, .bx-messenger-cl-notify-button .bx-messenger-cl-count-digit").length;

    Franz.setBadge(directMessages);
  }

  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, "style.css"));
}
