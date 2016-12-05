const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadMail = jQuery("span[title*='Inbox'] + div > span").text();

    Franz.setBadge(unreadMail);
  }

  Franz.loop(getMessages);

};
