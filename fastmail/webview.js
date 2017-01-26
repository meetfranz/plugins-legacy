const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
    const count = document.getElementById("v101").text.match(/\d+/)[0];
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
