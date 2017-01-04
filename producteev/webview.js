module.exports = (Franz, options) => {
  const getMessages = () => {
    const directMessages = parseInt($('.notifications-count').text());

    Franz.setBadge(directMessages);
  }

  Franz.loop(getMessages);
}