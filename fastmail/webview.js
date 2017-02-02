module.exports = (Franz, options) => {
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
