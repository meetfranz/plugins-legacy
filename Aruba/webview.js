module.exports = (Franz, options) => {
	function getMessages() {
		var directMessages=0;
		var totalMessages=0;
		var folderInbox=document.getElementById("menuFolderInboxButton");
		var foldersList = document.getElementById("menuFoldersList");
		
		if (!folderInbox.classList.contains("noneUnread")){
			directMessages = folderInbox.getElementsByClassName("unreadFolders")[0].getElementsByClassName("inner_unread")[0].innerHTML;
		}
		if (!foldersList.classList.contains("noneUnread")){
			totalMessages = foldersList.getElementsByClassName("unreadFolders")[0].getElementsByClassName("inner_unread")[0].innerHTML;
		}
		
		var indirectMessages=totalMessages-directMessages

		Franz.setBadge(directMessages, indirectMessages);
	}

	Franz.loop(getMessages); 

}