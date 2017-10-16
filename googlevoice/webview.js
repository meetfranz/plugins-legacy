module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelector('.msgCount').innerHTML.replace(/[\(\) ]/gi,"");
    if (count) {
		Franz.setBadge(count);
    }
  }

  Franz.loop(getMessages);
}