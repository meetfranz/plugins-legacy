module.exports = (Franz, options) => {
  function getMessages() {
    let count = 0;
    let indirectCount = 0;
    let badge = document.getElementById('numNotifs2');

    if (badge && badge.innerText) {
        indirectCount = parseInt(badge.innerText);
    }

    Franz.setBadge(count, indirectCount);
  }

  Franz.loop(getMessages);
}
