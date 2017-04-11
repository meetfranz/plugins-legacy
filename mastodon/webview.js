module.exports = (Franz, options) => {
  const getMessages = () => {
    Franz.setBadge(0);
  };

  Franz.loop(getMessages);
};
