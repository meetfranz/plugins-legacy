module.exports = (Franz, options) => {
  function getMessages() {
    let count = 0;
    
    const notifications = document.querySelector('#notifications-icon-count').dataset;
    if (notifications) {
      count = notifications.count;
    }

    Franz.setBadge(count);
  }

  Franz.loop(getMessages);    
}
