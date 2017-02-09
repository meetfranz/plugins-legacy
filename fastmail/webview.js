module.exports = (Franz, options) => {
  var interval = setInterval(function () {
    if (!window.O || !window.O.WindowController) return;
    window.O.WindowController.openExternal = function (href) {
      var temp = document.createElement('a');
      temp.setAttribute('href', href);
      temp.setAttribute('target', '_blank');
      temp.click();
    };
    clearInterval(interval);
  }, 200);
  const getMessages = () => {
    const inbox = document.querySelector(".v-FolderSource--inbox>.v-FolderSource-badge");
    if (!inbox) {
      return;
    }
    const messages = Number(inbox.innerText);
    if (!Number.isNaN(messages)) {
      Franz.setBadge(messages);
    }
  }

  Franz.loop(getMessages);
}
