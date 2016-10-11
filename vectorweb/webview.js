module.exports = (Franz, options) => {
  function getMessages() {
	var counter = document.querySelectorAll(".mx_RoomTile_unread .mx_RoomTile_nameContainer .mx_RoomTile_badge");
	var maxcon = 0;
	for (var i of counter)
	{
		maxcon += parseInt(i.innerText);
	}

	//const count = document.querySelectorAll(".mx_RoomTile_unread").length;
	Franz.setBadge(maxcon);
  };

  Franz.loop(getMessages);
}
