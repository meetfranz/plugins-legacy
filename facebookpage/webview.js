const path = require('path');

module.exports = (Franz, options) => {
	const getValueById = (id) => {
		return document.getElementById(id).innerText;
	};
	const getMessages = () => {
		const unreadNotices = getValueById('notificationsCountValue');
		const unreadMessage = getValueById('mercurymessagesCountValue');
		Franz.setBadge(unreadMessage, unreadNotices);
	}
	Franz.loop(getMessages);
	Franz.injectCSS(path.join(__dirname, 'css', 'style.css'));
}
