const path = require('path');

module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelector(".user-menu-message-item-count").innerHTML;

    Franz.setBadge(count);
  }

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
  Franz.loop(getMessages);
};
