const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
  //   // get unread messages
  //   const updates = document.getElementById('franz').getAttribute('data-unread');

  //   // set Franz badge
  //   Franz.setBadge(updates);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
