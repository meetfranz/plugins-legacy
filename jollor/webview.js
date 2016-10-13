const path = require('path');

module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelector(".user-menu-message-item-count").innerHTML;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
};
