module.exports = (Franz, options) => {
  function getMessages() {
    const count = $(".unread-rooms-mode .unread").length;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
