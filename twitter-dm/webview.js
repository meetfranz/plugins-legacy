const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
    // const updates = document.getElementById('franz').getAttribute('data-unread');
    const count = $('a[href="/messages"] span').text();
    Franz.setBadge(count);

    // get conversations in 'My Inbox'
    // const inbox = document.getElementById('franz').getAttribute('data-inbox');

    // set Franz badge
    // updates => active unread count
    // inbox => passive unread count
    // Franz.setBadge(updates, inbox);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
