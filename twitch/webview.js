module.exports = (Franz, options) => {
  const getMessages = () => {
    // Get the number of mentions
    const mentions = document.querySelectorAll('.chat-line .mentioned').length;

    Franz.setBadge(mentions, 0);
  };
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
