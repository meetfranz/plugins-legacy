module.exports = (Franz, options) => {
  function getMessages() {

    if (document.querySelector('#mail').className.indexOf('nohavemail') > -1) {
      Franz.setBadge(0);
    } else {
      Franz.setBadge(1);
    }
  }

  Franz.loop(getMessages);
}
