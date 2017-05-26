const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
	var counter = 0;
	var matches = document.querySelectorAll("span.nwa-msg-counter");
	for(var i = 0; i < matches.length; i++){
	   counter += parseInt(matches[i].innerHTML, 10);
	}
	Franz.setBadge(counter); 
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};

