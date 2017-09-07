const path = require('path'); 

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
	const updates = document.getElementsByClassName('unread-thread-counter')[0].innerHTML;

    // set Franz badge
    Franz.setBadge(updates, 0);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages); 
  
}
