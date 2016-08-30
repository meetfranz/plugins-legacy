const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
    var updates = 0;
    jQuery('.badge.highlight').each(function(i,v) {
      var data = jQuery(this).data('count');
      if (jQuery.isNumeric(data)) {
        updates += data;
      }
    });

    // get general messages
    var index = 0;
    jQuery('.badge:not(".highlight")').each(function(i,v) {
      var data = jQuery(this).data('count');
      if (jQuery.isNumeric(data)) {
        index += data;
      }
    });

    // set Franz badge
    Franz.setBadge(updates, index);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
