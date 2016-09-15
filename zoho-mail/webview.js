const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    const unreadMail = $(".zm_urd").not(".hidden").length;

    Franz.setBadge(unreadMail);
  }

  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
};
