module.exports = (Franz, options) => {
	const getMessages = () => {
		const directMessages = document.getElementById("menuFolderInboxButton").getElementsByClassName("unreadFolders")[0].getElementsByClassName("inner_unread")[0].innerHTML;
		const totalMessages = document.getElementById("menuFoldersList").getElementsByClassName("unreadFolders")[0].getElementsByClassName("inner_unread")[0].innerHTML;
		const indirectMessages = totalMessages - directMessages;

		Franz.setBadge(directMessages, indirectMessages);
	}

	Franz.loop(getMessages);

}