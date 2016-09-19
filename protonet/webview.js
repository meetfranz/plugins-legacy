module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadMail = $(".badge.unread-meeps").first().html();

    Franz.setBadge(unreadMail);
  }

  Franz.loop(getMessages);
}
