module.exports = (Franz, options) => {
  function getMessages() {
    let count = $('[ng-bind="unread(\'inbox\')"]').html();
    count = count ? count.substring(1, eval(count.length - 1)) : 0;
    Franz.setBadge(count);
  }
  Franz.loop(getMessages);
}
