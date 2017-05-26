const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
	 if ($('.nwa-msg-counter').css('display') != "none") {
		const counter = Number($('.nwa-msg-counter').html());
		Franz.setBadge(counter); 
	 } else {
		Franz.setBadge(0); 
	 }
  }

  Franz.loop(getMessages);

  //Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};

