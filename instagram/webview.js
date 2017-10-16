const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
    const updates = document.getElementById('franz').getAttribute('data-unread');

    // get conversations in 'My Inbox'
    const inbox = document.getElementById('franz').getAttribute('data-inbox');

    // set Franz badge
    // updates => active unread count
    // inbox => passive unread count
    Franz.setBadge(updates, inbox);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
