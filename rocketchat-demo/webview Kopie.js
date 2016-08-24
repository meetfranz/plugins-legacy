module.exports = (Franz, options) => {
  function getMessages() {
    const count = $(".unread-rooms-mode .unread").length;

    Franz.setBadge(count);
  }

  setInterval(getMessages, 1000);
}
