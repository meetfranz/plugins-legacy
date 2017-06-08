module.exports = (Franz, options) => {
  function getMessages() {
    var messages = $(".new-message-container"),
		count = (messages.length) ? messages.nextAll().length -1 : 0;

	Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
