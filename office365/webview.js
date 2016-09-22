const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {

    // get conversations in 'My Inbox'
    const inbox = document.getElementById('O365_Notifications_ButtonID').querySelector('span.o365cs-flexPane-unseenCount').innerHTML

    // set Franz badge
    // updates => active unread count
    // inbox => passive unread count
    Franz.setBadge("0", inbox);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
