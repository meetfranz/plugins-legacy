// Zalo integration
const path = require('path');

module.exports = (Franz, options) => {
	function getMessages() {
		var count = 0;
		var badge = document.getElementsByClassName('tab-red-dot');
		if (badge[0]) {
			var str = badge[0].src.match(/notification_(\w+).png/)[1];
			if (str == 'more') {
				count = '5+';
			} else {
				count = parseInt(str);
			}
		}
		Franz.setBadge(count);
	};
	Franz.loop(getMessages);
	Franz.injectCSS(path.join(__dirname, 'style.css'));
};
