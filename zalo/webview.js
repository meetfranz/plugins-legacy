// Zalo integration
const path = require('path');

module.exports = (Franz, options) => {
	function getMessages() {
		var count = 0;
		var badge = document.getElementsByClassName('number-neo');
		for (i = 0; i < badge.length; i++) {
			count += parseInt(badge[i].innerHTML);
		}
		Franz.setBadge(count);
	};
	Franz.loop(getMessages);
	Franz.injectCSS(path.join(__dirname, 'style.css'));
};
