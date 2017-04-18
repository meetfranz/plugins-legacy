const path = require('path');

global.window.Notification = null;

module.exports = (Franz, options) => {
  const getMessages = () => {
    let badge = document.querySelectorAll('span[ng-show="notifications > 0"]')[0];
    let direct = badge ? parseInt(badge.innerHTML) : 0;
    Franz.setBadge(direct);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
