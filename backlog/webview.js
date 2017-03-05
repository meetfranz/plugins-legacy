module.exports = (Franz, options) => {
  function getMessages() {
    var counter = 0;

    counter = document.querySelector("#globalNotificationsLink > span") ? document.querySelector("#globalNotificationsLink > span").innerHTML : 0;

    Franz.setBadge(counter);
  }
  Franz.loop(getMessages);
}