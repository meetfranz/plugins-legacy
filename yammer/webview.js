module.exports = (Franz, options) => {
  const getMessages = () => {
    // get unread messages
    const count = $('.yj-thread-list--new-message-text').text();
    const regex = /Click to see (\d+) new/g;
    if (count) {
      let m;
      while ((m = regex.exec(count)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        if (typeof m[1] !== undefined) {
          Franz.setBadge(m[1]);
        }
      }
    }
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
}
