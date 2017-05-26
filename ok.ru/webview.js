const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
	const counter = parseInt($("title").html().replace(/\D+/g,""));
	Franz.setBadge(counter); 
  }

  Franz.loop(getMessages);

  //Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
