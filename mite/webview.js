module.exports = (Franz, options) => {
  function getStatus() {
    // If we are on the main page, look for tracking bubbles
    // Also look for tracker indicator
    const count = $('.entry.tracking').length + $('#tracker_indicator a').not(':empty').length

    // As we can't set time to appear in the notification bubble
    // we will only show an indirect notification for as long as
    // the user is tracking time
    if (count > 0) {
      Franz.setBadge(0, 1)
    } else {
      Franz.setBadge(0, 0)
    }
  }

  Franz.loop(getStatus)
}
