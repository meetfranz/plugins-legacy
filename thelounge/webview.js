module.exports = (Franz, options) => {
  function getMessages() {
    // get unread messages
	var badges = document.getElementsByClassName('badge highlight')
    var updates = 0;
    for (var i = 0; i < badges.length; i++) {
		var content = badges[i].innerText;
		if (content.length > 0) {
			updates += parseInt(badges[i].innerText);
		}
	}
	
    // get general messages
	var badges = document.getElementsByClassName('badge')
    var index = 0;
    for (var i = 0; i < badges.length; i++) {
		var content = badges[i].innerText;
		if (content.length > 0) {
			index += parseInt(badges[i].innerText);
		}
	}

    // set Franz badge
    Franz.setBadge(updates, index);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
