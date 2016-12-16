module.exports = (Franz, options) => {
  function getMessages() {
    const inbox = document.getElementsByClassName('topbar-notificationsButton has-newNotifications');
    const count = inbox.length;

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);
}
