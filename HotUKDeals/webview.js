const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadMail = document.getElementsByClassName('js-notifications-counter notifications-counter alert-number--fixed alert-number--red')[1].innerText;

    Franz.setBadge(unreadMail);
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
