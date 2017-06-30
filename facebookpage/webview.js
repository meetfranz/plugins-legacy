const path = require('path');

module.exports = (Franz, options) => {
  const getInputsByValue = function (value) {
    var allInputs = document.getElementsByTagName("a");
    var results = [];
    for (var x = 0; x < allInputs.length; x++)
      if (allInputs[x].getAttribute("href").indexOf(value) !== -1)
        results.push(allInputs[x]);
    return results;
  };
  const getValueById = (id) => {
    return document.getElementById(id).innerText;
  };
  const getMessages = () => {
    const unreadNotices = getValueById('notificationsCountValue');
    const messageParent = getInputsByValue('/trunk.studio.tw/inbox/')
    const unreadMessage = messageParent[0].children[0].children[1].innerText;
    Franz.setBadge(unreadMessage, unreadNotices);
  }
  Franz.loop(getMessages);
  Franz.injectCSS(path.join(__dirname, 'css', 'style.css'));
}