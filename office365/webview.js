const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    unreadMail = parseInt(jQuery("span[title*='Inbox'] + div > span").first().text());
    notifications = parseInt(jQuery("div[class*='o365cs-flexPane-unseenitems']").text().trim());

    badgeCount = 0
    if (Number.isInteger(notifications)) {
      badgeCount += notifications
    }
    if (Number.isInteger(unreadMail)) {
      badgeCount += unreadMail
    }

    Franz.setBadge(badgeCount);
  }

  Franz.loop(getMessages);

};
