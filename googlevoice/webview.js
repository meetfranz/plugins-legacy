module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelector('.msgCount').innerHTML.replace(/[\(\) ]/gi,"");
    if (count) {
		  Franz.setBadge(count);
    } else {
      Franz.setBadge(0);
    }
  }

  Franz.loop(getMessages);
}
