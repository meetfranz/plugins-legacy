module.exports = (Franz, options) => {
  function getMessages() {
    // Set up an initial 0 count
    var count         = 0;
    var indirectCount = 0;

    /**
     * Get the elements that are indicative of messages
     */
    
    // These are direct messages
    var directIndicator = document.getElementsByClassName('sidebar-notification-indicator')[0];

    // These are 'not important' messages, i.e., to rooms you're part of
    var indirectIndicator = document.getElementsByClassName('sidebar-notification-indicator--not-important')[0];

    // Check if we have direct messages
    if (typeof directIndicator !== 'undefined' && directIndicator.innerText) {
        count = parseInt(directIndicator.innerText);
    }

    // Check if we have indirect messages
    if (typeof directIndicator !== 'undefined') {
        ++indirectCount;
    }

    // Set the counts
    Franz.setBadge(count, indirectCount);
  }

  Franz.loop(getMessages);
}
