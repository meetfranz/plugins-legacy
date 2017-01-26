const path = require('path');

module.exports = (Franz, options) => {
  // Display the project's count-time, using franz notify function.
  const getCountTime = () => {
      const countTime = document.querySelector('.Timer__duration .time-format-utils__duration').textContent;

      if (countTime !== '0:00:00') {
        Franz.setBadge(countTime);
      } else {
        Franz.setBadge(0);
      }
    }

    window.addEventListener("load", () => {
      Franz.loop(getCountTime);
    });

  // inject a single css file
  Franz.injectCSS(path.join(__dirname, 'style.css'));
}
