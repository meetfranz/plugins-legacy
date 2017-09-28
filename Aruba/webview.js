module.exports = (Franz, options) => {
	function getMessages() {
		var directMessages=0;
		var totalMessages=0;
		var folderInboxUnread=document.getElementById("menuFolderInboxButton").getElementsByClassName("unreadFolders")[0].getElementsByClassName("inner_unread")[0];
		var foldersListUnread = document.getElementById("menuFoldersList").getElementsByClassName("unreadFolders")[0].getElementsByClassName("inner_unread")[0];
		
		if (!folderInboxUnread.classList.contains("removed")){
			directMessages = folderInboxUnread.innerHTML;
		}
		if (!foldersListUnread.classList.contains("removed")){
			totalMessages = foldersListUnread.innerHTML;
		}
		
		var indirectMessages=totalMessages-directMessages

		Franz.setBadge(directMessages, indirectMessages);
	}

	Franz.loop(getMessages); 

}