module.exports = (Franz, options) => {
	const getMessages = () => {
		const unread = document.getElementsByClassName('new-notifications').length;
		Franz.setBadge(0, unread);
	}
	Franz.loop(getMessages);
}
