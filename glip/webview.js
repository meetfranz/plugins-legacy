module.exports = (Franz, options) => {
  function getMessages() {
    const count = parseInt($("title").text().split('(')[1]) || 0;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
