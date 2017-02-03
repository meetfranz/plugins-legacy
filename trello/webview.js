module.exports = (Franz, options) => {
  function getMessages() {
    Franz.setBadge(document.querySelectorAll('.is-unread-notification').length);
  }

  Franz.loop(getMessages);
}
