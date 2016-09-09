module.exports = (Franz, options) => {
  function getMessages() {
    var unread = document.getElementById('MailFolderPane.FavoritesFolders')
                         .childNodes[0].childNodes[0].childNodes[0]
                         .getElementsByTagName('span')[1].innerHTML;

    if (unread > 0) {
        Franz.setBadge(unread);
    }
    else
    {
        Franz.setBadge(0);
    }
  }

  Franz.loop(getMessages);
}
