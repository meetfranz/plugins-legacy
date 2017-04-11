module.exports = (Franz, options) => {
  function getMessages() {
    var count = document.querySelector("title").innerHTML.match(/\d+/)[0]
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
}
