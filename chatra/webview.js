const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
    const myQueue = $('.super-nav a.super-nav__item.js-from-super-to-nav[href^="/chat/box:my"] .count').text();

    // get conversations in 'My Inbox'
    const missed = $('.super-nav a.super-nav__item.js-from-super-to-nav[href^="/chat/box:missed"] .count').text();

    // set Franz badge
    // myQueue => My Queue count
    // missed => Missed count
    Franz.setBadge(myQueue, missed);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
