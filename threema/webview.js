const path = require('path');

module.exports = (Franz, options) => {
  function getMessages () {
    var navItems = document.getElementsByClassName("md-nav-item");

    var updateMessageCount = false;

    for(var i = 0; i < navItems.length; i++) {
        if(navItems[i].attributes.name.value == "conversations" && navItems[i].attributes["aria-selected"].value == "true") {
            updateMessageCount = true;
            break;
        }
    }

    if(updateMessageCount) {
      var count = 0

      document.querySelectorAll('.unread-count').forEach(element => {
        const localCount = parseInt(element.innerHTML.replace(/\s+/g, ''))
        if (localCount > 0) {
          count++
        }
      })

      Franz.setBadge(count)
    }
  }

  Franz.injectCSS(path.join(__dirname, 'franz.css'));

  Franz.loop(getMessages)
}
