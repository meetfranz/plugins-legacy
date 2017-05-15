const path = require('path');

module.exports = (Franz, options) => {
	// inject franz.css stylesheet
	  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

};
