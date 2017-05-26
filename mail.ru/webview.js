const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
	const counter = Number($('#g_mail_events').html());
	Franz.setBadge(counter); 
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};

