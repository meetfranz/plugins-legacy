module.exports = (Franz, options) => {
  function getMessageCount() {
    const count = parseInt($('#topBarContainer .messageLittleRedDot').data('count'), 10);
    Franz.setBadge(count);
  }
  Franz.loop(getMessageCount);
}
