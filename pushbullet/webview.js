const path = require('path');

module.exports = (Franz, options) => {
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));
  Franz.loop(getMessages);
};
