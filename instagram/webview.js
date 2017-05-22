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
  
  // Changes user agent to mobile to show the upload photo button
  window.navigator.__defineGetter__('userAgent', function () {
      return 'Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206';
  });
  
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
