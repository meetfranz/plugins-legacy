// Zalo integration
const path = require('path');

module.exports = (Franz, options) => {
	function getMessages() {
		var badge = document.getElementById('urc_note');
		var count = 0;
		if(badge.style.display == 'block')
			count = badge.innerHTML;
		Franz.setBadge(count);
	};
	Franz.loop(getMessages);
	Franz.injectCSS(path.join(__dirname, 'style.css'));
};
