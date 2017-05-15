module.exports = (Franz, options) => {
  const getMessages = () => {
    const countText = $('.yj-thread-list--new-message-text:visible').text();
    const regex = /Click to see (\d+) new/g;
    let newMessageCount = 0;
    if (countText && countText.length) {
      let m;
      while ((m = regex.exec(countText)) !== null) {
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }
        if (typeof m[1] !== undefined) {
          newMessageCount = m[1];
        }
      }
    }

    Franz.setBadge(newMessageCount);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
}
