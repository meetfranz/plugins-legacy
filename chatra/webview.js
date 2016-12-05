const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get new conversations in My Queue
    const myQueue = $('.super-nav a.super-nav__item.js-from-super-to-nav[href^="/chat/box:my"] .count').not('.count--gray').text();

    // get all missed conversations
    const missed = $('.super-nav a.super-nav__item.js-from-super-to-nav[href^="/chat/box:missed"] .count').text();

    // set Franz badge
    // myQueue => New conversations in My Queue
    // missed => All missed conversations
    Franz.setBadge(myQueue, missed);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
