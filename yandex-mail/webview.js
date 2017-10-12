const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
	const unreadMail = Number($('.head-item_counter').html());
    Franz.setBadge(unreadMail);
  }

  Franz.loop(getMessages);

  //Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};

