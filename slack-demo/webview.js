const path = require('path');
const fs = require('fs');
const { remote } = require('electron');
const webContents = remote.getCurrentWebContents();

module.exports = (Franz, options) => {
  const getMessages = () => {
    const directMessages = $(".unread_highlights, .unread_highlight").not(".hidden").length;
    const allMessages = $(".unread").length - directMessages;

    Franz.setBadge(directMessages, allMessages);
  }

  const injectCSS = () => {
    var cssFile = path.join(__dirname, "style.css");
    fs.readFile(cssFile, function (err, data) {
      if(err) return console.log(err);
      webContents.insertCSS(data.toString());
    });
  }

  setInterval(getMessages, 1000);
  injectCSS();
}
