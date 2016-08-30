const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    let updates = 0;
    let inbox = 0;

    $('.b-folders-user .ui-droppable').each((i, obj) => {
      const countText = $(obj).find('.count').first().html();
      if (typeof countText === 'string' && countText !== '') {
        if ($(obj).hasClass('i-am-inbox')) {
          // get conversations in 'Inbox'
          inbox += parseInt(countText);
        } else {
          // get other unread messages
          updates += parseInt(countText);
        }
      }
    });

    // set Franz badge
    // inbox => active unread count
    // updates => passive unread count
    Franz.setBadge(inbox, updates);
  };

  // inject franz.css stylesheet
  // Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
