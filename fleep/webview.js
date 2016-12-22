const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    var unread = 0;
    m = $('title').text().match(/\((\d+)\)/);
    if (m) {
      unread = parseInt(m[1]);
    }

    // set Franz badge
    // updates => active unread count
    // inbox => passive unread count
    Franz.setBadge(unread);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
