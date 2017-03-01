module.exports = (Franz, options) => {
	const path = require('path');

	// inject a single css file
	Franz.injectCSS(path.join(__dirname, 'style.css'));

	function getMessages() {
		var notifications = document.querySelectorAll("#notificationsCountValue")[0];
		var friendRequests = document.querySelectorAll("#requestsCountValue")[0];
		
		counter = parseInt(notifications.innerText) + parseInt(friendRequests.innerText);
		Franz.setBadge(counter);
	};

	Franz.loop(getMessages);
}
