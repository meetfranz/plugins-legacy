module.exports = (Franz, options) => {
  function getMessages() {
    const count = document.querySelector('.msgCount').innerHTML.replace(/[\(\) ]/gi,"");
    Franz.setBadge(count ? count : 0);
  }

  Franz.loop(getMessages);
}