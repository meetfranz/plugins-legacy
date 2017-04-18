module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadPrivateMessages = parseInt($(".messages .unread-meeps").text());
    const unreadGroupMessages = parseInt($(".today .unread-meeps").text());

    Franz.setBadge(unreadPrivateMessages + unreadGroupMessages);
  }

  Franz.loop(getMessages);
}
