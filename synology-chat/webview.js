const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // Get unread messages.
    var updates = 0;
    var mentions = document.querySelectorAll('.highlight-mention .unread');
    var regex = new RegExp("number-(\\d+)");
    for (var i = 0; i < mentions.length; i++) {
      data = regex.exec(mentions[i].getAttribute('class'));
      updates += parseInt(data[1]);
    }

    // Get general messages.
    const index = document.querySelectorAll('.highlight:not(.highlight-mention)').length;

    // Set Franz badge.
    Franz.setBadge(updates, index);
  };

  // Inject franz.css stylesheet.
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // Check for new messages every second and update Franz badge.
  Franz.loop(getMessages);
};
