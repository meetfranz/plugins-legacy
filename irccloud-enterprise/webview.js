module.exports = (Franz, options) => {
  function getBadges() {
    const badges = document.querySelectorAll('.bufferBadges .badge');
    const badgeContents = Array.from(badges, badge => badge.textContent);
    Franz.setBadge(badgeContents.reduce((sum, content) => {
      const count = parseInt(content, 10);
      if (!isNaN(count)) {
        return sum + count;
      }
      return sum;
    }, 0));
  }
  Franz.loop(getBadges);
}
